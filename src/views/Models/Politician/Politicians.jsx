import React from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


function Politicians(props) {
  const { politicians } = props;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Politicians.propTypes = {
  politicians: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default loadModelData(Politicians, 'politicians');
