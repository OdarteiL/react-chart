import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

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

const LineGraph = () => {
  return (
    <>
      <LineChart width={400} height={300} data={data}>
        <Line type="monotone" dataKey="react" stroke="#2196F3" strokeWidth={3} />
        <Line type="monotone" dataKey="angular" stroke="#FF0000" strokeWidth={3} />
        <Line type="monotone" dataKey="vue" stroke="#2134F3" strokeWidth={3} />
        <CartesianGrid />
        <XAxis dataKey={"name"} />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </>
  )
};

export default LineGraph;

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// const data = [
//   {
//     name: "2017",
//     react: 32,
//     angular: 67,
//     vue: 10,
//   },
//   {
//     name: "2018",
//     react: 60,
//     angular: 65,
//     vue: 20,
//   },
//   {
//     name: "2018",
//     react: 100,
//     angular: 77,
//     vue: 50,
//   },
//   {
//     name: "2019",
//     react: 150,
//     angular: 99,
//     vue: 67,
//   },
// ];

// const LineGraph = () => {
//   return (
//     <LineChart width={600} height={400} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line type="monotone" dataKey="react" stroke="#2196F3" strokeWidth={3} />
//       <Line type="monotone" dataKey="angular" stroke="#FF0000" strokeWidth={3} />
//       <Line type="monotone" dataKey="vue" stroke="#00FF00" strokeWidth={3} />
//     </LineChart>
//   );
// };

// export default LineGraph;
