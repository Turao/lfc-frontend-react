import React, { useState, useEffect } from 'react';

import DataFetcher from '../../dataFetcher';
import FactCheckInfo from './FactCheckInfo';

function FactCheck(props) {
  const [factcheck, setFactCheck] = useState({});

  useEffect(() => {
    const fetchFactCheck = async () => {
      const data = await DataFetcher.getDataFromAPI(`factcheck/${props.match.params.id}`);
      setFactCheck(data);
    };

    fetchFactCheck();
  });

  return <FactCheckInfo factcheck={factcheck} />;
}

export default FactCheck;
