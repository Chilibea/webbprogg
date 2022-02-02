'use strict';
const imported = require("./inventory.js");
class Salad{
    static instanceCounter = 1;
     constructor(){
         this.components = {};
       
          this.uuid = 'salad_' + Salad.instanceCounter++;
     }
     add(name, property){
         this.components[name]=property;
         return this;
     }
 
 
 
 remove(name){
     delete this.components[name];
     return this;
 }
 
 
 
 }
 Salad.prototype.getPrice = function getPrice(){
 let price2 = Object.entries(this.components);
 return price2.reduce(((accumulator, currentValue) =>
 accumulator + currentValue[1].price), 0);
 }
 
 Salad.prototype.count = function count(property){
     let counter = Object.values(this.components);
    return counter.filter(props => props[property] !== undefined).length;
    
 }


export default Salad;