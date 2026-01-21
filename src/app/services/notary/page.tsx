
'use client';

import { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { LogIn, LogOut, Copy, Check, Loader2, Stamp } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';


type NotaryRecord = {
  id: string;
  docTitle: string;
  generatedAt: Date;
  user: string;
};

export default function NotaryPage() {
  const { user, loading: authLoading, isNotary } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [generatedRecord, setGeneratedRecord] = useState<NotaryRecord | null>(null);
  const [copied, setCopied] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [docTitle, setDocTitle] = useState('');
  const [showCopyFallback, setShowCopyFallback] = useState(false);

  useEffect(() => {
    if (!authLoading && !isNotary) {
      router.push('/login?redirect=/services/notary');
    }
  }, [user, authLoading, isNotary, router]);


  const proceedWithGenerate = async () => {
    if (!user?.displayName) {
      alert("You must be logged in to generate a timestamp.");
      return;
    }
     if (!docTitle.trim()) {
      alert("Please enter a document title before generating a stamp.");
      return;
    }
    setLoading(true);
    setGeneratedRecord(null);
    setShowCopyFallback(false);

    try {
      const docRef = await addDoc(collection(db, "notary"), {
        user: user.displayName,
        docTitle: docTitle,
        createdAt: serverTimestamp(),
      });
      setGeneratedRecord({
        id: docRef.id,
        docTitle: docTitle,
        generatedAt: new Date(),
        user: user.displayName,
      });
      setDocTitle('');
    } catch (e) {
      console.error("Error adding document: ", e);
      alert('Failed to generate timestamp.');
    } finally {
      setLoading(false);
      setIsConfirming(false);
    }
  };
  
  const handleGenerateClick = () => {
    if (!docTitle.trim()) {
      alert("Please enter a document title first.");
      return;
    }
    if (generatedRecord) {
      setIsConfirming(true);
    } else {
      proceedWithGenerate();
    }
  };
  
  const getRecordAsText = () => {
    if (!generatedRecord) return "";

    const stampedDateTime = generatedRecord.generatedAt.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }).replace(' at ', ' at ');

    return `
GROWSHARE CAPITAL
Doc ID: ${generatedRecord.id}
Stamped: ${stampedDateTime}
www.growsharecapital.com
    `.trim().replace(/^\s+/gm, '');
  };

  const handleCopy = async () => {
    const textToCopy = getRecordAsText();
    if (!textToCopy) return;

    try {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        toast({
            title: 'Copied to Clipboard!',
            description: 'The notary record has been copied.',
        });
        setTimeout(() => setCopied(false), 2000);
        setShowCopyFallback(false);
    } catch (err) {
        console.error('Failed to copy text: ', err);
        setShowCopyFallback(true);
        toast({
            title: 'Copy Failed',
            description: 'Could not copy to clipboard. Please copy the text manually below.',
            variant: 'destructive',
        });
    }
  };

  if (authLoading || !isNotary) {
    return (
        <div className="flex h-screen items-center justify-center bg-muted/50">
            <div className="flex items-center gap-3 text-lg">
                <Loader2 className="h-6 w-6 animate-spin" />
                <p>Verifying access...</p>
            </div>
        </div>
    )
  }

  return (
    <div className="bg-muted/50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
           <AlertDialog open={isConfirming} onOpenChange={setIsConfirming}>
            <Card className="max-w-2xl mx-auto shadow-lg">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                  <Stamp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl">Digital Notary Service</CardTitle>
                <CardDescription className="text-lg">
                  Generate a secure, timestamped Document ID.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-10">
                <div className="text-center">
                  <div className="mt-8 space-y-4 text-left">
                      <div>
                        <Label htmlFor="docTitle" className="text-base">Document Title</Label>
                        <Input id="docTitle" placeholder="e.g., Q4 Partnership Agreement" value={docTitle} onChange={(e) => setDocTitle(e.target.value)} />
                        <p className="text-xs text-muted-foreground mt-1">Enter the title of the document you are notarizing.</p>
                      </div>
                      <div className="text-center">
                        
                          <Button onClick={handleGenerateClick} disabled={loading || !docTitle.trim()} size="lg">
                          {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Stamp className="mr-2 h-5 w-5"/>}
                          Generate Secure Timestamp
                        </Button>
                      
                    </div>
                  </div>

                  {generatedRecord && (
                    <FadeIn>
                      <div className="mt-8 border-t pt-8">
                        <h3 className="font-headline text-2xl">Generated Record</h3>
                        <Card className="mt-4 text-left p-6 bg-background relative font-mono text-sm">
                           <Button onClick={handleCopy} size="sm" variant="outline" className="absolute top-2 right-2">
                             {copied ? <Check className="w-4 h-4 mr-2"/> : <Copy className="w-4 h-4 mr-2" />}
                            {copied ? "Copied!" : "Copy Record"}
                          </Button>
                          <p className="font-sans font-bold text-foreground">GROWSHARE CAPITAL</p>
                          <Separator className="my-2"/>
                          <div className="space-y-1">
                             <p><strong className="font-sans text-foreground">Document:</strong> {generatedRecord.docTitle}</p>
                            <p><strong className="font-sans text-foreground">Doc ID:</strong> {generatedRecord.id}</p>
                            <p><strong className="font-sans text-foreground">Stamped:</strong> {generatedRecord.generatedAt.toLocaleString('en-US', {
                              year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
                            })}</p>
                             <p><strong className="font-sans text-foreground">User:</strong> {generatedRecord.user}</p>
                          </div>
                          <Separator className="my-2"/>
                           <p>www.growsharecapital.com</p>
                        </Card>
                        {showCopyFallback && (
                            <div className="mt-4 space-y-2">
                                <Label htmlFor="fallbackCopy" className="text-destructive">Manual Copy Fallback</Label>
                                <Textarea id="fallbackCopy" readOnly value={getRecordAsText()} className="font-mono text-xs" rows={5} />
                            </div>
                        )}
                        <p className="text-xs text-muted-foreground mt-2">A permanent, tamper-proof record has been saved to the database.</p>
                      </div>
                    </FadeIn>
                  )}
                </div>
              </CardContent>
            </Card>
             <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Generate a new timestamp?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You have already generated a timestamp in this session for "{docTitle}". Are you sure you want to generate a new one? This will create a new record in the database.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={proceedWithGenerate}>Yes, generate new timestamp</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
           </AlertDialog>
        </FadeIn>
      </div>
    </div>
  );
}
