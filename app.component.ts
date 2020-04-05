import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkedParent1: false;
  checkedParent2: false;
  change1(){
    console.log("Clicked parent checkbox", this.checkedParent1);    
  }

  change2(){
    console.log("Clicked parent checkbox", this.checkedParent2);    
  }

}

