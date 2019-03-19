import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
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

  return (
    <React.Fragment>

      {factchecks.map(factcheck => (
        <Link to={`/factcheck/${factcheck.id}`} key={factcheck.id}>
          <FactCheckInfo factcheck={factcheck} key={factcheck.id} />
        </Link>
      ))}

      <Button href="/factcheck/new">
        <AddIcon />
        Add FactCheck
      </Button>
    </React.Fragment>
  );
}

export default FactChecks;
