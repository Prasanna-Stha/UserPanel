import { HStack, Stack } from "@chakra-ui/react";
import Sidebar from "./sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import { PAGE_ROUTES } from "@/routes/PageRoutes";
import HomePage from "@/pages";

const Layout = () => {
  return (
    <HStack w="full" h="100vh" overflow={"hidden"} align={"flex-start"}>
      <Stack w={"300px"} h={"100vh"} position={"sticky"} top={"0"}>
        <Sidebar />
      </Stack>
      <Stack p="8" gap={8} w="full" h="100vh" overflowY="auto">
        <Routes>
          <Route path="/users" element={<HomePage />} />
          {PAGE_ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Stack>
    </HStack>
  );
};

export default Layout;
