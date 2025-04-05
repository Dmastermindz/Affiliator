"use client";

import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

interface Transaction {
  tx_id: string;
  affiliate_code: string;
  user_id: string;
  purchase_date: string;
  purchase_value: number;
  influencer_payment: number;
  influencer_paid: boolean;
  request_id: string;
  user?: {
    email: string;
  };
}

export default function DashboardPage() {
  console.log("Dashboard component initialized");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handlePayAffiliates = async () => {
    try {
      console.log("Starting handlePayAffiliates...");
      console.log("All transactions:", transactions);
      console.log(
        "Transactions with influencer_paid=false:",
        transactions
          .filter((tx) => !tx.influencer_paid)
          .map((tx) => ({
            tx_id: tx.tx_id,
            influencer_paid: tx.influencer_paid,
            amount: tx.purchase_value,
          })),
      );
      // Get all unpaid transactions
      const unpaidTransactions = transactions.filter((tx) => !tx.influencer_paid);
      console.log("Unpaid transactions count:", unpaidTransactions.length);

      if (unpaidTransactions.length === 0) {
        alert("No unpaid transactions to process");
        return;
      }

      // Create payment requests for each unpaid transaction
      for (const tx of unpaidTransactions) {
        try {
          console.log("Making API call for transaction:", tx.tx_id);
          console.log("API Key:", process.env.NEXT_PUBLIC_REQUEST_API_KEY);
          // Make the Request Network API call
          const response = await fetch("https://api.request.network/v1/request", {
            method: "POST",
            headers: {
              "x-api-key": process.env.NEXT_PUBLIC_REQUEST_API_KEY!,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: tx.influencer_payment.toString(),
              payee: "0x2C11AE139ce104fFe6180C817F0d655CE4Defd1c",
              invoiceCurrency: "aUSDC-mainnet",
              paymentCurrency: "aUSDC-mainnet",
            }),
          });

          if (!response.ok) {
            throw new Error(`API call failed for transaction ${tx.tx_id}`);
          }

          const result = await response.json();
          console.log(
            `Full API response for transaction ${tx.tx_id}:`,
            JSON.stringify(result, null, 2),
          );
          console.log("requestID from response:", result.requestID);
          console.log("full result keys:", Object.keys(result));

          // Update the individual transaction with its requestID
          const { error: updateError } = await supabase
            .from("user_transactions")
            .update({
              influencer_paid: true,
              request_id: result.requestID,
            })
            .eq("tx_id", tx.tx_id);

          if (updateError) {
            console.error("Error updating transaction:", updateError);
            throw updateError;
          }

          console.log(`Successfully updated transaction ${tx.tx_id} with request_id`);
        } catch (apiError) {
          console.error(`Failed to create payment request for transaction ${tx.tx_id}:`, apiError);
          throw apiError;
        }
      }

      // Refresh the transactions list
      const { data: updatedData, error: fetchError } = await supabase
        .from("user_transactions")
        .select("*")
        .order("purchase_date", { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setTransactions(updatedData || []);
      alert("Successfully paid all affiliates!");
    } catch (error) {
      console.error("Error paying affiliates:", error);
      alert(`Error paying affiliates: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  useEffect(() => {
    async function fetchTransactions() {
      try {
        console.log("Starting to fetch transactions...");

        const { data, error } = await supabase
          .from("user_transactions")
          .select("*")
          .order("purchase_date", { ascending: false });

        if (error) {
          console.error("Supabase error:", error);
          setError(error.message);
          return;
        }

        console.log("Raw data from Supabase:", data);
        console.log(
          "Unpaid transactions in raw data:",
          data?.filter((tx) => !tx.influencer_paid),
        );

        setTransactions(data || []);
      } catch (error) {
        console.error("Error in fetchTransactions:", error);
        setError(error instanceof Error ? error.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchTransactions();
  }, []);

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error loading transactions</h3>
              <div className="mt-2 text-sm text-red-700">{error}</div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="p-6">
          <h3 className="mb-2 text-sm text-muted-foreground">Subscriptions</h3>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">{transactions.length}</span>
            <span className="text-primary">+10%</span>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2 text-sm text-muted-foreground">Revenue</h3>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">
              ${transactions.reduce((sum, tx) => sum + tx.purchase_value, 0).toFixed(2)}
            </span>
            <span className="text-primary">+22%</span>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2 text-sm text-muted-foreground">Pending Payments</h3>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">
              $
              {transactions
                .filter((tx) => !tx.influencer_paid)
                .reduce((sum, tx) => sum + tx.influencer_payment, 0)
                .toFixed(2)}
            </span>
            <span className="text-primary">+14%</span>
          </div>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card>
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Last Transactions</h2>
            <Button size="sm" className="gap-1" onClick={handlePayAffiliates}>
              <DollarSign className="size-4" />
              Pay Out Affiliates
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 text-muted-foreground">Affiliate Code</th>
                  <th className="pb-3 text-muted-foreground">User</th>
                  <th className="pb-3 text-muted-foreground">Date</th>
                  <th className="pb-3 text-muted-foreground">Influencer Paid</th>
                  <th className="pb-3 text-muted-foreground">Influencer Payment</th>
                  <th className="pb-3 text-right text-muted-foreground">Revenue</th>
                  <th className="pb-3 text-right text-muted-foreground">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="py-4 text-center">
                      Loading transactions...
                    </td>
                  </tr>
                ) : transactions.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-4 text-center">
                      No transactions found
                    </td>
                  </tr>
                ) : (
                  transactions.map((tx) => (
                    <tr key={tx.tx_id} className="border-b border-border last:border-0">
                      <td className="py-3">{tx.affiliate_code}</td>
                      <td className="py-3">{tx.user?.email || tx.user_id}</td>
                      <td className="py-3">{new Date(tx.purchase_date).toLocaleDateString()}</td>
                      <td className="py-3">
                        {tx.influencer_paid ? (
                          <span className="rounded-full bg-green-500 px-2 py-1 text-sm text-black">
                            Paid
                          </span>
                        ) : (
                          <span className="rounded-full bg-primary px-2 py-1 text-sm text-black">
                            Unpaid
                          </span>
                        )}
                      </td>
                      <td className="py-3">${tx.influencer_payment.toFixed(2)}</td>
                      <td className="py-3 text-right">${tx.purchase_value.toFixed(2)}</td>
                      <td className="py-3 text-right">
                        {tx.request_id && (
                          <a
                            href={`https://scan.request.network/request/${tx.request_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            View Request Receipt
                          </a>
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
