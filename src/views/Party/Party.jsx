import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import DataFetcher from '../../dataFetcher';
import PartyInfo from './PartyInfo';

function Party(props) {
  const [party, setParty] = useState(null);

  useEffect(() => {
    const fetchParty = async () => {
      const data = await DataFetcher.get(`party/${props.match.params.id}`);
      setParty(data);
    };

    fetchParty();
  }, []);


  const [redirectToParties, setRedirectToParties] = useState(false);
  const deleteParty = async () => {
    DataFetcher.del(`party/${props.match.params.id}`);
    setParty(null);
    setRedirectToParties(true);
  };

  if (redirectToParties) {
    return <Redirect to="/parties/" />;
  }

  if (party) {
    return (
      <React.Fragment>
        <PartyInfo party={party} />
        <Button onClick={deleteParty}> Delete Party </Button>
      </React.Fragment>
    );
  }

  return null;
}

export default Party;
