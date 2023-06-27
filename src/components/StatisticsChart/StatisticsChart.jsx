import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  LabelList,
} from 'recharts';

const data = [
  {
    name: 'To Do',
    byMonth: 20,
    byDay: 50,
  },
  {
    name: 'In Progress',
    byMonth: 60,
    byDay: 30,
  },
  {
    name: 'Done',
    byMonth: 35,
    byDay: 40,
  },
];

export const StatisticsChart = () => {
  return (
    <BarChart
      width={780}
      height={286}
      data={data}
      barCategoryGap={165}
      barGap={14}
    >
      <CartesianGrid
        x={100}
        stroke="#E3F3FF"
        horizontal={true}
        vertical={false}
      />
      <XAxis dataKey="name" tickSize={0} stroke="#E3F3FF" />
      <YAxis ticks={[0, 20, 40, 60, 80, 100]} tickSize={0} axisLine={false}>
        <Label position="top">Tasks</Label>
      </YAxis>
      <Tooltip />
      <Legend iconType="circle" iconSize={8} height={90} verticalAlign="top" />
      <Bar
        name="By Day"
        dataKey="byDay"
        fill="#FFD1DC"
        barSize={27}
        radius={10}
      >
        <LabelList position="top"></LabelList>
      </Bar>
      <Bar
        name="By Month"
        dataKey="byMonth"
        fill="#3E86F5"
        barSize={27}
        radius={10}
      >
        <LabelList position="top"></LabelList>
      </Bar>
    </BarChart>
  );
};
