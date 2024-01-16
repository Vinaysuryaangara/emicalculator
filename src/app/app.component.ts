import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emicalculator';
  updatedAmount:number=0
  updatedPercentage:any
  updatedYear:any
  percentamount:any;
  totalamount:any
  monthlyEmi:number=0
  monthcalculator:number = 0
  personCount:number = 0
  eachPerson:number = 0
  another: boolean = true;

  ngOnInit(){
    // let percentageVAlue = ()
  }
  constructor(private route:Router){}
  
  changeamountRange(value:any, range: HTMLInputElement) {
 
    range.value = value.target.value;
    this.updatedAmount = Number(range.value)
  }
  
  changepercentRange(value:any, range: HTMLInputElement){
 
    range.value = value.target.value;
    this.updatedPercentage = range.value
    
  }
  
  changeyear(value:any, range: HTMLInputElement){
    range.value = value.target.value;
    this.updatedYear = range.value
    console.log(this.updatedAmount,this.updatedPercentage,this.updatedYear)
  }

  total(){
    
    console.log(this.updatedAmount,'45:')
   this.percentamount= (this.updatedPercentage/100)*this.updatedAmount
   this.totalamount = this.updatedAmount + this.percentamount
   console.log(this.totalamount,'41::',typeof(this.updatedAmount),typeof(this.percentamount))
   this.monthcalculator =  this.updatedYear *12
   this.monthlyEmi = (this.totalamount/this.monthcalculator)
  }

  perPerson(){   
    this.eachPerson = (this.monthlyEmi/this.personCount)
  }
  modified(){
    this.another = false
    this.route.navigate(["/modified"])
  }
}
