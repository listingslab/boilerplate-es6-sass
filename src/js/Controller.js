/*
    /src/js/Controller.js
    Handles anything to do with the user interaction
 */

export default class Controller {
  constructor() {
    this.shortName = 'ui';
  }

  setDependents(dependents) {
    for (let i=0; i<dependents.length; i++){
      this[dependents[i].shortName] = dependents[i];
    }
  }

}
