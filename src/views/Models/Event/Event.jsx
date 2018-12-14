import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { List, ListSubheader } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

import loadModelData from '../ModelLoader';

function Event(props) {
  const { event } = props;
  const { name, organizations, moderators } = event;
  return (
    <Grid>
      <h1>
        { name }
      </h1>

      <List subheader={<ListSubheader>Organizations</ListSubheader>}>
        {organizations.map(o => (
          <Chip label={o.name} />))}
      </List>

      <List subheader={<ListSubheader>Moderators</ListSubheader>}>
        {moderators.map(m => (
          <Chip label={m.name} />))}
      </List>
    </Grid>
  );
}

Event.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    organization: PropTypes.object.isRequired,
  }).isRequired,
};

export default loadModelData(Event, 'event');
