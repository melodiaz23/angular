import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private user: UserService){
  }

  ngOnInit(){
    this.activeUsers = this.user.activeUsers
    this.inactiveUsers = this.user.inactiveUsers
  }
  
  onSetToInactive(id: number) {
    this.user.inactiveUser(id)
  }

  onSetToActive(id: number) {
    this.user.activeUser(id);
  }
}
