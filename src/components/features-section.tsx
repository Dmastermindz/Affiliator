import { Frame, Download, Globe, Sparkles, LayoutPanelLeft, Bot } from "lucide-react";

import { FeatureCard } from "@/components/feature-card";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-primary">Features</span>
        <h2 className="text-balance text-center font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          helping companies manage influencer marketing campaigns
        </h2>
      </div>
      <p className="max-w-xl text-balance text-center text-lg text-muted-foreground">
        Influencers, consumers, and brands unite on Affiliator.
      </p>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="1. Post an Affiliate Offer"
          description="Post an offer for influencers to market your product, and earn a comission"
          image="/images/_post-offer.png"
        />
        <FeatureCard
          title="2. Get a Custom Payments Page"
          description="Accept crypto or credit cards to pay for your product!"
          image="/images/_payments-page.png"
        />
        <FeatureCard
          title="3. Influencers Share Your Product"
          description="Influencers discover your Offer and can create a custom refferal URL to share"
          image="/images/_unique-urls.png"
        />
        <FeatureCard
          title="4. Track User Purchases"
          description="Funds are sent to your wallet after each user's purchase, instantly"
          image="/images/_earnings.png"
        />
        <FeatureCard
          title="5. Pay 100s of Affiliates in 1 Click"
          description="Pay out Affiliates with one-click payments on Arbitrum "
          image="/images/_one-click-payment.png"
        />
        <FeatureCard
          title="6. Track Your Revenue"
          description="View aggregates and see how your Affiliates are performing!"
          image="/images/_track-earnings.png"
        />
      </div>
    </section>
  );
}
