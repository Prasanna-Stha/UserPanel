import type { SidebarPropsType } from "@/@types/layout/sidebar";
import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export const SidebarItem = (props: SidebarPropsType) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Stack>
      <HStack cursor={"pointer"} onClick={() => setIsOpen(!isOpen)}>
        <Icon as={props.icon} />
        <Text fontWeight={"bold"}>{props.name}</Text>
        <Icon
          as={ChevronDownIcon}
          boxSize={5}
          transition="transform 0.3s"
          transform={isOpen ? "rotate(0deg)" : "rotate(-90deg)"}
        />
      </HStack>
      {isOpen && (
        <Stack>
          {props.subItems.map((subItem, index) => (
            <HStack
              px={3}
              py={1.2}
              w="full"
              key={index}
              rounded="md"
              _hover={{ bg: "gray.100", cursor: "pointer" }}
            >
              <Icon as={subItem.icon} />
              <HStack>
                <Text>{subItem.name}</Text>
              </HStack>
            </HStack>
          ))}
        </Stack>
      )}
    </Stack>
  );
};
