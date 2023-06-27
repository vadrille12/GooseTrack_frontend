import React from 'react';
import {
  StatisticsContainer,
  ChartContainer,
} from 'pages/StatisticsPage/StatisticsPage.styled';

import { StatisticsChart } from 'components/StatisticsChart/StatisticsChart';

export default function StatisticsPage() {
  return (
    <StatisticsContainer>
      <ChartContainer>
        <StatisticsChart />
      </ChartContainer>
    </StatisticsContainer>
  );
}
