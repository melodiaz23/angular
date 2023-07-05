import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output() clickEvent = new EventEmitter<string>()
  collapsed = true;
  dropdownIsOpen = false;

  manageClicked(){
    this.dropdownIsOpen = !this.dropdownIsOpen;
  }

  onSelect(feature: string){
    console.log(feature)
    this.clickEvent.emit(feature);
  }
}