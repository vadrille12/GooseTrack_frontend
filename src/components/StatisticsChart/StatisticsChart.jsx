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
  ResponsiveContainer,
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
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        barCategoryGap={75}
        barGap={14}
      >
        <defs>
          <linearGradient id="colorM" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(255, 210, 221)" stopOpacity={0} />
            <stop
              offset="100%"
              stopColor="rgb(255, 210, 221)"
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="colorD" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(62, 133, 243)" stopOpacity={0} />
            <stop offset="100%" stopColor="rgb(62, 133, 243)" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid x={100} stroke="#E3F3FF" vertical={false} />
        <XAxis dataKey="name" tickSize={0} tickMargin={16} />
        <YAxis
          ticks={[0, 20, 40, 60, 80, 100]}
          position="left"
          axisLine={false}
          tickLine={false}
          tickCount={6}
          tickMargin={28}
        ></YAxis>
        <Tooltip />
        <Legend
          iconType="circle"
          iconSize={8}
          height={90}
          verticalAlign="top"
        />
        <Bar
          name="By Day"
          dataKey="byDay"
          fill="url(#colorM)"
          barSize={27}
          radius={10}
        >
          <LabelList position="top"></LabelList>
        </Bar>
        <Bar
          name="By Month"
          dataKey="byMonth"
          fill="url(#colorD)"
          barSize={27}
          radius={10}
        >
          <LabelList position="top"></LabelList>
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
