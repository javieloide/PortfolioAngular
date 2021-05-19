import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { global } from './global';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public url:string;
  constructor(private _http:HttpClient) {
    this.url = global.url;
  }

  testService(){
    return "Probando el servicio de Angular de Proyectos";
  }

  saveProject(project:Project):Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+"save-project", params, {headers:headers});
  }

  getProjects():Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this._http.get(this.url + 'projects', {headers:headers});
  }

  getProject(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url+'project/'+id,{headers:headers});
  }

  deleteProject(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url+'project/'+id,{headers:headers});
  }

  updateProject(project):Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url+'project/'+project._id, params, {headers:headers});
  }
  
  sendEmail(email,subject,description){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+'send-email/'+email+"/"+subject+"/"+description,{headers:headers});
  }
}
