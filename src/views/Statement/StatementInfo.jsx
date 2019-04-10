import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import StatementPropType from './proptype';

function StatementInfo({ statement }) {
  console.log(statement);
  return (
    <Card>
      <CardContent>
        <Typography variant="body1">
          { statement.content }
        </Typography>

        <Typography variant="overline">
          { statement.date }
        </Typography>
      </CardContent>
    </Card>
  );
}

StatementInfo.propTypes = {
  statement: StatementPropType.isRequired,
};

export default StatementInfo;
