import React, { useState, useEffect } from 'react';

import DataFetcher from '../../dataFetcher';
import FactCheckInfo from './FactCheckInfo';


function FactChecks() {
  const [factchecks, setFactChecks] = useState([]);

  useEffect(() => {
    const fetchFactChecks = async () => {
      const data = await DataFetcher.getDataFromAPI('factchecks');
      setFactChecks(data);
    };

    fetchFactChecks();
  });

  return (
    factchecks.map(factcheck => (
      <FactCheckInfo factcheck={factcheck} key={factcheck.id} />
    ))
  );
}

export default FactChecks;
