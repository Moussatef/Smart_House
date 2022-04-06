import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-danger-alert',
  templateUrl: './danger-alert.component.html',
  styleUrls: ['./danger-alert.component.css']
})
export class DangerAlertComponent implements OnInit {

  @Input() description! : String;
  @Input() type! : String;

  classType : String = "";

  constructor() { }

  ngOnInit(): void {
    this.classType = this.type == "danger" ? "alert-danger" : this.type== "success" ? "alert-success" : "alert-info";
  }

}
