import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import MenuAppBar from '../components/MenuAppBar';

const styles = {
};



class User extends Component {
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
    let response = await fetch('http://localhost:3001/api/user/'+this.state._id, {
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
        <h1> Full Name: {this.state.data.fullName} </h1>
        <p> E-mail: {this.state.data.email} </p>
      </div>
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

export default withStyles(styles)(User);
