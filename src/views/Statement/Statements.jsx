import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import DataFetcher from '../../dataFetcher';
import StatementInfo from './StatementInfo';

function Statements() {
  const [statements, setStatements] = useState([]);

  useEffect(() => {
    const fetchStatements = async () => {
      const data = await DataFetcher.getDataFromAPI('statements');
      setStatements(data);
    };

    fetchStatements();
  }, []);

  return (
    <React.Fragment>

      {statements.map(statement => (
        <StatementInfo statement={statement} key={statement.id} />
      ))}

      <Button href="/statement/new">
        <AddIcon />
        Add Statement
      </Button>
    </React.Fragment>
  );
}

export default Statements;
