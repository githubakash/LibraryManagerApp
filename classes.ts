class ReferenceItem{

constructor(public title:string,private year:number){}

  printItem(){

      console.log(`Book with title ${this.title} published in ${this.year}`);
  }   

}

class Encyclopedia extends ReferenceItem{

    //edition:number;
    constructor(newtitle:string, newyear:number,public edition:number){
        super(newtitle,newyear)
    }
    printItem():void{
          super.printItem();
     console.log(`edition number is:${this.edition}`);

    }
}

export {ReferenceItem,Encyclopedia};