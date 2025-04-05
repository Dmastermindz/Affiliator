import Link from "next/link";
import { Youtube } from "lucide-react";

import { NavItem2 } from "@/components/nav-item2";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { MobileNavItem2 } from "@/components/mobile-nav-item2";
import Image from "next/image";

export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/affiliator-blue-logo.png"
          alt="Affiliator Logo"
          width={24}
          height={24}
          className="text-primary"
        />
        <span className="font-heading text-xl font-bold">Affiliator</span>
      </Link>
      <div className="flex items-center gap-10">
        <nav className="hidden items-center justify-end gap-10 md:flex">
          <NavItem2 label="I'm an Organization" href="/dashboard" />
          <NavItem2 label="I'm an Influencer" href="/dashboard-influencer" />
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="destructive" className="flex items-center gap-2" asChild>
            <Link href="/youtube-video">
              <Youtube className="h-5 w-5" />
              Watch the Demo
            </Link>
          </Button>
        </div>
      </div>
      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <MobileNavItem2 label="I'm an Organization" href="/dashboard" />
            <MobileNavItem2 label="I'm an Influencer" href="/dashboard-influencer" />
            <Button variant="destructive" className="flex items-center gap-2" asChild>
              <Link href="/youtube-video">
                <Youtube className="h-5 w-5" />
                Watch the Demo
              </Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard" className="cursor-pointer">
                Create an Affiliate Offer
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
