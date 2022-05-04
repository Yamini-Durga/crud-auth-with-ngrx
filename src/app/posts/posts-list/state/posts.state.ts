import { Post } from "src/app/models/post.model";

export interface PostsState {
    posts: Post[]
}

export const initialState : PostsState = {
    posts: [
        { id: '1', title: 'Title 1', description: 'First description' },
        { id: '2', title: 'Title 2', description: 'Second description' }
    ]
}