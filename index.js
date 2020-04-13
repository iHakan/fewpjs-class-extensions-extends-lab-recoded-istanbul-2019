// Your code here
class Polygon{
  constructor(arr){
    this.arr = arr;
  }
  
  get countSides(){
    return this.arr.length;
  }
  
  get perimeter(arr){
    let total = (acc,cur) => acc +curr;
    let sum = this.arr.reduce(total)
      return sum;
   
  }
}