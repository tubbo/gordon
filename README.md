# Gordon. Flash Gordon.
**Gordon** is a plugin that manages the display of error messages using pure JavaScript. Although it can (and does) bind to existing frameworks to save speed and fit in better with its environment. While Gordon is framework-agnostic, it does require that you leave the variable `flash` open.

## Features
* Three display formats ("notice", "alert" and "info"), all configurable using the bundled CSS file.
* Uses [jQuery](http://jquery.com/) for speedy animations, when available.

* * *

## Usage
To get started using Gordon, all you have to do is include `gordon.js` and `gordon.css` in your web application. Then, invoke one of the following commands to see it in action!

### flash.notice("message");
Displays the flash with green, 14pt text.

### flash.alert("message");
Displays the flash with red text at 16pt, slightly larger than the default format.

### flash.info("message");
Displays the flash with blue text at 16pt. This is also slightly larger, in order to denote special text that may require magnification

#### **NOTE:** You can opt to just display the last set status message by invoking the `flash.` methods without any arguments.

* * *

## Credits

* Tom Scott <http://psychedeli.ca/>

Questions? Hit me up on [GitHub](http://github.com/tubbo) or [Twitter](http://twitter.com/tubbo).
Or you can email me at tubbo (->AT<-) psychedeli (->DOT<-) ca