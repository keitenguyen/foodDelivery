import {isEmpty} from 'lodash';

const request = async (url, options) => {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const get = async (url, options) => {
  let query = '';
  if (!isEmpty(options)) {
    const esc = encodeURIComponent;
    query = Object.keys(options)
      .map(k => esc(k) + '=' + esc(options[k]))
      .join('&');
  }

  url += '?' + query;
  try {
    return await request(url);
  } catch (error) {
    console.log(error);
  }
};

const post = async (url, options) => {
  const params = {...options};
  params.method = 'POST';
  try {
    return await request(url, params);
  } catch (error) {
    console.log(error);
  }
};

export {request, get, post};
