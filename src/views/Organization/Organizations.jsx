import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import DataFetcher from '../../dataFetcher';
import OrganizationInfo from './OrganizationInfo';

function Organizations() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      const data = await DataFetcher.getDataFromAPI('organizations');
      setOrganizations(data);
    };

    fetchOrganizations();
  });

  return (
    <React.Fragment>

      {organizations.map(organization => (
        <OrganizationInfo organization={organization} key={organization.id} />
      ))}

      <Button href="/organization/new">
        <AddIcon />
        Add Organization
      </Button>
    </React.Fragment>
  );
}

export default Organizations;
