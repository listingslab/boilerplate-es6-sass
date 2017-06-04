/**
 * Boilerplate ES6 Sass App
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/osl-3.0.php
 *
 * @category   Listingslab
 * @package    boilerplate-es6-sass
 * @copyright  Copyright (c) 2017 Listingslab (http://listingslab.com)
 * @license    https://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author     Chris Dorward <listingslab@gmail.com>
 *
 * src/js/main.js
 * Main JavaScript entry point
 *
 */

import Model from './MVC/Model';
import View from './MVC/View';
import Controller from './MVC/Controller';

export default class Main {

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

new Main();
