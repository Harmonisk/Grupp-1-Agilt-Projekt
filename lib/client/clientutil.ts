import Product from "@/interfaces/product";
import { saveCartSA } from "@/actions/server-actions";
import { DEBOUNCE_DB_DELAY } from "../constants";

// Functions that should only be called from the client

// ----- Debouncing DB writes -----
let debounceDBTimeout = -1;
const abortctrl = new AbortController();

export function saveCart(products: Product[]) {
    if (!window) {
        console.error("SHOULD NOT HAPPEN! SaveAnimesToDB called from server.");
        saveCartSA(products);
        return;
    }

    if (debounceDBTimeout > -1) {
        window.clearTimeout(debounceDBTimeout);
        abortctrl.abort();
    }

    const onBeforeUnload = () => {
        console.count("onBeforeUnload");
        navigator.sendBeacon("/api/savecart", JSON.stringify(products));
    };
    window.addEventListener("beforeunload", onBeforeUnload, { signal: abortctrl.signal });

    debounceDBTimeout = window.setTimeout(() => {
        abortctrl.abort();
        debounceDBTimeout = -1;
        saveCartSA(products);
    }, DEBOUNCE_DB_DELAY);
}
