import React from "react";
import { Check, DownloadCloud, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { formatDate } from "@/lib/utils";
import type { Role } from "@/hooks/user/type";

export const columns: ColumnDef<Role>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="!p-0"
        >
          Name
          <ArrowDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-sm font-medium">{row.original?.name}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <span className="uppercase text-xs text-muted-foreground">
        {row.original?.type}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date created",
    cell: ({ row }) => (
      <span className="text-xs">
        {formatDate(row.original?.createdAt, "fullDate")}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.original?.status === "Active";

      return (
        <Badge variant={isActive ? "success" : "pending"} className="w-max">
          {isActive && <Check />}
          {row.original?.status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "users",
    header: "Role users",
    cell: ({ row }) => {
      const users = row.original?.users || [];
      const extraCount = users?.length > 4 ? users?.length - 4 : 0;

      return (
        <div className="flex items-center -space-x-2">
          {users.slice(0, 4).map((user, idx) => (
            <Avatar
              key={`${user?.name ?? "user"}-${idx}`}
              className="border-2 border-white shadow-sm"
            >
              <AvatarImage src={user?.src} alt={user?.name} />
              <AvatarFallback>{user?.name[0]}</AvatarFallback>
            </Avatar>
          ))}
          {extraCount > 0 && (
            <Avatar className="flex items-center justify-center text-[#475467] bg-[#F9FAFB] border-2 border-white shadow-sm">
              +{extraCount}
            </Avatar>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <Button
        variant="ghost"
        onClick={() => {}}
        className="rounded hover:bg-muted cursor-pointer"
      >
        <DownloadCloud className="w-5 h-5 text-muted-foreground" />
      </Button>
    ),
    size: 32,
  },
];
