import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import SimpleList from '../../components/SimpleList';

class OrganizationList extends Component {
  constructor(props) {
    super(props);
    const { organizations } = props;

    this.state = {
      organizations: this.toSimpleListItem(organizations),
      redirectTo: null,
    };
  }

  handleClick = (org) => {
    console.log(org);
    this.setState({ redirectTo: org });
  }

  toSimpleListItem(organizations) {
    return organizations.map(organization => ({
      primary: organization.name,
      // eslint-disable-next-line no-underscore-dangle
      organizationId: organization._id,
      onClick: this.handleClick,
    }));
  }

  render() {
    const { organizations, redirectTo } = this.state;

    return (
      <React.Fragment>
        <SimpleList items={organizations} />
        {
          redirectTo
            ? <Redirect to={`/organization/${redirectTo.organizationId}`} />
            : null
        }
      </React.Fragment>

    );
  }
}

OrganizationList.propTypes = {
  organizations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OrganizationList;
