import React, { useState } from 'react';

import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const [state, setState] = useState({
    series: [{
      name: 'series1',
      data: [60, 50, 50, 30, 20, 10]
    }],
    options: {
      chart: {
        height: 350,
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
      <ReactApexChart options={state.options} series={state.series} type="area" height={450} />
    </div>
  );
    }

export default Chart;



