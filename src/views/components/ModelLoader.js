import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import MenuAppBar from './MenuAppBar';


export default function loadModelData(WrappedComponent, endpoint) {
  class ModelLoader extends Component {
    
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
      const url = 'http://localhost:3001/api/'+endpoint+'/'+this.state._id
      let response = await fetch(url, {
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
      return <WrappedComponent data={this.state.data} {...this.props}/> // delegate rendering
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

  ModelLoader.displayName = `ModelLoader(${getDisplayName(WrappedComponent)})`;
  return ModelLoader;
}


function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}