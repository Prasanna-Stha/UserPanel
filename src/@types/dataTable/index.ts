import type { TableOptions } from "@tanstack/react-table";

export type DataTableProps<T extends object> = {
  columns: TableOptions<T>["columns"];
  data: T[];
  hasPagination?: boolean;
};
