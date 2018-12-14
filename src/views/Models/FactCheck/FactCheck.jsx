import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function FactCheck(props) {
  const { factCheck } = props;
  const { something } = factCheck;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

FactCheck.propTypes = {
  factCheck: PropTypes.shape({
  }).isRequired,
};

export default loadModelData(FactCheck, 'factCheck');
