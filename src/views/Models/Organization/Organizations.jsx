import React from 'react';
import PropTypes from 'prop-types';

import OrganizationList from './OrganizationList';
import loadModelData from '../ModelLoader';


function Organizations(props) {
  const { data: organizations } = props;
  return (
    <React.Fragment>
      <OrganizationList organizations={organizations} />
    </React.Fragment>
  );
}

Organizations.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default loadModelData(Organizations, 'organizations');
