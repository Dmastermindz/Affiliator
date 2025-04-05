"use client";

import { useEffect, useState } from "react";
import { Plus, Users, DollarSign, BarChart3, CreditCard, ArrowDownUp } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { cn } from "@/lib/utils";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/metric-card";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";
import { PaymentsTableRow } from "@/components/payments-table-row";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

interface Transaction {
  tx_id: string;
  affiliate_code: string;
  user_id: string;
  purchase_date: string;
  purchase_value: number;
  influencer_payment: number;
  influencer_paid: boolean;
  request_id: string;
}

export function Section2() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const { data, error } = await supabase
          .from("user_transactions")
          .select("*")
          .order("purchase_date", { ascending: false })
          .range((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage - 1);

        if (error) throw error;
        setTransactions(data || []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An error occurred while fetching transactions",
        );
      } finally {
        setLoading(false);
      }
    }

    fetchTransactions();
  }, [currentPage]);

  // Calculate total earnings and other metrics
  const totalEarnings = transactions.reduce((sum, tx) => sum + tx.purchase_value, 0);
  const totalInfluencerPayments = transactions.reduce((sum, tx) => sum + tx.influencer_payment, 0);
  const successfulTransactions = transactions.filter((tx) => tx.influencer_paid).length;

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex w-full flex-1 flex-col">
        <main className="flex-1 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-balance font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              My Affiliate Earnings
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <MetricCard
              icon={Users}
              label="Total Transactions"
              value={transactions.length.toString()}
              progress={35}
              previousPeriodIncrease="+10%"
            />
            <MetricCard
              icon={DollarSign}
              label="Total Revenue"
              value={`$${totalEarnings.toFixed(2)}`}
              progress={48}
              previousPeriodIncrease="+22%"
            />
            <MetricCard
              icon={BarChart3}
              label="Influencer Payments"
              value={`$${totalInfluencerPayments.toFixed(2)}`}
              progress={60}
              previousPeriodIncrease="+14%"
            />
          </div>
          <Card className="mt-5 rounded-lg border bg-card p-5 text-card-foreground shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-heading text-xl font-semibold tracking-tight">
                Last Transactions
              </h2>
              <Button size="sm" variant="outline" className="gap-1">
                <CreditCard size={14} />
                Pay Out Affiliates
              </Button>
            </div>
            {error ? (
              <div className="text-center text-red-500">{error}</div>
            ) : loading ? (
              <div className="text-center">Loading transactions...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] text-left">Transaction ID</TableHead>
                    <TableHead className="text-left">Affiliate Code</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        Purchase Date
                        <ArrowDownUp size={16} />
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Purchase Value</TableHead>
                    <TableHead className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        Influencer Payment
                        <ArrowDownUp size={16} />
                      </div>
                    </TableHead>
                    <TableHead className="text-center">Payment Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((tx) => (
                    <PaymentsTableRow
                      key={tx.tx_id}
                      tx_id={tx.tx_id}
                      affiliate_code={tx.affiliate_code}
                      purchase_date={tx.purchase_date}
                      purchase_value={tx.purchase_value}
                      influencer_payment={tx.influencer_payment}
                      influencer_paid={tx.influencer_paid}
                    />
                  ))}
                </TableBody>
              </Table>
            )}
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={cn(
                      "[&&>span]:hidden md:[&&>span]:block",
                      currentPage === 1 && "pointer-events-none opacity-50",
                    )}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(1);
                    }}
                    isActive={currentPage === 1}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(2);
                    }}
                    isActive={currentPage === 2}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(3);
                    }}
                    isActive={currentPage === 3}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(currentPage + 1);
                    }}
                    className="[&&>span]:hidden md:[&&>span]:block"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </Card>
        </main>
      </div>
    </div>
  );
}
