import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function Source(props) {
  const { data: source } = props;
  const { something } = source;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Source.propTypes = {
  data: PropTypes.shape({
  }).isRequired,
};

export default loadModelData(Source, 'source');
