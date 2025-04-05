"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

interface OfferCard {
  id: string;
  title: string;
  description: string;
  commission: string;
  category: string;
}

export default function AffiliateOffersPage() {
  const router = useRouter();
  const [offers, setOffers] = useState<OfferCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOffers() {
      try {
        const { data, error } = await supabase
          .from("affiliate_offers")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setOffers(data || []);
      } catch (error) {
        console.error("Error fetching offers:", error);
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
        <div className="text-center py-8">Loading offers...</div>
      ) : offers.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No offers found. Create your first offer to get started!
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <Card key={offer.id} className="flex flex-col p-6 transition-shadow hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold">{offer.title}</h3>
              <p className="mb-4 grow text-muted-foreground">{offer.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-primary">{offer.commission}</span>
                <span className="rounded-full bg-primary/10 px-2 py-1 text-sm text-primary">
                  {offer.category}
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
