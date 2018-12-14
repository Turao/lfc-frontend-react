import React from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

function Organization(props) {
  const { organization } = props;
  const { name } = organization;
  return (
    <React.Fragment>
      { name }
    </React.Fragment>
  );
}

Organization.propTypes = {
  organization: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default loadModelData(Organization, 'organization');
