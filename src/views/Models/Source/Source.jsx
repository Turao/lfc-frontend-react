import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function Source(props) {
  const { source } = props;
  const { something } = source;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Source.propTypes = {
  source: PropTypes.shape({
  }).isRequired,
};

export default loadModelData(Source, 'source');
