import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
};

class SimpleList extends Component {
  render() {
    if (this.props.items) {
      return (
        <List component="nav">
        {
            this.props.items.map( (item, i) => {
              return (
                <ListItem button key={i}>
                  <ListItemText 
                    primary={item.primary}
                    secondary={item.secondary}
                    onClick={ _ => { item.onClick(item) } }
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