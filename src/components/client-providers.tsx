
'use client';

import { AuthProvider } from '@/context/auth-context';
import { CartProvider } from '@/context/cart-context';
import { AddToHomeScreenBanner } from '@/components/add-to-home-screen-banner';
import { WhatsAppButton } from './whatsapp-button';
import { GoogleAnalytics } from './google-analytics';
import { ViewCounter } from './view-counter';
import { Suspense } from 'react';

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <CartProvider>
                {children}
                <AddToHomeScreenBanner />
                <WhatsAppButton />
                <Suspense fallback={null}>
                    <GoogleAnalytics />
                    <ViewCounter />
                </Suspense>
            </CartProvider>
        </AuthProvider>
    );
}
