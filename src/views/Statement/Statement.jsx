import React, { useState, useEffect } from 'react';

import DataFetcher from '../../dataFetcher';
import StatementInfo from './StatementInfo';

function Statement(props) {
  const [statement, setStatement] = useState();

  useEffect(() => {
    const fetchStatement = async () => {
      const data = await DataFetcher.getDataFromAPI(`statement/${props.match.params.id}`);
      setStatement(data);
    };

    fetchStatement();
  }, []);

  return statement ? <StatementInfo statement={statement} /> : null;
}

export default Statement;
