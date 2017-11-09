import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
    `]
})
export class TemplateComponent {

  usuario:Object = {
    nombre: "Bruno",
    apellido: "Paganini",
    email: "paganini.bruno@gmail.com",
    pais: "AR",
    sexo: "Hombre",
    acepta:false
  }

  paises = [
    {
      codigo: "AR",
      nombre: "Argentina"
    },
    {
      codigo: "ES",
      nombre: "España"
    },
    {
      codigo: "US",
      nombre: "Estados Unidos"
    }
  ];

  constructor() { }

  guardar(forma:NgForm){
    console.log("Valor", forma.value);
    console.log("Usuario", this.usuario);
  }

}
