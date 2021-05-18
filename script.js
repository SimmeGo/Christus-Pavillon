(()=>{"use strict";console.log("Script started successfully"),WA.openCoWebSite("https://workadventu.re")})();
//# sourceMappingURL=script.js.map
=======
WA.sendChatMessage(message: 'Hello world', author: 'Mr Robot');

class Popup {
    /**
     * Closes the popup
     */
    close() {};
}

//WA.openPopup("WasserText", 'Hallo!', [label: "OK", className: "normal", callback: (popup) => popup.close()]);

WA.onEnterZone('WasserZone', () => {
    WA.sendChatMessage("Hello!", 'Mr Robot');
})

let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('WasserZone', () => {
    WA.openPopup("WasserText", 'Hello world!', [{
        label: "Schliessen",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('WasserZone', () => {
    helloWorldPopup.close();
});
