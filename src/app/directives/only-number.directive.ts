import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {
  // from https://stackoverflow.com/questions/41465542/angular2-input-field-to-accept-only-numbers

  // Allow decimal numbers. The \. is only allowed once to occur
  private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);

  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste'
  ];

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', [ '$event' ])
  onKeyDown(event: KeyboardEvent) {
      if ((this.specialKeys.indexOf(event.key) !== -1) || // Allow: navigation keys: backspace, delete, arrows etc.
          (event.key === 'a' && event.ctrlKey === true) || // Allow: Ctrl+A
          (event.key === 'c' && event.ctrlKey === true) || // Allow: Ctrl+C
          (event.key === 'v' && event.ctrlKey === true) || // Allow: Ctrl+V
          (event.key === 'x' && event.ctrlKey === true) || // Allow: Ctrl+X
          (event.key === 'a' && event.metaKey === true) || // Allow: Cmd+A (Mac)
          (event.key === 'c' && event.metaKey === true) || // Allow: Cmd+C (Mac)
          (event.key === 'v' && event.metaKey === true) || // Allow: Cmd+V (Mac)
          (event.key === 'x' && event.metaKey === true)) { // Allow: Cmd+X (Mac){
          return;
      }

      // Do not use event.keycode this is deprecated.
      // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
      const current: string = this.el.nativeElement.value;
      // We need this because the current value on the DOM element
      // is not yet updated with the value from this event
      const next: string = current.concat(event.key);
      if (next && !String(next).match(this.regex)) {
          event.preventDefault();
      }
  }
}
