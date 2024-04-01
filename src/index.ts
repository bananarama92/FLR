import bcModSdk from "bondage-club-mod-sdk";

/**
 * The new name of the family lock.
 * Feel free to change it from the default.
 */
declare const NEW_LOCK_NAME: undefined | string;

/**
 * The new name of the family lock key.
 * Feel free to change it from the default.
 */
declare const NEW_KEY_NAME: undefined | string;

/** The FLR version */
const VERSION = "1.0.1";

bcModSdk.registerMod({
    name: "FLR",
    fullName: "Family Lock Rename",
    repository: "https://github.com/bananarama92/FLR",
    version: VERSION,
});

const w = globalThis as typeof globalThis & { FLR: { readonly VERSION: typeof VERSION } };
w.FLR = Object.freeze({ VERSION });

/** Wait for the passed predicate to evaluate to `true`. */
async function waitFor(predicate: () => boolean): Promise<boolean> {
    while (!predicate()) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    return true;
}

/** Wait until BC is loaded */
waitFor(() => typeof MainCanvas === "object").then(() => {
    const familyLock = AssetGet("Female3DCG", "ItemMisc", "FamilyPadlock");
    const familyKey = AssetGet("Female3DCG", "ItemMisc", "FamilyPadlockKey");
    if (
        familyKey
        && familyLock
        && typeof NEW_LOCK_NAME === "string"
        && typeof NEW_KEY_NAME === "string"
    ) {
        (familyLock as Mutable<Asset>).Description = NEW_LOCK_NAME;
        (familyLock as Mutable<Asset>).Description = NEW_KEY_NAME;
        console.log(`FLR: FLR ${VERSION} successfully loaded`);
    } else {
        console.warn("FLR: Failed to load");
    }
});
