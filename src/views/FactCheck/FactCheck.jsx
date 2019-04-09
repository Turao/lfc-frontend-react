import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import DataFetcher from '../../dataFetcher';
import FactCheckInfo from './FactCheckInfo';

function FactCheck(props) {
  const [factcheck, setFactCheck] = useState(null);

  useEffect(() => {
    const fetchFactCheck = async () => {
      const data = await DataFetcher.get(`factcheck/${props.match.params.id}`);
      setFactCheck(data);
    };

    fetchFactCheck();
  }, []);

  const [redirectToFactChecks, setRedirectToFactChecks] = useState(false);
  const deleteFactCheck = async () => {
    DataFetcher.del(`factcheck/${props.match.params.id}`);
    setFactCheck(null);
    setRedirectToFactChecks(true);
  };

  if (redirectToFactChecks) {
    return <Redirect to="/factchecks/" />;
  }

  if (factcheck) {
    return (
      <React.Fragment>
        <FactCheckInfo factcheck={factcheck} />
        <Button onClick={deleteFactCheck}> Delete Fact Check </Button>
      </React.Fragment>
    );
  }

  return null;
}

export default FactCheck;
