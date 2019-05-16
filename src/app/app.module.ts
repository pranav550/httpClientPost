import { BookService } from './book.service';
import { TestData } from './testData';
import { Book } from './book';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
