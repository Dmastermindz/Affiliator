import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection2() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-6 rounded-xl bg-primary px-6 py-24 sm:gap-10">
        <h2 className="max-w-xl text-balance text-center font-heading text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl sm:leading-tight">
          Affiliator for influencers
        </h2>
        <p className="max-w-xl text-center text-lg text-primary-foreground/80">
          Explore affiliate offers from major brands in crypto. Earn tokens by sharing unique
          payments pages with your audience!
        </p>
        <Button size="lg" asChild variant="outline" className="cursor-pointer border-border">
          <Link href="/dashboard-influencer">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
