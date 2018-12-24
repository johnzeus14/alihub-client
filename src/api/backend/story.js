
import axios from 'axios'



export default {


axios.get(url, request) {
 return Vue.axios.get(url, request)
 .then((response) => Promise.resolve(response.body.data))
 .catch((error) => Promise.reject(error));
 },
 axios.post(url, request) {
 return Vue.axios.post(url, request)
 .then((response) => Promise.resolve(response))
 .catch((error) => Promise.reject(error));
 },
 axios.patch(url, request) {
 return Vue.axios.patch(url, request)
 .then((response) => Promise.resolve(response))
 .catch((error) => Promise.reject(error));
 },
 axios.delete(url, request) {
 return Vue.axios.delete(url, request)
 .then((response) => Promise.resolve(response))
 .catch((error) => Promise.reject(error));
 }

	
}