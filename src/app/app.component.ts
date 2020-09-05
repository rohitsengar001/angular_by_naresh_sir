import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAngular';
  message="";
  name="rohit";
  myfunction(value){
    if (value.length == 0)
      this.message="Entered value is empty!!!"
    else if (value.length < 8) {
      this.message="you have entered short value";
    } else {
      this.message ="you have entered correct";
    }
    console.log(value);
  }

public hasThree =false;

//student object
students:any[] =[
  {"id":123,"name":"ROHIT","dept":"MCA"},
  {"id":124,"name":"RAHUL","dept":"MCA"},
  {"id":125,"name":"SHEKHAR","dept":"B.Pharm"},
  {"id":126,"name":"ROHIT","dept":"MCA"},
  {"id":126,"name":"RAJNISH","dept":"B.Pharm"}
];
teachers:any[]=[
  {"id":213,"name":"RAMESH SHARAN","dept":"MCA"},
  {"id":214,"name":"RAJESH KHANNA","dept":"MCA"},
  {"id":215,"name":"SACHIN DEV","dept":"MCA"},
  {"id":216,"name":"NILAKSHI GOEL","dept":"MCA"}
];
//set color function
getcolor(branch){
  switch (branch){
    case 'MCA':
      return 'green';
    case 'MBA':
        return 'yellow';
     case 'B.Pharm': 
         return  "pink";  
     default : break;  
   }
}
//

}
