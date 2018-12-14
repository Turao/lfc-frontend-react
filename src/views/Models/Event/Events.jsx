import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EventList from './EventList';

import loadModelData from '../ModelLoader';


function Events(props) {
  const LatestEvents = loadModelData(EventList, 'events/latest');
  const AllEvents = loadModelData(EventList, 'events');

  return (
    <Grid container direction="row">
      <LatestEvents title="Latest Events" {...props} />
      <AllEvents title="All Events" {...props} />
      <Fab
        color="primary"
        component={Link}
        to="/events/new"
      >
        <AddIcon />
      </Fab>
    </Grid>
  );
}

Events.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Events;
