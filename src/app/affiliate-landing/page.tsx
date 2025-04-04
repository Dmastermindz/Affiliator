"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePrivy } from "@privy-io/react-auth";
import { useWallets } from "@privy-io/react-auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import Logo from "../../../public/images/AquariTestLogo.svg";

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
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left section - Product info and logo */}
      <div className="flex w-full flex-col justify-between bg-gradient-to-br from-[#021019] to-[#0a192f] p-6 text-white md:w-1/2 md:p-8 lg:w-2/5 lg:p-12">
        <div>
          {/* Logo */}
          <div className="mb-8 flex items-center gap-[7px] md:mb-12">
            <Image
              src="/images/logo.svg"
              alt="Aquari Logo"
              width={39}
              height={24}
              className="mt-[-5px] text-primary"
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
            <h2 className="text-3xl font-bold md:text-4xl">Help Make Earth Cleaner</h2>
            <p className="text-lg opacity-90 md:text-xl">
              Join a global movement where doing good for the planet pays. Turn environmental action
              into real rewards.
            </p>

            <div className="py-4 md:py-6">
              <div className="mb-6 flex items-start space-x-3 md:items-center md:space-x-4">
                <div className="mt-1 shrink-0 rounded-full bg-[#2c7a7b] p-2 md:mt-0 md:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 md:size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold md:text-lg">Secure Impact Verification</h3>
                  <p className="text-sm opacity-80 md:text-base">
                    All cleanup activities are verified on the blockchain
                  </p>
                </div>
              </div>

              <div className="mb-6 flex items-start space-x-3 md:items-center md:space-x-4">
                <div className="mt-1 shrink-0 rounded-full bg-[#2c7a7b] p-2 md:mt-0 md:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 md:size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold md:text-lg">Fast Rewards</h3>
                  <p className="text-sm opacity-80 md:text-base">
                    Get paid in Aquari tokens for your environmental work
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:items-center md:space-x-4">
                <div className="mt-1 shrink-0 rounded-full bg-[#2c7a7b] p-2 md:mt-0 md:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 md:size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold md:text-lg">Community Building</h3>
                  <p className="text-sm opacity-80 md:text-base">
                    Connect with like-minded people making real change
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Hidden on small screens, shown on larger screens */}
        <div className="mt-6 hidden md:mt-8 md:block">
          <p className="mb-3 text-sm opacity-80 md:mb-4 md:text-base">
            Already part of our community?
          </p>
          <Button
            asChild
            className="w-full border-none bg-gradient-to-r from-[#2c7a7b] to-[#285e61] text-white hover:from-[#3b8a8c] hover:to-[#2d6e71] md:w-auto"
          >
            <Link href="https://aquari.org/story">Learn More About Our Mission</Link>
          </Button>
        </div>
      </div>

      {/* Right section - Sign-in */}
      <div className="flex w-full items-center justify-center bg-[#fafafa] p-6 md:w-1/2 md:p-8 lg:w-3/5 lg:p-12">
        <div className="w-full max-w-md">
          <Card className="border-0 bg-transparent shadow-none">
            <CardHeader className="space-y-1 px-4 text-center md:px-6">
              <CardTitle className="text-2xl font-bold text-gray-900 md:text-3xl">
                Take Action
              </CardTitle>
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
                        <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-800">
                          You&apos;re already signed in!
                        </div>
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-[#2c7a7b] to-[#285e61] text-white hover:from-[#3b8a8c] hover:to-[#2d6e71]"
                        >
                          <Link href="/customer-flow1">Purchase Subscription</Link>
                        </Button>
                      </div>
                    </CardContent>
                  ) : (
                    <CardContent className="space-y-6 pt-6">
                      <div className="space-y-4">
                        <Button
                          onClick={handleLogin}
                          disabled={isLoading}
                          className="w-full bg-gradient-to-r from-[#2c7a7b] to-[#285e61] text-white hover:from-[#3b8a8c] hover:to-[#2d6e71]"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 size-4 animate-spin" />
                              Connecting...
                            </>
                          ) : (
                            "Log In"
                          )}
                        </Button>
                      </div>

                      <div className="text-center text-xs text-muted-foreground md:text-sm">
                        By signing in, you agree to our{" "}
                        <Link
                          href="/terms"
                          className="underline underline-offset-4 hover:text-[#2c7a7b]"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="underline underline-offset-4 hover:text-[#2c7a7b]"
                        >
                          Privacy Policy
                        </Link>
                      </div>
                    </CardContent>
                  )
                ) : (
                  <CardContent className="flex justify-center py-8 pt-6">
                    <Loader2 className="size-8 animate-spin text-[#2c7a7b] md:size-12" />
                  </CardContent>
                )}
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action - Shown only on small screens at the bottom */}
      <div className="w-full bg-gradient-to-br from-[#021019] to-[#0a192f] p-6 text-white md:hidden">
        <p className="mb-3 text-sm opacity-80">Already part of our community?</p>
        <Button
          asChild
          className="w-full bg-gradient-to-r from-[#2c7a7b] to-[#285e61] text-white hover:from-[#3b8a8c] hover:to-[#2d6e71]"
        >
          <Link href="https://aquari.org/story">Learn More</Link>
        </Button>
      </div>
    </div>
  );
}
