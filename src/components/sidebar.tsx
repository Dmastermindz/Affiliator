import { Badge, LayoutDashboard, Settings, BarChart, RefreshCcw, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "hidden h-screen w-64 flex-col border-r bg-sidebar p-6 text-sidebar-foreground lg:flex",
        className,
      )}
    >
      <div className="mb-8 flex items-center gap-2 px-2">
        <Image
          src="/images/affiliator-blue-logo.png"
          alt="Affiliator Logo"
          width={24}
          height={50}
          className="text-primary"
        />
        <h1 className="font-heading text-lg font-bold">Affiliator</h1>
      </div>
      <nav className="space-y-2">
        <Link
          href="/"
          className="flex items-center rounded-lg bg-primary/10 px-4 py-2 text-primary"
        >
          <LayoutDashboard className="mr-3 size-4" />
          <span className="font-medium">Affiliate Revenue</span>
        </Link>
        <Link
          href="#"
          className="flex items-center px-4 py-2 text-muted-foreground hover:text-sidebar-foreground"
        >
          <BarChart className="mr-3 size-4" />
          <span className="font-medium">Affiliate Offers</span>
        </Link>
      </nav>
    </aside>
  );
}
