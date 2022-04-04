import React from "react";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyPieChart from "../MyPieChart/MyPieChart";
import './Dashboard.css';

const Dashboard = () => {
	return (
		<div className="charts-container">
			<div className="charts">
				<MyLineChart></MyLineChart>
        <MyPieChart></MyPieChart>
			</div>
		</div>
	);
};

export default Dashboard;
