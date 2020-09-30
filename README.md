# playing-with-colors
Use this tool to do some funny stuff with your webpage text and background colors

## Usage
This tool is easy to use and is indeed powerful. It has five inbuilt methods which allow you to manipulate backgrounds, apply smooth gradients, alter elements' background colors and text colors and then an inbuilt RGBA color value picker that converts colors to an RGBA value, returning an array.

To include the script, simply reference the source file thus;

```html
<script src="script.js"></script>
```

## In-built methods
The following are in-built methods in the package:

#### toRGBA()
This function converts any color to an RGBA array with format [R, G, B, A]

#### invertAll()
This is obviously going to be the most powerful. A lot of us know what Invert color filters do to images. And hurray. It happens. This function inverts the text colors and background colors of all elements in any webpage it sits on. Simply call it by
```js
    invertAll()
```
#### manipulateColor(HTMLDOMElement)
This is a unit worker of the invertAll() function. This inverts the text color of any DOM element passed to it as an argument. It takes only one argument.

#### manipulateBackColor(HTMLDOMElement)
This is also a unit worker of the invertAll() function. This rather inverts the background color of any DOM element passed to it as an argument. It takes only one argument.

#### evenGradientFill(HTMLDOMElement, type=0, angleindegrees=45)
This function is one of the sweetest </😎> It actually has two variations of use. For radial gradient and for linear gradients. The tool simply takes one to three arguments. The **MUST** is the HTMLDOMElement. The type, when 0, tells the function to make it linear, else, if zero, gradient. And then, the third parameter specifies the angle in degrees. If not specified, it defaults to 45. Meanwhile, what this function does is to take the background color of an element and convert it to a linear or gradient fill.

You can make contributions or buy me a cup of coffee by reaching out to me via +2348117093601 😉 or elzucky@gmail.com
