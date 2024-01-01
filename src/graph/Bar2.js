import * as React from 'react';
import { ChartContainer, BarPlot } from '@mui/x-charts';

const uData = [3000, 5000, 1000, 3780, 1890, 2090, 3090];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function Bar() {
  return (
    <ChartContainer
      width={350}
      height={200}
      series={[{ data: uData, type: 'bar' }]}
      xAxis={[{ scaleType: 'band', data: xLabels }]}
    >
      <BarPlot />
    </ChartContainer>
  );
}