const DataFetcher = {

  async getDataFromAPI(endpoint) {
    return this.fetchData(endpoint, 'GET');
  },

  async sendDataToAPI(endpoint, data) {
    return this.fetchData(endpoint, 'POST', data);
  },

  async fetchData(endpoint, method, data) {
    const url = new URL(endpoint, 'http://api.localhost:3001/');

    const response = await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: sessionStorage.getItem('userToken'),
      },
      body: JSON.stringify(data),
    });

    if (response.ok && response.body) {
      const res = await response.json();
      console.log(res);
      return res;
    }

    throw Error(`${response.statusText} (${response.status})`);
  },

};

export default DataFetcher;
