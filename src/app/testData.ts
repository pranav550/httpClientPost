import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{

    constructor() { }
    createDb(){
  
     let  bookDetails =  [
      {  id:  100, name:"Mosh", category:"Angular", company:"HCL"},
     
     ];
  
     return {books:bookDetails};
  
    }
  }