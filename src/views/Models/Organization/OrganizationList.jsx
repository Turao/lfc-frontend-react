import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import SimpleList from '../../components/SimpleList';

class OrganizationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizations: this.toSimpleListItem(this.props.organizations),
      redirectTo: null,
    };
  };

  toSimpleListItem(orgs) {
    return orgs.map(o => {
      return {
        primary: o.name,
        organizationId: o._id,
        onClick: this.handleClick.bind(this),
      }
    })
  }

  handleClick(org) {
    console.log(org);
    this.setState({redirectTo: org});
  };

  render() {
    return (
      <div>
        <SimpleList items={this.state.organizations}></SimpleList>
        { 
          this.state.redirectTo ? 
            <Redirect to={'/organization/' + this.state.redirectTo.organizationId}/> 
            : null 
        }
      </div>

    );
  }
}

export default OrganizationList;
