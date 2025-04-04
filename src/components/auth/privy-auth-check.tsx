"use client";

import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import { Loader2 } from "lucide-react";

interface PrivyAuthCheckProps {
  children: ReactNode;
  redirectTo?: string;
  requireAuth?: boolean;
}

/**
 * A component that handles Privy authentication state checks
 * @param children Content to render when authentication check passes
 * @param redirectTo Where to redirect if auth check fails
 * @param requireAuth Whether authentication is required (default: true)
 */
export function PrivyAuthCheck({ 
  children, 
  redirectTo = '/signup',
  requireAuth = true
}: PrivyAuthCheckProps) {
  const { ready, authenticated } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (ready) {
      // If auth is required but user isn't authenticated, redirect
      if (requireAuth && !authenticated) {
        router.push(redirectTo);
      }
      
      // If auth is NOT required but user IS authenticated (like on login page),
      // You could add logic here to redirect to dashboard
    }
  }, [ready, authenticated, requireAuth, redirectTo, router]);

  // Still loading
  if (!ready) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  // Auth check failed
  if (requireAuth && !authenticated) {
    return null; // Will redirect in useEffect
  }

  // Auth check passed, render children
  return <>{children}</>;
}