/*
    /src/js/NewClass.js
    Template for creating a new class to be instantiated in main.js
    see http://stackoverflow.com/questions/43838136/instantiate-and-use-2-or-more-javascript-es6-classes
 */

export default class NewClass {

  constructor() {
    // Application's internal reference for this class
    this.shortName = 'newclass';
  }

  setDependents(dependents) {
    // Called from main.js to allow access to all classes
    for (let i=0; i<dependents.length; i++){
      this[dependents[i].shortName] = dependents[i];
    }
  }

}
