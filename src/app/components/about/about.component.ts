import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title:string;
  public subtitle:string;
  public email:string;
  constructor() {
    this.title ="José Javier A.B.";
    this.subtitle ="Estudiante del grado superior DAM";
    this.email = "jacostadam19@iescastelar.com";
  }

  ngOnInit(): void {
  }

}
