import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post.model";

export const addPostAction = createAction(
    '[Posts page] add post',
    props<{post: Post}>()
);

export const updatePostAction = createAction(
    '[Posts Page] update post',
    props<{post: Post}>()
);

export const deletePostAction = createAction(
    '[Posts page] delete post',
    props<{id: string}>()
)