import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura:number;
  @Input('etiquetas') captions:boolean;
  @Output() conseguirAutor = new EventEmitter();
  public autor:any;

  constructor() {
    this.autor = {
      nombre:'Jose Javier',
      estudios:'Grado superior DAM',
      aptitudes:'trabajador, responsable, educado'
    }
  }

  ngOnInit(): void {

      $('.galeria').bxSlider({
        mode: 'fade',
        captions: this.captions,
        slideWidth: this.anchura
      });

  }
  lanzar(event){
    this.conseguirAutor.emit(this.autor);
  }

}
