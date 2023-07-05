import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  @Input() nombre: string = "Anónimo";

  constructor() { }

  ngOnInit(): void {
    //Instruccinoes previsa a la renderizaion del componente
    console.log("ngOnInit del componente saludo");
  }
// ejemplo para gestionar un evento de tipo click en el DOM

alertaSaludo():void{
  alert(`Hola, ${this.nombre}. Alerta despachada desde un click de botón`);
}

}
