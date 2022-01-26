let startPopup;

startPopup = WA.onInit().then(() => {
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
    startPopup.close();
});

let ingoPopup;

ingoPopup = WA.room.onEnterLayer("ingo").subscribe(() => {
    WA.ui.openPopup("ingoText", 'Hallo, schön, dass du da bist. Wie du vielleicht schon bemerkt hast, gibt es hier einige Bereiche, in denen du mit der Welt interagieren kannst. Siehst du den Tisch mit der Vase darauf? Setze dich hin, dann öffnet sich eine Website.', [
		{
	        label: "Schließen",
			className: "normal",
	        callback: (Popup) => {
	            // Close the popup when the "Close" button is pressed.
	            Popup.close();
	        }
    	}
	]);
});

WA.room.onLeaveLayer("start").subscribe(() => {
    ingoPopup.close();
});

let meetingPopup;

meetingPopup = WA.room.onLeaveLayer("MeetingInnenhof").subscribe(() => {
    WA.ui.openPopup("lagerraumText", 'Super, du hast den Lagerraum erkundet! Gehe jetzt wieder nach draußen und folge weiter den Pfeilen. Dann wirst du Eugen, die Sportskanone, antreffen.', [
		{
	        label: "Schließen",
			className: "normal",
	        callback: (Popup) => {
	            // Close the popup when the "Close" button is pressed.
	            Popup.close();
	        }
    	}
	]);
});

WA.room.onLeaveLayer("DoorPforte").subscribe(() => {
    meetingPopup.close();
});

let eugenPopup;

eugenPopup = WA.room.onEnterLayer("eugen").subscribe(() => {
    WA.ui.openPopup("eugenText", 'Hey, voll cool, dass du am Start bist! Hat dir schon jemand gezeigt, wie du richtig schnell davondüsen kannst? Halte einfach die SHIFT-Taste gedrückt, während du deinen Avatar navigierst und schon geht die Post ab! Bevor du aber abhaust, möchte ich dir noch eine Sache erklären:', [
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
	            WA.ui.openPopup("eugenText", 'Immer, wenn du in der Nähe des Avatars eines anderen Nutzers bist, öffnet sich eine „Bubble“. Die erlaubt es, miteinander zu reden und euch zu sehen. In einer Bubble können maximal 4 Personen gleichzeitig miteinander kommunizieren.', [
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
   	            WA.ui.openPopup("eugenText", 'Es gibt aber auch stille Bereiche, in denen das Reden miteinander nicht erlaubt wird wie hier bei der Pforte bisher. Solltest du das mal ausprobieren, triff dich mit einer anderen Person auf der grünen Wiese, die du findest, wenn du die Treppe hier hinuntergehst. Viel Spaß!', [
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
            ])}
        }
	]);
});


WA.room.onLeaveLayer("eugen").subscribe(() => {
    eugenPopup.close();
});
