
'use client';

import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function FeasibilityBlueprintPage() {
    const blueprintSteps = [
        { title: "Zoning & Entitlement Analysis", description: "Verifying that the land's zoning aligns with the proposed use and identifying all necessary permits and municipal approvals." },
        { title: "Site & Utility Assessment", description: "Evaluating topography, soil conditions, and the availability of essential utilities like water, sewer, and electricity to determine site viability." },
        { title: "Market & Demand Study", description: "Analyzing local demographic trends, housing needs, and commercial demand to ensure the project meets a real market gap." },
        { title: "Preliminary Financial Modeling", description: "Creating high-level financial projections, including estimated construction costs, potential revenue, and target ROI to assess financial viability." },
        { title: "Infrastructure & Access Review", description: "Assessing existing road access, traffic flow, and requirements for new infrastructure to support the development." }
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto max-w-4xl px-6 py-24 md:py-32">
                <div className="mb-12">
                    <Link href="/services/skylinedb3" className="group inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to SkylineDB3
                    </Link>
                </div>

                <header className="mb-16 text-center">
                    <p className="text-base font-semibold uppercase tracking-widest text-amber-700 mb-2">Technical Framework</p>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-900">Feasibility Blueprint</h1>
                    <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">Our systematic approach to de-risking land development by evaluating land value, zoning restrictions, and market viability.</p>
                </header>

                <div className="space-y-12">
                    {blueprintSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-6">
                            <div className="flex flex-col items-center">
                                <div className="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg font-serif">
                                    {index + 1}
                                </div>
                                {index < blueprintSteps.length - 1 && (
                                    <div className="w-px h-16 bg-neutral-200 mt-2"></div>
                                )}
                            </div>
                            <div className="flex-1 pt-1">
                                <h3 className="text-xl font-semibold font-serif mb-2">{step.title}</h3>
                                <p className="text-neutral-500 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center p-8 bg-neutral-50 rounded-lg border border-neutral-200">
                    <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold font-serif mb-2">Outcome: Go/No-Go Decision</h4>
                    <p className="text-neutral-600 max-w-xl mx-auto">
                        This blueprint provides our partners with a clear, data-driven recommendation on whether to proceed with a project, minimizing risk and maximizing the potential for success.
                    </p>
                </div>
            </div>
        </div>
    );
}
