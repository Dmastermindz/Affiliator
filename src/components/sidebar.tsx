import { Badge, LayoutDashboard, Settings, BarChart, RefreshCcw, Package } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "w-64 border-r p-6 flex-col hidden lg:flex text-sidebar-foreground bg-sidebar h-screen",
        className,
      )}
    >
      <div className="mb-8 flex items-center gap-2 px-2">
        <Badge size={24} className="text-primary fill-primary" />
        <h1 className="font-heading font-bold text-lg">Dashy</h1>
      </div>
      <nav className="space-y-2">
        <Link
          href="/"
          className="flex items-center rounded-lg bg-primary/10 px-4 py-2 text-primary"
        >
          <LayoutDashboard className="mr-3 h-4 w-4" />
          <span className="font-medium">Dashboard</span>
        </Link>
        <Link
          href="/settings"
          className="flex items-center px-4 py-2 text-muted-foreground hover:text-sidebar-foreground"
        >
          <Settings className="mr-3 h-4 w-4" />
          <span className="font-medium">Settings</span>
        </Link>
        <Link
          href="#"
          className="flex items-center px-4 py-2 text-muted-foreground hover:text-sidebar-foreground"
        >
          <BarChart className="mr-3 h-4 w-4" />
          <span className="font-medium">Analytics</span>
        </Link>
        <Link
          href="#"
          className="flex items-center justify-between px-4 py-2 text-muted-foreground hover:text-sidebar-foreground"
        >
          <div className="flex items-center">
            <RefreshCcw className="mr-3 h-4 w-4" />
            <span className="font-medium">Updates</span>
          </div>
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30">14</Badge>
        </Link>
        <Link
          href="#"
          className="flex items-center justify-between px-4 py-2 text-muted-foreground hover:text-sidebar-foreground"
        >
          <div className="flex items-center">
            <Package className="mr-3 h-4 w-4" />
            <span className="font-medium">Products</span>
          </div>
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30">14+</Badge>
        </Link>
      </nav>
      <Button className="mt-auto">Upgrade Plan</Button>
    </aside>
  );
}
