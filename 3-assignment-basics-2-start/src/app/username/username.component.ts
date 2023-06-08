import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  userName= '';
  button = false

  onUpdate(){
    if (this.userName !== ''){
      this.button = true;
    }
    if (this.userName === ''){
      this.button = false;
    }
  }
  onSubmit(event: any){
    console.log(this.userName);
    this.userName=''
  }
}
