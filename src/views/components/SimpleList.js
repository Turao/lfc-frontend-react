import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = {
};

class SimpleList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.items) {
      return (
        <List component="nav">
        {
            this.props.items.map( item => {
              return (
                <ListItem button>
                  <ListItemText 
                    primary={item.primary}
                    secondary={item.secondary}
                    inset={true}>
                  </ListItemText>
                </ListItem>
              )
            })
        }
      </List>
      )
    }
    else return null;
  }
}

SimpleList.propTypes = {
  props: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);