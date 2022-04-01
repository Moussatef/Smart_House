import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  iconOffClass:String = 'iconOff';
  iconOnClass:String = 'iconOn';

  isOn:boolean = true;

  changeState(){
    this.isOn = !this.isOn;
    
  }
  ngOnInit(): void {
  }

}
