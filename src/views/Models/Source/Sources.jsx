import React from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


function Sources(props) {
  const { data: sources } = props;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Sources.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default loadModelData(Sources, 'source');
