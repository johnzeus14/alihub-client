import session from './session';

export default {
  createPost(user, content, media) {
    return session.post('http://127.0.0.1:8000/story', { user, content, media });
  },

  deletePost(data) {
    return session.delete('http://127.0.0.1:8000/story/'+id, data});
  },
  
  readPost() {
    return session.get('http://127.0.0.1:8000/story + id');
  },
  updatePost(data) {
    return session.patch('http://127.0.0.1:8000/story + id', data);
  },


};