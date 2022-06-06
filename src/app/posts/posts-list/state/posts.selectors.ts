import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getCurrentRouterState } from 'src/app/Store/router/router.selector';
import { postsAdapter, PostsState } from './posts.state';

export const POST_STATE_NAME = 'posts';

export const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);
// export const getPosts = createSelector(getPostsState, (state) => {
//   return state.posts;
// });

export const postsSelectors = postsAdapter.getSelectors();

export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);

export const getPostEntities = createSelector(getPostsState, postsSelectors.selectEntities);

// export const getPostById = createSelector(getPosts, getCurrentRouterState, (posts, router ) => {
//   return posts ? posts.find((p) => p.id === router.params['id']) : null;
// });

export const getPostById = createSelector(getPostEntities, getCurrentRouterState, (posts, router ) => {
  return posts ? posts[router.params['id']] : null;
});