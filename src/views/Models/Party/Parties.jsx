import React from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


function Parties(props) {
  const { data: parties } = props;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Parties.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default loadModelData(Parties, 'parties');
