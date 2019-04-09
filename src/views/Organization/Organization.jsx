import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import DataFetcher from '../../dataFetcher';
import OrganizationInfo from './OrganizationInfo';

function Organization(props) {
  const [organization, setOrganization] = useState(null);

  useEffect(() => {
    const fetchOrganization = async () => {
      const data = await DataFetcher.get(`organization/${props.match.params.id}`);
      setOrganization(data);
    };

    fetchOrganization();
  }, []);

  
  const [redirectToOrganizations, setRedirectToOrganizations] = useState(false);
  const deleteOrganization = async () => {
    DataFetcher.del(`organization/${props.match.params.id}`);
    setOrganization(null);
    setRedirectToOrganizations(true);
  };

  if (redirectToOrganizations) {
    return <Redirect to="/organizations/" />;
  }

  if (organization) {
    return (
      <React.Fragment>
        <OrganizationInfo organization={organization} />
        <Button onClick={deleteOrganization}> Delete Organization </Button>
      </React.Fragment>
    );
  }

  return null;
}

export default Organization;
