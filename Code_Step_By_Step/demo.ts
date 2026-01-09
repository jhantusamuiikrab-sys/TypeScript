// Inside demo.ts
function getInfo() {
    console.log("first");
}

(window as any).getInfo = getInfo; // Force it to be global