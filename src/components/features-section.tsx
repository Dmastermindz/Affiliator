import { Frame, Download, Globe, Sparkles, LayoutPanelLeft, Bot } from "lucide-react";

import { FeatureCard } from "@/components/feature-card";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-primary">Features</span>
        <h2 className="text-balance text-center font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Build fast and stay flexible
        </h2>
      </div>
      <p className="max-w-xl text-balance text-center text-lg text-muted-foreground">
        Reweb brings the best of two worlds together: the speed of development of no-code tools, and
        the flexibility of code.
      </p>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Visual builder"
          description="Edit HTML, Tailwind &amp; React components with a visual builder and see your changes in real-time."
          icon={Frame}
        />
        <FeatureCard
          title="Code Export"
          description="Once you're done building, export your project to a fully functional Next.js &amp; Tailwind app."
          icon={Download}
        />
        <FeatureCard
          title="No lock-in"
          description="You own the code. Customize with full flexibility and host it anywhere you want."
          icon={Globe}
        />
        <FeatureCard
          title="Built on modern tech"
          description="Reweb works with the most popular frontend technologies like Next.js, Tailwind CSS and shadcn/ui."
          icon={Sparkles}
        />
        <FeatureCard
          title="Pre-made templates"
          description="Get started quickly with pre-made templates and sections to build your landing page fast."
          icon={LayoutPanelLeft}
        />
        <FeatureCard
          title="AI Assistant"
          description="Generate and customize components and themes from a promp, image or Figma design."
          icon={Bot}
        />
      </div>
    </section>
  );
}
