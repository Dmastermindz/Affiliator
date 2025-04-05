import { Check, X } from "lucide-react";

import { TableRow, TableCell } from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface PaymentsTableRowProps {
  tx_id: string;
  affiliate_code: string;
  purchase_date: string;
  purchase_value: number;
  influencer_payment: number;
  influencer_paid: boolean;
  className?: string;
}

export function PaymentsTableRow({
  tx_id,
  affiliate_code,
  purchase_date,
  purchase_value,
  influencer_payment,
  influencer_paid,
  className,
}: PaymentsTableRowProps) {
  return (
    <TableRow className={className}>
      <TableCell className="font-medium">{tx_id}</TableCell>
      <TableCell>{affiliate_code}</TableCell>
      <TableCell>{purchase_date}</TableCell>
      <TableCell className="text-right">${purchase_value.toFixed(2)}</TableCell>
      <TableCell className="text-right">${influencer_payment.toFixed(2)}</TableCell>
      <TableCell className="text-center">
        {influencer_paid ? (
          <Check size={16} className="text-green-500" />
        ) : (
          <X size={16} className="text-red-500" />
        )}
      </TableCell>
    </TableRow>
  );
}
