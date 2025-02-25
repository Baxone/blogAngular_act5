import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaces';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [DatePipe, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newPost: IPost = { id: 0, title: "", author: "", date: "", body: "", url: "" }
  id: number = 1;
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

  guardarPost() {
    if (this.newPost.title !== "" && this.newPost.author !== "" && this.newPost.date !== "" && this.newPost.body !== "" && this.newPost.url !== "") {
      //puedo insertar el elemento en el array
      this.newPost.id = this.id;
      this.arrPosts.push(this.newPost);
      this.id++;
      this.newPost = { id: 0, title: "", author: "", date: "", body: "", url: "" }
      console.log(this.arrPosts)
    } else {
      alert('Todos los campos son obligatorios')
    }
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
