import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function Checker(props) {
  const { data: checker } = props;
  const { fullName, email } = checker;
  return (
    <React.Fragment>
      <h1>
        { fullName }
      </h1>
      { email }
    </React.Fragment>
  );
}

Checker.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default loadModelData(Checker, 'checker');
