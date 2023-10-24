import axios from 'axios';
import Cookie from 'js-cookie';

const instance= axios.create({
    baseURL:'http://localhost:8080'
})

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if(response.data.token && response.data.token!==''){
        Cookie.set('auth',response.data.token,{expires:90000});
        response.data.token= undefined;
        delete response.data.token;
    }

    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


  export default instance