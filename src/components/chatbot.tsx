
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { db } from '@/lib/firebase';
import { collection, addDoc, onSnapshot, doc, serverTimestamp } from 'firebase/firestore';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  isError?: boolean;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, 'generate'), {
        prompt: input,
        createTime: serverTimestamp(),
      });

      const unsubscribe = onSnapshot(doc(db, 'generate', docRef.id), (snap) => {
        const data = snap.data();
        
        // Check for a successful response
        if (data?.response) {
          const botMessage: Message = { text: data.response, sender: 'bot' };
          setMessages((prev) => [...prev, botMessage]);
          setLoading(false);
          unsubscribe();
        } 
        // Check for an error state from the extension
        else if (data?.status?.state === 'ERRORED') {
          console.error("Chatbot extension error:", data.status.error);
          const errorMessage: Message = { 
            text: `Sorry, I encountered an error: ${data.status.error}. Please check the extension logs in your Firebase project for more details.`, 
            sender: 'bot',
            isError: true,
          };
          setMessages((prev) => [...prev, errorMessage]);
          setLoading(false);
          unsubscribe();
        }
      });

    } catch (error) {
      console.error("Firestore error:", error);
      const errorMessage: Message = { text: "Sorry, I'm having trouble connecting to the database. Please try again later.", sender: 'bot', isError: true };
      setMessages((prev) => [...prev, errorMessage]);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        const { scrollHeight, clientHeight } = scrollAreaRef.current;
        const maxScrollTop = scrollHeight - clientHeight;
        scrollAreaRef.current.scrollTo({ top: maxScrollTop > 0 ? maxScrollTop : 0, behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="rounded-full w-16 h-16 shadow-lg"
        >
          {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
        </Button>
      </div>

      <Card
        className={cn(
          'fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm h-[70vh] flex flex-col transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        )}
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
              <Bot className="w-8 h-8 text-primary" />
            <CardTitle className="font-headline text-xl">GrowShare Assistant</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <AvatarIcon type="bot" />
                    <div className="bg-muted p-3 rounded-lg max-w-xs">
                        <p className="text-sm">Hello! How can I help you learn about GrowShare Capital today?</p>
                    </div>
                </div>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-start gap-3',
                    msg.sender === 'user' && 'justify-end'
                  )}
                >
                  {msg.sender === 'bot' && <AvatarIcon type="bot" />}
                  <div
                    className={cn(
                      'p-3 rounded-lg max-w-xs',
                      msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted',
                      msg.isError && 'bg-destructive/20 text-destructive-foreground'
                    )}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  {msg.sender === 'user' && <AvatarIcon type="user" />}
                </div>
              ))}
              {loading && (
                  <div className="flex items-start gap-3">
                    <AvatarIcon type="bot" />
                    <div className="bg-muted p-3 rounded-lg">
                        <Loader2 className="w-5 h-5 animate-spin" />
                    </div>
                  </div>
              )}
            </div>
          </ScrollArea>
          <form onSubmit={handleSendMessage} className="p-4 border-t flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={loading}
            />
            <Button type="submit" size="icon" disabled={loading}>
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

const AvatarIcon = ({ type }: { type: 'user' | 'bot' }) => {
    if (type === 'bot') {
        return (
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Image src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FOnly%20G%20Transparent.png?alt=media&token=e35d5de0-d3b2-4f43-8af3-d93ff2435b13" alt="GrowShare Capital Logo" width={24} height={24} />
            </div>
        )
    }
    return (
        <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5" />
        </div>
    )
}
