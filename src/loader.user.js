// ==UserScript==
// @name         FLR - Family Lock Rename
// @namespace    FLR
// @version      1.0.0
// @description  Loader of Bananarama92's "Family Lock Rename" mod
// @author       Bananarama92
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @homepage     https://github.com/bananarama92/FLR#readme
// @source       https://github.com/bananarama92/FLR
// @downloadURL  https://github.com/bananarama92/FLR/raw/main/family_lock_rename.user.js
// @updateURL    https://github.com/bananarama92/FLR/raw/main/family_lock_rename.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

/**
 * The new name of the family lock.
 * Feel free to change it from the default.
 * @type {string}
 */
const NEW_LOCK_NAME = "Toretto Lock";

/**
 * The new name of the family lock key.
 * Feel free to change it from the default.
 * @type {string}
 */
const NEW_KEY_NAME = "Toretto Lock Key";

// eslint-disable-next-line no-restricted-globals
setTimeout(
	() => {
		window.NEW_LOCK_NAME = NEW_LOCK_NAME;
		window.NEW_KEY_NAME = NEW_KEY_NAME;

		const n = document.createElement("script");
		n.language = "JavaScript";
		n.crossorigin = "anonymous";
		n.src = "https://bananarama92.github.io/FLR/devel/flr.js";
		document.head.appendChild(n);
	},
	2000,
);
