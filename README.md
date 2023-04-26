# Family Lock Rename
A small mod for renaming the BC R92 Family Lock and Key.

The replacement names can be changed by modifying the `NEW_LOCK_NAME` and `NEW_KEY_NAME` variables in their own personal loader.user.js file.

## Installation
This addon can either be installed using Tampermonkey by clicking on the [src/loader.user.js](https://github.com/bananarama92/FLR/raw/main/src/loader.user.js) link or, alternatively, by passing assigning (and activating) the following link to a bookmark or directly using it in the address bar:

```js
javascript:(()=>{fetch('https://bananarama92.github.io/FLR/main/loader.user.js').then(r=>r.text()).then(r=>eval(r));})();
```
