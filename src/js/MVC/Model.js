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
 * @copyright  Copyright (c) 2017 Listingslab (https://github.com/listingslab/boilerplate-es6-sass)
 * @license    https://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author     Chris Dorward <listingslab@gmail.com>
 *
 * src/js/Model.js
 * Load and manipulate data model
 *
 */

export default class Model {

  constructor(main) {
    this.main = main;
    this.shortName = 'm';
    this.data = {
      isLoaded: false,
    };
  }

  setDependents(dependents) {
    for (let i=0; i<dependents.length; i++){
      this[dependents[i].shortName] = dependents[i];
    }
  }

  loadJSON(path) {
        $.getJSON(path)
          .done(function( data ) {
            this.main.m.data.isLoaded = true;
            this.main.m.data.recievedJSON = data;
            this.main.v.showOutput($('#output-model'), JSON.stringify(this.main.m.data));
          }.bind(this))
          .fail(function( error ) {
            console.log(error.responseText);
          })
        ;
    $('#output-model').html('Loading model from ' + path);
  }

  doShit(shit){
    // this.doShit('doing shit');
  }

}
