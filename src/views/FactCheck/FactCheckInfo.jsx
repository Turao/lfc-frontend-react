import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import FactCheckPropType from './proptype';


function FactCheckInfo({ factcheck }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          { factcheck.comment }
        </Typography>
      </CardContent>
    </Card>
  );
}

FactCheckInfo.propTypes = {
  factcheck: FactCheckPropType.isRequired,
};

export default FactCheckInfo;
