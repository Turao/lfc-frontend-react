import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import DataFetcher from '../../dataFetcher';
import PartyInfo from './PartyInfo';

function Parties() {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const fetchParties = async () => {
      const data = await DataFetcher.getDataFromAPI('parties');
      setParties(data);
    };

    fetchParties();
  }, []);

  return (
    <React.Fragment>

      {parties.map(party => (
        <PartyInfo party={party} key={party.id} />
      ))}

      <Button href="/party/new">
        <AddIcon />
        Add Party
      </Button>
    </React.Fragment>
  );
}

export default Parties;
