import React from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


function FactChecks(props) {
  const { data: factChecks } = props;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

FactChecks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default loadModelData(FactChecks, 'factChecks');
