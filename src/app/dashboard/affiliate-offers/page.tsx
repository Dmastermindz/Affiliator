"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

interface OfferCard {
  offer_id: string;
  offer_name: string;
  details: string;
  offer_percent: string;
  keywords: string;
}

export default function AffiliateOffersPage() {
  const router = useRouter();
  const [offers, setOffers] = useState<OfferCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOffers() {
      try {
        console.log("Starting to fetch offers...");
        const { data, error } = await supabase.from("affiliate_offers").select("*");

        console.log("Supabase response:", { data, error });

        if (error) {
          console.error("Supabase error:", error);
          throw error;
        }

        console.log("Setting offers:", data);
        setOffers(data || []);
      } catch (error) {
        console.error("Error in fetchOffers:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOffers();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">My Affiliate Offers</h2>
        <Button
          size="sm"
          className="gap-1"
          onClick={() => router.push("/dashboard/affiliate-offers/new")}
        >
          <Plus className="size-4" />
          Create New Affiliate Offer
        </Button>
      </div>

      {loading ? (
        <div className="py-8 text-center">Loading offers...</div>
      ) : offers.length === 0 ? (
        <div className="py-8 text-center text-muted-foreground">
          No offers found. Create your first offer to get started!
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <Card
              key={offer.offer_id}
              className="flex flex-col p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-semibold">{offer.offer_name}</h3>
              <p className="mb-4 grow text-muted-foreground">{offer.details}</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-primary">{offer.offer_percent}% Commission</span>
                <span className="rounded-full bg-primary/10 px-2 py-1 text-sm text-primary">
                  {offer.keywords}
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
