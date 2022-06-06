import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { RouterNavigatedAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';
import {
  addedPostAction,
  addPostAction,
  deletedPostAction,
  deletePostAction,
  loadedPosts,
  loadPosts,
  updatedPostAction,
  updatePostAction,
  viewPost,
} from './posts.actions';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  loadPostsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      mergeMap((action) => {
        return this.postsService.getPosts().pipe(
          map((posts) => {
            return loadedPosts({ posts });
          })
        );
      })
    );
  });

  addPostsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPostAction),
      mergeMap((action) => {
        return this.postsService.addPost(action.post).pipe(
          map((data) => {
            const post = { id: data['name'], ...action.post };
            return addedPostAction({ post });
          })
        );
      })
    );
  });

  updatePostEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePostAction),
      mergeMap((action) => {
        return this.postsService.updatePost(action.post).pipe(
          map((data) => {
            // return updatedPostAction({ post: action.post });
            const updatedPost: Update<Post> = {
              id: action.post.id,
              changes: {...action.post}
            };
            return updatedPostAction({ post: updatedPost })
          })
        );
      })
    );
  });

  deletePostEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePostAction),
      mergeMap((action) => {
        return this.postsService.deletePost(action.id).pipe(
          map((data) => {
            return deletedPostAction({ id: action.id });
          })
        );
      })
    );
  });

  getSinglePostById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/posts/view');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState['params']['id'];
      }),
      switchMap(id => {
        return this.postsService.getPostById(id).pipe(
          map(p => {
            const postData = [{...p['post'], id}];
            return loadedPosts({posts: postData});
          })
        )
      })
    )
  })
}
