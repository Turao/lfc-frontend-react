import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function Moderator(props) {
  const { data: moderator } = props;
  const { something } = moderator;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Moderator.propTypes = {
  data: PropTypes.shape({
  }).isRequired,
};

export default loadModelData(Moderator, 'moderator');
