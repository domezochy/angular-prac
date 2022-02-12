import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-prac';

  name = {
    name : 'Ochieng', 
    lastname : 'Godfrey',
    age : 40
  }

  switch: boolean = true;

  toogleSwitch(){

    this.switch = !this.switch;
  }

}
