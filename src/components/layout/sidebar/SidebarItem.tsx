import type { SidebarPropsType } from "@/@types/layout/sidebar";
import {
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const SidebarItem = (props: SidebarPropsType) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  return (
    <Stack gap={0.5}>
      {/* Parent item */}
      <HStack
        px={3}
        py={1}
        rounded="md"
        _hover={{ bg: "gray.100" }}
        cursor="pointer"
        justifyContent="space-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HStack gap={2}>
          <Icon as={props.icon} boxSize={4} />
          <Text fontWeight="medium" fontSize="sm">
            {props.name}
          </Text>
        </HStack>
        <Icon
          as={ChevronDownIcon}
          boxSize={4}
          transition="transform 0.2s"
          transform={isOpen ? "rotate(0deg)" : "rotate(-90deg)"}
        />
      </HStack>

      {/* Submenu */}
      {isOpen && (
        <Stack pl={6} gap={0.5}>
          {props.subItems.map((subItem, index) => {
            const isActive = location.pathname === subItem.href;
            return (
              <Link to={subItem.href} key={index}>
                <HStack
                  px={2}
                  py={1}
                  rounded="md"
                  _hover={{ bg: "gray.100" }}
                  bg={isActive ? "gray.100" : "transparent"}
                  transition="background 0.2s"
                >
                  <Icon as={subItem.icon} boxSize={3.5} />
                  <Text fontSize="sm">{subItem.name}</Text>
                </HStack>
              </Link>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};
