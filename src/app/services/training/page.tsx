
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { FadeIn } from '@/components/fade-in';
import { Sprout, Warehouse, Drumstick, ArrowRight, Loader2, BookOpen, Star, Users } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { ServicesNav } from '@/components/services-nav';
import { useRouter } from 'next/navigation';
import { sendTrainingBookingNotification } from '@/app/actions';


const SheepIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="sheepIconTitle" {...props}>
        <title id="sheepIconTitle">Sheep Head Icon</title>
        <g fill="hsl(var(--secondary))">
            <circle cx="50" cy="35" r="20"/>
            <circle cx="35" cy="45" r="18"/>
            <circle cx="65" cy="45" r="18"/>
            <circle cx="50" cy="50" r="20"/>
        </g>
        <ellipse cx="50" cy="65" rx="25" ry="20" fill="hsl(var(--primary))"/>
        <g fill="hsl(var(--primary-foreground))">
            <circle cx="42" cy="62" r="2.5"/>
            <circle cx="58" cy="62" r="2.5"/>
        </g>
        <g fill="hsl(var(--primary))">
            <path d="M25,60 C15,50 25,40 35,45Z"/>
            <path d="M75,60 C85,50 75,40 65,45Z"/>
        </g>
    </svg>
);

const BeeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 6h2l4 4-6 6h-2l-4-4z" />
    <path d="M10 10l-4 4" />
    <path d="M14 6l-4-4-2 2 4 4" />
    <path d="M10 10l4 4" />
  </svg>
);


const trainingOptions = [
  { id: "gardening", label: "Gardening Training", icon: Sprout },
  { id: "greenhouse", label: "Greenhouse Management", icon: Warehouse },
  { id: "chicken", label: "Chicken Coop Management", icon: Drumstick },
  { id: "livestock", label: "Goat and Lamb Management", icon: SheepIcon },
  { id: "apiary", label: "Apiary & Beekeeping", icon: BeeIcon },
];

export default function TrainingPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTraining, setSelectedTraining] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBooking = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!date || !selectedTraining) {
      toast({
        title: "Incomplete Booking",
        description: "Please select a date and a training course.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    const trainingLabel = trainingOptions.find(t => t.id === selectedTraining)?.label;

    localStorage.setItem('trainingBooking', JSON.stringify({
      course: trainingLabel,
      date: date.toISOString(),
      price: "100.00"
    }));
    
    if (trainingLabel) {
        await sendTrainingBookingNotification({
            course: trainingLabel,
            date: date.toISOString(),
        });
    }

    setIsSubmitting(false);
    router.push('/services/training/payment');
  };

  return (
    <div className="bg-background">
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxnYXJkZW5pbmd8ZW58MHx8fHwxNzU4NzYwMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Gardening Training"
          fill
          className="z-0 object-cover"
          data-ai-hint="gardening class"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="container mx-auto px-4 z-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-headline mt-4 drop-shadow-md">
              Farm & Garden Training
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-sm">
              Book hands-on training sessions for gardening, greenhouse management, and livestock care.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
          <ServicesNav />
      </div>

      <main className="container mx-auto px-4 pt-0 md:pt-0 pb-16 md:pb-24">
        <div className="mb-16">
            <Card className="max-w-5xl mx-auto shadow-lg border-primary/20">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-3xl flex items-center justify-center gap-3"><BookOpen className="w-8 h-8"/> About Our Training Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                        Our Farm & Garden training sessions are designed to provide practical, hands-on experience for enthusiasts of all levels. Whether you're a beginner looking to start your first garden or an experienced farmer wanting to learn new techniques, our expert-led courses offer valuable insights and skills.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                <Star className="w-8 h-8 text-primary"/>
                            </div>
                            <h4 className="font-bold text-xl mb-2">Expert Instructors</h4>
                            <p className="text-muted-foreground">Learn from seasoned professionals with years of experience in sustainable agriculture and livestock management.</p>
                        </div>
                         <div className="flex flex-col items-center">
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                <Sprout className="w-8 h-8 text-primary"/>
                            </div>
                            <h4 className="font-bold text-xl mb-2">Hands-On Learning</h4>
                            <p className="text-muted-foreground">Our sessions are interactive and take place on-site, allowing you to get your hands dirty and learn by doing.</p>
                        </div>
                         <div className="flex flex-col items-center">
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                <Users className="w-8 h-8 text-primary"/>
                            </div>
                            <h4 className="font-bold text-xl mb-2">All Skill Levels Welcome</h4>
                            <p className="text-muted-foreground">We offer a range of courses tailored to different interests and skill levels, from basic gardening to advanced apiary management.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div>
          <Card className="max-w-5xl mx-auto shadow-xl border" id="booking">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl">Book Your Training Session</CardTitle>
              <CardDescription>Select a date and a course to begin your journey.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                
                <div className="space-y-6">
                   <h3 className="font-headline text-xl text-center">1. Select a Course</h3>
                   <RadioGroup value={selectedTraining} onValueChange={setSelectedTraining} className="space-y-3">
                     {trainingOptions.map(option => {
                       const Icon = option.icon;
                       return (
                         <Label key={option.id} htmlFor={option.id} className={`flex items-center gap-4 rounded-lg border p-4 cursor-pointer transition-all hover:bg-muted/80 ${selectedTraining === option.id ? 'bg-muted border-primary ring-2 ring-primary' : ''}`}>
                           <RadioGroupItem value={option.id} id={option.id} className="sr-only" />
                           <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                           <span className="font-semibold text-base">{option.label}</span>
                         </Label>
                       );
                     })}
                   </RadioGroup>
                </div>
                
                <div className="space-y-6">
                    <h3 className="font-headline text-xl text-center">2. Select a Date</h3>
                    <div className="flex justify-center">
                         <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border bg-card"
                            disabled={(d) => d < new Date() || d.getDay() === 0 || d.getDay() === 6}
                        />
                    </div>
                     <p className="text-sm text-muted-foreground text-center">Training sessions are available on weekdays only.</p>
                </div>

                <div className="md:col-span-2 border-t pt-8 mt-4">
                  {date && selectedTraining ? (
                    <FadeIn>
                      <Card className="bg-primary/5 border-primary/20">
                          <CardHeader>
                            <CardTitle className="font-headline text-2xl">Your Booking</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex justify-between items-center">
                                <p className="text-muted-foreground">Course:</p>
                                <p className="font-bold text-lg">{trainingOptions.find(t => t.id === selectedTraining)?.label}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-muted-foreground">Date:</p>
                                <p className="font-bold text-lg">{format(date, "EEEE, MMMM d, yyyy")}</p>
                            </div>
                            <div className="flex justify-between items-center text-primary font-bold border-t pt-4 mt-4">
                                <p className="text-xl">Total:</p>
                                <p className="text-2xl font-mono">$100.00</p>
                            </div>
                            <Button size="lg" className="w-full mt-4" onClick={handleBooking} disabled={isSubmitting}>
                                {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <ArrowRight className="mr-2"/>}
                                {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                            </Button>
                          </CardContent>
                      </Card>
                    </FadeIn>
                  ) : (
                    <div className="text-center text-muted-foreground p-8">
                      <p>Please select a course and a date to see your booking details.</p>
                    </div>
                  )}
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
