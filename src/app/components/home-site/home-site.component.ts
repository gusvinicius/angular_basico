import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-site',
  templateUrl: './home-site.component.html',
  styleUrl: './home-site.component.css'
})
export class HomeSiteComponent {

  Classes_txt_nome = ['texto', 'nome'];

  texto: String = '';

}
