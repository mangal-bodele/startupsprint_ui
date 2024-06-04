
// src/components/EMIPieChart.js

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const EMIPieChart = ({emi, totalInterest, totalPayment, width, height }) => {
  const data = {
    labels: [ 'EMI',  'Total Interest', 'Total Payment'],
    datasets: [
      {
        data: [emi, totalInterest, totalPayment],
        backgroundColor: ['#36A2EB', '#198754', '#FF6384' ],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="pie-chart-container" style={{ width: width, height: height, margin: 'auto' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default EMIPieChart;
