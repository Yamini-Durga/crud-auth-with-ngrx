import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post.model";

export const addPostAction = createAction(
    '[Posts page] add post',
    props<{post: Post}>()
);