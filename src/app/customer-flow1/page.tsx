"use client";
import { usePrivy } from '@privy-io/react-auth';
import { useWallets } from '@privy-io/react-auth';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';

export default function CustomerFlow1() {
  const { user, logout, ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const [connectedWallet, setConnectedWallet] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (ready && authenticated && user?.wallet?.address) {
      console.log("List of Connected Wallets:", wallets);
      setConnectedWallet(user.wallet.address as string);
    }
  }, [wallets, ready, authenticated, user]);
  
  // Get a safe string representation of the user identifier
  const getUserIdentifier = () => {
    if (!user) return 'Signed Out';
    
    // Handle email which might be a string or an object
    if (user.email) {
      return typeof user.email === 'string'
        ? user.email
        : (user.email as any).address || 'Email Available';
    }
    
    // Handle wallet address
    if (user.wallet?.address) {
      return user.wallet.address as string;
    }
    
    return 'Signed Out';
  };

  // Get a safe string representation of the user blockchain address
  const getUserAddress = () => {
    if (!user) return 'Signed Out';
    
    // Handle email which might be a string or an object
    if (user.wallet) {
      return typeof user.wallet.address === 'string'
        ? user.wallet.address as string : 'Address Available';
    }
    
    // Handle wallet address
    if ((user.wallet as any).address) {
      return (user.wallet as any).address as string;
    }
    
    return 'Signed Out';
  };
  
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="bg-gradient-to-r from-[#021019] to-[#0a192f] text-white border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="Aquari Logo"
              width={39}
              height={24}
              className="text-white"
            />
            <Image
              src="/images/AquariTestLogo.svg"
              alt="Aquari Logo"
              width={124}
              height={48}
              className="text-white"
            />
          </div>
          <Button
            className="bg-gradient-to-r from-[#2c7a7b] to-[#285e61] hover:from-[#3b8a8c] hover:to-[#2d6e71] text-white border-none"
            onClick={() => logout()}
          >
            Sign Out
          </Button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8 border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Subscribe to Aquari</CardTitle>
            <CardDescription className="text-gray-600">
              You are now signed in with Privy. You can manage your subscriptions here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm font-medium text-gray-800">Connected as:</p>
              <p className="text-sm text-gray-600">{getUserIdentifier()}</p>
              <p className="text-sm text-gray-600">{getUserAddress()}</p>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-gray-900">Buy Now</CardTitle>
              <CardDescription className="text-gray-600">Start your purchase today.</CardDescription>
            </CardHeader>
            <CardFooter>
            <Button
              onClick={() => window.open(`https://buy.onramper.com/?apiKey=pk_prod_01GZXWJF7DNX8FSP2HK7W0KT53&onlyCryptos=usdc_arbitrum&mode=buy&onlyOnramps=guardarian&networkWallets=arbitrum:${connectedWallet || ''}&defaultFiat=usd&defaultAmount=55&defaultPaymentMethod=debitcard#`, '_blank', 'noopener,noreferrer')}
              className="w-full bg-gradient-to-r from-[#2c7a7b] to-[#285e61] hover:from-[#3b8a8c] hover:to-[#2d6e71] text-white border-none"
                >
              Purchase USDC Using Debit Card
            </Button>
            </CardFooter>
          </Card>
          
          {/* <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-gray-900">Transactions</CardTitle>
              <CardDescription className="text-gray-600">View your recent transaction history.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                className="w-full bg-gradient-to-r from-[#2c7a7b] to-[#285e61] hover:from-[#3b8a8c] hover:to-[#2d6e71] text-white border-none"
              >
                View History
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-gray-900">DApp Settings</CardTitle>
              <CardDescription className="text-gray-600">Customize your app preferences.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                className="w-full bg-gradient-to-r from-[#2c7a7b] to-[#285e61] hover:from-[#3b8a8c] hover:to-[#2d6e71] text-white border-none"
              >
                Manage Settings
              </Button>
            </CardFooter>
          </Card> */}
        </div>
      </main>
    </div>
  );
}