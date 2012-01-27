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
var Gordon=function(id) {
	/**
	 * Constructs the `flash` object that contains the actual flash message
	 */
	this.init=function() {
		this.container=document.getElementById('flash');

		// create #flash if it doesn't exist
		if (this.container.length > -1) {
			this.container.style.display='none';
		} else {
			var flash = document.createElement('div');
			flash.id = (typeof id != 'undefined') ? id : 'flash';
			document.body.appendChild(flash);
		}
	};

	/**
	 * Notice messages are green colored, and are used to denote a "success" status.
	 */
	this.notice=function(msg) {
		container.setAttribute('class', 'notice');
		container.innerHTML=msg;
		renderGordon();
	};

	/**
	 * Alert messages are colored red, and slightly larger than notice messages. Used to denote errors or any other kind of message that needs special attention.
	 */
	this.alert=function(msg) {
		container.setAttribute('class', 'alert');
		container.innerHTML=msg;
		renderGordon();
	};

	/**
	 * Info messages are blue in color and the same size as alert messages.
	 */
	this.info=function(msg) {
		container.setAttribute('class', 'info');
		if (msg) {
			container.innerHTML=msg;
		}
		renderGordon();
	};

	/**
	 * A private helper function that simply slides down the #flash, and after 2 seconds slides it back up. Uses jQuery if it's been included beforehand.
	 */
	function renderGordon() {
		var slideRate=3000;	// 3 seconds

		if (container.innerHTML == 'undefined' || container.innerHTML == '') {
			console.error('You must write a message to the #flash before displaying it.');
		} else {
			if (typeof jQuery != 'undefined') {
				$(container).slideDown(500);
				setTimeout("$(container).slideUp(500);", slideRate);
			} else {
				container.style.display='block';
				setTimeout("container.style.display='none';", slideRate);
			}
		}
	}

	init();	// runtime
};
