import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function Party(props) {
  const { data: party } = props;
  const { something } = party;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Party.propTypes = {
  data: PropTypes.shape({
  }).isRequired,
};

export default loadModelData(Party, 'party');
