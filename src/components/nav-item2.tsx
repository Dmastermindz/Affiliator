import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem2Props {
  label: string;
  href: string;
  className?: string;
}

export function NavItem2({ label, href, className }: NavItem2Props) {
  return (
    <Link
      href={href}
      className={cn(
        "flex cursor-pointer items-center font-medium text-muted-foreground transition-colors hover:text-foreground text-sm",
        className,
      )}
    >
      {label}
    </Link>
  );
}
