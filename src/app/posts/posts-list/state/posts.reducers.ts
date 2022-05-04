import { createReducer, on } from "@ngrx/store";
import { addPostAction } from "./posts.actions";
import { initialState } from "./posts.state";

const _postsReducer = createReducer(initialState,
    on(addPostAction, (state, action) => {
        let post = {...action.post}
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }));

export function postsReducer(state, action){
    return _postsReducer(state, action);
}