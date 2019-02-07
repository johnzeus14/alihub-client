import auth from '../api/profile';

import {
  
     PROFILE_CREATE_BEGIN ,
     PROFILE_CREATE_SUCCESS,
     PROFILE_CREATE_FAILURE , 

     PROFILE_GET_BEGIN,  
     PROFILE_GET_SUCCESS,
     PROFILE_GET_FAILURE,

     PROFILE_DELETE_BEGIN,
     PROFILE_DELETE_SUCCESS,
     PROFILE_DELETE_FAILURE,

     PROFILE_UPDATE_BEGIN,
     PROFILE_UPDATE_SUCCESS,
     PROFILE_UPDATE_FAILURE




  
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
      commit(PROFILE_CREATE_BEGIN);
      return profile.createProfile(user, content, media, created_at)
        .then(() => commit(PROFILE_CREATE_SUCCESS))
        .catch(() => commit(PROFILE_CREATE_FAILURE));
    },
    getProfile({ commit }, { data }) {
      commit(PROFILE_GET_BEGIN);
      return profile.getprofile(data)
        .then(() => commit(PROFILE_GET_SUCCESS))
        .catch(() => commit(PROFILE_GET_FAILURE));
    },
      deleteProfile({ commit }, { data }) {
      commit(PROFILE_DELETE_BEGIN);
      return profile.deleteprofile(data)
        .then(() => commit(PROFILE_DELETE_SUCCESS))
        .catch(() => commit(PROFILE_DELETE_FAILURE));
    },
      updateProfile({ commit }, { data }) {
      commit(PROFILE_UPDATE_BEGIN);
      return profile.updateProfile(data)
        .then(() => commit(PROFILE_UPDATE_SUCCESS))
        .catch(() => commit(PROFILE_UPDATE_FAILURE));
    },
  
  },
  mutations: {
     [PROFILE_CREATE_BEGIN](state) {
      state.createLoading = true;
  
     
    },
    [PROFILE_CREATE_FAILURE](state) {
      state.createError = true;
      state.createLoading = false;
     
    },
    [PROFILE_CREATE_SUCCESS](state) {
      state.createCompleted = true;
      state.createnError = false;
      state.createLoading = false;
     
    },
      [PROFILE_GET_BEGIN](state) {
      state.activationLoading = true;
      state.createLoading = true;
    },
      [PROFILE_GET_SUCCESS](state) {
      state.activationLoading = true;
       state.profile = response.data();
    },
    [PROFILE_GET_FAILURE](state) {
      state.createLoading = false;
      state.createError = true;
    },
    [PROFILE_UPDATE_BEGIN](state) {
      
      state.createLoading = false;

    },
    [PROFILE_UPDATE_SUCCESS](state) {
      state.createCompleted = true;
      state.activationError = false;
      state.activationLoading = false;
    },
    
     [PROFILE_UPDATE_FAILURE](state) {
      state.activationCompleted = false;
      state.createError = true;
      state.activationLoading = false;
    },
    [PROFILE_DELETE_BEGIN](state){
      state.createLoading = true;
    },
   
    
  },
};