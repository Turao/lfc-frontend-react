import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import EventForm from './EventForm';


const styles = theme => ({
  paper: {
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

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          onClick={this.handleOpen}
        >
          <AddIcon />
        </Button>

        <Modal
          aria-labelledby="Add Event Modal"
          open={open}
          onClose={this.handleClose}
        >
          <div className="paper">
            <EventForm />
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(EventModal);
