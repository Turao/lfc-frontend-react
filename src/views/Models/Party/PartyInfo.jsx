import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import PartyPropType from './proptype';


class PartyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      party: props.party,
    };
  }

  render() {
    const { party } = this.state;
    return (
      <Card>
        <CardContent>
          <Typography variant="h5">
            { party.partyname }
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

PartyInfo.propTypes = {
  party: PartyPropType.isRequired,
};

export default PartyInfo;
