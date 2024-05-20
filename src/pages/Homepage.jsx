import BarChart1 from "../components/BarChart1";
import LineGraph from "../components/LineGraph";
import PieChart from "../components/PieChart";

const Homepage = () => {
  return (
    <div className=" ">
      <div className="flex align-middle justify-center">
        <LineGraph />
        <PieChart />
      </div>
      <div className="flex align-middle justify-center mt-7">
        <BarChart1 />
      </div>
    </div>
  );
};

export default Homepage;
