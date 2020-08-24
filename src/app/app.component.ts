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
    if (value.length < 8) {
      this.message="you have entered short value";
    } else {
      this.message ="you have entered correct";
    }
    console.log(value);
  }
}
