import React from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


function Sources(props) {
  const { sources } = props;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Sources.propTypes = {
  sources: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default loadModelData(Sources, 'source');
