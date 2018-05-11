import { Component, OnInit, Input } from '@angular/core';
import { GetNotesService } from '../get-notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  Clients;
  @Input('CustProp') NewCust = {id:Number,clientname:String,address:String, city:String,phone:String};
  @Input('EditProp') EditModeStatus = {};
  constructor(private GetNotesService:GetNotesService) { }

  ngOnInit() {
  }
  onSubmitClient(ClientModel)
  {
    console.log('Model data ' + ClientModel.id);
    console.log(ClientModel);
    if (this.EditModeStatus)
    {
      this.GetNotesService.putNotesById(ClientModel).subscribe(ResponseData=>{
        console.log(ResponseData);
        this.EditModeStatus =false;
      })
    }
    else
    {
      
      this.GetNotesService.postNotes(ClientModel).subscribe(ResponseData=>{
        console.log(ResponseData);
      })
    }
  }
  onUpdate(cid){
    this.GetNotesService.putNotesById(cid).subscribe(ResponseData =>{
        this.Clients = ResponseData;
        console.log(ResponseData);
       })
  }
}
