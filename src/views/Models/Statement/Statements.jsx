import React from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


function Statements(props) {
  const { statements } = props;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Statements.propTypes = {
  statements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default loadModelData(Statements, 'statements');
