import SistemaXItemSheet from "./module/sheets/myItemSheet.js";
Hooks.once("init", function(){
    console.log("test | Initializing mySystem");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mySystem", myItemSheet, {makeDefault: true});
});