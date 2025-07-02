import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { ArrowRightCircle, type LucideIcon } from "lucide-react";
import { useState } from "react";

const StatCard = ({
  label,
  data,
  theme,
  icon,
  iconColor,
}: {
  label: string;
  data: string;
  theme: string;
  icon: LucideIcon;
  iconColor: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <HStack
      p={5}
      rounded="lg"
      boxShadow="md"
      bg={theme || "gray.100"}
      justify="space-between"
      align="center"
      transition="all 0.2s ease"
      _hover={{ transform: "translateY(-2px)", cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      border={"none"}
    >
      <HStack gap={6}>
        <Icon as={icon} boxSize={6} color={iconColor} rounded={"full"} />
        <Stack gap={1}>
          <Text fontSize="sm" fontWeight="medium" color="gray.600">
            {label}
          </Text>
          <Text fontSize="3xl" fontWeight="bold" color="gray.800">
            {data}
          </Text>
        </Stack>
      </HStack>

      <ArrowRightCircle
        size={24}
        color={"#3182CE"}
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          transition: "all 0.2s ease",
        }}
      />
    </HStack>
  );
};

export default StatCard;
