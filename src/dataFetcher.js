const DataFetcher = {

  async fetchData(endpoint, _id) {
    let url = `http://localhost:3001/api/${endpoint}/`;
    url = _id ? url + _id : url;

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
    } return null;
  },

};

export default DataFetcher;
