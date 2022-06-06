import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/Store/app.state';
import { getPostById, getPosts } from '../posts-list/state/posts.selectors';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post: Post;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getPostById).subscribe(p => this.post = p);
  }

}
