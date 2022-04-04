import { Component, OnInit } from '@angular/core';
import { Divace } from '../../models/divace';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // userProfile:user | undefined 
  // findFloor? : floor
  // findRoom?:room
  // findDivace?:device

  divaces : Divace[] = []
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.profileService.getDivaces().subscribe( (divaces) => this.divaces = divaces )
  }

  deleteDivase(divace:Divace) {
    // this.findFloor = this.userProfile?.house?.floor.find(el => el.id === floor.id)
    // this.findRoom = this.findFloor?.room.find(el => el.id === room.id)
    // this.findDivace = this.findRoom?.divace.find(el => el.id === divace.id)

    this.profileService
      .deleteDivace(divace)
      .subscribe((divace) => this.divaces.filter(el => el.id !== divace.id));
  }

}
