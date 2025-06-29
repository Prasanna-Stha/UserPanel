import { Button, HStack, Image } from "@chakra-ui/react";
import Dialog from "../dialog";
import deleteIllustration from "@/assets/pngs/deleteIllustration.png";
import { useDeleteUser } from "@/services/users";

const DeleteUser = ({
  isOpen,
  onClose,
  dataIdentifier,
}: {
  isOpen: boolean;
  onClose: () => void;
  dataIdentifier: string;
}) => {
  const { mutate: deleteUser, isPending } = useDeleteUser();

  const handleDelete = () => {
    deleteUser(dataIdentifier, { onSuccess: () => onClose() });
  };
  return (
    <Dialog
      title="Delete User"
      hasFooter={false}
      onClose={onClose}
      open={isOpen}
    >
      <Image src={deleteIllustration} w={300} mx={"auto"} />
      <HStack justify={"flex-end"}>
        <Button variant={"outline"} onClick={onClose} outline={"none"}>
          Cancel
        </Button>
        <Button colorPalette={"red"} outline={"none"} onClick={handleDelete}>
          <Button
            type="submit"
            w="fit"
            colorPalette={"red"}
            outline={"none"}
            onClick={handleDelete}
            disabled={isPending}
            loading={isPending}
            loadingText="Deleting User..."
          >
            Delete User
          </Button>
        </Button>
      </HStack>
    </Dialog>
  );
};

export default DeleteUser;
