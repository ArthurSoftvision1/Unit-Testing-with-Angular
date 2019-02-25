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

  constructor() { 
    this.counter = 1;
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
