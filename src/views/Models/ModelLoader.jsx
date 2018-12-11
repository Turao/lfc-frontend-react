import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import DataFetcher from '../../dataFetcher';

export default function loadModelData(WrappedComponent, endpoint) {
  class ModelLoader extends Component {
    constructor(props) {
      super(props);
      this.state = {
        _id: props.match.params.id,
        data: null,
      };
    }

    componentDidMount() {
      this.fetchData();
    }

    refresh = async () => {
      // function to be injected into wrapped components
      // so they can ask for a refresh
      this.fetchData(); // just delegate to fetch
    }

    async fetchData() {
      const { _id } = this.state;
      const data = await DataFetcher.fetchData(endpoint, _id);
      console.log(data);
      this.setState({ data });
    }


    renderData() {
      const { data } = this.state;
      // delegate rendering
      return (
        <WrappedComponent
          data={data}
          refresh={this.refresh}
          {...this.props}
        />
      );
    }

    static renderLoading() {
      return <CircularProgress />;
    }

    render() {
      const { data } = this.state;
      return data ? this.renderData() : ModelLoader.renderLoading();
    }
  }

  // eslint-disable-next-line no-use-before-define
  ModelLoader.displayName = `ModelLoader(${getDisplayName(WrappedComponent)})`;
  return ModelLoader;
}


function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
