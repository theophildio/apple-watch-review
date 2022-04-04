import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "../../hooks/useChart";
import './MyLineChart.css';

const MyLineChart = () => {
	const [chart] = useChart();

	return (
		<div className="line-chart">
			<h3>Month wise sell </h3>
			<LineChart width={580} height={370} data={chart}>
				<XAxis dataKey={"month"}></XAxis>
				<YAxis></YAxis>
				<Line dataKey={"sell"} activeDot={true} stroke="#F24A72"></Line>
				<Tooltip></Tooltip>
			</LineChart>
		</div>
	);
};

export default MyLineChart;
