import * as React from 'react';
import { ChartContainer, BarPlot } from '@mui/x-charts';

const uData = [1500, 2500, 4000, 1780, 1090, 3390, 3490];
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