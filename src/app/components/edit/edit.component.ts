import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  public title:string;
  public project:Project;
  public status: string;
  public filesToUpload:Array<File>;
  public save_project;
  public url:string;

  constructor(private _projectService:ProjectService,
    private _uploadService:UploadService,
    private _router:Router,
    private _route:ActivatedRoute) {
    this.title = "Editar proyecto";
    this.url=global.url;

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
  onSubmit(form){
    console.log(this.project);
    // Guardar datos basicos
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){

          // Subir la imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(global.url+"upload-image/"+response.project._id,[],this.filesToUpload,'image')
            .then((result:any)=>{
              this.status = 'success';
              this.save_project = result.project;
              console.log(result);
            });
          } else {
            this.save_project = response.project;
            this.status = 'success';

          }

        }else{
          this.status = 'failed';
        }
      }, error =>  {
        console.error(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput:any){
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
