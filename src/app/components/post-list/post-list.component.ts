import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interfaces/ipost.interfaces';

@Component({
  selector: 'app-post-list',
  imports: [DatePipe],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  arrPosts: IPost[] = [];
  //le pedimos al servicio que me de los datos del post.
  postsService = inject(PostsService);

  ngOnInit() {
    this.arrPosts = this.postsService.getAll()
  }

}
