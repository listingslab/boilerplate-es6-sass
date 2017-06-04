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
 * src/js/Controller.js
 * Handles anything to do with user interaction
 *
 */

export default class Controller {
  constructor(main) {
    this.main = main;
    this.shortName = 'c';
    //console.log($('#input-submit-email'));
    // Should only be triggered on first page loa
    // console.log ('set submit function for email field')

  }

  setDependents(dependents) {
    for (let i=0; i<dependents.length; i++){
      this[dependents[i].shortName] = dependents[i];
    }
  }


  setButtonActions() {
    // console.log('setButtonActions');
    // button.onclick = function (){
    //   alert ('click');
    // }

    $('#input-submit-button').click(function() {
        console.log ('submitted');
    });


  }

}
