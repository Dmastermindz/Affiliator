"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden h-screen w-64 flex-col border-r border-border bg-sidebar p-6 text-sidebar-foreground lg:flex">
        <div className="mb-8 flex items-center gap-2">
          <Image
            src="/images/affiliator-logo.png"
            alt="Affiliator Logo"
            width={24}
            height={24}
            className="text-primary"
          />
          <h1 className="font-heading text-lg font-bold">Affiliator</h1>
        </div>

        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className={`flex items-center rounded-lg px-4 py-2 transition-colors ${
              isActive("/dashboard")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-sidebar-foreground"
            }`}
          >
            <LayoutDashboard className="mr-3 size-4" />
            <span className="font-medium">Affiliate Revenue</span>
          </Link>

          <Link
            href="/dashboard/affiliate-offers"
            className={`flex items-center rounded-lg px-4 py-2 transition-colors ${
              isActive("/dashboard/affiliate-offers")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-sidebar-foreground"
            }`}
          >
            <BarChart className="mr-3 size-4" />
            <span className="font-medium">Affiliate Offers</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="border-b border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {isActive("/dashboard") ? "Affiliate Revenue" : "Affiliate Offers"}
            </h2>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="rounded-full bg-secondary p-2 text-secondary-foreground hover:bg-secondary/80"
              >
                Home
              </Link>
            </div>
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
