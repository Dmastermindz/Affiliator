"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePrivy } from '@privy-io/react-auth';
import { useWallets } from '@privy-io/react-auth';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import Logo from "../../../public/images/AquariTestLogo.svg"

export default function AffiliateLandingPage() {
  const { login, ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const [isLoading, setIsLoading] = useState(false);


  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await login();
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left section - Product info and logo */}
      <div className="w-full md:w-1/2 lg:w-2/5 bg-gradient-to-br from-[#021019] to-[#0a192f] text-white p-6 md:p-8 lg:p-12 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="mb-8 md:mb-12 flex gap-[7px] items-center">
          <Image
                      src="/images/logo.svg"
                      alt="Aquari Logo"
                      width={39}
                      height={24}
                      className="text-primary mt-[-5px]"
                    />
            <Image
                      src="/images/AquariTestLogo.svg"
                      alt="Aquari Logo"
                      width={124}
                      height={48}
                      className="text-primary"
                    />

          </div>
          
          {/* Product info */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Help Make Earth Cleaner</h2>
            <p className="text-lg md:text-xl opacity-90">
              Join a global movement where doing good for the planet pays. Turn environmental action into real rewards.
            </p>
            
            <div className="py-4 md:py-6">
              <div className="flex items-start md:items-center space-x-3 md:space-x-4 mb-6">
                <div className="bg-[#2c7a7b] p-2 md:p-3 rounded-full shrink-0 mt-1 md:mt-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg">Secure Impact Verification</h3>
                  <p className="opacity-80 text-sm md:text-base">All cleanup activities are verified on the blockchain</p>
                </div>
              </div>
              
              <div className="flex items-start md:items-center space-x-3 md:space-x-4 mb-6">
                <div className="bg-[#2c7a7b] p-2 md:p-3 rounded-full shrink-0 mt-1 md:mt-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg">Fast Rewards</h3>
                  <p className="opacity-80 text-sm md:text-base">Get paid in Aquari tokens for your environmental work</p>
                </div>
              </div>
              
              <div className="flex items-start md:items-center space-x-3 md:space-x-4">
                <div className="bg-[#2c7a7b] p-2 md:p-3 rounded-full shrink-0 mt-1 md:mt-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg">Community Building</h3>
                  <p className="opacity-80 text-sm md:text-base">Connect with like-minded people making real change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action - Hidden on small screens, shown on larger screens */}
        <div className="mt-6 md:mt-8 hidden md:block">
          <p className="opacity-80 mb-3 md:mb-4 text-sm md:text-base">Already part of our community?</p>
          <Button 
            asChild 
            className="w-full md:w-auto bg-gradient-to-r from-[#2c7a7b] to-[#285e61] text-white hover:from-[#3b8a8c] hover:to-[#2d6e71] border-none"
          >
            <Link href="https://aquari.org/story">
              Learn More About Our Mission
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Right section - Sign-in */}
      <div className="w-full md:w-1/2 lg:w-3/5 bg-[#fafafa] flex items-center justify-center p-6 md:p-8 lg:p-12">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="text-center space-y-1 px-4 md:px-6">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">Take Action</CardTitle>
              <CardDescription className="text-gray-600">
                Sign in and contribute to solving waste management problems worldwide
              </CardDescription>
            </CardHeader>
            
            <CardContent className="px-4 md:px-6">
              {/* Privy Login (Embedded, not popup) */}
              <Card className="border border-gray-200">
                {ready ? (
                  authenticated ? (
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                          You're already signed in! 
                        </div>
                        <Button 
                          asChild 
                          className="w-full bg-gradient-to-r from-[#2c7a7b] to-[#285e61] text-white hover:from-[#3b8a8c] hover:to-[#2d6e71]"
                        >
                          <Link href="/customer-flow1">
                            Purchase Subscription
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  ) : (
                    <CardContent className="pt-6 space-y-6">
                      <div className="space-y-4">
                        <Button
                          onClick={handleLogin}
                          disabled={isLoading}
                          className="w-full bg-gradient-to-r from-[#2c7a7b] to-[#285e61] text-white hover:from-[#3b8a8c] hover:to-[#2d6e71]"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Connecting...
                            </>
                          ) : (
                            "Log In"
                          )}
                        </Button>
                        
                      
                        
                       
                      </div>
                      
                      <div className="text-xs md:text-sm text-center text-muted-foreground">
                        By signing in, you agree to our{' '}
                        <Link href="/terms" className="underline underline-offset-4 hover:text-[#2c7a7b]">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="underline underline-offset-4 hover:text-[#2c7a7b]">
                          Privacy Policy
                        </Link>
                      </div>
                    </CardContent>
                  )
                ) : (
                  <CardContent className="pt-6 flex justify-center py-8">
                    <Loader2 className="h-8 w-8 md:h-12 md:w-12 animate-spin text-[#2c7a7b]" />
                  </CardContent>
                )}
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Call to Action - Shown only on small screens at the bottom */}
      <div className="md:hidden w-full bg-gradient-to-br from-[#021019] to-[#0a192f] text-white p-6">
        <p className="opacity-80 mb-3 text-sm">Already part of our community?</p>
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-[#2c7a7b] to-[#285e61] text-white hover:from-[#3b8a8c] hover:to-[#2d6e71]"
        >
          <Link href="https://aquari.org/story">
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  );
}