// ==UserScript==
// @name         FLR - Family Lock Rename
// @namespace    FLR
// @version      1.0.0
// @description  Loader of Bananarama92's "Family Lock Rename" mod
// @author       Bananarama92
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @homepage     https://gist.github.com/bananarama92/891ba2e1b6f85bc962b954c297f2d68c#file-readme-md
// @source       https://gist.github.com/bananarama92/891ba2e1b6f85bc962b954c297f2d68c
// @downloadURL  https://gist.github.com/bananarama92/891ba2e1b6f85bc962b954c297f2d68c/raw/1e00a86f76ef8f12c5f1448b4862e4adaa4e90ef/family_lock_rename.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

/** 
 * The new name of the family lock.
 * Feel free to change it from the default.
 */
const NEW_LOCK_NAME = "Toretto Lock";

/** 
 * The new name of the family lock key.
 * Feel free to change it from the default.
 */
const NEW_KEY_NAME = "Toretto Lock Key";

/**
 * Wait for the passed predicate to evaluate to `true`.
 * @param {() => boolean} predicate A predicate
 * @param {number} timeout The timeout in miliseconds for when the predicate fails
 * @returns {Promise<boolean>}
 */
async function waitFor(predicate) {
	while (!predicate()) {
		await new Promise((resolve) => setTimeout(resolve, 2000));
	}
	return true;
}

/** Wait until BC has loaded all assets (see `AssetLoadAll`) */
waitFor(() => typeof Pose !== "undefined" && Array.isArray(Pose) && Pose.length > 1).then(() => {
	const familyLock = AssetGet("Female3DCG", "ItemMisc", "FamilyPadlock");
	const familyKey = AssetGet("Female3DCG", "ItemMisc", "FamilyPadlockKey");
	if (
        familyKey
        && familyLock
        && typeof NEW_LOCK_NAME === "string"
        && typeof NEW_KEY_NAME === "string"
    ) {
		familyLock.Description = NEW_LOCK_NAME;
		familyKey.Description = NEW_KEY_NAME;
	}
});
