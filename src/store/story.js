

import storyApi from '../../api/backend/story.js'

const initialState = {

  error: false,
  token: null,
};

const getters = {
  // isAuthenticated: state => !!state.token,
};

// const actions = {
//   createPost({ commit }, { email, password }) {
//     commit(LOGIN_BEGIN);
//     return auth.login(email, password)
//       .then(({ data }) => commit(SET_TOKEN, data.key))
//       .then(() => commit(LOGIN_SUCCESS))
//       .catch(() => commit(LOGIN_FAILURE));
//   },
//   updatePost({ commit }) {
//     return auth.logout()
//       .then(() => commit(LOGOUT))
//       .finally(() => commit(REMOVE_TOKEN));
//   },
//   deletePost({ commit }) {
//     const token = localStorage.getItem(TOKEN_STORAGE_KEY);

//     if (token) {
//       commit(SET_TOKEN, token);
//     } else {
//       commit(REMOVE_TOKEN);
//     }
//   },
// };
const mutations = {

   [GET_STORY](state) {
    state.authenticating = false;
    state.error = false;
  },
  [CREATE_STORY](state) {
    state.authenticating = true;
    state.error = false;
  },
  [UPDATE_STORY](state) {
    state.authenticating = false;
    state.error = true;
  },
  [DELETE_STORY](state) {
    state.authenticating = false;
    state.error = false;
  },

};

const actions = {
   getpost (context) => {
 return api.axios.get('/story')
 .then((response) => context.commit('GET_STORY', response))
 .catch((error) => context.commit('API_FAILURE', error));
 },
 createPost (context, data) => {
 return api.axios.get('/incrementers')
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