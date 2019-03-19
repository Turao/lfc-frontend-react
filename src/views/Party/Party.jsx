import React, { useState, useEffect } from 'react';

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

  return party ? <PartyInfo party={party} /> : null;
}

export default Party;
