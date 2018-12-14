import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function Politician(props) {
  const { politician } = props;
  const { something } = politician;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Politician.propTypes = {
  politician: PropTypes.shape({
  }).isRequired,
};

export default loadModelData(Politician, 'politician');
