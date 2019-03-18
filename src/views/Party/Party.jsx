import React, { useState, useEffect } from 'react';

import DataFetcher from '../../dataFetcher';
import PartyInfo from './PartyInfo';

function Party(props) {
  const [party, setParty] = useState({});

  useEffect(() => {
    const fetchParty = async () => {
      const data = await DataFetcher.getDataFromAPI(`party/${props.match.params.id}`);
      setParty(data);
    };

    fetchParty();
  });

  return <PartyInfo party={party} />;
}

export default Party;
