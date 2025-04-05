import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export function FeatureCard({ title, description, image, className }: FeatureCardProps) {
  return (
    <Card className={cn("shadow-lg", className)}>
      <CardContent className="flex flex-col items-start gap-5 p-7">
        <div className="inline-flex items-center justify-center p-2">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="text-primary rounded-lg"
          />
        </div>
        <div>
          <h4 className="mb-2 text-lg font-semibold text-foreground">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
