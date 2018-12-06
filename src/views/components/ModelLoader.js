import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


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
      let url = 'http://localhost:3001/api/'+endpoint+'/'
      url = this.state._id ? url+this.state._id : url
      
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

    renderLoading() {
      return (
        <CircularProgress/>
      )
    }
  
  
    render() {
      return this.state.data ? this.renderData() : this.renderLoading()
    }

  }

  ModelLoader.displayName = `ModelLoader(${getDisplayName(WrappedComponent)})`;
  return ModelLoader;
}


function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}