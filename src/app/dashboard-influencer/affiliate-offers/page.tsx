"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface OfferCard {
  id: string;
  companyName: string;
  title: string;
  description: string;
  commission: string;
  category: string;
  requirements: string[];
  payoutFrequency: string;
}

const mockOffers: OfferCard[] = [
  {
    id: "1",
    companyName: "TechCorp Inc.",
    title: "Premium SaaS Promotion",
    description: "Promote our enterprise software solution with high conversion rates",
    commission: "30% per sale",
    category: "Software",
    requirements: ["10K+ followers", "Tech niche", "Engagement rate > 3%"],
    payoutFrequency: "Monthly",
  },
  {
    id: "2",
    companyName: "FitLife",
    title: "Fitness Program Launch",
    description: "New fitness program looking for health & wellness influencers",
    commission: "$50 per signup",
    category: "Health",
    requirements: ["5K+ followers", "Fitness/wellness content", "Active audience"],
    payoutFrequency: "Bi-weekly",
  },
  {
    id: "3",
    companyName: "EduTech Solutions",
    title: "Online Course Promotion",
    description: "Promote our premium online courses in various subjects",
    commission: "25% per enrollment",
    category: "Education",
    requirements: ["15K+ followers", "Education niche", "Student audience"],
    payoutFrequency: "Monthly",
  },
  {
    id: "4",
    companyName: "Fashion Forward",
    title: "Summer Collection Launch",
    description: "Promote our new summer fashion collection",
    commission: "20% per purchase",
    category: "Fashion",
    requirements: ["20K+ followers", "Fashion/lifestyle content", "High engagement"],
    payoutFrequency: "Monthly",
  },
  // Add more mock offers as needed
];

export default function AffiliateOffersPage() {
  return (
    <div className="space-y-6">
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockOffers.map((offer) => (
          <Card key={offer.id} className="flex flex-col p-6 transition-shadow hover:shadow-lg">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{offer.title}</h3>
              <span className="rounded-full bg-primary/10 px-2 py-1 text-sm text-primary">
                {offer.category}
              </span>
            </div>
            <p className="mb-1 text-sm text-muted-foreground">by {offer.companyName}</p>
            <p className="mb-4 grow text-muted-foreground">{offer.description}</p>

            <div className="mb-4">
              <h4 className="mb-2 font-medium">Requirements:</h4>
              <ul className="list-inside list-disc text-sm text-muted-foreground">
                {offer.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className="text-sm text-muted-foreground">Commission:</span>
                <p className="font-medium text-primary">{offer.commission}</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-muted-foreground">Payout:</span>
                <p className="font-medium">{offer.payoutFrequency}</p>
              </div>
            </div>

            <Button className="w-full gap-1">
              Generate Affiliate URL
              <ArrowUpRight className="size-4" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
