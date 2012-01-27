Gordon. Flash Gordon.
=====================

**Gordon** is a plugin that manages the display of error messages using pure JavaScript. It was inspired by Twitter's means of displaying the flash.

Features
--------

* Three display formats ("notice", "alert" and "info"), all configurable using the bundled CSS file.
* Uses [jQuery](http://jquery.com/) for speedy animations, when available.

Installation
------------

First of all, include **gordon.js** and **gordon.css** in the `<head>` tag of your page.

Then, instantiate the plugin with the ID of your element (default is "flash"). Make sure this is consistent with the id in your CSS.

    var flash = new Gordon("flash");

Usage
-----

Gordon has three methods that can be used at any time in your JS code.


To display the flash with green, 14pt text...

    flash.notice("message");

To display the flash with red text at 16pt, slightly larger than the default format...

    flash.alert("message");

To display the flash with blue text at 16pt...

    flash.info("message");

This is also slightly larger, in order to denote special text that may require magnification

#### **NOTE:** You can opt to just display the last set status message by invoking the `flash.` methods without any arguments.

License
-------

Copyright (c) 2011-2012 Tom Scott <<http://psychedeli.ca>>

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
