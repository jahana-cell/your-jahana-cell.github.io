"use client";

import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitInquiry } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- LUXURY INPUT COMPONENT ---
// Replaces standard Shadcn Input with a border-bottom only style for a cleaner look
const LuxuryInput = ({
  id,
  name,
  type = "text",
  placeholder,
  error,
  required = false,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) => (
  <div className="relative group z-0 w-full mb-6">
    <input
      type={type}
      name={name}
      id={id}
      className={cn(
        "block py-3 px-0 w-full text-lg text-stone-900 bg-transparent border-0 border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#D4AF37] peer transition-colors duration-500",
        error && "border-red-500 focus:border-red-500"
      )}
      placeholder=" " // Space needed for :placeholder-shown CSS trick
      required={required}
      {...props}
    />
    <label
      htmlFor={id}
      className={cn(
        "peer-focus:font-medium absolute text-sm text-stone-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D4AF37] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
        error && "text-red-500 peer-focus:text-red-500"
      )}
    >
      {placeholder}
    </label>
    {error && <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>}
  </div>
);

// --- LUXURY TEXTAREA COMPONENT ---
const LuxuryTextarea = ({
  id,
  name,
  placeholder,
  error,
  required = false,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }) => (
  <div className="relative group z-0 w-full mb-8">
    <textarea
      name={name}
      id={id}
      rows={4}
      className={cn(
        "block py-3 px-0 w-full text-lg text-stone-900 bg-transparent border-0 border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#D4AF37] peer transition-colors duration-500 resize-none",
        error && "border-red-500 focus:border-red-500"
      )}
      placeholder=" "
      required={required}
      {...props}
    />
    <label
      htmlFor={id}
      className={cn(
        "peer-focus:font-medium absolute text-sm text-stone-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D4AF37] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
        error && "text-red-500 peer-focus:text-red-500"
      )}
    >
      {placeholder}
    </label>
    {error && <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>}
  </div>
);

// --- LUXURY SUBMIT BUTTON ---
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative w-full overflow-hidden bg-stone-900 text-white px-8 py-4 transition-all duration-500 hover:bg-[#D4AF37] disabled:opacity-70 disabled:hover:bg-stone-900"
    >
      <span className="relative z-10 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-white">
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Processing
          </>
        ) : (
          <>
            Send Message <ArrowRight className="h-4 w-4" />
          </>
        )}
      </span>
    </button>
  );
}

interface InquiryFormProps {
  defaultSubject?: string;
}

export default function InquiryForm({ defaultSubject = "" }: InquiryFormProps) {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<
    { message?: string; errors?: any } | undefined
  >(undefined);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await submitInquiry(state || {}, formData);
    setState(result);
  };

  useEffect(() => {
    if (state?.message) {
      if (state.errors && Object.keys(state.errors).length > 0) {
        toast({
          title: "Submission Error",
          description: state.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We will be in touch shortly.",
          className: "bg-stone-900 text-white border-stone-800",
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full">
      
      {/* Name Input */}
      <LuxuryInput
        id="name"
        name="name"
        placeholder="Full Name"
        error={state?.errors?.name?.[0]}
        required
      />

      {/* Email Input */}
      <LuxuryInput
        id="email"
        name="email"
        type="email"
        placeholder="Email Address"
        error={state?.errors?.email?.[0]}
        required
      />

      {/* Subject Select (Customized for Luxury) */}
      <div className="relative mb-8 group">
        <label className="text-xs text-stone-400 uppercase tracking-widest mb-2 block group-hover:text-[#D4AF37] transition-colors">
          Topic of Interest
        </label>
        <Select name="subject" defaultValue={defaultSubject}>
          <SelectTrigger className="w-full border-0 border-b border-stone-300 rounded-none px-0 py-3 text-lg font-serif text-stone-900 focus:ring-0 focus:border-[#D4AF37] bg-transparent shadow-none">
            <SelectValue placeholder="Select a subject..." />
          </SelectTrigger>
          <SelectContent className="bg-white border-stone-100 rounded-none shadow-xl">
            <SelectGroup>
              <SelectItem value="General Inquiry" className="font-serif cursor-pointer hover:bg-stone-50">General Inquiry</SelectItem>
              <SelectItem value="Investment" className="font-serif cursor-pointer hover:bg-stone-50">Investment Opportunities</SelectItem>
              <SelectItem value="Partnership" className="font-serif cursor-pointer hover:bg-stone-50">Strategic Partnership</SelectItem>
              <SelectItem value="Real Estate Inquiry" className="font-serif cursor-pointer hover:bg-stone-50">Real Estate</SelectItem>
              <SelectItem value="Agriculture Inquiry" className="font-serif cursor-pointer hover:bg-stone-50">Agriculture</SelectItem>
              <SelectItem value="Healthcare Inquiry" className="font-serif cursor-pointer hover:bg-stone-50">Healthcare</SelectItem>
              <SelectItem value="Technical Support" className="font-serif cursor-pointer hover:bg-stone-50">Technical Support</SelectItem>
              <SelectItem value="Other" className="font-serif cursor-pointer hover:bg-stone-50">Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {state?.errors?.subject && (
          <p className="mt-1 text-xs text-red-500 font-medium">{state.errors.subject[0]}</p>
        )}
      </div>

      {/* Message Textarea */}
      <LuxuryTextarea
        id="message"
        name="message"
        placeholder="How can we assist you?"
        error={state?.errors?.message?.[0]}
        required
      />

      {/* Submit Button */}
      <div className="pt-4">
        <SubmitButton />
      </div>

    </form>
  );
}