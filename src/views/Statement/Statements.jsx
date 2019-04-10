import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  List,
  ListItem,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import DataFetcher from '../../dataFetcher';
import StatementInfo from './StatementInfo';

function Statements() {
  const [statements, setStatements] = useState([]);

  useEffect(() => {
    const fetchStatements = async () => {
      const data = await DataFetcher.get('statements');
      setStatements(data);
    };

    fetchStatements();
  }, []);

  const renderStatementInfo = statement => (
    <ListItem button component={Link} to={`statement/${statement.id}`}>
      <StatementInfo statement={statement} />
    </ListItem>
  );

  return (
    <React.Fragment>

      <List>
        { statements.map(statement => renderStatementInfo(statement)) }
      </List>

      <Button href="/statement/new">
        <AddIcon />
        Add Statement
      </Button>
    </React.Fragment>
  );
}

export default Statements;
