import React from 'react';
import { useAdaptiveImage } from '../../../hooks/useAdaptiveImage';
import {
  ContainerMain,
  WrapperDesc,
  DescSection,
  DescSectionBox,
  DescSectionBoxСontr,
  ImageWrapper,
  Number,
  Title,
  TitleContr,
  SubTitle,
  Text,
} from './Desc.styled';

export const Description = () => {

const { isRetina, isMobile, isTablet, isDesktop } = useAdaptiveImage();

  return (
    <ContainerMain>
      <WrapperDesc>
        <DescSection>
          <DescSectionBox>
            <Number>1.</Number>
            <Title>CALENDAR</Title>
            <SubTitle>VIEW</SubTitle>
            <Text>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </Text>
          </DescSectionBox>
          <ImageWrapper>
            {isMobile && (
              <img
                src={
                  isRetina
                    ? require('../../../images/mainPage/mobile/mobile_calendar@2x.png')
                    : require('../../../images/mainPage/mobile/mobile_calendar.png')
                }
                alt="demo of calendar views"
                width="335"
                height="457"
              />
            )}
            {isTablet && (
              <img
                src={
                  isRetina
                    ? require('../../../images/mainPage/tablet/tablet_calendar@2x.png')
                    : require('../../../images/mainPage/tablet/tablet_calendar.png')
                }
                alt="demo of calendar views"
                width="704"
                height="700"
              />
            )}
            {isDesktop && (
              <img
                src={
                  isRetina
                    ? require('../../../images/mainPage/desktop/desktop_calendar@2x.png')
                    : require('../../../images/mainPage/desktop/desktop_calendar.png')
                }
                alt="demo of calendar views"
                width="604"
                height="700"
              />
            )}
          </ImageWrapper>
        </DescSection>

        <DescSection>
          <DescSectionBoxСontr>
            <Number>2.</Number>
            <TitleContr>SIDEBAR</TitleContr>
            <Text>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </Text>
          </DescSectionBoxСontr>
          <ImageWrapper>
            {isMobile && (
              <img
                src={
                  isRetina
                    ? require('../../../images/mainPage/mobile/mobile_sidebar@2x.png')
                    : require('../../../images/mainPage/mobile/mobile_sidebar.png')
                }
                alt="demo of sidebar settings"
                width="335"
                height="457"
              />
            )}
            {isTablet && (
              <img
                src={
                  isRetina
                    ? require('../../../images/mainPage/tablet/tablet_sidebar@2x.png')
                    : require('../../../images/mainPage/tablet/tablet_sidebar.png')
                }
                alt="demo of sidebar settings"
                width="704"
                height="700"
              />
            )}
            {isDesktop && (
              <img
                src={
                  isRetina
                    ? require('../../../images/mainPage/desktop/desktop_sidebar@2x.png')
                    : require('../../../images/mainPage/desktop/desktop_sidebar.png')
                }
                alt="demo of sidebar settings"
                width="604"
                height="700"
              />
            )}
            />
          </ImageWrapper>
        </DescSection>

        <DescSection>
          <DescSectionBox>
            <Number>3.</Number>
            <Title>ALL IN</Title>
            <SubTitle>ONE</SubTitle>
            <Text>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </Text>
          </DescSectionBox>
          <ImageWrapper>
            {isMobile && (
              <img
                src={
                  isRetina
                    ? require('../../../images/mainPage/mobile/mobile_all@2x.png')
                    : require('../../../images/mainPage/mobile/mobile_all.png')
                }
                alt="demo of calendar with to-do lists"
                width="335"
                height="457"
              />
            )}
            {isTablet && (
              <img
                src={
                  isRetina
                    ? require('../../../images/mainPage/tablet/tablet_all@2x.png')
                    : require('../../../images/mainPage/tablet/tablet_all.png')
                }
                alt="demo of calendar with to-do lists"
                width="704"
                height="700"
              />
            )}
            {isDesktop && (
              <img
                src={
                  isRetina
                    ? require('../../../images/mainPage/desktop/desktop_all@2x.png')
                    : require('../../../images/mainPage/desktop/desktop_all.png')
                }
                alt="demo of calendar with to-do lists"
                width="604"
                height="700"
              />
            )}
          </ImageWrapper>
        </DescSection>
      </WrapperDesc>
    </ContainerMain>
  );
};
