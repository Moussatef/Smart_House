import { Component, OnInit } from '@angular/core';
import { Divace } from '../../models/divace';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  divaces : Divace[] = []
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.profileService.getDivaces().subscribe( (divaces) => this.divaces = divaces )
  }

  deleteDivase(divace:Divace) {

    this.profileService
      .deleteDivace(divace)
      .subscribe(() => ( this.divaces = this.divaces.filter(el => el.id !== divace.id)));
  }

  changeStatusDivace(divace:Divace){
    this.profileService.changeStatus(divace).subscribe()
  }

  addNewDivace(divace:Divace){
    this.profileService.addNewDivace(divace).subscribe( () => this.divaces.push(divace))
  }

}
