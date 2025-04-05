import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60">
          <span className="text-sm text-secondary-foreground">Connect With Top Influencers</span>
          <ArrowRight size={16} />
        </div>
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-left">
          affiliate marketing made easy. <a className="italic text-blue-600">no cap!</a>
        </h1>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left">
          {" "}
          Launch affiliate marketing campaigns. Influencers share refferal links. Pay-out affiliates
          in one click with crypto.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
            <Link href="#">Register as an Influencer</Link>
          </Button>
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="#">Post an Affiliate Offer</Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/affiliator-header.png"
          alt="SaaS Dashboard"
          width={1000}
          height={698}
          priority
          className="rounded-xl"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
