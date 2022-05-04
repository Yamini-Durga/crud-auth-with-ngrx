import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/posts-list/state/posts.reducers";
import { PostsState } from "../posts/posts-list/state/posts.state";

export interface AppState {
    counter: CounterState,
    posts: PostsState
}

export const AppReducers = {
    counter: counterReducer,
    posts: postsReducer
}