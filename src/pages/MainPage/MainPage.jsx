import React from 'react';

import { AuthSection } from 'components/MainPageComponents/AuthSection/AuthSection';
import { Description } from 'components/MainPageComponents/DescSection/Desc';

export default function MainPage() {
  return (
    <>
      <AuthSection />
      <Description />
    </>
  );
}
