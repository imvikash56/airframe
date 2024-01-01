import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";

const SpendChart = () => {
  const [state, setState] = useState({
    series: [{
      name: 'series',
      data: [10, 20, 40, 20, 100, 30, 25, 20, 10]
    }],
    options: {
      chart: {
        height: 250,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
    
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
    </div>
  );
    }

export default SpendChart;



