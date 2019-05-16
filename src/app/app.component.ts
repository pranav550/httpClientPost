import { BookService } from './book.service';
import { Component } from '@angular/core';
import {Book} from"./book";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Observable} from "rxjs/observable";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpClientGet';
 // softBooks:Book[];
 datasaved= false;
 bookForm:FormGroup;
 allbooks:Observable<Book[]>;
  constructor(private formbuilder:FormBuilder, private bookService:BookService){}

  ngOnInit(){
this.getSoftBook()
this.bookForm= this.formbuilder.group({
  name:['', [Validators.required]], 
  category:['', [Validators.required]], 
  company:['', [Validators.required]], 
})
  }

  onFormSubmit(){
    this.datasaved=false;
    let book= this.bookForm.value;
    this.createBooks(book);
    this.bookForm.reset()

  }

  createBooks(book:Book){
     this.bookService.createBook(book).subscribe(
       book=>{
         this.datasaved=true;
       this.getSoftBook();
       }
     )
  }

  getSoftBook(){
   this.allbooks = this.bookService.getBookFromStore()
  }
}
