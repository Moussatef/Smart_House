import { Component, Input, OnInit } from '@angular/core';
import { device } from '../../models/divace';
import { house } from '../../models/house';

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  styleUrls: ['./device-page.component.css']
})
export class DevicePageComponent implements OnInit {
  @Input() house:string | undefined
  @Input() floor_number:number | undefined
  @Input() room_type:string | undefined
  @Input() divace:device | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
