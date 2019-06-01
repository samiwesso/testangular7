import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input('parentName') public name:string;
  @Input('parentAge') public age:string;

  @Output() public locationEvent = new EventEmitter();


  myLocation() {
    this.locationEvent.emit('Jag bor i Stockholm');
  }


  ngOnInit() {
  }

}
