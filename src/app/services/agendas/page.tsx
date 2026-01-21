
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { collection, onSnapshot, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Loader2, Calendar, ClipboardList, ArrowRight, PenSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import type { MeetingAgenda } from '@/lib/constants';

export default function AgendasListPage() {
    const { user, loading: authLoading, isMember } = useAuth();
    const router = useRouter();
    const [meetings, setMeetings] = useState<MeetingAgenda[]>([]);
    const [meetingsLoading, setMeetingsLoading] = useState(true);

    useEffect(() => {
        if (!authLoading && !isMember) {
            router.push('/login?redirect=/services/agendas');
        }
    }, [user, authLoading, isMember, router]);

    useEffect(() => {
        if (isMember) {
            const meetingsRef = collection(db, "meetings");
            const unsubscribe = onSnapshot(meetingsRef, (querySnapshot) => {
                const meetingsData: MeetingAgenda[] = [];
                querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
                    meetingsData.push({ id: doc.id, ...doc.data() } as MeetingAgenda);
                });
                setMeetings(meetingsData.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)));
                setMeetingsLoading(false);
            });
            return () => unsubscribe();
        }
    }, [isMember]);

    if (authLoading || !isMember) {
        return (
            <div className="flex h-screen items-center justify-center bg-muted/50">
                <div className="flex items-center gap-3 text-lg">
                    <Loader2 className="h-6 w-6 animate-spin" />
                    <p>Verifying access...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-muted/50 min-h-screen py-16 md:py-24">
            <main className="container mx-auto px-4">
                <FadeIn>
                    <div className="max-w-4xl mx-auto">
                         <Card className="shadow-2xl mb-8">
                            <CardHeader className="bg-background text-center p-8 rounded-lg">
                                <div className="mx-auto bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                                    <ClipboardList className="w-10 h-10 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-4xl">Meeting Agendas</CardTitle>
                                <CardDescription className="text-lg">An archive of all board and strategic meetings.</CardDescription>
                            </CardHeader>
                        </Card>
                        
                        <div className="space-y-6">
                            {meetingsLoading ? (
                                <div className="text-center text-muted-foreground">Loading agendas...</div>
                            ) : meetings.length > 0 ? (
                                meetings.map((agenda) => (
                                    <Card key={agenda.id} className="hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                                <div className="flex-grow">
                                                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-1">
                                                        <Calendar className="w-4 h-4" />
                                                        {agenda.date ? (
                                                            <span>{new Date(`${agenda.date}T00:00:00`).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Chicago' })}</span>
                                                        ) : (
                                                            <span>No date set</span>
                                                        )}
                                                    </div>
                                                    <h3 className="font-headline text-2xl font-bold">{agenda.title}</h3>
                                                </div>
                                                <Button asChild>
                                                    <Link href={`/services/agendas/${agenda.id}`}>
                                                        View Agenda <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                            ) : (
                                <Card>
                                    <CardContent className="p-8 text-center text-muted-foreground">
                                        No agendas have been created yet. Go to the Admin Dashboard to add one.
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                </FadeIn>
            </main>
        </div>
    );
}
