import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input() 

  @HostListener('click') toggleOpen(){

  }

  constructor() { 

  }

}
