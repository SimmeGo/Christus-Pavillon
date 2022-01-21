let PaypalPopup;

PaypalPopup = WA.room.onEnterLayer('start').subscribe(() => {
    WA.ui.openPopup("startText", 'Hallo und herzlich Willkommen im Kloster Volkenroda! Ich bin Ida und ich werde dir erklären, wie du dich hier in der virtuellen Klosterumgebung ganz einfach zurechtfindest. Solltest du WorkAdventure schon kennen, dann kannst du diese Einführung überspringen und direkt nach links die Treppe hinuntergehen. Wenn nicht, dann klicke jetzt auf die Schaltfläche "Weiter". ', [
		{
	        label: "Schließen",
			className: "normal",
	        callback: (Popup) => {
	            // Close the popup when the "Close" button is pressed.
	            Popup.close();
	        }
    	},
		{
	        label: "Weiter",
	        className: "primary",
	        callback: (Popup) => {
	            // Close the popup when the "Close" button is pressed.
				Popup.close();
	            WA.ui.openPopup("startText", 'Wir befinden uns hier in einer 2D-Welt, das heißt es gibt nur Links, Recht, Oben und Unten. Du kannst durch diese Welt mittels der Pfeiltasten auf deiner Tastatur oder alternativ auch mit den Tasten A, S, W und D navigieren. Probier es einfach aus. Wenn du dich an die Steuerung gewöhnt hast, kannst du zu meinem Kollegen Ingo in die Pforte gehen. Folge dazu einfach den Schildern mit den Pfeilen darauf.', [
				{
			        label: "Schließen",
					className: "normal",
			        callback: (Popup) => {
			            // Close the popup when the "Close" button is pressed.
			            Popup.close();
			    	}
	    		}])
    	   }
       }
	]);
});

WA.room.onLeaveLayer("start").subscribe(() => {
    Popup.close();
});
