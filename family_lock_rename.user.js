// ==UserScript==
// @name         FLR - Family Lock Rename
// @namespace    FLR
// @version      0.0.1
// @description  Loader of Bananarama92's "Family Lock Rename" mod
// @author       Bananarama92
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @homepage     ...
// @source       ...
// @downloadURL  ...
// @run-at       document-end
// @grant        none
// ==/UserScript==

// eslint-disable-next-line no-restricted-globals
setTimeout(
    () => {
        const n = document.createElement("script");
        n.language = "JavaScript";
        n.crossorigin = "anonymous";
        n.src = "...";
        document.head.appendChild(n);
    },
    2000,
);