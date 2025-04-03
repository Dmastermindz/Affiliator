"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface OfferCard {
  id: string;
  title: string;
  description: string;
  commission: string;
  category: string;
}

const mockOffers: OfferCard[] = [
  {
    id: "1",
    title: "Premium SaaS Promotion",
    description: "Promote our enterprise software solution with high conversion rates",
    commission: "30% per sale",
    category: "Software",
  },
  {
    id: "2",
    title: "Fitness Program Launch",
    description: "New fitness program looking for health & wellness influencers",
    commission: "$50 per signup",
    category: "Health",
  },
  // Add more mock offers as needed
];

export default function AffiliateOffersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">My Affiliate Offers</h2>
        <Button size="sm" className="gap-1">
          <Plus className="size-4" />
          Create New Affiliate Offer
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockOffers.map((offer) => (
          <Card key={offer.id} className="flex flex-col p-6 transition-shadow hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold">{offer.title}</h3>
            <p className="mb-4 grow text-muted-foreground">{offer.description}</p>
            <div className="flex items-center justify-between">
              <span className="font-medium text-primary">{offer.commission}</span>
              <span className="rounded-full bg-primary/10 px-2 py-1 text-sm text-primary">
                {offer.category}
              </span>
            </div>
            <Button className="mt-4 w-full" variant="outline">
              View Details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
