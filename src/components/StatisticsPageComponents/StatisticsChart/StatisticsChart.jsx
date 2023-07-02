import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Label,
} from 'recharts';

import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const StatisticsChart = ({ data }) => {
  const currentUser = useSelector(selectUser);

  const percentagesLabel = props => {
    const { x, y, width, value } = props;
    const radius = 10;
    const labelY = y - (y === 0 ? radius : 0);

    return currentUser.themeInterface === 'light' ? (
      <svg>
        <text
          x={x + 2 + width / 2}
          y={labelY}
          fill="rgba(52, 52, 52, 1)"
          fontSize={16}
          fontWeight={500}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {`${Math.round(value)}%`}
        </text>
      </svg>
    ) : (
      <svg>
        <text
          x={x + 2 + width / 2}
          y={labelY}
          fill="rgba(255, 255, 255, 1)"
          fontSize={16}
          fontWeight={500}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {`${Math.round(value)}%`}
        </text>
      </svg>
    );
  };

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
        data={columns}
        margin={{
          top: 45,
          right: 10,
          left: 10,
          bottom: 10,
        }}
        barCategoryGap={75}
        barGap={10}
        barSize={27}
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
        <XAxis
          dataKey="name"
          tickSize={0}
          tickMargin={16}
          axisLine={false}
          fontSize={14}
          fontWeight={400}
          stroke={
            currentUser.themeInterface === 'light'
              ? 'rgba(52, 52, 52, 1)'
              : '#ffffff'
          }
        />
        <YAxis
          ticks={[0, 20, 40, 60, 80, 100]}
          position="left"
          axisLine={false}
          tickLine={false}
          tickCount={6}
          tickMargin={20}
          fontSize={14}
          stroke={
            currentUser.themeInterface === 'light'
              ? 'rgba(52, 52, 52, 1)'
              : '#ffffff'
          }
        >
          <Label
            position="top"
            dy={-28}
            fontSize={14}
            fontWeight={500}
            fill={
              currentUser.themeInterface === 'light'
                ? 'rgba(52, 52, 52, 1)'
                : '#ffffff'
            }
          >
            Tasks
          </Label>
        </YAxis>

        <Bar
          name="By Day"
          dataKey="byDay"
          fill="url(#colorM)"
          barSize={27}
          radius={10}
          minPointSize={10}
        >
          <LabelList
            position="top"
            fontSize={16}
            fontWeight={500}
            content={percentagesLabel}
            theme={currentUser.themeInterface}
          />
        </Bar>
        <Bar
          name="By Month"
          dataKey="byMonth"
          fill="url(#colorD)"
          barSize={27}
          radius={10}
          minPointSize={10}
        >
          <LabelList
            position="top"
            fontSize={16}
            fontWeight={500}
            content={percentagesLabel}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
