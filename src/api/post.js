import session from './session';

export default {
  createPost(content, media) {
    return session.post('/post/', { content, media });
  },
  updatePost() {
    return session.patch('/auth/logout/', {data});
  },
  deletePost(content, media, , email) {
    return session.delete('/registration/', { email,full_name ,password1, password2 });
  },
   getPost() {
    return session.get('/post/', {});
  },


};