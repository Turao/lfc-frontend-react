import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function FactCheck(props) {
  const { data: factCheck } = props;
  const { something } = factCheck;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

FactCheck.propTypes = {
  data: PropTypes.shape({
  }).isRequired,
};

export default loadModelData(FactCheck, 'factCheck');
