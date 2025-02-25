import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaces';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  postsService = inject(PostsService);
  guardarPost(form: any) {
    //console.log(form.value)
    if (form.value.title !== "" && form.value.author !== "" && form.value.date !== "" && form.value.body !== "" && form.value.url !== "") {
      //llevar el newPost al servicio, para ello tenemos que inyectar el servicio dentro de este componente.
      let response = this.postsService.insert(form.value);
      alert(response);
      form.reset();
    } else {
      alert('Todos los campos son obligatorios')
    }
  }
}
