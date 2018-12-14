import React from 'react';
import PropTypes from 'prop-types';

// import CheckerList from './CheckersList';
import loadModelData from '../ModelLoader';


function Users(props) {
  const { users } = props;
  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default loadModelData(Users, 'users');
