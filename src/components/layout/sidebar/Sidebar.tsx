import { SIDEBAR_ITEMS } from "@/constants/layout/sidebar";
import { Stack, Text } from "@chakra-ui/react";
import { SidebarItem } from "./SidebarItem";

const Sidebar = () => {
  return (
    <Stack p={5} gap={8} bg={'#f0f0f0'} w={'100%'} h={'100vh'} align={'center'}>
      <Stack
        align={"center"}
        justify={"center"}
        w={"20"}
        h={"20"}
        rounded="full"
        bg="blue.500"
        color={'white'}
      >
        <Text fontFamily={"cursive"}>Logo Here</Text>
      </Stack>

      <Stack>
        {SIDEBAR_ITEMS.map((sidebarItem) => (
          <SidebarItem key={sidebarItem.name} {...sidebarItem} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
