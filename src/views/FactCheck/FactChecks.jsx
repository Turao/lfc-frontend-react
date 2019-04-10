import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  List,
  ListItem,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import DataFetcher from '../../dataFetcher';
import FactCheckInfo from './FactCheckInfo';

function FactChecks() {
  const [factchecks, setFactChecks] = useState([]);

  useEffect(() => {
    const fetchFactChecks = async () => {
      const data = await DataFetcher.get('factchecks');
      setFactChecks(data);
    };

    fetchFactChecks();
  }, []);

  const renderFactCheckInfo = factcheck => (
    <ListItem button component={Link} to={`factchecks/${factcheck.id}`}>
      <FactCheckInfo factcheck={factcheck} />
    </ListItem>
  );

  return (
    <React.Fragment>

      <List>
        { factchecks.map(factcheck => renderFactCheckInfo(factcheck)) }
      </List>

      <Button href="/factcheck/new">
        <AddIcon />
        Add FactCheck
      </Button>
    </React.Fragment>
  );
}

export default FactChecks;
