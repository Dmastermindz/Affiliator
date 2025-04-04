import { LucideProps } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  progress: number;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  previousPeriodIncrease: string;
  className?: string;
}

export function MetricCard({
  label,
  value,
  progress,
  icon: Icon,
  previousPeriodIncrease,
  className,
}: MetricCardProps) {
  return (
    <Card className={cn("rounded-lg border bg-card p-5 text-card-foreground shadow-sm", className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <Icon size={16} className="text-primary" />
      </div>
      <div className="flex items-end gap-2">
        <h3 className="mt-3 text-2xl font-semibold leading-none tracking-tight">{value}</h3>
        <p className="mt-2 text-xs text-muted-foreground">
          <span className="mr-1">{previousPeriodIncrease}</span>
        </p>
      </div>
      <Progress value={progress} className="mt-4 h-2.5 bg-accent" />
    </Card>
  );
}
