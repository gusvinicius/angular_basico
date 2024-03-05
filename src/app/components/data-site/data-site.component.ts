import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-site',
  templateUrl: './data-site.component.html',
  styleUrl: './data-site.component.css'
})
export class DataSiteComponent {
  @Input() id:Number = 0;

  DadosUsuario = {
    nome: 'pedro',
    idade: '18',
    trabalho: 'programador'
  };

  usuarios = [
    {nome: 'pedro', idade: '18', trabalho: 'programador'},
    {nome: 'maria', idade: '20', trabalho: 'caixa'},
    {nome: 'joão', idade: '24', trabalho: 'pedreiro'},
    {nome: 'ana', idade: '25', trabalho: 'enfermeira'}
  ]
}
