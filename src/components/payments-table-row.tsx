import { Check, X } from "lucide-react";

import { TableRow, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface PaymentsTableRowProps {
  code: string;
  email: string;
  avatar: string;
  date: string;
  frequency: string;
  isSuccess: boolean;
  amount: number;
  className?: string;
}

export function PaymentsTableRow({
  code,
  email,
  avatar,
  date,
  frequency,
  isSuccess,
  amount,
  className,
}: PaymentsTableRowProps) {
  return (
    <TableRow className={className}>
      <TableCell className="font-medium">{code}</TableCell>
      <TableCell className="flex items-center gap-2">
        <Avatar className="size-8">
          <AvatarImage alt="avatar" src={avatar} className="mx-auto bg-primary/10 object-cover" />
          <AvatarFallback>ML</AvatarFallback>
        </Avatar>
        <span>{email}</span>
      </TableCell>
      <TableCell>
        <div className="text-muted-foreground">{date}</div>
      </TableCell>
      <TableCell>
        <div className="flex w-full items-center justify-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {frequency}
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex w-full items-center justify-center">
          {isSuccess === true && <Check size={16} className="text-green-500" />}
          {isSuccess === false && <X size={16} className="text-red-500" />}
        </div>
      </TableCell>
      <TableCell className="text-right">
        <span>$</span>
        {amount}
      </TableCell>
    </TableRow>
  );
}
