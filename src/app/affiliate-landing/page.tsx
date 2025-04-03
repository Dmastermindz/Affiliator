"use client";

import { useState } from 'react';
import Image from 'next/image';
import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";

export default function AffiliateLandingPage() {
  const { login, ready, authenticated } = usePrivy();
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
          <div className="mb-8 md:mb-12 flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold">AQUARI</h1>
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
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">Welcome to Aquari</CardTitle>
              <CardDescription className="text-gray-600">
                Sign in to access your environmental impact dashboard
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
                          <Link href="/dashboard">
                            Go to Dashboard
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
                            "Connect Wallet with Privy"
                          )}
                        </Button>
                        
                        <div className="relative flex items-center justify-center">
                          <Separator className="w-full" />
                          <span className="relative bg-white px-2 text-xs text-muted-foreground">or continue with</span>
                          <Separator className="w-full" />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 md:gap-3">
                          <Button variant="outline" size="icon" className="h-10">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.35 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                              <path d="M12 23C14.97 23 17.46 22.01 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.13 18.63 6.72 16.69 5.82 14.09H2.12V16.95C3.92 20.53 7.66 23 12 23Z" fill="#34A853"/>
                              <path d="M5.82 14.09C5.58 13.43 5.44 12.72 5.44 12C5.44 11.28 5.58 10.57 5.82 9.91V7.05H2.12C1.4 8.53 1 10.22 1 12C1 13.78 1.4 15.47 2.12 16.95L5.82 14.09Z" fill="#FBBC05"/>
                              <path d="M12 5.37C13.62 5.37 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.66 1 3.92 3.47 2.12 7.05L5.82 9.91C6.72 7.31 9.13 5.37 12 5.37Z" fill="#EA4335"/>
                            </svg>
                          </Button>
                          <Button variant="outline" size="icon" className="h-10">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 0C4.477 0 0 4.477 0 10C0 14.418 2.865 18.166 6.839 19.489C7.339 19.574 7.521 19.273 7.521 19.008C7.521 18.769 7.513 18.135 7.509 17.303C4.725 17.899 4.139 15.966 4.139 15.966C3.684 14.812 3.029 14.513 3.029 14.513C2.121 13.895 3.098 13.907 3.098 13.907C4.101 13.977 4.629 14.927 4.629 14.927C5.521 16.452 6.969 16.014 7.541 15.758C7.629 15.111 7.889 14.673 8.175 14.419C5.955 14.162 3.62 13.304 3.62 9.474C3.62 8.384 4.01 7.494 4.649 6.799C4.551 6.545 4.207 5.528 4.747 4.151C4.747 4.151 5.587 3.881 7.499 5.177C8.293 4.956 9.152 4.845 10.003 4.841C10.853 4.845 11.707 4.956 12.503 5.177C14.413 3.881 15.251 4.151 15.251 4.151C15.793 5.528 15.449 6.545 15.351 6.799C15.991 7.494 16.379 8.384 16.379 9.474C16.379 13.315 14.04 14.158 11.813 14.409C12.172 14.723 12.491 15.339 12.491 16.279C12.491 17.614 12.479 18.681 12.479 19.008C12.479 19.276 12.659 19.579 13.167 19.488C17.137 18.161 20 14.416 20 10C20 4.477 15.523 0 10 0Z" fill="#000000"/>
                            </svg>
                          </Button>
                          <Button variant="outline" size="icon" className="h-10">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.6001 24H5.4001C2.4241 24 0.000102997 21.5761 0.000102997 18.6001V5.4001C0.000102997 2.4241 2.4241 0.000102997 5.4001 0.000102997H18.6001C21.5761 0.000102997 24 2.4241 24 5.4001V18.6001C24 21.5761 21.5761 24 18.6001 24Z" fill="#0077B5"/>
                              <path d="M7.1641 19.2001H4.1401V9.8401H7.1641V19.2001ZM5.6401 8.4241C4.6561 8.4241 3.8401 7.6081 3.8401 6.6001C3.8401 5.6161 4.6561 4.8001 5.6401 4.8001C6.6241 4.8001 7.4401 5.6161 7.4401 6.6001C7.4401 7.6081 6.6241 8.4241 5.6401 8.4241ZM19.2001 19.2001H16.1761V14.4001C16.1761 13.2001 16.1521 11.6401 14.4721 11.6401C12.7921 11.6401 12.5401 13.0081 12.5401 14.4001V19.2001H9.5161V9.8401H12.4001V11.2801H12.4481C12.8641 10.4401 13.9441 9.6001 15.5761 9.6001C18.6481 9.6001 19.2001 11.8001 19.2001 14.6401V19.2001Z" fill="white"/>
                            </svg>
                          </Button>
                        </div>
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