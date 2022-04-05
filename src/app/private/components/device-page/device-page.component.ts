import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Divace } from '../../models/divace';

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  styleUrls: ['./device-page.component.css']
})
export class DevicePageComponent implements OnInit {
  // @Input() house:string | undefined
  // @Input() floor?:floor 
  // @Input() room?:room 
  @Input() divace!:Divace
  @Output() onDeleteDivace: EventEmitter<Divace> = new EventEmitter();
  @Output() onStatusChange: EventEmitter<Divace> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteDiv(divace:Divace) {
    console.log("I'm in device");
    this.onDeleteDivace.emit(divace);
  }

  onChangeStatus(divace:Divace) {
    this.onStatusChange.emit(divace);
    console.log(divace.id);
    
  }

}
