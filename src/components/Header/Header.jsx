import { useLocation } from 'react-router';
import {
  Container,
  Menu,
  Title,
  BurgerButton,
  BurgerIcon,
  ButtonFeedback,
  GooseTask,
  MotivationTask,
} from './Header.styled';
import gooseTask from '../../images/goose-task.svg';
import Box from 'components/Box/Box';
import { UserInfo } from './UserInfo/UserInfo';
import { useState } from 'react';
import { useAdaptiveImage } from 'hooks/useAdaptiveImage';
import { FeedbackModal } from 'components/FeedbackModal/FeedbackModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewById } from 'redux/reviews/operations';
import { selectUser } from 'redux/auth/selectors';

export const Header = ({ onSidebarShow }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [showModal, setShowModal] = useState(false);
  const { isTablet, isMobile } = useAdaptiveImage();
  const TabletOrMobile = isTablet || isMobile;

  const { pathname } = useLocation();
  const currentPath = pathname;

  const isCalendarPage = currentPath.startsWith('/calendar/day');

  let pageTitle = '';

  const words = pathname.split('/');
  const title = words.find(
    word => word === 'calendar' || word === 'account' || word === 'statistics'
  );

  switch (title) {
    case 'calendar':
      pageTitle = 'Calendar';
      break;
    case 'account':
      pageTitle = 'User Profile';
      break;
    case 'statistics':
      pageTitle = 'Statistics';
      break;
    default:
      pageTitle = '';
      break;
  }

  const openModal = () => {
    dispatch(fetchReviewById(user.id));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <Box display="flex" alignItems="center" gap="8px">
          {isCalendarPage && <GooseTask src={gooseTask} alt="goose" />}
          <div>
            <Title>{pageTitle}</Title>

            {isCalendarPage && (
              <MotivationTask>
                Let go of the past and focus on the present!
              </MotivationTask>
            )}
          </div>
          {TabletOrMobile && (
            <BurgerButton type="button" onClick={() => onSidebarShow()}>
              <BurgerIcon />
            </BurgerButton>
          )}
        </Box>
        <Menu>
          <ButtonFeedback type="button" onClick={openModal}>
            Feedback
          </ButtonFeedback>
          <UserInfo />
        </Menu>
        {showModal && <FeedbackModal onClose={closeModal} />}
      </Container>
    </>
  );
};
