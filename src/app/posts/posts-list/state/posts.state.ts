import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Post } from "src/app/models/post.model";

// export interface PostsState {
//     posts: Post[]
// }

// export const initialState : PostsState = {
//     posts: null
// }

export interface PostsState extends EntityState<Post>{};

export const postsAdapter = createEntityAdapter<Post>();

export const initialState: PostsState = postsAdapter.getInitialState();