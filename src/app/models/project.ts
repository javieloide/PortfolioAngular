export class Project{
  constructor(
    public _id:string,
    public name:string,
    public description:string,
    public category:string,
    public year:number,
    public langs:string,
    public image:string
  ){}

}

/*export interface ProjectDTO{
  id:number;
  name:string,
  description:string,
  category:string,
  year:Date,
  langs:string,
  image:string
}

export interface ProjectCreacionDTO{
  nombre:string;
  description:string,
  category:string,
  year:Date,
  langs:string,
  image:File
}*/

