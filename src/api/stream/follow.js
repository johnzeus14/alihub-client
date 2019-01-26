import session from './stream';

export default {
  follow(username, password) {
    return stream.post('/follow/', { username, password });
  },
  logout() {
    return session.post('/auth/logout/', {});
  },
  createAccount(username, password1, password2, email) {
    return session.post('/registration/', { email,full_name ,password1, password2 });
  },

};