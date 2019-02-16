import session from './session';

export default {

  createProfile(username, avatar, status, website, category) {
    return session.post('account/registration/', { username, avatar ,status, website, category });
  },
  getProfile() {
    return session.get('/auth/user/');
  },
  updateProfile(data) {
    return session.patch('/auth/user/', data);
  },
  deleteProfile(url) {
    return session.delete('/registration/verify-email/', { url });
  },
};