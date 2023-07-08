import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  changeToActive: number = 0;
  changesToInactive: number = 0;
  
  constructor(){
  }
  counter(statusChanged: string){
    if (statusChanged === 'inactive'){
      this.changesToInactive++;
      console.log('Status change to INACTIVE ' + this.changesToInactive + ' times');
    } else {
      this.changeToActive++;
      console.log('Status change to ACTIVE ' + this.changeToActive + ' times');
    }
  }
}