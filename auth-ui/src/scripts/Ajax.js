let base = 'http://localhost:8080';


// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return axios.get(`${base}/`+url, params).then(res => res.data);
    return _api_base('GET', 'text/plain', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return _api_base('POST', 'application/json', url, params, success, failure)
  }
}


export const requestLogin = params => {
  return axios.post(`${base}/login`, params).then(res => res.data);
};

export const getUserList = params => {
  return axios.get(`${base}/user/list`, {params: params});
};

export const getUserListPage = params => {
  return axios.get(`${base}/user/listpage`, {params: params});
};

export const removeUser = params => {
  return axios.get(`${base}/user/remove`, {params: params});
};

export const batchRemoveUser = params => {
  return axios.get(`${base}/user/batchremove`, {params: params});
};

export const editUser = params => {
  return axios.get(`${base}/user/edit`, {params: params});
};

export const addUser = params => {
  return axios.get(`${base}/user/add`, {params: params});
};
