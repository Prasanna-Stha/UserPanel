import { Button, HStack, Stack, Text, useDisclosure } from "@chakra-ui/react";
import AddUser from "../addUser";
import { AddIcon } from "@/assets/svg";

interface HeaderProps {
  title: string;
  subTitle?: string;
  btnLabel: string;
}

const Header = ({ title, subTitle, btnLabel }: HeaderProps) => {
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <HStack justify={"space-between"}>
      <Stack gap={2}>
        <Text fontSize={"xl"} fontWeight="bold">
          {title}
        </Text>
        {subTitle && (
          <Text fontSize={"md"} color="gray.600">
            {subTitle}
          </Text>
        )}
      </Stack>
      <Button onClick={onOpen} colorPalette={"cyan"}><AddIcon />{btnLabel}</Button>

      {open && <AddUser isOpen={open} onClose={onClose} />}
    </HStack>
  );
};

export default Header;
