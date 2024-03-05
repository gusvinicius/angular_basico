import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-site',
  templateUrl: './usuario-site.component.html',
  styleUrl: './usuario-site.component.css'
})
export class UsuarioSiteComponent {
  /*importação de dados*/
  @Input() dados_usuario = {nome: '', idade: '', trabalho: ''};

  /*CLASSES DAS TAGS HTML*/
  div_centralizadora = ['div_centraliza'];
  div_central = ['div_central'];
  conteiner_dados = ['div_dados'];
  dados = ['texto', 'dado_usuario'];
}
