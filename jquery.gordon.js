/**
 * Gordon is a pure JavaScript object for easily setting and displaying the Rails Flash message in JavaScript. It was designed to be framework-agnostic, easy to understand, and very fast. 
 * To use it, simply include this file and the attached CSS file in your <head> tag. It creates an object called `flash` which is used to reference a persistent status message and write to it 	
 * anywhere JavaScript is acceptable.
 *
 * Gordon uses jQuery when available for animations. It is NOT required!
 *
 * @author Tom Scott <http://github.com/tubbo>
 * @license MIT
 */
(function( $ ){
  $.fn.flash = function(params) {
	// default vars
	var die;
	var settings = {
		text: '',
		scheme: 'notice',
		delay: 1000
	};
	
	// set up the flash object and its parameters
	if (typeof params != 'string') {
		settings.text = params;
		die=false;
	} else {
		$.fn.extend(settings, params);															// set up the flash jQuery object
		die=false;
	}
  };
})( jQuery );