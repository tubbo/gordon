/**
 * Gordon is a pure JavaScript object for easily setting and displaying the Rails Flash message in JavaScript. It was designed to be framework-agnostic, easy to understand, and very fast. To use it, simply include this file
 * and the attached CSS file in your <head> tag. It creates an object called `flash` which is used to reference a persistent status message and write to it anywhere JavaScript is acceptable.
 */


/**
 * Constructs the `flash` object that contains the actual flash message
 */
var Gordon=function() {
  // variables
  window.onload=function() {
  	this.container=document.getElementById('flash');
	this.container.style.display='none';
  };

  this.show=function() {
	var slideRate=3000;	// 3 seconds
	
    if (typeof jQuery != 'undefined') {
      $(container).slideDown(500);
	  setTimeout("$(container).slideUp(500);", slideRate);
    } else {
      container.style.display='block';
	  setTimeout("container.style.display='none';", slideRate);
    }
  };
  this.notice=function(msg) {
	container.setAttribute('class', 'notice');
    container.innerHTML=msg;
    this.show();
  };
  this.alert=function(msg) {
	container.setAttribute('class', 'alert');
    container.innerHTML=msg;
    this.show();
  }
};
var flash=new Gordon();

private function gSlideUp() {
	
}
private function gSlideDown() {
	
}