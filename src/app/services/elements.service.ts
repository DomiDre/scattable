import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  loadedElements = {};
  constructor() { }

  async get_element(elementSymbol: string) {
    const lookupElement = this.loadedElements[elementSymbol];
    if (lookupElement) {
      return lookupElement;
    } else {
      return import('./elements/' + elementSymbol)
      .then(result => {
        this.loadedElements[elementSymbol] = result[elementSymbol];
        return result[elementSymbol];
      }).catch(error => {
        console.error(error);
      });
    }
  }
}
