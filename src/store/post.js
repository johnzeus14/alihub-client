import auth from '../api/post';

import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  GET_POST,
  CREATE_SUCCESS,
  CREATE_FAILURE,
  
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
        .then(() => commit(CREATE_SUCCESS))
        .catch(() => commit(CREATE_FAILURE));
    },
    getPost({ commit }, { key }) {
      commit(GET_POST);
      return auth.readPost(key)
        .then(() => commit(GET_SUCCESS))
        .catch(() => commit(GET_FAILURE));
    },
      deletePost({ commit }, { key }) {
      commit(DELETE_POST);
      return auth.verifyAccountEmail(key)
        .then(() => commit(DELETE_SUCCESS))
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
      [GET_SUCCESS](state) {
      state.activationLoading = true;
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