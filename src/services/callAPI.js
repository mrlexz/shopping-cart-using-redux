import axios from 'axios';

export const callAPI = (data, url, method = 'GET', config = {}, params) => {
  return axios({
        method: method,
        url: url,
        data: data,
        headers: config,
        params: params,
      });
};