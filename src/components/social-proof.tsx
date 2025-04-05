import Image from "next/image";
import { cn } from "@/lib/utils";

interface SocialProofLogoProps {
  image: string;
  description: string;
  className?: string;
}

export function SocialProofLogo({ image, description, className }: SocialProofLogoProps) {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="relative h-11 w-full sm:h-10">
        <Image alt="Company Logo" src={image} fill className="object-contain" />
      </div>
      <p className="text-center text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-primary">Our Technology</span>
        <h2 className="text-balance text-center font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Built With The Best
        </h2>
      </div>
      <div className="grid w-full grid-cols-2 items-center justify-center gap-8 sm:grid-cols-3 lg:grid-cols-5">
        <SocialProofLogo
          image="/images/arbitrum-logo.webp"
          description="for fast and cheap payments - our multi-pay feature ate"
        />
        <SocialProofLogo
          image="/images/request-logo.png"
          description="for bussin reciepts so influencers can do their taxes easy"
        />
        <SocialProofLogo image="/images/next-logo.png" description="for our cracked AF frontend" />
        <SocialProofLogo
          image="/images/sql.png"
          description="jk we just used supabase like normal people"
        />
        <SocialProofLogo
          image="/images/privy.png"
          description="for lit user onboarding and fiat payments"
        />
      </div>
    </section>
  );
}
