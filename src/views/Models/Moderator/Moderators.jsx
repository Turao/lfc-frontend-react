import React from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';
import ModeratorList from './ModeratorList';


function Moderators(props) {
  const { data: moderators } = props;
  return (
    <React.Fragment>
      <ModeratorList moderators={moderators} />
    </React.Fragment>
  );
}

Moderators.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default loadModelData(Moderators, 'moderators');
