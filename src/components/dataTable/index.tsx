import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table as ChakraTable, Text } from "@chakra-ui/react";
import type { DataTableProps } from "@/@types/dataTable";
import CustomPagination from "./Pagination";

const DataTable = <T extends object>({
  columns,
  data,
}: DataTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <ChakraTable.Root borderCollapse={"separate"} borderSpacing={0} striped>
        <ChakraTable.Header>
          <ChakraTable.Row>
            {table?.getHeaderGroups()?.map((headerGroup) =>
              headerGroup.headers?.map((header) => {
                return (
                  <ChakraTable.ColumnHeader
                    key={header.id}
                    borderTop={"1px solid"}
                    borderColor={"gray.200"}
                  >
                    <Text fontSize={"14px"} fontWeight={700} color={"gray.700"}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </Text>
                  </ChakraTable.ColumnHeader>
                );
              })
            )}
          </ChakraTable.Row>
        </ChakraTable.Header>
        <ChakraTable.Body>
          {table.getRowModel().rows?.map((row) => (
            <ChakraTable.Row key={row.id}>
              {row.getVisibleCells()?.map((cell) => {
                return (
                  <ChakraTable.Cell key={cell.id} fontSize={"14px"}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </ChakraTable.Cell>
                );
              })}
            </ChakraTable.Row>
          ))}
        </ChakraTable.Body>
      </ChakraTable.Root>
      <CustomPagination />
    </>
  );
};

export default DataTable;
