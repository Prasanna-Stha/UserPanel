import type { User } from "@/@types/user";
import DataTable from "@/components/dataTable";
import DeleteUser from "@/components/deleteUser";
import UpdateUser from "@/components/editUser";
import Header from "@/components/header";
import { useGetUserList } from "@/services/users";
import {
  Badge,
  HStack,
  Icon,
  Stack,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import type { ColumnDef } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router-dom";

const UserList = () => {
  const { data = [] } = useGetUserList();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("ALL");
  const selectedTab = searchParams.get("active-tab");
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedTab) {
      setActiveTab(selectedTab);
    } else {
      searchParams.set("active-tab", activeTab);
      setSearchParams(searchParams);
    }
  }, [activeTab, searchParams, selectedTab, setSearchParams]);

  const {
    open: editOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    open: deleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const [dataIdentifier, setDataIdentifier] = useState("");

  const columns: Array<ColumnDef<User>> = [
    { accessorKey: "id", header: "S.N." },
    { accessorKey: "userName", header: "Name" },
    { accessorKey: "age", header: "Age" },
    { accessorKey: "gender", header: "Gender" },
    { accessorKey: "email", header: "Email" },
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
    { accessorKey: "contact", header: "Contact Number" },
    {
      accessorKey: "Actions",
      header: "Actions",
      cell: ({ row }) => (
        <HStack gap={5}>
          <Icon
            as={FiEye}
            boxSize={4}
            color="gray.500"
            cursor="pointer"
            _hover={{ color: "blue.500" }}
            onClick={() =>
              row.original.id &&
              row.original.userName &&
              navigate(`/user/${row.original.id}/${row.original.userName}`)
            }
          />
          <Icon
            as={FiEdit}
            boxSize={4}
            color="blue.600"
            cursor="pointer"
            _hover={{ color: "blue.600" }}
            onClick={() => row.original.id && handleEdit(row.original.id)}
          />
          <Icon
            as={FiTrash2}
            boxSize={4}
            color="red.600"
            cursor="pointer"
            _hover={{ color: "red.500" }}
            onClick={() => row.original.id && handleDelete(row.original.id)}
          />
        </HStack>
      ),
    },
  ];

  const handleEdit = (id: string) => {
    onEditOpen();
    setDataIdentifier(id);
  };
  const handleDelete = (id: string) => {
    onDeleteOpen();
    setDataIdentifier(id);
  };
  const filteredData = useMemo(() => {
    switch (activeTab) {
      case "ACTIVE":
        return data.filter((user: User) => user.isActive === true);
      case "INACTIVE":
        return data.filter((user: User) => user.isActive !== true);
      case "ALL":
      default:
        return data;
    }
  }, [data, activeTab]);

  return (
    <Stack gap={5}>
      <Header
        title="User Management"
        subTitle="Browse, manage, and add new users"
        btnLabel="Add User"
      />
      <Tabs.Root
        variant={"enclosed"}
        value={activeTab}
        onValueChange={(e) => {
          setActiveTab(e.value);
          searchParams.set("active-tab", e.value);
          setSearchParams(searchParams);
        }}
      >
        <Tabs.List bg={"bg.muted"} rounded={"l3"} p={"1"}>
          <Tabs.Trigger value="ALL">All Users</Tabs.Trigger>
          <Tabs.Trigger value="ACTIVE">Active Users</Tabs.Trigger>
          <Tabs.Trigger value="INACTIVE">Inactive Users</Tabs.Trigger>
          <Tabs.Indicator rounded={"l2"} />
        </Tabs.List>
      </Tabs.Root>
      <DataTable columns={columns} data={filteredData} hasPagination />
      {editOpen && (
        <UpdateUser
          isOpen={editOpen}
          onClose={onEditClose}
          dataIdentifier={dataIdentifier}
        />
      )}
      {deleteOpen && (
        <DeleteUser
          isOpen={deleteOpen}
          onClose={onDeleteClose}
          dataIdentifier={"2"}
        />
      )}
    </Stack>
  );
};

export default UserList;
