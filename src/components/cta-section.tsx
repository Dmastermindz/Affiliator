import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-10">
      <h2 className="max-w-xl text-balance text-center font-heading text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-tight">
        start your first affiliate campaign today
      </h2>
      <p className="max-w-lg text-balance text-center text-lg text-muted-foreground">
        Join Affiliator and learn why influencer marketing makes teams millions.
      </p>
      <Button size="lg" asChild variant="default" className="cursor-pointer border-border">
        <Link href="#">Get Started</Link>
      </Button>
    </section>
  );
}
