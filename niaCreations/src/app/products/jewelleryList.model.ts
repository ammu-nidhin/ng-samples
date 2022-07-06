//import { type } from 'os';
import {Type} from './type.model';
export class JewelleryList{

    public name:String;
    public description:String;
    public rate:number;
    public type:Type;
    public imageUrl:String;

    constructor(name:string,description:string,rate:number,imageUrl:String){
        this.name=name;
        this.description=description;
        this.rate=rate;
        this.imageUrl=imageUrl;
    }
}