"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download, Calendar, Receipt } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface Lead {
  id: string;
  companyName: string;
  user: string;
  date: string;
  status: "paid" | "unpaid";
  value: number;
  commission: number;
  affiliateCode: string;
  paid: boolean;
}

const mockLeads: Lead[] = [
  {
    id: "1",
    companyName: "TechCorp Inc.",
    user: "alex.sear@spml.com",
    date: "2025/01/1",
    status: "paid",
    value: 18.99,
    commission: 5.7,
    affiliateCode: "BT92X",
    paid: true,
  },
  {
    id: "2",
    companyName: "FitLife",
    user: "john.doe@gmail.com",
    date: "2025/17/1",
    status: "unpaid",
    value: 165.99,
    commission: 33.2,
    affiliateCode: "VH54P",
    paid: false,
  },
  {
    id: "3",
    companyName: "EduTech Solutions",
    user: "sarah.smith@example.com",
    date: "2025/15/1",
    status: "paid",
    value: 49.99,
    commission: 12.5,
    affiliateCode: "ED78R",
    paid: true,
  },
  {
    id: "4",
    companyName: "Fashion Forward",
    user: "mike.johnson@example.com",
    date: "2025/10/1",
    status: "unpaid",
    value: 0,
    commission: 0,
    affiliateCode: "FF23K",
    paid: false,
  },
  {
    id: "5",
    companyName: "TechCorp Inc.",
    user: "emma.wilson@example.com",
    date: "2025/05/1",
    status: "unpaid",
    value: 99.99,
    commission: 30.0,
    affiliateCode: "BT92X",
    paid: false,
  },
  // Add more mock leads as needed
];

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-semibold">My Leads</h2>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search leads..."
              className="w-full pl-8 sm:w-[250px]"
            />
          </div>
          <Select className="w-full sm:w-[180px]">
            <option value="">Status</option>
            <option value="all">All Status</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </Select>
          <Button variant="outline" size="icon" className="shrink-0">
            <Calendar className="size-4" />
          </Button>
          <Button variant="outline" size="icon" className="shrink-0">
            <Download className="size-4" />
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="p-6">
          <h3 className="mb-2 text-sm text-muted-foreground">Total Leads</h3>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">1,240</span>
            <span className="text-primary">+10%</span>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2 text-sm text-muted-foreground">Conversion Rate</h3>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">8.5%</span>
            <span className="text-primary">+14%</span>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2 text-sm text-muted-foreground">Total Earnings</h3>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">$5,231.81</span>
            <span className="text-primary">+22%</span>
          </div>
        </Card>
      </div>

      {/* Leads Table */}
      <Card>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 text-muted-foreground">Affiliate Offer</th>
                  <th className="pb-3 text-muted-foreground">User</th>
                  <th className="pb-3 text-muted-foreground">Date</th>
                  <th className="pb-3 text-muted-foreground">Status</th>
                  <th className="pb-3 text-right text-muted-foreground">Value</th>
                  <th className="pb-3 text-right text-muted-foreground">Your Commission</th>
                  <th className="pb-3 text-center text-muted-foreground">
                    Request Network Receipt
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-border last:border-0">
                    <td className="py-3">{lead.companyName}</td>
                    <td className="py-3">{lead.user}</td>
                    <td className="py-3">{lead.date}</td>
                    <td className="py-3">
                      {lead.status === "paid" ? (
                        <span className="rounded-full bg-green-500 px-2 py-1 text-sm text-black">
                          Paid
                        </span>
                      ) : (
                        <span className="rounded-full bg-yellow-500 px-2 py-1 text-sm text-black">
                          Unpaid
                        </span>
                      )}
                    </td>
                    <td className="py-3 text-right">${lead.value.toFixed(2)}</td>
                    <td className="py-3 text-right">${lead.commission.toFixed(2)}</td>
                    <td className="py-3 text-center">
                      {lead.paid ? (
                        <Button size="sm" variant="outline" className="gap-1" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Receipt className="size-3" />
                            View Receipt
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="gap-1" disabled>
                          <Receipt className="size-3" />
                          Awaiting Payment
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
