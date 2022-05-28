import { createReducer, on } from "@ngrx/store";
import { addPostAction, deletePostAction, updatePostAction } from "./posts.actions";
import { initialState } from "./posts.state";

const _postsReducer = createReducer(initialState,
    on(addPostAction, (state, action) => {
        let post = {...action.post}
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePostAction, (state, action) => {
        let updatedPosts = state.posts.map(p => 
            p.id === action.post.id ? action.post : p);
        return {
            ...state,
            posts: updatedPosts
        }
    }),
    on(deletePostAction, (state, action) => {
        let updatedPosts = state.posts.filter(p => p.id !== action.id);
        return {
            ...state,
            posts: updatedPosts
        }
    })
);

export function postsReducer(state, action){
    return _postsReducer(state, action);
}