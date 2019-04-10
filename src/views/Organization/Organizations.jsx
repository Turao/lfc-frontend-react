import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  List,
  ListItem,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import DataFetcher from '../../dataFetcher';
import OrganizationInfo from './OrganizationInfo';

function Organizations() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      const data = await DataFetcher.get('organizations');
      setOrganizations(data);
    };

    fetchOrganizations();
  }, []);

  const renderOrganizationInfo = organization => (
    <ListItem button component={Link} to={`organization/${organization.id}`}>
      <OrganizationInfo organization={organization} />
    </ListItem>
  );

  return (
    <React.Fragment>

      <List>
        { organizations.map(organization => renderOrganizationInfo(organization)) }
      </List>

      <Button href="/organization/new">
        <AddIcon />
        Add Organization
      </Button>
    </React.Fragment>
  );
}

export default Organizations;
