A small mod for renaming the BC R92 Family Lock and Key.

The replacement names can be changed by modifying the `NEW_LOCK_NAME` and `NEW_KEY_NAME` variables in the user.js file.

## Installation
This addon can either be installed using Tampermonkey by clicking on the [family_lock_rename.user.js](https://gist.github.com/bananarama92/891ba2e1b6f85bc962b954c297f2d68c/raw/1e00a86f76ef8f12c5f1448b4862e4adaa4e90ef/family_lock_rename.user.js) link or, alternatively, by passing assigning (and activating) the following link to a bookmark or directly using it in the address bar:

```js
javascript:(()=>{fetch('https://gist.github.com/bananarama92/891ba2e1b6f85bc962b954c297f2d68c/raw/1e00a86f76ef8f12c5f1448b4862e4adaa4e90ef/family_lock_rename.user.js').then(r=>r.text()).then(r=>eval(r));})();
```