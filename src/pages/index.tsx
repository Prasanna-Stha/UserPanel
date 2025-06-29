import {
  Badge,
  Button,
  CardBody,
  CardDescription,
  CardRoot,
  CardTitle,
  Grid,
  HStack,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Mail, Phone, Cake } from "lucide-react";
import { useGetUserList } from "../services/users";
import type { User } from "@/@types/user";
import AddUser from "@/components/addUser";
import Loading from "@/components/loading";
import UpdateUser from "@/components/editUser";
import { useState } from "react";
import { AddIcon, DeleteIcon, EditIcon } from "@/assets/svg";
import DeleteUser from "@/components/deleteUser";

const HomePage = () => {
  const { data: userList, isLoading } = useGetUserList();

  const {
    open: isAddOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure();

  const {
    open: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  const {
    open: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const [dataIdentifier, setDataIdentifier] = useState("");

  const handleEdit = (id: string) => {
    setDataIdentifier(id);
    onEditOpen();
  };

  const handleDelete = (id: string) => {
    setDataIdentifier(id);
    onDeleteOpen();
  };

  return (
    <Stack p="8" gap={8}>
      <Button
        w="fit-content"
        alignSelf="flex-end"
        onClick={onAddOpen}
        colorPalette="cyan"
      >
        <AddIcon />
        Add User
      </Button>

      {isLoading ? (
        <Loading loadingText="Fetching user list..." size="xl" />
      ) : (
        <Grid templateColumns="repeat(auto-fill, minmax(350px, 1fr))" gap={6}>
          {userList?.map((user: User, index: number) => (
            <CardRoot
              key={index}
              _hover={{ cursor: "pointer", bg: "gray.100" }}
              role="group"
              className="group"
            >
              <CardBody position="relative">
                <HStack
                  justify="center"
                  align="center"
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  zIndex={1}
                >
                  <Button
                    opacity={0}
                    _groupHover={{ opacity: 1 }}
                    bg={"blue.500"}
                    onClick={() => user?.id && handleEdit(user.id)}
                    size={"sm"}
                  >
                    <EditIcon />
                    Edit
                  </Button>

                  <Button
                    opacity={0}
                    _groupHover={{ opacity: 1 }}
                    bg={"red.500"}
                    onClick={() => user?.id && handleDelete(user.id)}
                    size={"sm"}
                  >
                    <DeleteIcon />
                    Delete
                  </Button>
                </HStack>

                <VStack align="start" gap={3} zIndex={0}>
                  <HStack justify="space-between" w="full">
                    <CardTitle color="green.500">{user.userName}</CardTitle>
                    <Badge
                      colorPalette={
                        user.gender === "male"
                          ? "blue"
                          : user.gender === "female"
                          ? "pink"
                          : "green"
                      }
                    >
                      {user.gender}
                    </Badge>
                  </HStack>

                  <CardDescription w="full">
                    <Stack gap={2}>
                      <HStack>
                        <Cake size={16} />
                        <Text>{user.age} years</Text>
                      </HStack>
                      <HStack>
                        <Mail size={16} />
                        <Text>{user.email}</Text>
                      </HStack>
                      <HStack>
                        <Phone size={16} />
                        <Text>{user.contact}</Text>
                      </HStack>
                    </Stack>
                  </CardDescription>
                </VStack>
              </CardBody>
            </CardRoot>
          ))}
        </Grid>
      )}

      {isAddOpen && <AddUser isOpen={isAddOpen} onClose={onAddClose} />}

      {isEditOpen && dataIdentifier && (
        <UpdateUser
          isOpen={isEditOpen}
          onClose={onEditClose}
          dataIdentifier={dataIdentifier}
        />
      )}

      {isDeleteOpen && dataIdentifier && (
        <DeleteUser
          isOpen={isDeleteOpen}
          onClose={onDeleteClose}
          dataIdentifier={dataIdentifier}
        />
      )}
    </Stack>
  );
};

export default HomePage;
