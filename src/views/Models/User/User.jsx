import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function User(props) {
  const { data: user } = props;
  const { fullName, email } = user;
  return (
    <React.Fragment>
      { fullName }
      { email }
    </React.Fragment>
  );
}

User.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default loadModelData(User, 'user');
