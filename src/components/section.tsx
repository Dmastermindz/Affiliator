import Image from "next/image";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export function Section() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex w-full flex-1 flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-balance font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Settings
            </h2>
          </div>
          <div className="grid gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="size-20">
                  <Image alt="Profile picture" src="/images/avatar8.png" width={80} height={80} />
                </Avatar>
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-semibold">Profile Picture</h3>
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary">
                      Change
                    </Button>
                    <Button size="sm" variant="outline">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Display Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-6">
              <h3 className="font-heading text-lg font-semibold">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive email about your account activity
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-semibold text-destructive">Danger Zone</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-destructive/20 p-4">
                  <div>
                    <h4 className="font-medium text-destructive">Delete Account</h4>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all data
                    </p>
                  </div>
                  <Button size="sm" variant="destructive">
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
