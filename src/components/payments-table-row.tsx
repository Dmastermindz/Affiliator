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
      <TableCell className="items-center gap-2 flex">
        <Avatar className="size-8">
          <AvatarImage alt="avatar" src={avatar} className="object-cover mx-auto bg-primary/10" />
          <AvatarFallback>ML</AvatarFallback>
        </Avatar>
        <span>{email}</span>
      </TableCell>
      <TableCell>
        <div className="text-muted-foreground">{date}</div>
      </TableCell>
      <TableCell>
        <div className="flex items-center justify-center w-full">
          <div className="inline-flex items-center justify-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
            {frequency}
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center justify-center w-full">
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
