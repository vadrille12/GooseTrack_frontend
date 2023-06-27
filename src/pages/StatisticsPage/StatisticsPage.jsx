import React from 'react';
import { StatisticsPageContainer } from 'pages/StatisticsPage/StatisticsPage.styled';

import { StatisticsChart } from 'components/StatisticsChart/StatisticsChart';

export default function StatisticsPage() {
  return (
    <StatisticsPageContainer>
      <StatisticsChart />
    </StatisticsPageContainer>
  );
}
