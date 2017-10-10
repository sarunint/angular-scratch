import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{text}}</div><input type="text" [(ngModel)]="text">`
})
export class AppComponent implements OnInit {
  text = 'Hello';

  constructor() { }

  ngOnInit() { }
}
