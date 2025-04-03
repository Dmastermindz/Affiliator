import { LucideProps } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <Card className={cn("shadow-lg", className)}>
      <CardContent className="flex flex-col items-start gap-5 p-7">
        <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
          <Icon size={28} className="text-primary" />
        </div>
        <div>
          <h4 className="mb-2 text-lg font-semibold text-foreground">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
