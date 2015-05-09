AngularJS Directive for responsive Facebook Like Box
=============

[DEMO](http://plnkr.co/edit/QCMIgW?p=preview)

This Angular module needs jQuery to work, `jqlite`  won't cut it.

Add the 'FB' module to your dependencies, use the directive like:

```js
angular.module('yourApp', ['FB']);
```

Then your markup will be

```html
<div style="width: 80%;">
  <div fb-page="http://example.com"></div>
</div>
``` 

The box will redraw itself if the window is resized, according to the parent. You can set more options using other attributes:

```html
<div style="width: 80%;">
  <div fb-page="http://example.com" fb-height="800" fb-faces="true" fb-posts="true" fb-hide="true"></div>
</div>
``` 
