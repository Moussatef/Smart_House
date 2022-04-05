import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Divace } from '../../models/divace';
import { status } from '../../enums/onOffEnum';


@Component({
  selector: 'app-divace-modal',
  templateUrl: './divace-modal.component.html',
  styleUrls: ['./divace-modal.component.css']
})
export class DivaceModalComponent implements OnInit {

  @Output() onAddDivace: EventEmitter<Divace> = new EventEmitter();

  divace_name!   : string ; 
  floor_number!  : number;
  room_type!     : string;
  status_divace! : boolean

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    
    const divace : Divace = {
      id     : Math.floor((Math.random() * 1000000) + 1),
      name   : this.divace_name, 
      room   : this.room_type,
      status : this.status_divace ? status.ON : status.OFF,
      floor  : this.floor_number

    }

    this.onAddDivace.emit(divace)

    this.divace_name   = ''
    this.room_type     = ''
    this.floor_number  = 1
    this.status_divace = false
    
  }

}
