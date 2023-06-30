import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

const percentagesLabel = props => {
  const { x, y, width, value } = props;
  const radius = 10;
  const labelY = y - (y === 0 ? radius : 0);

  return (
    <svg>
      <text
        x={x + 2 + width / 2}
        y={labelY}
        fill="#343434"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {`${Math.round(value)}%`}
      </text>
    </svg>
  );
};

export const StatisticsChart = ({ data }) => {
  const {
    toDoByMonthInPercent,
    inProgressByMonthInPercent,
    doneByMonthInPercent,
  } = data.statistics.month;

  const { toDoByDayInPercent, inProgressByDayInPercent, doneByDayInPercent } =
    data.statistics.day;

  const columns = [
    {
      name: 'To Do',
      byDay: `${toDoByDayInPercent * 100}`,
      byMonth: `${toDoByMonthInPercent * 100}`,
    },

    {
      name: 'In Progress',
      byDay: `${inProgressByDayInPercent * 100}`,
      byMonth: `${inProgressByMonthInPercent * 100}`,
    },
    {
      name: 'Done',
      byDay: `${doneByDayInPercent * 100}`,
      byMonth: `${doneByMonthInPercent * 100}`,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={columns}
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
        <XAxis dataKey="name" tickSize={0} tickMargin={16} stroke="" />
        <YAxis
          ticks={[0, 20, 40, 60, 80, 100]}
          position="left"
          axisLine={false}
          tickLine={false}
          tickCount={6}
          tickMargin={20}
          fontSize={14}
          label={{
            value: 'Tasks',
            position: 'top',
            offset: '50',
            fontSize: '14',
            fontWeight: '600',
            color: '#343434',
          }}
        ></YAxis>
        <Tooltip
          itemStyle={{
            backgroundColor: 'rgb(255, 210, 221)',
            color: 'rgb(62, 133, 243)',
          }}
        />
        {/* <Legend
          iconType="circle"
          iconSize={8}
          height={90}
          verticalAlign="top"
        /> */}
        <Bar
          name="By Day"
          dataKey="byDay"
          fill="url(#colorM)"
          barSize={27}
          radius={10}
        >
          <LabelList
            position="top"
            fontSize={16}
            fontWeight={500}
            content={percentagesLabel}
          ></LabelList>
        </Bar>
        <Bar
          name="By Month"
          dataKey="byMonth"
          fill="url(#colorD)"
          barSize={27}
          radius={10}
        >
          <LabelList
            position="top"
            fontSize={16}
            fontWeight={500}
            content={percentagesLabel}
          ></LabelList>
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};