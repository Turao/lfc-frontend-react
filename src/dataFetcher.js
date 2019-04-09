const DataFetcher = () => {
  const fetchData = async (endpoint, method, data) => {
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

    if (response.ok) {
      try {
        const res = await response.json();
        return res;
      } catch (_) {
        return {}; // could not decode json
      }
    }

    throw Error(`${response.statusText} (${response.status})`);
  };

  const get = async endpoint => fetchData(endpoint, 'GET');
  const del = async endpoint => fetchData(endpoint, 'DELETE');
  const post = async (endpoint, data) => fetchData(endpoint, 'POST', data);
  const put = async (endpoint, data) => fetchData(endpoint, 'PUT', data);
  const patch = async (endpoint, data) => fetchData(endpoint, 'PATCH', data);

  return {
    get,
    del,
    post,
    put,
    patch,
  };
};

export default DataFetcher();
