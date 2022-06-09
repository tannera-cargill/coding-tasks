/**
 * The below snippet runs in the following order:
 * initSingleton() inside dependency.ts -> loadConfig() -> startReactApp() -> finalize()
 *
 * Let's refactor it to run in the following order:
 * loadConfig() -> initSingleton() -> startReactApp() -> finalize()
 * */
import "./dependency"

const loadConfig = () => {
    console.log("Config loaded");
    return Promise.resolve({ someConfig: "hi" });
};

const finalize = () => {
    console.log("finalized");
};

const startReactApp = (onStarted: () => void) => {
    console.log("React app rendered");
    onStarted();
};

export const executor = () => {
    loadConfig();
    startReactApp(() => {
        finalize()
    });
};

