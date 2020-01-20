import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  loadedElements = {};
  constructor() { }

  get_element(elementSymbol: string) {
    const lookupElement = this.loadedElements[elementSymbol];
    if (lookupElement) {
      return lookupElement;
    } else {
      import('./elements/' + elementSymbol)
      .then(result => {
        console.log(result[elementSymbol]);
      });
    }
  }
}
