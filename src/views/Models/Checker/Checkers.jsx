import React from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


function Checkers(props) {
  const { data: checkers } = props;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Checkers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default loadModelData(Checkers, 'checkers');
