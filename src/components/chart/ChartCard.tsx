import { Box, Heading, HStack, Icon, useDisclosure } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Expand } from "lucide-react";
import ChartCardDialog from "./ChartCardDialog";

const ChartCard = ({
  totalUsers,
  activeUsers,
}: {
  totalUsers: number;
  activeUsers: number;
}) => {
  const data = [
    { name: "January", totalUsers: 23, activeUsers: 14 }, // TODO: DUMMY DATA FOR NOW
    { name: "February", totalUsers: 28, activeUsers: 20 }, // TODO: DUMMY DATA FOR NOW
    { name: "March", totalUsers: 30, activeUsers: 23 }, // TODO: DUMMY DATA FOR NOW
    { name: "April", totalUsers: 27, activeUsers: 17 }, // TODO: DUMMY DATA FOR NOW
    { name: "May", totalUsers: totalUsers, activeUsers: activeUsers },
  ];
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <Box p={5} bg="white" boxShadow="md" borderRadius="xl" h={420}>
      <HStack justify={"space-between"}>
        <Heading size="lg" color={"gray.600"}>
          Active vs Total Users (Monthly)
        </Heading>
        <Icon as={Expand} boxSize={4} onClick={onOpen} />
      </HStack>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="totalUsers"
            stroke="#3182CE"
            strokeWidth={2}
            name="Total Users"
          />
          <Line
            type="monotone"
            dataKey="activeUsers"
            stroke="#38A169"
            strokeWidth={2}
            name="Active Users"
          />{" "}
        </LineChart>
      </ResponsiveContainer>
      {open && <ChartCardDialog open={open} onClose={onClose} />}
    </Box>
  );
};

export default ChartCard;
