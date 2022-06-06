import { createReducer, on } from '@ngrx/store';
import {
  addedPostAction,
  deletedPostAction,
  loadedPosts,
  updatedPostAction,
  viewPost,
} from './posts.actions';
import { initialState, postsAdapter } from './posts.state';

// const _postsReducer = createReducer(
//   initialState,
//   on(addedPostAction, (state, action) => {
//     let post = { ...action.post };
//     return {
//       ...state,
//       posts: [...state.posts, post],
//     };
//   }),
//   on(updatedPostAction, (state, action) => {
//     let updatedPosts = state.posts.map((p) =>
//       p.id === action.post.id ? action.post : p
//     );
//     return {
//       ...state,
//       posts: updatedPosts,
//     };
//   }),
//   on(deletedPostAction, (state, action) => {
//     let updatedPosts = state.posts.filter((p) => p.id !== action.id);
//     return {
//       ...state,
//       posts: updatedPosts,
//     };
//   }),
//   on(loadedPosts, (state, action) => {
//     return {
//       ...state,
//       posts: action.posts,
//     };
//   }),
//   on(viewPost, (state, action) => {
//     return {
//       ...state,
//       post: action.post
//     }
//   })
// );

const _postsReducer = createReducer(
  initialState,
  on(addedPostAction, (state, action) => {
    return postsAdapter.addOne(action.post, state);
  }),
  on(updatedPostAction, (state, action) => {
    return postsAdapter.updateOne(action.post, state);
  }),
  on(deletedPostAction, (state, action) => {
    return postsAdapter.removeOne(action.id, state);
  }),
  on(loadedPosts, (state, action) => {
    return postsAdapter.setAll(action.posts, state);
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
