import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function User(props) {
  const { user } = props;
  const { name, email } = user;
  return (
    <React.Fragment>
      { name }
      { email }
    </React.Fragment>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default loadModelData(User, 'user');
