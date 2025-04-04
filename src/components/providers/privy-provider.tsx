// components/providers/privy-provider.tsx
"use client";

import { PrivyProvider } from '@privy-io/react-auth';
import { ReactNode } from 'react';

interface PrivyClientProviderProps {
  children: ReactNode;
}

export function PrivyClientProvider({ children }: PrivyClientProviderProps) {
  // Replace with your actual Privy App ID
  const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID || "cm91s4gs300c5l70k41e3lg5e";
  
  if (!PRIVY_APP_ID) {
    console.warn('Missing NEXT_PUBLIC_PRIVY_APP_ID environment variable');
  }
  
  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ['wallet', 'email', 'google'],
        appearance: {
          theme: 'light',
          accentColor: '#4F46E5', // Indigo color to match the design
          logo: '/logo.svg', // Make sure to add your logo in the public folder
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}