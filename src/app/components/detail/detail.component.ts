import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import {global} from '../../services/global';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public url:string;
  public project:Project;
  public confirm:boolean;

  constructor(
    private _projectService:ProjectService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.url = global.url;
    this.confirm=false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getProject(id);
    });
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      }, error =>{
        console.error(<any>error);

      }
    );
  }

  setConfirm(id,confirm){
    this.confirm=confirm;
    if(confirm){
    Swal.fire({
      title: '¿Estás seguro de eliminar el proyecto?',
      text: '¡Se eliminara y no lo podrás volver a obtener!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminalo!',
      cancelButtonText: 'No, deseo mantenerlo a salvo'
    }).then((result) => {
      if (result.value) {
        this.deleteProject(id);
        Swal.fire(
          '¡Eliminado!',
          'El proyecto ha sido eliminado correctamente.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.confirm=false;
        Swal.fire(
          'Cancelado',
          'El proyecto esta a salvo :)',
          'error'
        )
      }
    })

  }
}

  deleteProject(id){
    this._projectService.deleteProject(id).subscribe(
      response => {
        if(response.project){
          this._router.navigate(['/proyectos'])
        }
      }, error =>{
        console.error(<any>error);
      }
    );
  }

}
