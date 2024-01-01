import React, { useState } from 'react';

import ReactApexChart from "react-apexcharts";

const ChartArea = () => {
  const [state, setState] = useState({
    series: [{   
      data: [60, 60, 60, 60, 50, 50,]
    }, {   
      data: [11, 11, 11, 22, 11, 22, 11]
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
    <div>
      <ReactApexChart options={state.options} series={state.series} type="area" height={250} />
    </div>
  );
    }

export default ChartArea;



