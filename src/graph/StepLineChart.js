import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const StepLineChart = () => {
  const [chartState, setChartState] = useState({
    series: [{
      data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
    }],
    options: {
      chart: {
        type: 'line',
        height: 350
      },
      stroke: {
        curve: 'stepline',
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: '',
        align: 'left'
      },
    
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartState.options} series={chartState.series} type="line" height={310} />
    </div>
  );
};

export default StepLineChart;
