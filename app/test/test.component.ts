import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`<h2>Direct accessing vthout declaring as public</h2>
              <h3>{{greeting}}</h3>
              
              <button [disabled]=isTrue (click)="onClick()">clickme!(Two-way binding)</button>
              <input [(ngModel)]="name" type="text">{{name}}
              <h2 *ngIf="displayName;else elseBlock">code</h2>
              <ng-template #elseBlock><h2>hidden</h2></ng-template>
              <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'">red</div>
              <div *ngSwitchDefault>pick again</div>
              </div>
              <div *ngFor="let class of classes"><h2>{{class}}</h2></div>
              <h2>{{"hello" + firstName}}</h2>
              <button (click)="fireEvent()">sendEvent</button>
              `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public greeting="declaring as public class and accessing through template ";
public displayName=false;
public firstName;
public color="red";
public classes=["faizan","shoeb","noman"];
public isTrue=false;
@Input() public parentData;
 @Output() public childEvent=new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
     console.log("hi");
  }
  fireEvent(){
    this.childEvent.emit("wait");
  }

}
