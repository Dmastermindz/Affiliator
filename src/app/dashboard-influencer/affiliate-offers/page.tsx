"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowUpRight, Copy, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { CreateOfferModal } from "@/components/create-offer-modal";
import { supabase } from "@/lib/supabaseClient";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

interface OfferCard {
  offer_id: string;
  offer_name: string;
  details: string;
  offer_percent: string;
  keywords: string;
  company_name: string;
  requirements: string[];
  payout_frequency: string;
  affiliate_url: string;
}

export default function AffiliateOffersPage() {
  const [offers, setOffers] = useState<OfferCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [showTestModal, setShowTestModal] = useState(false);
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  useEffect(() => {
    async function fetchOffers() {
      try {
        const { data, error } = await supabase.from("affiliate_offers").select("*");

        if (error) {
          console.error("Supabase error:", error);
          throw error;
        }

        setOffers(data || []);
      } catch (error) {
        console.error("Error in fetchOffers:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOffers();
  }, []);

  const copyToClipboard = (offerId: string) => {
    navigator.clipboard.writeText("https://affiliator.xyz/affiliate-landing");
    setCopiedStates((prev) => ({ ...prev, [offerId]: true }));
    toast({
      title: "Copied!",
      description: "Affiliate link copied to clipboard",
    });
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [offerId]: false }));
    }, 2000);
  };

  const generateRandomUrl = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `https://affiliator.xyz/${result}`;
  };

  const handleTestClick = () => {
    setShowTestModal(true);
  };

  if (loading) {
    return <div className="py-8 text-center">Loading offers...</div>;
  }

  return (
    <div className="space-y-6">
      <Toaster />
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-semibold">Available Affiliate Offers</h2>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search offers..."
              className="w-full pl-8 sm:w-[250px]"
            />
          </div>
          <Select className="w-full sm:w-[180px]">
            <option value="">Category</option>
            <option value="all">All Categories</option>
            <option value="software">Software</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="fashion">Fashion</option>
          </Select>
        </div>
      </div>

      {showTestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/80" onClick={() => setShowTestModal(false)} />
          <div className="relative z-50 w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg">
            <h2 className="text-lg font-semibold">Test Modal</h2>
            <p>This is a test modal from the direct button</p>
            <button
              onClick={() => setShowTestModal(false)}
              className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <Card
            key={offer.offer_id}
            className="flex flex-col p-6 transition-shadow hover:shadow-lg"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{offer.offer_name}</h3>
              <span className="rounded-full bg-primary/10 px-2 py-1 text-sm text-primary">
                {offer.keywords}
              </span>
            </div>
            <p className="mb-1 text-sm text-muted-foreground">{offer.company_name}</p>
            <p className="mb-4 grow text-muted-foreground">{offer.details}</p>

            <div className="mb-4">
              <h4 className="mb-2 font-medium"></h4>
              <ul className="list-inside list-disc text-sm text-muted-foreground">
                {offer.requirements?.map((req, index) => <li key={index}>{req}</li>)}
              </ul>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className="text-sm text-muted-foreground">Commission:</span>
                <p className="font-medium text-primary">{offer.offer_percent}%</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Input type="text" value={generateRandomUrl()} readOnly className="flex-1" />
              <Button
                variant="outline"
                size="icon"
                onClick={() => copyToClipboard(offer.offer_id)}
                className={`shrink-0 transition-colors ${copiedStates[offer.offer_id] ? "bg-primary text-primary-foreground" : ""}`}
              >
                {copiedStates[offer.offer_id] ? (
                  <Check className="size-4" />
                ) : (
                  <Copy className="size-4" />
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
