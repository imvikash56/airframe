import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const TraficPerformChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'High - 2013',
        data: [28,26,24],
      },
      {
        name: 'Low - 2013',
        data: [20,30, 18],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
     
        toolbar: {
          show: true,
        },
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'How do you trafic prerform?',
        align: 'left',
      },
   
      xaxis: {      
        title: {
          text: 'Graphic Design per month',
        },
      }, 
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="line" height={220} />
    </div>
  );
};

export default TraficPerformChart;
