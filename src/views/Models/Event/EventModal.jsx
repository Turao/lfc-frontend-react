import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import EventForm from './EventForm';


const styles = theme => ({
  paper: {
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
  },
});


class EventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  onEventCreated = () => {
    const { refresh } = this.props;
    this.handleClose();
    refresh();
  }

  onEventCreationFailure = () => {
    console.error('failed to create event');
  }

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Fab
          color="primary"
          aria-label="Add"
          onClick={this.handleOpen}
        >
          <AddIcon />
        </Fab>

        <Modal
          aria-labelledby="Add Event Modal"
          open={open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <EventForm
              onSuccess={this.onEventCreated}
              onFailure={this.onEventCreationFailure}
            />
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

EventModal.propTypes = {
  refresh: PropTypes.func.isRequired,
};

export default withStyles(styles)(EventModal);
