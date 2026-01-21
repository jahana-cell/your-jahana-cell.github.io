
'use client';

import { useState, useEffect, useCallback, useActionState } from 'react';
import { collection, addDoc, onSnapshot, serverTimestamp, DocumentData, QueryDocumentSnapshot, doc, deleteDoc, query, orderBy, QuerySnapshot } from 'firebase/firestore';
import { db, functions } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { FilePlus, Loader2, Users, Trash2, Stamp, UserCog, Send, Database, Mail, Bell, Mailbox } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { teamMembers } from '@/lib/team-data';
import Link from 'next/link';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface Email {
  id: string;
  to?: string | string[];
  bcc?: string | string[];
  message?: { subject: string; };
  template?: { data: { subject: string; }; };
  delivery?: {
    state: string;
    error?: string;
    info?: { response: string; };
    startTime: any; // Can be a Timestamp
  };
  createdAt: any; // Can be a Timestamp
}

interface DocumentItem {
  id: string;
  name: string;
  pdfUrl: string;
  createdAt: any;
  signers: { [key: string]: { signed: boolean; timestamp: any } };
}
interface NotaryItem {
  id: string;
  docTitle: string;
  user: string;
  createdAt: any;
}
interface Subscriber {
  id: string;
  email: string;
  createdAt: any;
}


function EmailStatus() {
    const [mail, setMail] = useState<Email[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const mailCollection = collection(db, 'mail');
        const q = query(mailCollection, orderBy("createdAt", "desc"));
        const unsub = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
            const emails = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Email));
            setMail(emails);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    const getStatusBadge = (state: string) => {
        switch(state) {
            case 'SUCCESS': return <Badge variant="default" className="bg-green-600 text-green-50">SUCCESS</Badge>;
            case 'ERROR': return <Badge variant="destructive">ERROR</Badge>;
            case 'PROCESSING': return <Badge variant="secondary">PROCESSING</Badge>;
            case 'PENDING':
            default:
                return <Badge variant="outline">PENDING</Badge>;
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2"><Mail /> Email Delivery Status</CardTitle>
                <CardDescription>Monitor the status of all outgoing emails.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    {loading ? <p>Loading email statuses...</p> : mail.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Recipient(s)</TableHead>
                                    <TableHead>Subject</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Info/Error</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {mail.map(email => (
                                    <TableRow key={email.id}>
                                        <TableCell className="text-xs">
                                            {email.to && (typeof email.to === 'string' ? email.to : email.to.join(', '))}
                                            {email.bcc && (typeof email.bcc === 'string' ? email.bcc : email.bcc.join(', '))}
                                        </TableCell>
                                        <TableCell>{email.message?.subject || email.template?.data?.subject}</TableCell>
                                        <TableCell>{getStatusBadge(email.delivery?.state || 'PENDING')}</TableCell>
                                        <TableCell className="text-xs max-w-xs truncate">{email.delivery?.error || email.delivery?.info?.response}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <p className="text-muted-foreground">No emails sent yet.</p>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default function AdminPage() {
  const { user, loading: authLoading, isAdmin } = useAuth();
  const router = useRouter();
  
  const [docName, setDocName] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [listLoading, setListLoading] = useState(true);
  const [docToDelete, setDocToDelete] = useState<DocumentItem | null>(null);

  const [notaryRecords, setNotaryRecords] = useState<NotaryItem[]>([]);
  const [notaryListLoading, setNotaryListLoading] = useState(true);
  const [notaryToDelete, setNotaryToDelete] = useState<NotaryItem | null>(null);

  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      router.push('/login?redirect=/services/admin');
    }
  }, [user, authLoading, isAdmin, router]);

  useEffect(() => {
    if (!isAdmin) return;

    const unsubscribers: (() => void)[] = [];

    const subscribeToCollection = <T,>(collectionName: string, setter: React.Dispatch<React.SetStateAction<T[]>>) => {
      const ref = collection(db, collectionName);
      const q = query(ref, orderBy("createdAt", "desc"));
      const unsubscribe = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
        const data = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({ id: doc.id, ...doc.data() }) as T);
        setter(data);
      });
      unsubscribers.push(unsubscribe);
    };

    subscribeToCollection<DocumentItem>('documents', setDocuments);
    subscribeToCollection<NotaryItem>('notary', setNotaryRecords);
    subscribeToCollection<Subscriber>('subscribers', setSubscribers);

    setListLoading(false);
    setNotaryListLoading(false);
    setDataLoading(false);

    return () => unsubscribers.forEach(unsub => unsub());
  }, [isAdmin]);

  const handleAddDocument = async () => {
    if (!docName || !pdfUrl) {
      setError('Both Document Name and PDF URL are required.');
      return;
    }
    setError('');
    setLoading(true);

    const initialSigners = teamMembers
      .filter(member => member.roles.includes('signer'))
      .reduce((acc, member) => {
        acc[member.name] = { signed: false, timestamp: '' };
        return acc;
      }, {} as { [key: string]: { signed: boolean, timestamp: string } });

    try {
      await addDoc(collection(db, "documents"), {
        name: docName,
        pdfUrl: pdfUrl,
        createdAt: serverTimestamp(),
        signers: initialSigners,
      });
      setDocName('');
      setPdfUrl('');
    } catch (e) {
      console.error("Error adding document: ", e);
      setError('Failed to add document.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleDeleteDocument = async () => {
    if (!docToDelete) return;
    try {
      await deleteDoc(doc(db, "documents", docToDelete.id));
      setDocToDelete(null);
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("There was an error deleting the document.");
    }
  };

  const handleDeleteNotaryRecord = async () => {
    if (!notaryToDelete) return;
    try {
      await deleteDoc(doc(db, "notary", notaryToDelete.id));
      setNotaryToDelete(null);
    } catch (error) {
      console.error("Error deleting notary record: ", error);
      alert("There was an error deleting the record.");
    }
  };

  const countSignatures = (signers: { [key: string]: { signed: boolean } }) => {
    if (!signers) return 0;
    return Object.values(signers).filter(s => s.signed).length;
  }
  const totalSigners = teamMembers.filter(m => m.roles.includes('signer')).length;

  if (authLoading || !isAdmin) {
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
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="shadow-lg">
                <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                        <UserCog className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-3xl">Admin Dashboard</CardTitle>
                    <CardDescription>Manage all internal data and operations from a central hub.</CardDescription>
                </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2"><Database/> Database Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-semibold">Seed News Articles</p>
                    <p className="text-sm text-muted-foreground">Populate the Firestore database with the latest articles from the local data file.</p>
                  </div>
                  <Button asChild>
                    <Link href="/seed-db">Go to Seeder</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <EmailStatus />

            <SubscribersTable subscribers={subscribers} isLoading={dataLoading} />

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2"><FilePlus/> Add New Document</CardTitle>
                <CardDescription>Create a new document for the team to sign.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="docName">Document Name</Label>
                  <Input id="docName" placeholder="e.g., Q3 Partnership Agreement" value={docName} onChange={(e) => setDocName(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="pdfUrl">PDF URL</Label>
                  <Input id="pdfUrl" placeholder="https://..." value={pdfUrl} onChange={(e) => setPdfUrl(e.target.value)} />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button onClick={handleAddDocument} disabled={loading}>
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : null}
                  Add Document
                </Button>
              </CardContent>
            </Card>

            <AlertDialog onOpenChange={(isOpen) => !isOpen && setDocToDelete(null)}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl flex items-center gap-2">All Documents</CardTitle>
                  <CardDescription>View and manage existing documents.</CardDescription>
                </CardHeader>
                <CardContent>
                  {listLoading ? (
                    <p>Loading document list...</p>
                  ) : documents.length > 0 ? (
                    <div className="space-y-4">
                      {documents.map(docItem => (
                        <Card key={docItem.id} className="hover:shadow-md hover:border-primary/50 transition-all">
                            <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                              <Link href={`/services/doc/${docItem.id}`} className="flex-grow">
                                  <h3 className="font-semibold text-lg">{docItem.name}</h3>
                                  <p className="text-sm text-muted-foreground">
                                      Created on: {docItem.createdAt ? new Date(docItem.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                                  </p>
                              </Link>
                              <div className="flex items-center gap-4 w-full sm:w-auto flex-shrink-0">
                                  <div className="text-center flex-grow">
                                      <p className="font-bold text-lg">{countSignatures(docItem.signers)}/{totalSigners}</p>
                                      <p className="text-xs text-muted-foreground flex items-center justify-center gap-1"><Users className="w-3 h-3"/> Signed</p>
                                  </div>
                                  <AlertDialogTrigger asChild>
                                      <Button variant="destructive" size="icon" onClick={() => setDocToDelete(docItem)}>
                                          <Trash2 className="w-4 h-4"/>
                                      </Button>
                                    </AlertDialogTrigger>
                              </div>
                            </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No documents have been added yet.</p>
                  )}
                </CardContent>
              </Card>
              <AlertDialogContent>
                  <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the document <strong>{docToDelete?.name}</strong> and all its signature data.
                      </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteDocument} >Yes, delete document</AlertDialogAction>
                  </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog onOpenChange={(isOpen) => !isOpen && setNotaryToDelete(null)}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl flex items-center gap-2"><Stamp /> Notary Records</CardTitle>
                  <CardDescription>View and manage existing notary timestamp records. Records are sorted by most recent.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                  {notaryListLoading ? (
                    <p>Loading notary records...</p>
                  ) : notaryRecords.length > 0 ? (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Document</TableHead>
                                <TableHead>User</TableHead>
                                <TableHead>Timestamp</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {notaryRecords.map(record => (
                            <TableRow key={record.id}>
                                <TableCell className="font-medium">{record.docTitle}</TableCell>
                                <TableCell>{record.user}</TableCell>
                                <TableCell>{record.createdAt ? new Date(record.createdAt.seconds * 1000).toLocaleString() : 'N/A'}</TableCell>
                                <TableCell>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="destructive" size="icon" onClick={() => setNotaryToDelete(record)}>
                                            <Trash2 className="w-4 h-4"/>
                                        </Button>
                                    </AlertDialogTrigger>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                  ) : (
                    <p className="text-muted-foreground">No notary records have been generated yet.</p>
                  )}
                  </div>
                </CardContent>
              </Card>
              <AlertDialogContent>
                  <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the notary record for <strong>{notaryToDelete?.docTitle}</strong> (ID: {notaryToDelete?.id}).
                      </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteNotaryRecord} >Yes, delete record</AlertDialogAction>
                  </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function SubscribersTable({ subscribers, isLoading }: { subscribers: Subscriber[], isLoading: boolean }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-xl flex items-center gap-2"><Mailbox className="w-5 h-5" /> Newsletter Subscribers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
            {isLoading ? (
            <p>Loading...</p>
            ) : subscribers.length > 0 ? (
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Subscription Date</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {subscribers.map(sub => (
                    <TableRow key={sub.id}>
                        <TableCell>{sub.email}</TableCell>
                        <TableCell>{sub.createdAt ? format(sub.createdAt.toDate(), 'MM/dd/yyyy') : 'N/A'}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            ) : (
            <p className="text-muted-foreground p-4">No subscribers yet.</p>
            )}
        </div>
      </CardContent>
    </Card>
  );
}
