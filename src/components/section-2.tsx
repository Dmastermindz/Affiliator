import { Plus, Users, DollarSign, ChartNoAxesColumn, Download, ArrowDownUp } from "lucide-react";

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

export function Section2() {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <div className="flex-1 w-full flex flex-col">
        <Header />
        <main className="p-6 flex-1">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-heading font-semibold tracking-tight text-balance text-2xl sm:text-3xl">
              Dashboard
            </h2>
            <Button size="sm" className="gap-1">
              <Plus size={16} />
              New Invoice
            </Button>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
            <MetricCard
              icon={Users}
              label="Subscriptions"
              value="1240"
              progress={35}
              previousPeriodIncrease="+10%"
            />
            <MetricCard
              icon={DollarSign}
              label="Revenue"
              value="$35,231.81"
              progress={48}
              previousPeriodIncrease="+22%"
            />
            <MetricCard
              icon={ChartNoAxesColumn}
              label="MRR"
              value="$5,632"
              progress={60}
              previousPeriodIncrease="+14%"
            />
          </div>
          <Card className="rounded-lg border bg-card text-card-foreground shadow-sm p-5 mt-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-heading font-semibold tracking-tight text-xl">
                Last Transactions
              </h2>
              <Button size="sm" variant="outline" className="gap-1">
                <Download size={14} />
                Export
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-left">Code</TableHead>
                  <TableHead className="text-left">User</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      Date
                      <ArrowDownUp size={16} />
                    </div>
                  </TableHead>
                  <TableHead className="text-center">Frequency</TableHead>
                  <TableHead className="text-center">Succedeed</TableHead>
                  <TableHead className="text-right">
                    <div className="flex items-center gap-2 justify-end">
                      Amount
                      <ArrowDownUp size={16} />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <PaymentsTableRow
                  code="BT92X"
                  date="2025/01/1"
                  email="alex.sear@spml.com"
                  amount={18.99}
                  avatar="/images/avatar7.png"
                  frequency="Monthly"
                  isSuccess
                />
                <PaymentsTableRow
                  code="VH54P"
                  date="2025/17/1"
                  email="john.doe@gmail.com"
                  amount={165.99}
                  avatar="/images/avatar.png"
                  frequency="Yearly"
                />
                <PaymentsTableRow
                  code="NS62A"
                  date="2025/16/1"
                  email="sarah.jane@email.com"
                  amount={165.99}
                  avatar="/images/avatar6.png"
                  frequency="Yearly"
                  isSuccess
                />
                <PaymentsTableRow
                  code="GA46E"
                  date="2025/14/1"
                  email="liza.miller@tech.com"
                  amount={18.99}
                  avatar="/images/avatar5.png"
                  frequency="Monthly"
                  isSuccess
                />
                <PaymentsTableRow
                  code="JC82L"
                  date="2025/16/1"
                  email="mike.todd@email.com"
                  amount={18.99}
                  avatar="/images/avatar3.png"
                  frequency="Monthly"
                />
                <PaymentsTableRow
                  code="JC82L"
                  date="2025/16/1"
                  email="mike.todd@email.com"
                  amount={18.99}
                  avatar="/images/avatar4.png"
                  frequency="Monthly"
                  isSuccess
                />
              </TableBody>
            </Table>
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    className="[&&gt;span]:hidden md:[&&gt;span]:block"
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="[&&gt;span]:hidden md:[&&gt;span]:block" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </Card>
        </main>
      </div>
    </div>
  );
}
