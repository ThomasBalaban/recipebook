import { Directive, HostListener, HostBinding } from '@angular/core'

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false

  constructor() { }

  @HostListener('click') toggleOpen(eventData: Event) {
    console.log('t: ', this)
    this.isOpen = !this.isOpen
  }
}
