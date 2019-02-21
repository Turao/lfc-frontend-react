const DataFetcher = {

  async fetchData(endpoint) {
    const url = new URL(endpoint, 'http://api.localhost:3001/');

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: sessionStorage.getItem('userToken'),
      },
    });

    if (response.ok && response.body) {
      const data = await response.json();
      console.log(data);
      return data;
    }

    throw Error(`${response.statusText} (${response.status})`);
  },

};

export default DataFetcher;
