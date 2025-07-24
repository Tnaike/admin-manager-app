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
import { columns } from "./userRolesColumns";
import { useUserRoles } from "@/hooks/user";

export function UserRolesTable() {
  const { data: userRoles = [], isLoading } = useUserRoles();

  const table = useReactTable({
    data: userRoles,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <div>Loading...</div>;

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
