import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { Divace } from 'src/app/private/models/divace';
import { floor } from 'src/app/private/models/floor';
import { room } from 'src/app/private/models/room';
import {status} from "../../../private/enums/onOffEnum";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // @Input() house:string | undefined
  // @Input() floor:floor | undefined
  // @Input() room:room | undefined
  // @Input() house:string | undefined
  // @Input() floor:floor | undefined
  // @Input() room:room | undefined
  @Input() divace!: Divace;

  @Output() onDeleteDiv: EventEmitter<Divace> = new EventEmitter();
  @Output() onStatusChange: EventEmitter<Divace> = new EventEmitter();



  constructor() { }

  iconOffClass:String = 'iconOff bi bi-toggle-off ';
  iconOnClass:String = 'iconOn bi bi-toggle-on ';

  isOn:boolean = true;

  
  onDelete(divace:Divace) {
    this.onDeleteDiv.emit(divace);
    console.log(divace.id);
    
  }

  onChangeStatus(divace:Divace) {
    this.isOn = !this.isOn;
    divace.status = this.isOn ? status.ON : status.OFF;
    this.onStatusChange.emit(divace);
    console.log(divace.status);
    
  }
  ngOnInit(): void {
    this.divace ? this.divace.status == "ON" ? this.isOn = true : this.isOn = false : this.isOn = false;
  }

}
