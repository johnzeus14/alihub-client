import auth from '../api/post';

import  {
     POST_BEGIN, 
     POST_CLEAR ,
     POST_FAILURE ,
     POST_SUCCESS 
  
  } from './types';

export default {
  namespaced: true,
  state: {
    createCompleted: false,
    createError: false,
    createLoading: false,
    post:[],
    
  },
  actions: {

    createPost({ commit }, { user, content, media, created_at }) {
      commit(CREATE_POST);
      return auth.createPost(user, content, media, created_at)
        .then(() => commit(POST_SUCCESS))
        .catch(() => commit(POST_FAILURE));
    },


    getPost({ commit }, { data }) {
      commit(GET_POST);
      return auth.readPost(data)
        .then(() => commit(GET_SUCCESS))
        .catch(() => commit(GET_FAILURE));
    },


      deletePost({ commit }, { data }) {
      commit(DELETE_POST);
      return auth.verifyAccountEmail(key)
        .then(() => commit(POST_CLEAR))
        .catch(() => commit(DELETE_FAILURE));
    },


      updatePost({ commit }, { key }) {
      commit(UPDATE_POST);
      return auth.verifyAccountEmail(key)
        .then(() => commit(UPDATE_SUCCESS))
        .catch(() => commit(UPDATE_FAILURE));
    },
  


  },
  mutations: {
  
    [CREATE_FAILURE](state) {
      state.registrationError = true;
      state.registrationLoading = false;
    },
    [CREATE_SUCCESS](state) {
      state.registrationCompleted = true;
      state.registrationError = false;
      state.registrationLoading = false;
    },
      [GET_SUCCESS](state, response) {
      state.activationLoading = true;
      state.post  = response.data();
    },
    [GET_FAILURE](state) {
      state.activationLoading = true;
    },
    [UPDATE_SUCCESS](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
    [UPDATE_FAILURE](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
    
     [DELETE_SUCCESS](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
    [DELETE_FAILURE](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
    
  },
};