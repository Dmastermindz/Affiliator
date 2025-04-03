import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Transaction {
  affiliateCode: string;
  user: string;
  date: string;
  paymentStatus: boolean;
  amount: number;
  commissionRate: number; // percentage as decimal
}

const mockTransactions: Transaction[] = [
  {
    affiliateCode: "BT92X",
    user: "alex.sear@spml.com",
    date: "2025/01/1",
    paymentStatus: true,
    amount: 18.99,
    commissionRate: 0.15, // 15% commission
  },
  {
    affiliateCode: "VH54P",
    user: "john.doe@gmail.com",
    date: "2025/17/1",
    paymentStatus: false,
    amount: 165.99,
    commissionRate: 0.2, // 20% commission
  },
  // ... more transactions can be added
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="p-6">
          <h3 className="mb-2 text-sm text-muted-foreground">Subscriptions</h3>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">1,240</span>
            <span className="text-primary">+10%</span>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2 text-sm text-muted-foreground">Revenue</h3>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">$35,231.81</span>
            <span className="text-primary">+22%</span>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-2 text-sm text-muted-foreground">MRR</h3>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold">$5,632</span>
            <span className="text-primary">+14%</span>
          </div>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card>
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Last Transactions</h2>
            <Button size="sm" className="gap-1">
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
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((tx, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="py-3">{tx.affiliateCode}</td>
                    <td className="py-3">{tx.user}</td>
                    <td className="py-3">{tx.date}</td>
                    <td className="py-3">
                      {tx.paymentStatus ? (
                        <span className="rounded-full bg-green-500 px-2 py-1 text-sm text-black">
                          Paid
                        </span>
                      ) : (
                        <span className="rounded-full bg-primary px-2 py-1 text-sm text-black">
                          Unpaid
                        </span>
                      )}
                    </td>
                    <td className="py-3">${(tx.amount * tx.commissionRate).toFixed(2)}</td>
                    <td className="py-3 text-right">${tx.amount.toFixed(2)}</td>
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
