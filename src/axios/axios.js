import axios from 'axios'

const client = axios.create({
    baseURL: "http://localhost:3005"
})

client.interceptors.request.use(function (config) {
    config = {...config, headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}}
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  
export default client
