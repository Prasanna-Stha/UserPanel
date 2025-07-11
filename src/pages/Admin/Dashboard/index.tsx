import { Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import type { User } from "@/@types/user";
import ChartCard from "@/components/chart/ChartCard";
import StatCard from "@/components/layout/sidebar/StatCard";
import { useGetUserList } from "@/services/users";
import { Link } from "react-router-dom";
import { Users, UserCheck, Clock, Ban } from "lucide-react";
import Timeline from "@/components/timeline";

const Dashboard = () => {
  const { data: users } = useGetUserList();

  const totalUsers = users?.length ?? 0;
  const activeUsers = users?.filter((user: User) => user?.isActive)?.length ?? 0;

  const statCardType = [
    {
      label: "Total Users",
      data: totalUsers.toString(),
      theme: "blue.100",
      route: "/users",
      icon: Users,
      iconColor: "blue.500"
    },
    {
      label: "Active Users",
      data: activeUsers.toString(),
      theme: "green.100",
      route: "",
      icon: UserCheck,
      iconColor: "green.500"
    },
    {
      label: "Pending Request",
      data: "10",
      theme: "yellow.100",
      route: "",
      icon: Clock,
      iconColor: "yellow.500"
    },
    {
      label: "Cancelled Request",
      data: "4",
      theme: "red.100",
      route: "",
      icon: Ban,
      iconColor: "red.500"
    },
  ];

  const todayDate = new Date();

  return (
    <VStack align="stretch" gap={8} pt={8}>
      <HStack justify="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Welcome to the Dashboard
        </Text>
        <Text fontSize="lg" color="gray.600" fontWeight="bold">
          Date: {todayDate.toLocaleDateString()}
        </Text>
      </HStack>
      <Grid templateColumns="repeat(4, 1fr)" gap={5}>
        {statCardType.map((statCard, index) => (
          <GridItem key={index}>
            <Link to={statCard.route}>
              <StatCard
                label={statCard.label}
                data={statCard.data}
                theme={statCard.theme}
                icon={statCard.icon}
                iconColor={statCard.iconColor}
              />
            </Link>
          </GridItem>
        ))}
        <GridItem colSpan={2}>
          <ChartCard totalUsers={totalUsers} activeUsers={activeUsers} />
        </GridItem>
        <GridItem colSpan={2}>
          <Timeline />
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default Dashboard;
