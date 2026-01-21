
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LogIn, LogOut, Award, Loader2 } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { EB_Garamond, Inter } from 'next/font/google';

const garamond = EB_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-garamond',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-inter',
});


export default function CertificatePage() {
    const { user, loading, isNotary } = useAuth();
    const router = useRouter();

    const [participantName, setParticipantName] = useState('');
    const [amountInvested, setAmountInvested] = useState('');
    const [certificateNumber, setCertificateNumber] = useState('');
    
    const [isFormVisible, setIsFormVisible] = useState(true);
    
    useEffect(() => {
        if (!loading && !isNotary) {
            router.push('/login?redirect=/services/certificate');
        }
    }, [user, loading, isNotary, router]);


    const handleGenerate = () => {
        if (!participantName || !amountInvested || !certificateNumber) {
            alert('Please fill out all fields.');
            return;
        }

        // Populate Certificate
        (document.getElementById('cert-number') as HTMLElement).textContent = `Certificate #${certificateNumber}`;
        (document.getElementById('cert-participant-name') as HTMLElement).textContent = participantName;

        const formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(Number(amountInvested));
        (document.getElementById('cert-amount-invested') as HTMLElement).textContent = formattedAmount;

        const formattedDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        (document.getElementById('cert-date') as HTMLElement).textContent = formattedDate;

        setIsFormVisible(false);
    };

    const handleBack = () => {
        setIsFormVisible(true);
    };
    
    if (loading || !isNotary) {
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
        <>
            <div className={`${inter.variable} ${garamond.variable} font-inter bg-gray-50 min-h-screen py-12 px-4`}>
                <FadeIn>
                    <Card className="max-w-lg mx-auto shadow-lg">
                        <CardHeader className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="font-garamond text-3xl font-bold text-gray-800">Certificate Generator</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {isFormVisible ? (
                                <div className="space-y-4 p-4">
                                    <CardDescription className="text-center">Enter the details to generate the certificate.</CardDescription>
                                    <div>
                                        <Label htmlFor="participantName" className="font-medium text-gray-700">Participant Name</Label>
                                        <Input id="participantName" type="text" placeholder="e.g., John Doe" value={participantName} onChange={(e) => setParticipantName(e.target.value)} />
                                    </div>
                                    <div>
                                        <Label htmlFor="amountInvested" className="font-medium text-gray-700">Amount Invested ($)</Label>
                                        <Input id="amountInvested" type="number" placeholder="e.g., 1000" value={amountInvested} onChange={(e) => setAmountInvested(e.target.value)} />
                                    </div>
                                    <div>
                                        <Label htmlFor="certificateNumber" className="font-medium text-gray-700">Certificate Number</Label>
                                        <Input id="certificateNumber" type="text" placeholder="e.g., GSC-2025-001" value={certificateNumber} onChange={(e) => setCertificateNumber(e.target.value)} />
                                    </div>
                                    <Button onClick={handleGenerate} className="w-full">Generate Certificate</Button>
                                </div>
                            ) : (
                                <div className="text-center p-4">
                                    <p className="text-green-600 font-semibold mb-4">Certificate Generated!</p>
                                    <Button onClick={handleBack} variant="outline">Create Another</Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </FadeIn>

                <div className={`max-w-5xl mx-auto mt-8 ${isFormVisible ? 'hidden' : ''}`}>
                    <div id="certificate-wrapper" className="bg-white p-10 border-8 border-gray-800 relative aspect-[1.414/1] flex flex-col font-garamond text-gray-800">
                        
                        <img src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FOnly%20G%20Transparent.png?alt=media&token=e35d5de0-d3b2-4f43-8af3-d93ff2435b13" alt="Watermark" className="absolute inset-0 w-2/3 h-2/3 m-auto opacity-10" />

                        <div className="flex justify-between items-start mb-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FGrowshare%20Capital%20Transparent.png?alt=media&token=b53577e6-eb64-409d-aa7a-e9aa4fe01c49" alt="GrowShare Capital Logo" className="w-40" />
                            <div className="text-center flex-grow">
                                <h1 className="font-bold text-5xl tracking-wide">Certificate of Participation</h1>
                                <p className="text-lg">GrowShare Capital, LLC</p>
                                <p className="text-md">Livestock Fund – Alabama</p>
                            </div>
                            <p id="cert-number" className="text-xs text-gray-500 w-40 text-right">Certificate #GSC-2025-001</p>
                        </div>
                        
                        <div className="text-center flex-grow space-y-6 text-xl">
                             <p className="text-2xl">This certifies that</p>
                             
                             <div className="w-3/4 mx-auto pt-1">
                                <p id="cert-participant-name" className="font-bold text-4xl text-blue-900 pb-2">Participant Name</p>
                                <hr className="border-gray-500"/>
                             </div>

                             <p className="text-2xl">has participated in the <strong>GrowShare Capital Livestock Fund</strong> with an investment of</p>
                             
                             <div className="w-3/4 mx-auto pt-1">
                                <p id="cert-amount-invested" className="font-bold text-3xl pb-2">Amount Invested (USD)</p>
                                <hr className="border-gray-500"/>
                             </div>
                        </div>

                        <div className="flex justify-between items-end mt-10 text-lg">
                            <div className="w-1/3 text-center">
                                <p id="cert-date" className="font-medium pb-2">Date</p>
                                <hr className="border-gray-500"/>
                                <p className="text-sm pt-1">Date</p>
                            </div>
                           <div className="w-1/2 text-center">
                                <img src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/signature%2FAminuddin%20signature%20image.png?alt=media&token=97045ebb-ae97-4b5b-9f79-f23f39f735bb" alt="Signature" className="h-12 mx-auto" />
                                <hr className="border-gray-500 mt-2"/>
                                <p className="text-sm font-bold pt-1">Dr. Aminuddin Khan, MBBS FCPS</p>
                                <p className="text-xs">Chairman, GrowShare Capital</p>
                            </div>
                        </div>

                        <div className="text-center text-xs text-gray-500 mt-6">
                             <p>A certificate is issued for each $1,000 investment in the Livestock Fund – Alabama.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
