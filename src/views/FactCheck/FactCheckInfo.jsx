import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';

import {
  CheckCircle,
  CheckCircleOutline,
  ThumbDown,
  ThumbUp,
  ThumbsUpDown,
} from '@material-ui/icons';

import FactCheckPropType from './proptype';

function FactCheckInfo({ factcheck }) {
  console.log(factcheck);

  const renderVeracity = (veracity) => {
    if (veracity === 'true') return <ThumbUp color="primary" />;
    if (veracity === 'false') return <ThumbDown color="error" />;
    if (veracity === 'partial') return <ThumbsUpDown color="default" />;
  };
  
  const renderVerifiedByModerator = verified => (
    verified ? <CheckCircle color="default" /> : <CheckCircleOutline color="disabled" />
    );

    return (
      <Grid container direction="row">
        <Grid item>
          <Grid container direction="column">
            { renderVeracity(factcheck.veracity) }
            { renderVerifiedByModerator(factcheck.verifiedByModerator) }
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Typography variant="body1">
              { factcheck.comment }
            </Typography>

            <Typography variant="body2">
              @{ factcheck.checker.username }
            </Typography>

            <Typography variant="caption">
              { Date(factcheck.createdAt) }
            </Typography>


            <Typography variant="body1">
              { `Source: ${factcheck.source}` }
            </Typography>


            <Typography variant="body1">
              { factcheck.statement.content }
            </Typography>
          </Grid>


        </Grid>

    </Grid>
    
  );
}

FactCheckInfo.propTypes = {
  factcheck: FactCheckPropType.isRequired,
};

export default FactCheckInfo;
