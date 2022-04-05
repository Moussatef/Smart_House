import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Divace } from '../../models/divace';
import { status } from '../../enums/onOffEnum';


@Component({
  selector: 'app-divace-modal',
  templateUrl: './divace-modal.component.html',
  styleUrls: ['./divace-modal.component.css']
})
export class DivaceModalComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  divace_name!   : string ; 
  floor_number!  : number;
  room_type!     : string;
  status_divace! : boolean

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    console.log(this.divace_name +" / "+ this.status_divace  );

    const divace : Divace = {

      name   : this.divace_name, 
      room   : this.room_type,
      status : this.status_divace ? status.ON : status.OFF,
      floor  : this.floor_number

    }

    this.divace_name   = ''
    this.room_type     = ''
    this.floor_number  = 0
    this.status_divace = false
    
  }

}
