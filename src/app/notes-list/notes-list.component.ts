import { Component, OnInit } from '@angular/core';
import { GetNotesService } from '../get-notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  Notes =[];
  ClientRow = {id:"",title:"",body:""};
  EditMode=false;
    constructor(private GetNotesService:GetNotesService) { }
  
    ngOnInit() {
      this.GetNotesService.getNotes().subscribe(data=> this.Notes = data);
    }
    onEditNotes(cid)
    {
      this.ClientRow = cid;
      this.EditMode = true;
      console.log(cid);
    }
    onDeleteNotes(cid){
      // this.ClientRow = cid;
      this.GetNotesService.DeleteNotes(cid).subscribe(ResponseData =>{
          console.log(ResponseData);
           this.GetNotesService.getNotes().subscribe(data=> this.Notes = data);
         })
    }
}
