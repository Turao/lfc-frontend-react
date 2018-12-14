import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';

import {
  List, ListItem, ListItemText, Chip,
} from '@material-ui/core';

// Submit Button
import Button from '@material-ui/core/Button';


class ListWithChips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
  }

  handleSelected = item => () => {
    let { selected } = this.state;
    const { onChange } = this.props;

    if (!selected.includes(item)) {
      selected.push(item);
    } else {
      selected = selected.filter(i => i !== item);
    }

    this.setState({ selected });
    onChange(selected);
  }

  render() {
    const { selected } = this.state;
    const { items, itemLabel } = this.props;

    return (
      <List>

        {selected.map(item => (
          <Chip label={item[itemLabel]} onDelete={this.handleSelected(item)} />
        ))}

        {items.map((item) => {
          if (!selected.includes(item)) {
            return (
              <ListItem
                button
                onClick={this.handleSelected(item)}
                selected={selected.includes(item)}
              >
                <ListItemText primary={item[itemLabel]} />
              </ListItem>
            );
          }
        })}

      </List>
    );
  }

}

export default ListWithChips;
