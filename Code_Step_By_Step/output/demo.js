// Inside demo.ts
function getInfo() {
    console.log("first");
}
window.getInfo = getInfo; // Force it to be global
export {};
