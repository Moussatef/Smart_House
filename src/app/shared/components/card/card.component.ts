import { Component, Input, OnInit } from '@angular/core';
import { device } from 'src/app/private/models/divace';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() house:string | undefined
  @Input() floor_number:number | undefined
  @Input() room_type:string | undefined
  @Input() divace:device | undefined


  constructor() { }

  iconOffClass:String = 'iconOff bi bi-toggle-off ';
  iconOnClass:String = 'iconOn bi bi-toggle-on ';

  isOn:boolean = true;

  changeState(){
    this.isOn = !this.isOn;
    
  }
  ngOnInit(): void {
    this.divace ? this.divace.status == "ON" ? this.isOn = true : this.isOn = false : this.isOn = false;
  }

}
