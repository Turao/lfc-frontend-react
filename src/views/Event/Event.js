import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import MenuAppBar from '../components/MenuAppBar';
import SimpleList from '../components/SimpleList';

const styles = {
};



class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: props.match.params.id,
      data: null,
    };
  };


  componentDidMount() {
    this.fetchData();
  };

  async fetchData() {
    let response = await fetch('http://localhost:3001/api/event/'+this.state._id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': sessionStorage.getItem('userToken'),
      },
    })

    if (response.ok && response.body) {
      let data = await response.json();
      console.log(data);
      this.setState({data});
    }
  };


  renderData() {
    console.log(this.state.data);
    return (
      <div>
        <h1> Event: {this.state.data.name} </h1>
        <h2> Organization: {this.state.data.organization.name} </h2>
        { this.renderModerators() }
        { this.renderStatements() }
      </div>
    )
  }

  renderModerators() {
    return (
      <div>
        <h2> Moderators </h2>
        {
          this.state.data.moderators.map(moderator => {
            return <div/>
            // return <Chip label={moderator.user.fullName} />
          })
        }
      </div>
    )
  }

  renderStatements() {
    return (
      <SimpleList items={this.state.data.statements}/>
    )
  }

  render() {
    return (
      <div>
        <MenuAppBar/>
        
        { this.state.data ? this.renderData() : null }
        
      </div>
    );
  }
}

export default withStyles(styles)(Event);
