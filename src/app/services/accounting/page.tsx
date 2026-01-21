
'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { Loader2, Calculator, Receipt, Landmark, Users, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow, TableHeader, TableHead, TableFooter } from "@/components/ui/table";
import { FadeIn } from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const deposits = [
    { name: "Dr. Aminuddin Khan", amount: 500 },
    { name: "Ashif Jahan", amount: 500 },
    { name: "Abid Abdullah", amount: 500 },
    { name: "Muhammad Usman Nawid", amount: 970 },
    { name: "MD Abul Mansur", amount: 100 },
];

const expenses = [
    { item: "Business Name Reservation", cost: 28, paid: false },
    { item: "Business Certificate of Organization", cost: 210, paid: false },
    { item: "Domain Purchase for Website", cost: 15, paid: false },
];

export default function AccountingPage() {
  const { user, loading: authLoading, isMember } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !isMember) {
      router.push('/login?redirect=/services/accounting');
    }
  }, [user, authLoading, isMember, router]);

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

  const totalDeposits = deposits.reduce((acc, deposit) => acc + deposit.amount, 0);
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.cost, 0);

  return (
    <div className="bg-muted/50 min-h-screen py-16 md:py-24">
      <main className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                      <Receipt className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-3xl">Accounting Dashboard</CardTitle>
                  <CardDescription>Manage internal financial information and tools. This page is restricted to admins.</CardDescription>
              </CardHeader>
            </Card>

            
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl flex items-center gap-2"><Calculator /> Director Account Calculations</CardTitle>
                  <CardDescription>Initial deposits from directors.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                      <TableHeader>
                          <TableRow>
                              <TableHead>Director</TableHead>
                              <TableHead className="text-right">Amount</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {deposits.map((deposit) => (
                              <TableRow key={deposit.name}>
                                  <TableCell className="font-medium">{deposit.name}</TableCell>
                                  <TableCell className="text-right font-mono">${deposit.amount.toLocaleString()}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                      <TableFooter>
                          <TableRow>
                              <TableCell className="font-bold text-lg">Total</TableCell>
                              <TableCell className="text-right font-bold font-mono text-lg">${totalDeposits.toLocaleString()}</TableCell>
                          </TableRow>
                      </TableFooter>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl flex items-center gap-2"><Landmark /> Expense Sheet</CardTitle>
                  <CardDescription>Record of business-related expenses.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                      <TableHeader>
                          <TableRow>
                              <TableHead>Item</TableHead>
                              <TableHead className="text-center">Status</TableHead>
                              <TableHead className="text-right">Cost</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {expenses.map((expense) => (
                              <TableRow key={expense.item}>
                                  <TableCell className="font-medium">{expense.item}</TableCell>
                                  <TableCell className="text-center">
                                    {expense.paid && <Check className="w-5 h-5 text-green-600 inline-block" />}
                                  </TableCell>
                                  <TableCell className="text-right font-mono">${expense.cost.toLocaleString()}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                      <TableFooter>
                          <TableRow>
                              <TableCell colSpan={2} className="font-bold text-lg">Total</TableCell>
                              <TableCell className="text-right font-bold font-mono text-lg">${totalExpenses.toLocaleString()}</TableCell>
                          </TableRow>
                      </TableFooter>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl flex items-center gap-2"><Users /> Investor Information</CardTitle>
                  <CardDescription>Details of investments from partners and investors.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                      <p>No investor data has been added yet. This section will display investor deposits once available.</p>
                  </div>
                </CardContent>
              </Card>

            
            <div className="text-center">
              <Button asChild variant="outline">
                <Link href="/services">Back to Services</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
