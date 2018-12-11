import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function Statement(props) {
  const { data: statement } = props;
  const { something } = statement;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Statement.propTypes = {
  data: PropTypes.shape({
  }).isRequired,
};

export default loadModelData(Statement, 'statement');
