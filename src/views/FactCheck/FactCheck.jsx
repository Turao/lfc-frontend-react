import React, { useState, useEffect } from 'react';

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

  return factcheck ? <FactCheckInfo factcheck={factcheck} /> : null;
}

export default FactCheck;
