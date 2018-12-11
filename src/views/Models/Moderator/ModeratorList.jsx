import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import SimpleList from '../../../components/SimpleList';

class ModeratorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null,
    };
  }

  handleClick = (event) => {
    this.setState({ redirectTo: event });
  }

  toSimpleListItem(moderators) {
    return moderators.map(m => ({
      primary: m.user.fullName,
      secondary: m.event,
      // eslint-disable-next-line no-underscore-dangle
      moderatorId: m._id,
      onClick: this.handleClick,
    }));
  }

  render() {
    let { moderators } = this.props;
    moderators = this.toSimpleListItem(moderators);
    const { redirectTo } = this.state;

    return (
      <React.Fragment>
        <SimpleList items={moderators} />
        {
          redirectTo
            ? <Redirect to={`/moderator/${redirectTo.moderatorId}`} />
            : null
        }
      </React.Fragment>

    );
  }
}

ModeratorList.propTypes = {
  moderators: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ModeratorList;
