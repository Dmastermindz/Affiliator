"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowUpRight, Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { CreateOfferModal } from "@/components/create-offer-modal";

interface OfferCard {
  id: string;
  companyName: string;
  title: string;
  description: string;
  commission: string;
  category: string;
  requirements: string[];
  payoutFrequency: string;
  affiliateUrl: string;
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
    affiliateUrl: "https://affiliator.xyz/offer/techcorp-saas",
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
    affiliateUrl: "https://affiliator.xyz/offer/fitlife-program",
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
    affiliateUrl: "https://affiliator.xyz/offer/edutech-courses",
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
    affiliateUrl: "https://affiliator.xyz/offer/fashion-forward-summer",
  },
  // Add more mock offers as needed
];

export default function AffiliateOffersPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Affiliate Offers Page</h1>
      <button
        onClick={() => {
          console.log("Button clicked!");
          setCount(count + 1);
        }}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Test Button Count: {count}
      </button>
    </div>
  );
}
