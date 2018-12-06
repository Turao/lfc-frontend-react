import React, { Component } from 'react';
import SimpleList from '../components/SimpleList';
import loadModelData from '../components/ModelLoader';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
  };

  renderModerators() {
    return (
      <div>
        <h2> Moderators </h2>
        {
          this.state.moderators.map(moderator => {
            return <div/>
            // return <Chip label={moderator.user.fullName} />
          })
        }
      </div>
    )
  }

  renderStatements() {
    return (
      <SimpleList items={this.state.statements}/>
    )
  }

  render() {
    return (
      <div>
        <h1> Event: {this.state.name} </h1>
        <h2> Organization: {this.state.organization.name} </h2>
        { this.renderModerators() }
        { this.renderStatements() }
      </div>
    )
  }
}

export default loadModelData(Event, 'event');
