import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from 'src/app/models/Email';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare var $:any;
import { global } from '../../services/global';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public email:string;
  public subject:string;
  public description:string;

  constructor(private _projectService:ProjectService) {
    this.email='';
    this.subject='';
    this.description='';
  }

  ngOnInit() {
  }


  sendEmail(email, subject, description){
    this._projectService.sendEmail(email, subject, description).subscribe(
      response => {
        console.log(response)
        Swal.fire('¡Perfecto!', 'Tu email ha sido enviado correctamente!', 'success')
      }, error =>{
        console.error(<any>error);
        Swal.fire({
          icon: 'error',
          title: 'Vaya...',
          text: 'Ha habido algun problema al enviar el email',
          footer: '<a href>Why do I have this issue?</a>'
        })

      }
    );
  }
}


