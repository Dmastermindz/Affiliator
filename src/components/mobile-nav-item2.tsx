import Link from "next/link";
import { cn } from "@/lib/utils";

interface MobileNavItem2Props {
  label: string;
  href: string;
  className?: string;
}

export function MobileNavItem2({ label, href, className }: MobileNavItem2Props) {
  return (
    <Link
      href={href}
      className={cn(
        "flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {label}
    </Link>
  );
}
