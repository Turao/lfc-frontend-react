import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import DataFetcher from '../../dataFetcher';
import StatementInfo from './StatementInfo';

function Statement(props) {
  const [statement, setStatement] = useState();

  useEffect(() => {
    const fetchStatement = async () => {
      const data = await DataFetcher.get(`statement/${props.match.params.id}`);
      setStatement(data);
    };

    fetchStatement();
  }, []);

  const [redirectToStatements, setRedirectToStatements] = useState(false);
  const deleteStatement = async () => {
    DataFetcher.del(`statement/${props.match.params.id}`);
    setStatement(null);
    setRedirectToStatements(true);
  };

  if (redirectToStatements) {
    return <Redirect to="/statements/" />;
  }

  if (statement) {
    return (
      <React.Fragment>
        <StatementInfo statement={statement} />
        <Button onClick={deleteStatement}> Delete Statement </Button>
      </React.Fragment>
    );
  }

  return null;
}

export default Statement;
