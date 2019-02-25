import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;


  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();
  })
  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

  it ('should create counter component', () => {
    expect(component).toBeTruthy();
  })

  it(`should have as title 'Counter Testing'`, async(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Counter Testing');
  }))

  it('should increment the counter number by one', () => {
    // Arrange
    const initialValue = component.counter;

    // Act
    component.increment();
    fixture.detectChanges()
    const newValue = component.counter;

    // Assert
    expect(newValue).toBeGreaterThan(initialValue);
  })

  it('should decrement the counter number by one', () => {
    // Arrange
    const initialValue = component.counter;

    // Act
    component.decrement();
    fixture.detectChanges()
    const newValue = component.counter;

    // Assert
    expect(newValue).toBeLessThan(initialValue);
  })

  it('should display the counter number on screen, after being incremented by one (just the first increase)', () => {
    component.increment();
    fixture.detectChanges()
    expect(htmlElement.textContent).toEqual('Number: 2');
  })

  it('should display the counter number on screen, after being decremented by one (just the first decrease)', () => {
    component.decrement();
    fixture.detectChanges()
    expect(htmlElement.textContent).toEqual('Number: 0');
  })

  it('should display the current number of the counter', () => {
    // assert that the text on screen is of Number: 1
    expect(htmlElement.textContent).toEqual('Number: 1');
  })
 
  it('expect getNames function to return an empty Array', () => {
    expect(component.getNames()).toEqual([]);
  })

});

