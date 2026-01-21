
"use client";

import { useState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { subscribeToNewsletter } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" size="icon" disabled={pending}>
            {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Subscribe</span>
        </Button>
    )
}

export default function NewsletterForm() {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    const [state, setState] = useState<{ message: string; error?: string } | undefined>(undefined);

    const handleSubmit = async (formData: FormData) => {
        const result = await subscribeToNewsletter({ message: "", error: undefined }, formData);
        setState(result);
    };

    useEffect(() => {
        if (state?.message) {
            toast({
                title: state.error ? "Subscription Failed" : "Subscribed!",
                description: state.message,
                variant: state.error ? "destructive" : "default",
            });
            if (!state.error) {
                formRef.current?.reset();
            }
        }
    }, [state, toast]);

    return (
        <form action={handleSubmit} ref={formRef} className="flex w-full max-w-sm items-center space-x-2">
            <Input name="email" type="email" placeholder="Email" required />
            <SubmitButton />
        </form>
    )
}
