import session from './session';

export default {
 
  createComment(content_type,target , content, media ) {
    return session.post('/comment/', { content_type, target, content ,media });
  },
  updateComment(password1, password2) {
    return session.patch('/auth/password/change/', { data });
  },
  
  getComment() {
    return session.get('/comment/');
  },
  deleteAccount(data) {
    return session.delete('/comment/', data);
  },

};