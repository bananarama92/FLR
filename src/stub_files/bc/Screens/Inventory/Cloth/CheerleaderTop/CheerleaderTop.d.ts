/** @type {ExtendedItemCallbacks.Init} */
declare function InventoryClothCheerleaderTopInit(C: Character, Item: Item, Refresh: boolean): boolean;
/** @type {ExtendedItemCallbacks.Load} */
declare function InventoryClothCheerleaderTopLoad(): void;
/** @type {ExtendedItemCallbacks.Draw} */
declare function InventoryClothCheerleaderTopDraw(): void;
/** @type {ExtendedItemCallbacks.Click} */
declare function InventoryClothCheerleaderTopClick(): void;
/** @type {ExtendedItemCallbacks.Exit} */
declare function InventoryClothCheerleaderTopExit(): void;
/**
 * @param {DynamicDrawingData} data
 */
declare function AssetsClothCheerleaderTopAfterDraw({ CA, C, A, G, X, Y, L, Property, drawCanvas, drawCanvasBlink, AlphaMasks, Color }: DynamicDrawingData): void;
declare namespace AssetsClothCheerleaderTopData {
    namespace _Small {
        const shearFactor: number;
        const width: number;
        const yOffset: number;
    }
    namespace _Normal {
        const shearFactor_1: number;
        export { shearFactor_1 as shearFactor };
        const width_1: number;
        export { width_1 as width };
        const yOffset_1: number;
        export { yOffset_1 as yOffset };
    }
    namespace _Large {
        const shearFactor_2: number;
        export { shearFactor_2 as shearFactor };
        const width_2: number;
        export { width_2 as width };
        const yOffset_2: number;
        export { yOffset_2 as yOffset };
    }
    namespace _XLarge {
        const shearFactor_3: number;
        export { shearFactor_3 as shearFactor };
        const width_3: number;
        export { width_3 as width };
        const yOffset_3: number;
        export { yOffset_3 as yOffset };
    }
}
