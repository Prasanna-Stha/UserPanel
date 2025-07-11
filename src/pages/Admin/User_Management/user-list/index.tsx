import type { User } from "@/@types/user";
import DataTable from "@/components/dataTable";
import { useGetUserList } from "@/services/users";
import { Badge, HStack, Icon, Stack } from "@chakra-ui/react";
import type { ColumnDef } from "@tanstack/react-table";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";

const UserList = () => {
  const { data } = useGetUserList();
  const columns: Array<ColumnDef<User>> = [
    {
      accessorKey: "id",
      header: "S.N.",
    },
    {
      accessorKey: "userName",
      header: "Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "gender",
      header: "Gender",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "isActive",
      header: "Active Status",
      cell: ({ row }) =>
        row?.original?.isActive ? (
          <Badge colorPalette={"green"}>Active</Badge>
        ) : (
          <Badge colorPalette={"red"}>Inactive</Badge>
        ),
    },
    {
      accessorKey: "contact",
      header: "Contact Number",
    },
    {
      accessorKey: "Actions",
      header: "Actions",
      cell: () => (
        <HStack gap={5}>
          <Icon
            as={FiEye}
            boxSize={4}
            color="gray.500"
            cursor="pointer"
            _hover={{ color: "blue.500" }}
          />
          <Icon
            as={FiEdit}
            boxSize={4}
            color="blue.600"
            cursor="pointer"
            _hover={{ color: "blue.600" }}
          />
          <Icon
            as={FiTrash2}
            boxSize={4}
            color="red.600"
            cursor="pointer"
            _hover={{ color: "red.500" }}
          />
        </HStack>
      ),
    },
  ];
  return (
    <Stack gap={5}>
      <DataTable columns={columns} data={data} hasPagination />
    </Stack>
  );
};

export default UserList;
