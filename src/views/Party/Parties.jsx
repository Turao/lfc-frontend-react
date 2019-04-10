import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  List,
  ListItem,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import DataFetcher from '../../dataFetcher';
import PartyInfo from './PartyInfo';

function Parties() {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const fetchParties = async () => {
      const data = await DataFetcher.get('parties');
      setParties(data);
    };

    fetchParties();
  }, []);

  const renderPartyInfo = party => (
    <ListItem button component={Link} to={`party/${party.id}`}>
      <PartyInfo party={party} />
    </ListItem>
  );

  return (
    <React.Fragment>

      <List>
        { parties.map(party => renderPartyInfo(party)) }
      </List>

      <Button href="/party/new">
        <AddIcon />
        Add Party
      </Button>
    </React.Fragment>
  );
}

export default Parties;
