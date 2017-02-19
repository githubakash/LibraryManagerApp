import {Category} from './enums';

export interface Book{
  Id:number,
  Title:string,
  Author:string,
  Avaliable:Boolean,
  category: Category,
  pages?:number,
  MarkDameged? : (reason:string) => void
}

export interface DamageLogger{

     (reason : string):void
}