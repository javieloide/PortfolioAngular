import { Component, OnInit} from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { global } from '../../services/global';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title:string;
  public project:Project;
  public status: string;
  public filesToUpload:Array<File>;
  public save_project;
  constructor(private _projectService:ProjectService, private _uploadService:UploadService) {
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2021,'','');
   }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.project);
    // Guardar datos basicos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){

          if(this.filesToUpload){
            this._uploadService.makeFileRequest(global.url+"upload-image/"+response.project._id,[],this.filesToUpload,'image')
            .then((result:any)=>{
              Swal.fire('Perfecto...', 'El proyecto se ha creado correctamente!', 'success')
              this.status = 'success';
              this.save_project = result.project;
              form.reset();
            });
          } else {
            this.save_project = response.project;
            Swal.fire('Perfecto...', 'El proyecto se ha creado correctamente!', 'success')
            this.status = 'success';
            form.reset();
          }


        }else{
          this.status = 'failed';
          Swal.fire({
            icon: 'error',
            title: 'Vaya...',
            text: '¡Ha habido un error al intentar crear el proyecto!',
            footer: '<a href>Why do I have this issue?</a>'
          })
        }
      }, error =>  {
        Swal.fire({
          icon: 'error',
          title: 'Vaya...',
          text: '¡Ha habido un error al intentar crear el proyecto!',
          footer: '<a href>Why do I have this issue?</a>'
        })
        console.error(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput:any){
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
