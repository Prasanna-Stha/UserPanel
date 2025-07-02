import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Dialog from "../dialog";

const ChartCardDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: VoidFunction;
}) => {
  const data = [
    { name: "January", totalUsers: 23, activeUsers: 14 }, // TODO: DUMMY DATA FOR NOW
    { name: "February", totalUsers: 28, activeUsers: 20 }, // TODO: DUMMY DATA FOR NOW
    { name: "March", totalUsers: 30, activeUsers: 23 }, // TODO: DUMMY DATA FOR NOW
    { name: "April", totalUsers: 27, activeUsers: 17 }, // TODO: DUMMY DATA FOR NOW
    { name: "May", totalUsers: 32, activeUsers: 20 },
  ];
  return (
    <Dialog
      title="Active vs Total Users (Monthly)"
      open={open}
      hasFooter={false}
      size="xl"
      onClose={onClose}
    >
      <ResponsiveContainer width="100%" height={500}>
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
    </Dialog>
  );
};

export default ChartCardDialog;
