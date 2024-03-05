import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-site',
  templateUrl: './lista-site.component.html',
  styleUrl: './lista-site.component.css'
})
export class ListaSiteComponent {
  /*DADOS INPORTADOS DO COMPONENTE DATA */
  @Input() dados_usuarios = [
    {nome: '', idade: '', trabalho: ''},
  ];

  /*CLASSES DAS TAGS HTML*/
  div_centralizadora = ['div_centraliza'];
  div_central = ['div_central'];
  conteiner_dados = ['div_dados'];
  dados = ['texto', 'dado_usuario'];

  /*LOGICA DO EVENTO*/
  textoBtn: String = 'EXIBIR USUARIOS'
  mostrar: Boolean = false;

  eventoMostrar(): void{
    this.mostrar = !this.mostrar;

    if(this.mostrar == false){
      this.textoBtn = 'EXIBIR USUARIOS';
    }else{
      this.textoBtn = 'OCULTAR USUARIOS';
    }
  }
}
