import { Component, OnInit } from '@angular/core';
import { user } from '../../models/user';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile:user | undefined 
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUser().subscribe( (user) => this.userProfile = user )
  }

}
