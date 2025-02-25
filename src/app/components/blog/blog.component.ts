import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaces';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrPosts: IPost[] = [
    {
      id: 1,
      title: 'First Post',
      url: 'http://example.com/first-post',
      author: 'Author One',
      date: '2023-01-01',
      body: 'This is the body of the first post.'
    },
    {
      id: 2,
      title: 'Second Post',
      url: 'http://example.com/second-post',
      author: 'Author Two',
      date: '2023-02-01',
      body: 'This is the body of the second post.'
    },
    {
      id: 3,
      title: 'Third Post',
      url: 'http://example.com/third-post',
      author: 'Author Three',
      date: '2023-03-01',
      body: 'This is the body of the third post.'
    }
  ];

}
