import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';


function SimpleList(props) {
  const { items, title } = props;
  if (items) {
    return (
      <List
        component="nav"
        subheader={<ListSubheader>{title}</ListSubheader>}
      >
        {
          items.map((item, i) => (
            <ListItem button key={`SimpleListItem-${i + 1}`}>
              <ListItemText
                primary={item.primary}
                secondary={item.secondary}
                onClick={() => { item.onClick(item); }}
                inset
              />
            </ListItem>
          ))
      }
      </List>
    );
  } return null;
}

SimpleList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

SimpleList.defaultProps = {
  title: '',
};

export default SimpleList;
