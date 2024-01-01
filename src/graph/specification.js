import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartState, setChartState] = useState({
    series: [{
      data: [
        [1327359600000, 20.95],
        [1361919600000, 39.60],
      ],
    }],
    options: {
      chart: {
        id: 'area-datetime',
        type: 'area',
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },
      annotations: {
        // ... (rest of the annotations)
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
      xaxis: {
        type: 'datetime',
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 6,
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    },
    selection: 'one_year',
  });

  const updateData = (timeline) => {
    setChartState((prevState) => ({
      ...prevState,
      selection: timeline,
    }));

    switch (timeline) {
      // ... (rest of the cases)
    }
  };

  return (
    <div id="chart">
         <div id="chart-timeline">
        <ReactApexChart options={chartState.options} series={chartState.series} type="area" height={350} />
      </div>
    </div>
  );
};

export default ApexChart;
