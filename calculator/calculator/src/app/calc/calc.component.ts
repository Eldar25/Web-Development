import { Component, OnInit, ɵregisterNgModuleType } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {


   smallScreenValue = '';
   mainScreenValue ="0";
   globalFirstNum = 0;
   globalSecondNum = 0;
   operationIsEmpty = true;
   results = "";
   operation = "";
   secondOp ="";
   isSecondNum = true;
   memory=[];
   memoryCur = [];

  constructor() { }

  

  public getNumber(s: string){
    if(this.isSecondNum == false){
      this.mainScreenValue = "";
    }
    
    if(this.operation.length >= 1 ){
      if(this.operation == "="){
        //this.isSecondNum=true;
       // this.smallScreenValue += this.globalSecondNum;
        this.mainScreenValue = s;
        
      }
      else{
        //this.isSecondNum=true;
      this.mainScreenValue +=s;
      //this.mainScreenValue += v;
      this.globalSecondNum = parseInt(this.mainScreenValue);
      //this.smallScreenValue += this.globalSecondNum;
      }
    }
    else if(this.mainScreenValue == "0"){
      this.mainScreenValue= "";
      this.mainScreenValue += s;
      this.globalFirstNum = parseInt(this.mainScreenValue);
      //this.isSecondNum =false;
      //var cur =this.mainScreenValue.length;
      //this.smallScreenValue = cur.toString();
    }
    else{
      
      this.mainScreenValue += s;
      this.globalFirstNum = parseInt(this.mainScreenValue);
      //var cur =this.mainScreenValue.length;
      //this.smallScreenValue = cur.toString();
    }
  
  }
  public Operation(s: string){
    if(s == "="){
      this.calc();
      this.mainScreenValue = this.results;
    }
    else{
      this.operation =s;

    }
    this.isSecondNum =false;
  }
  public calc(){
    if(this.operation == "+"){
      this.results = (this.globalFirstNum + this.globalSecondNum).toString();
    }
    else if(this.operation == "-"){
      this.results = (this.globalFirstNum - this.globalSecondNum).toString();
    }
    else if(this.operation == "*"){
      this.results = (this.globalFirstNum * this.globalSecondNum).toString();
    }
    else if(this.operation == "/"){
      this.results = (this.globalFirstNum / this.globalSecondNum).toString();
    }
  }
  public clearMemory(){}
  public recallNumber(){}
  public addInMemory(){}
  public subtractFromMemory(){}
  public saveNumber(){}
  public percent(){}
  public clearCur(){}
  public clear(){}
  public backspace(){}
  public divOnx(){}
  public pow(){}
  public sqrt(){}
  public negative(){}
  public dot(){}



  ngOnInit(): void {
  }

}
