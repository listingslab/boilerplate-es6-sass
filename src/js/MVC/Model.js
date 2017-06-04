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
 * src/js/Model.js
 * Load and manipulate data model
 *
 */

export default class Model {
  constructor() {
    this.shortName = 'model';
    // load the data from ./data/data.json
    this.loadData('./data/data.json');
  }

  setDependents(dependents) {
    for (let i=0; i<dependents.length; i++){
      this[dependents[i].shortName] = dependents[i];
    }
  }

  loadData (jsonUrl){
    console.log(jsonUrl);
    // Assign handlers immediately after making the request,

    // and remember the jqXHR object for this request
    var jqxhr = $.ajax( jsonUrl )
      .done(function(e) {
        console.log( e );
      })
      .fail(function() {
        console.log( "error" );
      })
      .always(function() {
        console.log( "complete" );
      });

    // Perform other work here ...

    // Set another completion function for the request above
    jqxhr.always(function() {
      console.log( "definately complete" );
    });
  }

}
