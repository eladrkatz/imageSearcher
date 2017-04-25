import { bindActionCreators } from 'redux';
import * as UserActions from './redux/modules/users';
import * as BlogActions from './redux/modules/blogposts';
import * as ImageSearchActions from './redux/modules/imagesearches'

export function bootstrap({ dispatch }) {
  const userActions = bindActionCreators(UserActions, dispatch);
  const blogActions = bindActionCreators(BlogActions, dispatch);
  const imageSearchActions = bindActionCreators(ImageSearchActions, dispatch);

  return () => {
    blogActions.fetchPosts(0, 10);
    userActions.fetchUsers();
    imageSearchActions.fetchImages();
  };
}

export function editPost({ dispatch }) {
  const actions = bindActionCreators(BlogActions, dispatch);

  return ({ params }) => {
    actions.setDraft(parseInt(params.id, 10));
  };
}
