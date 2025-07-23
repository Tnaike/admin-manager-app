import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { columns, type User } from "./userRolesColumns";

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
      { name: "Jack", src: "https://randomuser.me/api/portraits/men/10.jpg" },
      { name: "Mia", src: "https://randomuser.me/api/portraits/women/13.jpg" },
    ],
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
      { name: "Mia", src: "https://randomuser.me/api/portraits/women/13.jpg" },
      { name: "Quinn", src: "https://randomuser.me/api/portraits/men/17.jpg" },
    ],
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
