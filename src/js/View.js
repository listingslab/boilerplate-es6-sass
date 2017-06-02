/*
    /src/js/View.js
    Handles everything to do with loading/parsing/displaying/logging or rendering
 */

export default class View {
  constructor() {
    this.shortName = 'view';
  }

  setDependents(dependents) {
    for (let i=0; i<dependents.length; i++){
      this[dependents[i].shortName] = dependents[i];
    }
  }

}
