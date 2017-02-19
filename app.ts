import {Category} from './enums';
import {Book,DamageLogger} from './interfaces'
import {ReferenceItem,Encyclopedia} from './classes'

function GetAllBooks():Book[]{
   let books =[
       {Id:2,Title:"abcScience1",Author:"Aaksh", Avaliable:true,category:Category.Science},
          {Id:2,Title:"abcScience1",Author:"Aaksh", Avaliable:true,category:Category.Science},
          {Id:2,Title:"abcScience1",Author:"Aaksh", Avaliable:true,category:Category.Science},
          {Id:2,Title:"abcScience1",Author:"Aaksh", Avaliable:true,category:Category.Science},
          {Id:2,Title:"abcScience1",Author:"Aaksh", Avaliable:true,category:Category.Science}
                   
   ];
      
return books;
}

function GetBooksByCategory(categoryFilter:Category = Category.Fiction) :Array<string>{

    console.log("Getting books for Category:" + Category[categoryFilter] );
  let books =  GetAllBooks();
  let FilteredBookTitles:string[] = [];
for(let currentbook of books){
    if(currentbook.category === categoryFilter){
        FilteredBookTitles.push(currentbook.Title);
    }
}
return FilteredBookTitles;
}

function LogBookTitle(titles:string[]):void{

    for(let title of titles){
        console.log(title);
    }
}

//enum Category{Science,Fiction,Biography};
//enum Category{"Science","Fiction","Biography"};
//let scienceBooks  = GetBooksByCategory(Category.Fiction);
//LogBookTitle(scienceBooks);

GetAllBooks().filter(b => b.category === Category.Science).forEach(x => console.log(x.Title + " - " + x.Author));

 function CreateUser(name:string,age?:number,gender?:string):void{
       console.log(name);
       if(age)
       console.log(age)

       if(gender){
           console.log(gender);
       }
 }


 CreateUser('akash',355);

let damagelogger: DamageLogger;

damagelogger = (reason:string) => console.log('reason for damage:' + reason);

damagelogger("Torn pages");

let refItem = new ReferenceItem("desire",2007);

refItem.printItem();

let encyclopedia = new Encyclopedia('desire again',2007,121211);
encyclopedia.printItem();


