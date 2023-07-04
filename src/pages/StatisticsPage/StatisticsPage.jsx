import React from 'react';
import { StatisticsContainer } from 'pages/StatisticsPage/StatisticsPage.styled';

import { SectionStatistics } from 'components/StatisticsPageComponents/SectionStatistics/SectionStatistics';

export default function StatisticsPage() {
  return (
    <StatisticsContainer>
      <SectionStatistics />
    </StatisticsContainer>
  );
}
