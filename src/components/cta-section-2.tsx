import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection2() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-6 rounded-xl bg-primary px-6 py-24 sm:gap-10">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-xl sm:leading-tight text-center text-primary-foreground">
          Affiliator for influencers
        </h2>
        <p className="max-w-xl text-lg text-primary-foreground/80 text-center">
          Explore affiliate offers from major brands in crypto. Earn tokens by sharing unique
          payments pages with your audience!
        </p>
        <Button size="lg" asChild variant="outline" className="cursor-pointer border-border">
          <Link href="#">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
