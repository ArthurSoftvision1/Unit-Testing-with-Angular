import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {

  title = "Counter Testing";

  counter: number;

  public name: any;

  public userList: any;

  constructor() { 
    this.counter = 1;
  }

  ngOnInit() {
   this.sortArray();
  }

  sortArray() {
    this.userList = [77, 88, 33];
    this.userList.sort();
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  public getNames() {
    return this.name = [];
  }


}
