import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import useChart from "../../hooks/useChart";
import './MyPieChart.css';

const MyPieChart = () => {
	const [charts] = useChart();
	return (
		<div className="pie-chart">
      <h3>Investment vs Revenue</h3>
			<PieChart width={530} height={350}>
				<Pie
					data={charts}
					dataKey={"investment"}
					nameKey={"month"}
					cx="50%"
					cy="50%"
					outerRadius={80}
					fill="#FDAF75"
				></Pie>
				<Pie
					data={charts}
					dataKey={"revenue"}
					nameKey={"sell"}
					cx="50%"
					cy="50%"
					innerRadius={90}
					outerRadius={110}
					fill="#F24A72"
					label
				></Pie>
				<Tooltip></Tooltip>
			</PieChart>
		</div>
	);
};

export default MyPieChart;
