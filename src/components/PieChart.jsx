import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "2017",
    react: 32,
    angular: 67,
    vue: 10,
  },
  {
    name: "2018",
    react: 60,
    angular: 65,
    vue: 20,
  },
  {
    name: "2019",
    react: 100,
    angular: 77,
    vue: 50,
  },
  {
    name: "2020",
    react: 150,
    angular: 99,
    vue: 67,
  },
];

const PieChart = () => {
  return (
    <ResponsiveContainer width={400} height={300}>
      <AreaChart data={data}>
        <Area dataKey={"react"} />
        <Area dataKey={"angular"} />
        <Area dataKey={"vue"} />
        <CartesianGrid />
        <XAxis dataKey={"name"} />
        <YAxis />
        <Tooltip />
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
