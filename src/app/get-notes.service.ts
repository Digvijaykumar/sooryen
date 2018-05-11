import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetNotesService {
URLPath = "http://localhost:3000/";
  constructor(private http : Http) { }

  getNotes(){
   return this.http.get(this.URLPath+"notes").map(ResData => ResData.json());
  }
  postNotes(frmValue){
    let headers = new Headers({'Content-Type':'application/json'});
    return this.http.post(this.URLPath+"notes", frmValue,{headers});
  }
  putNotes(clntid){
    //let URLPath = "http://localhost:3000/clients?id="+clntid;
    return this.http.get(this.URLPath+"notes?id="+clntid).map(ResData => ResData.json());
    
  }
  putNotesById(clientModel){
    // console.log(clientModel);
  
   // let URLPath = "http://localhost:3000/notes/"+clientModel.id;
   // return this.http.delete(URLPath).map(ResData => ResData.json());
   let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: cpHeaders });
    return this.http.put(this.URLPath+"notes/"+clientModel.id,clientModel,{headers})
       .map(success => success.status)
    
  }
  DeleteNotes(clntid){
   // let URLPath = "http://localhost:3000/clients/"+clntid;
   // return this.http.delete(URLPath).map(ResData => ResData.json());
    return this.http.delete(this.URLPath+"notes/"+clntid)
       .map(success => success.status)  
  }
}
