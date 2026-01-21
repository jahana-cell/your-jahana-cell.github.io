'use client';

import { Globe, MapPin } from "lucide-react";
import QRCode from "react-qr-code";

const ShareableQRCode = () => {
  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-4">
        {/* The Card Container */}
        <div className="bg-white border border-neutral-200 p-8 md:p-12 shadow-2xl relative overflow-hidden rounded-sm">
            
            {/* Minimalist Top Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-black" />

            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
                
                {/* LEFT: Editorial Typography */}
                <div className="text-center md:text-left space-y-8 flex-1">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-3">
                            Private Placement
                        </p>
                        <h3 className="text-3xl md:text-5xl font-serif text-black leading-none">
                            Foundry55<span className="text-neutral-300">.</span>
                        </h3>
                        <p className="text-lg font-light text-neutral-500 mt-2 italic">
                            Workforce Housing Initiative
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-black">
                            <Globe className="w-3 h-3" />
                            <span>growsharecapital.com</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-neutral-400 uppercase tracking-widest">
                            <MapPin className="w-3 h-3" />
                            <span>Blytheville, AR</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT: The "Legacy" Style QR Box */}
                <div className="flex-shrink-0">
                    <div className="border border-neutral-300 p-5 bg-white text-center" style={{ minWidth: '180px' }}>
                        <div className="bg-white"> 
                            <QRCode 
                                value="https://www.growsharecapital.com/real-estate/foundry55/invest" 
                                size={120} 
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                viewBox={`0 0 256 256`}
                            />
                        </div>
                        <div className="mt-4 pt-4 border-t border-neutral-100">
                            <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-black">
                                Scan to Invest
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default ShareableQRCode;
