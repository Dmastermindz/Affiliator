"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download, Calendar, Receipt } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

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
  request_id: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeads() {
      try {
        console.log("Starting to fetch leads...");

        const { data, error } = await supabase
          .from("user_transactions")
          .select(
            `
            tx_id,
            affiliate_code,
            user_id,
            purchase_date,
            purchase_value,
            influencer_payment,
            influencer_paid,
            request_id
          `,
          )
          .order("purchase_date", { ascending: false });

        if (error) {
          console.error("Supabase error details:", error);
          throw error;
        }

        console.log("Fetched data:", data);

        // Transform the data to match the Lead interface
        const transformedLeads =
          data?.map((tx) => {
            console.log("Processing transaction:", tx);
            console.log("Request ID:", tx.request_id);
            return {
              id: tx.tx_id,
              companyName: "Aquari", // You might want to add this to your database
              user: tx.user_id, // Just using user_id since we can't join with users table
              date: new Date(tx.purchase_date).toLocaleDateString(),
              status: tx.influencer_paid ? ("paid" as const) : ("unpaid" as const),
              value: tx.purchase_value,
              commission: tx.influencer_payment,
              affiliateCode: tx.affiliate_code,
              paid: tx.influencer_paid,
              request_id: tx.request_id,
            };
          }) || [];

        console.log("Transformed leads:", transformedLeads);
        setLeads(transformedLeads);
      } catch (error) {
        console.error("Error in fetchLeads:", error);
        if (error instanceof Error) {
          console.error("Error message:", error.message);
          console.error("Error stack:", error.stack);
        }
        setError(error instanceof Error ? error.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchLeads();
  }, []);

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error loading leads</h3>
              <div className="mt-2 text-sm text-red-700">{error}</div>
            </div>
          </div>
        </div>
      )}

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
            <span className="text-2xl font-bold">{leads.length}</span>
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
            <span className="text-2xl font-bold">
              ${leads.reduce((sum, lead) => sum + lead.commission, 0).toFixed(2)}
            </span>
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
                  <th className="pb-3 pr-8 text-right text-muted-foreground">Your Commission</th>
                  <th className="pb-3 pl-8 text-muted-foreground">Request ID</th>
                  <th className="pb-3 text-center text-muted-foreground">
                    Request Network Receipt
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="py-4 text-center">
                      Loading leads...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-4 text-center">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
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
                      <td className="py-3 pr-8 text-right">${lead.commission.toFixed(2)}</td>
                      <td className="py-3 pl-8 font-mono">
                        {lead.request_id
                          ? `${lead.request_id.slice(0, 4)}...${lead.request_id.slice(-4)}`
                          : "-"}
                      </td>
                      <td className="py-3 text-center">
                        {lead.paid ? (
                          <Button size="sm" variant="outline" className="gap-1" asChild>
                            <a
                              href={`https://scan.request.network/request/${lead.request_id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Receipt className="size-3" />
                              View Request Receipt
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
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
