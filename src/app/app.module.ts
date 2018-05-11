import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { GetNotesService } from './get-notes.service'


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GetNotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
