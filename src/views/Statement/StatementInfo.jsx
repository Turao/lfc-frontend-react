import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import StatementPropType from './proptype';


class StatementCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statement: props.statement,
    };
  }

  render() {
    const { statement } = this.state;
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
}

StatementCard.propTypes = {
  statement: StatementPropType.isRequired,
};

export default StatementCard;
