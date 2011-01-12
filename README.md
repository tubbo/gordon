# Gordon. Flash Gordon.
**Gordon** is a plugin that manages the display of error messages using pure JavaScript. Although it can (and does) bind to existing frameworks to save speed and fit in better with its environment. While Gordon is framework-agnostic, it does require that you leave the variable `flash` open.

Questions? Problems? Hit me up on Twitter ([@tubbo](http://twitter.com/tubbo).) or just [shoot me a message](http://github.com/inbox/new/tubbo).

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

## License

Copyright (c) 2011 Tom J. Scott <<http://psychedeli.ca>>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.