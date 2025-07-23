import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "../../components/ui/table";

test("should render table with header and body", () => {
  render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Header</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
        </TableRow>
      </TableBody>
      <TableCaption>Caption</TableCaption>
    </Table>
  );
  
  expect(screen.getByText("Header")).toBeInTheDocument();
  expect(screen.getByText("Cell 1")).toBeInTheDocument();
  expect(screen.getByText("Caption")).toBeInTheDocument();
}); 