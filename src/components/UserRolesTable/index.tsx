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
    createdAt: "2025-06-12T09:12:45.123Z",
    updatedAt: "2025-07-23T09:12:45.123Z",
    status: "Active",
    users: [
      {
        name: "Abdul Rahman",
        src: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        name: "Ben Johnson",
        src: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        name: "Cara Smith",
        src: "https://randomuser.me/api/portraits/women/3.jpg",
      },
      {
        name: "Daves Brown",
        src: "https://randomuser.me/api/portraits/men/4.jpg",
      },
      {
        name: "Jack White",
        src: "https://randomuser.me/api/portraits/men/10.jpg",
      },
      {
        name: "Oluremi Johnson",
        src: "https://randomuser.me/api/portraits/women/13.jpg",
      },
    ],
  },
  {
    id: "bhqecj4p",
    name: "Merchantadmin",
    type: "DEFAULT",
    createdAt: "2024-07-10T13:45:30.678Z",
    updatedAt: "2024-07-11T15:56:30.678Z",
    status: "Active",
    users: [
      {
        name: "Eve Adams",
        src: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        name: "Funsho Johnson",
        src: "https://randomuser.me/api/portraits/men/6.jpg",
      },
      {
        name: "Green Smith",
        src: "https://randomuser.me/api/portraits/women/7.jpg",
      },
      {
        name: "Mia Johnson",
        src: "https://randomuser.me/api/portraits/women/13.jpg",
      },
      {
        name: "Cole Sinclair",
        src: "https://randomuser.me/api/portraits/men/17.jpg",
      },
    ],
  },
  {
    id: "cwrecj4p",
    name: "supportadmin",
    type: "DEFAULT",
    createdAt: "2024-10-01T16:20:11.034Z",
    updatedAt: "2024-10-01T17:20:11.034Z",
    status: "Active",
    users: [
      {
        name: "Hammed Abdallah",
        src: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: "Ivy Adams",
        src: "https://randomuser.me/api/portraits/women/9.jpg",
      },
      {
        name: "Jack White",
        src: "https://randomuser.me/api/portraits/men/10.jpg",
      },
    ],
  },
  {
    id: "3u1reuv4",
    name: "sales personnel",
    type: "CUSTOM",
    createdAt: "2024-04-01T10:37:50.910Z",
    updatedAt: "2024-04-01T12:00:50.910Z",
    status: "Active",
    users: [
      {
        name: "Kim Lee",
        src: "https://randomuser.me/api/portraits/women/11.jpg",
      },
      {
        name: "Leo Wang",
        src: "https://randomuser.me/api/portraits/men/12.jpg",
      },
    ],
  },
  {
    id: "26qweuv4",
    name: "Deputy sales personnel",
    type: "CUSTOM",
    createdAt: "2023-03-19T11:03:29.220Z",
    updatedAt: "2023-03-28T11:13:29.220Z",
    status: "In Active",
    users: [
      {
        name: "Mia Johnson",
        src: "https://randomuser.me/api/portraits/women/13.jpg",
      },
      {
        name: "Ned Stark",
        src: "https://randomuser.me/api/portraits/men/14.jpg",
      },
    ],
  },
  {
    id: "m5gr84i9",
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    createdAt: "2023-02-12T08:55:00.400Z",
    updatedAt: "2023-09-09T09:00:00.400Z",
    status: "Active",
    users: [
      {
        name: "Ola Adams",
        src: "https://randomuser.me/api/portraits/men/15.jpg",
      },
      {
        name: "Pam Clark",
        src: "https://randomuser.me/api/portraits/women/16.jpg",
      },
    ],
  },
  {
    id: "hqm5gr82",
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    createdAt: "2023-02-01T14:18:33.888Z",
    updatedAt: "2024-02-09T13:00:00.400Z",
    status: "Active",
    users: [
      {
        name: "Prince Igbo",
        src: "https://randomuser.me/api/portraits/men/17.jpg",
      },
      {
        name: "Jane Doe",
        src: "https://randomuser.me/api/portraits/women/18.jpg",
      },
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
