/*
   src/js/main.js
   Main entry point for the Application
 */

import Model from './Model';
import View from './View';
import Controller from './Controller';


export default class App {
  constructor() {

    // Instantiate MVC Classes
    // See http://stackoverflow.com/questions/43838136/instantiate-and-use-2-or-more-javascript-es6-classes

    this.m = new Model();
    this.v = new View();
    this.c = new Controller();

    // Create an array of instantiated classes and Set Dependents
    const dependents = [this.m, this.v, this.c];
    this.m.setDependents(dependents);
    this.v.setDependents(dependents);
    this.c.setDependents(dependents);

  }
}

console.log('All good innit?');
new App();

