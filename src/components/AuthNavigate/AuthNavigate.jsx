import React from 'react';
import PropTypes from 'prop-types';

import { RedirectLink } from './AuthNavigate.styled';

export const AuthNavigate = ({ link, text }) => {
  return (
    <div>
      <RedirectLink to={link}>{text}</RedirectLink>
    </div>
  );
};

AuthNavigate.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};