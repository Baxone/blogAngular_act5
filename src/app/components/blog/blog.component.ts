import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaces';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrPosts: IPost[] = [
    {
      id: 1,
      title: 'First Post',
      url: 'https://www.grecia.info/es/wp-content/uploads/sites/49/creta-grecia-thumbnail.jpg',
      author: 'Author One',
      date: '2023-01-01',
      body: 'This <strong>is the body</strong> of the first post.'
    },
    {
      id: 2,
      title: 'Second Post',
      url: 'https://www.grecia.info/es/wp-content/uploads/sites/49/creta-grecia-thumbnail.jpg',
      author: 'Author Two',
      date: '2023-02-01',
      body: 'This is the body of the second post.'
    },
    {
      id: 3,
      title: 'Third Post',
      url: 'https://www.grecia.info/es/wp-content/uploads/sites/49/creta-grecia-thumbnail.jpg',
      author: 'Author Three',
      date: '2023-03-01',
      body: 'This is the body of the third post.'
    }
  ];

  ngOnInit() {
    //this.getData();
  }

  /*   getData(): string {
      let html = ""
      this.arrPosts.forEach(post => {
        html += `<article>
        <figure>
          <img src="${post.url}" alt="${post.title}">
        </figure>
        <h3>${post.title}</h3>
        <p>Autor: ${post.author}</p>
        <p>Fecha: ${post.date}</p>
        <div class="content">
          <p>${post.body}</p>
        </div>
      </article>`
      })
      return html;
    } */

}
