let base = 'http://localhost:8080';


// 返回在vue模板中的调用接口
export default {
  get: (url, params, success_call, failure_call) => {
    axios.get(base + url, {
      params: params
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }
}

