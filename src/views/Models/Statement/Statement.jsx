import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function Statement(props) {
  const { statement } = props;
  const { something } = statement;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Statement.propTypes = {
  statement: PropTypes.shape({
  }).isRequired,
};

export default loadModelData(Statement, 'statement');
