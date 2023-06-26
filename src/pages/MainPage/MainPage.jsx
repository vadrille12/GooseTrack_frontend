import React from 'react';

import { AuthSection } from 'components/MainPageComponents/AuthSection/AuthSection';
import { Description } from 'components/MainPageComponents/DescSection/Desc';
import { ReviewsSlider } from 'components/MainPageComponents/ReviewsSection/ReviewsSlider';

export default function MainPage() {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider/>
    </>
  );
}
