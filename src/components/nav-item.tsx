import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  label: string;
  href: string;
  className?: string;
}

export function NavItem({ label, href, className }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex cursor-pointer items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        className,
      )}
    >
      {label}
    </Link>
  );
}
