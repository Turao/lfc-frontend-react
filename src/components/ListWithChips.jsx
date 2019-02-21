import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  List, ListItem, ListItemText, Chip,
} from '@material-ui/core';

class ListWithChips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOne: null,
      selectedMany: [],
    };
  }

  handleSelected = item => () => {
    let { selectedOne, selectedMany } = this.state;
    const { onChange, limit } = this.props;

    if (limit === 1) {
      selectedOne = selectedOne !== item ? item : null;
      this.setState({ selectedOne });
      onChange(selectedOne);
      return;
    }

    if (!selectedMany.includes(item) && selectedMany.length < limit) {
      selectedMany.push(item);
    } else {
      selectedMany = selectedMany.filter(i => i !== item);
    }
    this.setState({ selectedMany });
    onChange(selectedMany);
  }


  renderForOne() {
    const { selectedOne } = this.state;
    const { items, itemLabel } = this.props;
    const chip = selectedOne !== null
      ? <Chip label={selectedOne[itemLabel]} onDelete={this.handleSelected(selectedOne)} />
      : null;
    const list = (
      items.map((item) => {
        if (selectedOne !== item) {
          return (
            <ListItem
              button
              onClick={this.handleSelected(item)}
            >
              <ListItemText primary={item[itemLabel]} />
            </ListItem>
          );
        }
      })
    );
    return (
      <List>
        { chip }
        { list }
      </List>
    );
  }


  renderForMany() {
    const { selectedMany } = this.state;
    const { items, itemLabel } = this.props;
    const chips = (
      selectedMany.map(item => (
        <Chip
          label={item[itemLabel]}
          onDelete={this.handleSelected(item)}
        />
      ))
    );
    const list = (
      items.map((item) => {
        if (!selectedMany.includes(item)) {
          return (
            <ListItem
              button
              onClick={this.handleSelected(item)}
            >
              <ListItemText primary={item[itemLabel]} />
            </ListItem>
          );
        }
      })
    );
    return (
      <List>
        { chips }
        { list }
      </List>
    );
  }

  render() {
    const { limit } = this.props;
    return limit === 1 ? this.renderForOne() : this.renderForMany();
  }
}

ListWithChips.defaultProps = {
  limit: 32,
};

ListWithChips.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  limit: PropTypes.number,
};

export default ListWithChips;
