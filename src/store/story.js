

import storyApi from '../../api/story'

const initialState = {

  loading:true;
};

const getters = {
  // isAuthenticated: state => !!state.token,
};


const mutations = {

   [GET_STORY](state) {
    state.loading = false;

  },
  [CREATE_STORY](state) {
    state.loading = false;
   
  },
  [UPDATE_STORY](state) {
    state.loading = false;
  
  },
  [DELETE_STORY](state) {
    state.loading = false;

  },

};

const actions = {
  getpost (context) => {
     return api.axios.get('http://127.0.0.1:8000/story/ + id')
     .then((response) => context.commit('GET_STORY', response))
     .catch((error) => context.commit('API_FAILURE', error));
     },
 createPost (context, data) => {
     return api.axios.get('http://127.0.0.1:8000/story/')
     .then((response) => context.commit('CREATE_STORY', response))
     .catch((error) => context.commit('API_FAILURE', error));
     },

 updatePost (context, data) => {
     return api.axios.post(data.url, data.request)
     .then((response) => context.commit('UPDATE_STORY', response))
     .catch((error) => context.commit('API_FAILURE', error));
     },

deletePost (context, url) => {
    return api.axios.patch(data.url, data.request)
    .then((response) => context.commit('DELETE_STORY', response))
    .catch((error) => context.commit('API_FAILURE', error));
    }

};





export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};