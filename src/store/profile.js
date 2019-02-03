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
    profile:[],
    
  },
  actions: {
    createProfile({ commit }, { user, content, media, created_at }) {
      commit(CREATE_SUCCESS);
      return auth.createProfile(user, content, media, created_at)
        .then(() => commit(CREATE_SUCCESS))
        .catch(() => commit(CREATE_FAILURE));
    },
    getProfile({ commit }, { data }) {
      commit(GET_SUCCESS);
      return auth.getprofile(data)
        .then(() => commit(GET_SUCCESS))
        .catch(() => commit(GET_FAILURE));
    },
      deleteProfile({ commit }, { key }) {
      commit(DELETE_SUCCESS);
      return auth.verifyAccountEmail(key)
        .then(() => commit(DELETE_SUCCESS))
        .catch(() => commit(DELETE_FAILURE));
    },
      updateProfile({ commit }, { key }) {
      commit(UPDATE_PROFILE);
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
      state.profile = response.data();
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