"use strict";

const VERSION = "1.0.0";
const w = <typeof window & { FLR: { VERSION: typeof VERSION } }>window;
w.FLR = Object.freeze({ VERSION });

/** Wait for the passed predicate to evaluate to `true`. */
async function waitFor(predicate: () => boolean): Promise<boolean> {
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
		console.log(`FLR: FLR ${VERSION} successfully loaded`);
	} else {
		console.log("FLR: Failed to load");
	}
});
