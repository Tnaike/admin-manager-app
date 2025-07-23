import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import { ArrowDown, Check, DownloadCloud } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export type User = {
  id: string;
  name: string;
  type: "DEFAULT" | "CUSTOM" | "SYSTEM-CUSTOM";
  date: string;
  status: "Active" | "In Active";
  users: { name: string; src: string }[];
  usersExtra: number;
};

const userRoles: User[] = [
  {
    id: "5kma53ae",
    name: "Superadmin",
    type: "DEFAULT",
    date: "Jan 1, 2023",
    status: "Active",
    users: [
      { name: "Ava", src: "https://randomuser.me/api/portraits/women/1.jpg" },
      { name: "Ben", src: "https://randomuser.me/api/portraits/men/2.jpg" },
      { name: "Cara", src: "https://randomuser.me/api/portraits/women/3.jpg" },
      { name: "Dan", src: "https://randomuser.me/api/portraits/men/4.jpg" },
    ],
    usersExtra: 2,
  },
  {
    id: "bhqecj4p",
    name: "Merchantadmin",
    type: "DEFAULT",
    date: "Feb 1, 2023",
    status: "Active",
    users: [
      { name: "Eve", src: "https://randomuser.me/api/portraits/women/5.jpg" },
      { name: "Finn", src: "https://randomuser.me/api/portraits/men/6.jpg" },
      { name: "Gina", src: "https://randomuser.me/api/portraits/women/7.jpg" },
    ],
    usersExtra: 1,
  },
  {
    id: "cwrecj4p",
    name: "supportadmin",
    type: "DEFAULT",
    date: "Feb 1, 2023",
    status: "Active",
    users: [
      { name: "Hank", src: "https://randomuser.me/api/portraits/men/8.jpg" },
      { name: "Ivy", src: "https://randomuser.me/api/portraits/women/9.jpg" },
      { name: "Jack", src: "https://randomuser.me/api/portraits/men/10.jpg" },
    ],
    usersExtra: 0,
  },
  {
    id: "3u1reuv4",
    name: "sales personnel",
    type: "CUSTOM",
    date: "Mar 1, 2023",
    status: "Active",
    users: [
      { name: "Kim", src: "https://randomuser.me/api/portraits/women/11.jpg" },
      { name: "Leo", src: "https://randomuser.me/api/portraits/men/12.jpg" },
    ],
    usersExtra: 0,
  },
  {
    id: "26qweuv4",
    name: "Deputy sales personnel",
    type: "CUSTOM",
    date: "Apr 1, 2023",
    status: "In Active",
    users: [
      { name: "Mia", src: "https://randomuser.me/api/portraits/women/13.jpg" },
      { name: "Ned", src: "https://randomuser.me/api/portraits/men/14.jpg" },
    ],
    usersExtra: 0,
  },
  {
    id: "m5gr84i9",
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    date: "May 1, 2023",
    status: "Active",
    users: [
      { name: "Ola", src: "https://randomuser.me/api/portraits/men/15.jpg" },
      { name: "Pam", src: "https://randomuser.me/api/portraits/women/16.jpg" },
    ],
    usersExtra: 0,
  },
  {
    id: "hqm5gr82",
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    date: "Jun 1, 2023",
    status: "Active",
    users: [
      { name: "Quinn", src: "https://randomuser.me/api/portraits/men/17.jpg" },
      { name: "Rae", src: "https://randomuser.me/api/portraits/women/18.jpg" },
    ],
    usersExtra: 0,
  },
];

const columns: ColumnDef<User>[] = [
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
    cell: ({ row }) => <div className="lowercase">{row.original?.name}</div>,
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
    accessorKey: "date",
    header: "Date created",
    cell: ({ row }) => <span className="text-xs">{row.original?.date}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.original?.status === "Active";

      return (
        <Badge
          variant={isActive ? "default" : "destructive"}
          className={
            row.original.status === "Active"
              ? "bg-green-100 text-green-700 border-green-100"
              : "bg-orange-100 text-orange-700 border-orange-100"
          }
        >
          {isActive && <Check />}
          {row.original?.status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "users",
    header: "Role users",
    cell: ({ row }) => (
      <div className="flex items-center -space-x-2">
        {row.original?.users.slice(0, 4).map((user, idx) => (
          <Avatar
            key={`${user?.name ?? "user"}-${idx}`}
            className="border-2 border-white shadow-sm"
          >
            <AvatarImage src={user?.src} alt={user?.name} />
            <AvatarFallback>{user?.name[0]}</AvatarFallback>
          </Avatar>
        ))}
        {row.original?.usersExtra > 0 && (
          <Avatar className="flex items-center justify-center text-[#475467] bg-[#F9FAFB] border-2 border-white shadow-sm">
            +{row.original?.usersExtra}
          </Avatar>
        )}
      </div>
    ),
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

export function UserRolesTable() {
  const table = useReactTable({
    data: userRoles,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col mt-5 gap-6">
      <div className="flex sm:items-center sm:justify-between gap-2 px-4 pt-4 max-sm:flex-col">
        <h3 className="text-base font-semibold">User Roles</h3>
        <Button className="flex items-center bg-white gap-2 border rounded-md text-sm text-primary cursor-pointer hover:bg-gray-50 w-max">
          <DownloadCloud className="w-4 h-4" /> Download all
        </Button>
      </div>
      <div className="flex bg-white rounded-xl border border-[#e3e5eb]">
        <Table className="rounded-xl overflow-hidden">
          <TableHeader className="bg-[#F9FAFB]">
            <TableRow>
              {table.getHeaderGroups()[0].headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
