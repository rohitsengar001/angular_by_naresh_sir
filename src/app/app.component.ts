import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAngular';
  message="";
  myfunction(){
    console.log("testing")
    this.message="welcome";
  }
}
