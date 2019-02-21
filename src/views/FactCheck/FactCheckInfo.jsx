import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import FactCheckPropType from './proptype';


class FactCheckInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factcheck: props.factcheck,
    };
  }

  render() {
    const { factcheck } = this.state;
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
}

FactCheckInfo.propTypes = {
  factcheck: FactCheckPropType.isRequired,
};

export default FactCheckInfo;
