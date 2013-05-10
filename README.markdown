# make-object

Because even bad ideas need implementations.

## Installation

### Node.js

For *Node.js*, use `npm`:

````console
npm install make-object
````

..then `require` make-object:

````javascript
var MakeObject = require('make-object');
````

### In the browser, traditional

For the *browser*, add the following to your pages:

````html
<script src="make-object.js"></script>
````

And the global function `MakeObject` will be available.

### In the browser, using AMD (require.js)

...Or using AMD in the browser:

````javascript
require(["make-object"], function(MakeObject) {
	// ...
});
````

## Usage

````javascript
var newObject = MakeObject("x.y[0].z", "this is z's value" [, base_object_to_add_properties_to ]); 
````

## \*Note

If you use this, people will probably hate you at some point in the future.

## License - MIT

> Copyright (C) 2012 Jon-Carlos Rivera
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
