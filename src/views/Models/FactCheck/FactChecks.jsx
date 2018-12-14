import React from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


function FactChecks(props) {
  const { factChecks } = props;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

FactChecks.propTypes = {
  factChecks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default loadModelData(FactChecks, 'factChecks');
