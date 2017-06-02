/*
    /src/js/Model.js
    Load and manipulate data model
 */

export default class Model {
  constructor() {
    this.shortName = 'model';
  }

  setDependents(dependents) {
    for (let i=0; i<dependents.length; i++){
      this[dependents[i].shortName] = dependents[i];
    }
  }

}
