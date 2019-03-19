import React, { useState, useEffect } from 'react';

import DataFetcher from '../../dataFetcher';
import OrganizationInfo from './OrganizationInfo';

function Organization(props) {
  const [organization, setOrganization] = useState(null);

  useEffect(() => {
    const fetchOrganization = async () => {
      const data = await DataFetcher.getDataFromAPI(`organization/${props.match.params.id}`);
      setOrganization(data);
    };

    fetchOrganization();
  }, []);

  return organization ? <OrganizationInfo organization={organization} /> : null;
}

export default Organization;
