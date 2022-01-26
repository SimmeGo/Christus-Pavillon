class Popup {
    /**
     * Closes the popup
     */
    close() {};
}

//class Paypal {
//	GoTo() = WA.nav.openTab("https://www.paypal.com/paypalme/KlosterVolkenroda") {}
//}

//WA.openPopup("WasserText", 'Hallo!', [label: "OK", className: "normal", callback: (popup) => popup.close()]);


let WasserPopup1;
let WasserPopup2;
let WasserPopup3;

// Open the popup when we enter a given zone
WasserPopup1 = WA.onEnterZone('WasserZone1', () => {
    WA.openPopup("WasserText", 'Jesus Christus spricht: „Wen da dürstet, der komme zu mir und trinke. Wer von dem Wasser trinken wird, das ich ihm gebe, den wird in Ewigkeit nicht dürsten.“ (Joh 7,37 und 4,14)', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

WasserPopup2 = WA.onEnterZone('WasserZone2', () => {
    WA.openPopup("WasserText", 'Ständig sprudeln neue Ideen, neues Wissen und viele Informationen aus den verschiedensten Quellen des Lebens zusammen. In Bezug auf diese Woche, Dein Leben und auf Deinen Glauben: Was hast Du bisher mitgenommen? Wurde Dein Durst gestillt oder bist Du am Verdursten?', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

WasserPopup3 = WA.onEnterZone('WasserZone3', () => {
    WA.openPopup("WasserText", 'In dieser Kammer hast Du die Möglichkeit, Dir darüber Gedanken zu machen oder dich mit anderen auszutauschen, was Deinen/Euren Lebensfluss bisher angetrieben hat, was ihn ins Stocken bringt oder vorantreibt. Gibt es eine Quelle (z.B. Deinen Glauben, Gott o.ä.), die Dir Antrieb gibt? Helfen Dir solche Veranstaltungen wie diese, weiter zu schwimmen?', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

let TuerPopup1;
let TuerPopup2;

TuerPopup1 = WA.onEnterZone('TuerZone1', () => {
    WA.openPopup("TuerText", 'Jesus Christus spricht: „Ich bin die Tür“ (Joh 10,9). Ständig öffnen sich neue Türen. Manche Türen gefallen Dir nicht so – am liebsten würdest Du ihnen mal einen schönen Anstrich verpassen, damit Du lieber eintrittst. Das geht Dir selbst vielleicht auch manchmal so.', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

TuerPopup2 = WA.onEnterZone('TuerZone2', () => {
    WA.openPopup("TuerText", 'Du darfst Dir eine Veränderung an Dir wünschen. Dabei können es ganz offensichtliche Dinge sein, wie z.B. eine andere Haarfarbe oder innere Werte, wie z.B. Großzügigkeit, Humor oder Neugierde. Der springende Punkt: Du sollst es pantomimisch darstellen. Macht eine Reihenfolge aus, dann geht die „Tür“ auf (also das Video aus- und dann wieder anstellen) und Du bist ein „Neues Ich“. Stelle Deine Veränderung vor – die anderen müssen diese erraten. Seid kreativ und traut Euch, auch nicht so offensichtliche Dinge zu probieren!', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

let PerlePopup1;
let PerlePopup2;

PerlePopup1 = WA.onEnterZone('PerleZone1', () => {
    WA.openPopup("PerleText", 'Jesus Christus – die kostbare Perle: „Mit dem Himmelreich ist es wie mit einem Kaufmann, der schöne Perlen suchte. Als er eine besonders wertvolle Perle fand, verkaufte er alles, was er besaß, und kaufte sie“ (Mt 13, 45f). In Deinem Leben gibt es viele schöne Momente – Perlen. Eine weitere Perle sind Worte, die wir von Gott bekommen (haben).', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

PerlePopup2 = WA.onEnterZone('PerleZone2', () => {
    WA.openPopup("PerleText", 'Auf der Nummer 3 darfst du dir einen oder mehrere Bibelverse ziehen. Passen die Bibelverse zu Dir, zur aktuellen Lebenslage oder ist dies weit verfehlt? Gibt es Dinge, die Du damit in Verbindung bringst – Sachen, die Dir eventuell unklar sind? Tausche Dich mit anderen aus!', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

let WundePopup1;
let WundePopup2;

WundePopup1 = WA.onEnterZone('WundeZone1', () => {
    WA.openPopup("WundeText", '„Jesus Christus hat unsere Sünden mit seinem Leib auf das Holz des Kreuzes getragen. Durch seine Wunden seid ihr geheilt“ (1 Petr 2,24). Wir begegnen vielen anderen Menschen, die uns zum Lachen bringen, aber auch zum Weinen. Wir erleben Dinge, die uns erfreuen oder zutiefst erschüttern. Manchmal bleibt keine Zeit dafür, so viele Erlebnisse und Gefühle richtig zu verarbeiten. Dabei ist es sehr wichtig, dies zu tun.', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

WundePopup2 = WA.onEnterZone('WundeZone2', () => {
    WA.openPopup("WundeText", 'Deshalb nun die Aufgabe: Schnappe Dir einen Zettel und Stift und notiere all das, was Dich beschäftigt. Sei es, dass Du dir Weltfrieden wünschst oder inneren Frieden. Schreibe Deine Gebetsanliegen auf und befreie Dich von den Lasten. Im Anschluss daran, kannst Du diese zerknüllen, zerreißen oder unter Vorsicht auch verbrennen. Löse Dich von Deinen (un)sichtbaren Wunden.', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

let HerrlichkeitPopup1;
let HerrlichkeitPopup2;

HerrlichkeitPopup1 = WA.onEnterZone('HerrlichkeitZone1', () => {
    WA.openPopup("HerrlichkeitText", '„Wir haben seine Herrlichkeit gesehen, die Herrlichkeit des einzigen Sohnes vom Vater, voll Gnade und Wahrheit“ (Joh 1, 14). Die Kammer `Herrlichkeit` ist eine besonders eindrucksvolle Kammer, weil sie mit ihrem ganzen Gold nur so vor Wärme strahlt. ', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

HerrlichkeitPopup2 = WA.onEnterZone('HerrlichkeitZone2', () => {
    WA.openPopup("HerrlichkeitText", 'Aber verbindest Du Gott mit Gold, Wärme und Herrlichkeit oder sind es für Dich andere Dinge? Wer ist Gott überhaupt für Dich? Ist er eher ein König oder sogar eine Königin? Die wunderbare Natur oder bleibt er/sie unvorstellbar?  …und noch viel wichtiger: Welches Gefühl hast Du, wenn Du glaubst: Demut oder Geborgenheit? Komm mit anderen ins Gespräch und stell Dir diese oder andere Fragen!', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

let TriniPopup1;
let TriniPopup2;

TriniPopup1 = WA.onEnterZone('TriniZone1', () => {
    WA.openPopup("TriniText", '„Aus ihm und durch ihn und auf ihn hin ist die ganze Schöpfung. Ihm sei Ehre in Ewigkeit (Röm 11, 3-6).“ Vater, Sohn und Heiliger Geist – wer ist das eigentlich alles? Wir bezeichnen dies als Dreieinigkeit, doch oft haben wir nicht zu allen dreien gleichen Zugang. Wie ist das bei Dir: Wer ist Dir am nächsten und mit wem kannst Du vielleicht gar nichts anfangen?', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

TriniPopup2 = WA.onEnterZone('TriniZone2', () => {
    WA.openPopup("TriniText", 'Dazu kannst Du dir die Frage stellen: Stell Dir vor, Du klopfst an das „Glaubenshaus“ – wer macht Dir die Türe auf? Ist es Gott, Jesus oder der Heilige Geist und warum? Vielleicht kannst Du dich mit anderen austauschen, wie das bei ihnen ist und ob sie Zugang zum Heiligen Geist haben?', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

let BrotPopup1;
let BrotPopup2;

BrotPopup1 = WA.onEnterZone('BrotZone1', () => {
    WA.openPopup("BrotText", 'Jesus Christus spricht: „Das Brot, das Gott gibt, kommt vom Himmel herab und gibt der Welt das Leben. Ich bin das Brot des Lebens“ (Joh 6, 33.35).', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

BrotPopup2 = WA.onEnterZone('BrotZone2', () => {
    WA.openPopup("BrotText", 'Wie gehst du mit Dürrezeit um? Was sind Deine Zweifel an Gott? Was fehlt Dir, um zu glauben bzw. ihm zu vertrauen? Hier ist Platz für alle Deine Bedenken, Unsicherheiten und Fragen rund um das Thema Christentum, Gott etc. Komme mit anderen ins Gespräch, diskutiere darüber, finde Antworten oder Denkanstöße.', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

let WeinPopup1;
let WeinPopup2;

WeinPopup1 = WA.onEnterZone('WeinZone1', () => {
    WA.openPopup("WeinText", 'Jesus Christus spricht: „Ich bin der Weinstock, ihr seid die Reben. Wer in mir bleibt und in wem ich bleibe, der bringt reiche Frucht“ (Joh 15, 5). In unserer Konsumgesellschaft vergessen wir manchmal, auch die kleinen Dinge zu schätzen. Deshalb wollen wir eine Dankbarkeitskette bilden, die wie folgt funktioniert:', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

WeinPopup2 = WA.onEnterZone('WeinZone2', () => {
    WA.openPopup("WeinText", 'Du schreibst drei Dinge auf, für die du dankbar bist. Versuche, dein zweites Wort mit dem Endbuchstaben des letzten Wortes deines/r VorgängerIn zu beginnen (siehe Beispiel). Es können die verrücktesten Sachen sein, für die ihr Dankbarkeit empfindet, aber du solltest wirklich dankbar dafür sein. Den Link zum Padlet mit dem Beispiel findest du bei der Nummer 3.', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

let LichtPopup1;
let LichtPopup2;

LichtPopup1 = WA.onEnterZone('LichtZone1', () => {
    WA.openPopup("LichtText", 'Jesus Christus spricht: „Ich bin das Licht der Welt. Wer mir nachfolgt, der wird nicht in der Finsternis wandeln, sondern wird das Licht des Lebens haben“ (Joh 8, 12). Ohne Licht wäre alles ganz schön dunkel. Gott sei Dank, dass es nicht so ist! Du hast leider nicht die Möglichkeit, hier Vorort eine Kerze zu entzünden, aber bei Dir Zuhause.', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

LichtPopup2 = WA.onEnterZone('LichtZone2', () => {
    WA.openPopup("LichtText", 'Suche Dir eine Kerze und ein Feuerzeug und entzünde das Licht (auch gerne mit einer Intention). Nimm Dir ein paar Minuten Zeit und lasse Deinen Gedanken freien Lauf! Wenn Du keine Kerze Zuhause hast, dann schalte Dein Handylicht an oder besuche die Website bei Nummer 3.', [
	{
        label: "Schließen",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    }
	]);
});

let PaypalPopup;

PaypalPopup = WA.room.onEnterLayer('paypal').subscribe(() => {
    WA.ui.openPopup("PaypalText", 'Hier kannst du für den Erhalt und die Weiterentwicklung dieser virtuellen Umgebung des Klosters spenden. Damit das Geld an der richtigen Stelle ankommt, gib in dem Feld "Nachricht" bei Paypal "EJBZ" ein. Dann kann die Buchhaltung die Spende richtig zuordnen. Vielen Dank im Voraus für deine Unterstützung! ', [
	{
        label: "Schließen",
		className: "normal",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
            Popup.close();
        }
    },
	{
        label: "Zu Paypal",
        className: "primary",
        callback: (Popup) => {
            // Close the popup when the "Close" button is pressed.
           WA.nav.openTab('https://www.paypal.com/paypalme/KlosterVolkenroda');
        }
    }
	]);
});

WA.room.onLeaveLayer("paypal").subscribe(() => {
    WA.chat.sendChatMessage("test", "Mr. Test");
    PayPalPopup = Popup.close();
});
