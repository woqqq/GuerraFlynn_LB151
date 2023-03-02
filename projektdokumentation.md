# Projekt-Dokumentation

Guerra

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 12.01.2023    | 0.0.1   | Fragen 1-5 Beantwortet                                       |
| 19.01.2023      | 0.0.2   | Informieren über Projektumsetzung mit React      |
| 26.01.2023 | 0.0.3   | Realisierung begonnen, Login / Spiellogik begonnen |
|  02.02.2023  | 0.0.4   |   Login beendet, Spiellogik Basis fertig |
| 20.02.2023 | 0.0.5   | Spiellogik beendet, jedoch ohne Datenbank |
| 27.02.2023 | 0.0.6   | Etliche fehlversuche Datenbank zu implementieren |
| 02.03.2023 | 1.0.0   | Überarbeitung und Beendung der Dokumentation, Aufnahme Video |

# 0 Ihr Projekt

Das Projekt ist ein Spiel, bei dem der Benutzer Wörter oder Redewendungen in einem Gitter erraten muss, indem er Buchstaben an einer Rate-Wand ratet und dabei versucht, möglichst hohe Geldbeträge zu erspielen, indem er ein Glücksrad dreht, das verschiedene Arten von Feldern enthält.

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Anzeigen des Glückrades und des Gitters in welchem man das Wort erraten muss
* Tier 2 (Webserver): Websicherheit, Verwaltung Guthaben Benutzer
* Tier 3 (Application Server): Verbindung zur Datenbank
* Tier 4 (Dataserver): Speichern des Guthabens eines Benutzers, Logindaten eines Benutzers

# 2 Technologie
* Tier 1 (Presentation): React
* Tier 2 (Webserver): Node.js
* Tier 3 (Application Server): Node.js
* Tier 4 (Dataserver): Firebase


# 3 Datenbank

Firebase ist eine Plattform, die es Entwicklern ermöglicht, Datenbank, Authentifizierung, Hosting und andere Funktionen in ihre Anwendungen zu integrieren. Firebase Realtime Database ist eine NoSQL-Datenbank, die auf JSON-Datenstrukturen aufbaut und in Echtzeit synchronisiert wird. Es ermöglicht schnell und einfach Daten in einer Anwendung zu speichern und abzurufen und bietet auch eine API für die Autorisierung und Authentifizierung. Firestore ist eine dokumentenbasierte NoSQL-Datenbank. Im Gegensatz zu einer SQL-Datenbank gibt es hier keine Tabellen oder Zeilen. Stattdessen speichern Sie Daten in Dokumenten, die in Sammlungen organisiert sind. Jedes Dokument enthält eine Reihe von Schlüssel/Wert-Paaren.

# 4.1 User Stories


| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    | muss | Funktional | Als ein Administrator möchte ich mich durch Benutzername und Passwort authentifizieren können, damit ich auf die Funktionen für Phrasen und Rätselwörter zugreifen kann. |
| 2  | muss | Funktional | Als ein Administrator möchte ich Phrasen und Rätselwörter anlegen, ändern und löschen können, damit ich das Spiel mit aktuellen Rätseln und Phrasen füllen kann. |
| 3  | muss | Funktional | Als ein Administrator möchte ich Kategorien anlegen und jedes Wort bzw. jede Frage einer Kategorie zuordnen können, damit ich die Rätsel und Phrasen organisieren kann. |
| 4  | muss | Funtkional | Als ein Administrator möchte ich einzelne Einträge der Highscore-Liste löschen können, damit ich die Highscore-Liste aktuell halten kann. |
| 5  | muss | Funktional | Als ein Kandidat möchte ich einen Namen eingeben können, der auf der Highscore-Liste erscheint, damit ich meine Leistungen mit anderen vergleichen kann. |
| 6  | muss | Funktional | Als ein Kandidat möchte ich zu jeder Zeit den Kontostand sehen können, damit ich weiß, wie viel Geld ich erspielt habe. |
| 7  | muss | Funktional | Als ein Kandidat möchte ich zu jeder Zeit die Lebenspunkte sehen können, damit ich weiß, wie viele Fehler ich noch machen darf. |
| 8  | muss | Funktional | Als ein Kandidat möchte ich erfahren, ob meine Antwort richtig oder falsch war, damit ich weiß, wie ich mich im Rätsel verbessern kann. |
| 9  | muss | Funktional | Als ein Kandidat möchte ich in der Highscore-Liste folgende Daten sehen: Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und Anzahl Spielrunden, damit ich meine Leistungen mit anderen vergleichen kann. |
| 10  | muss | Funktional | Als ein Kandidat möchte ich sicherstellen, dass kein Rätsel-Wort und keine Phrase mir mehr als einmal gestellt werden, damit ich nicht immer dasselbe Rätsel bekomme. |
| 11  | muss | Funktional | Als ein Kandidat möchte ich jederzeit entweder spielen oder aufhören und meinen Gewinn in die Highscore-Liste übernehmen können, damit ich die Wahl habe, ob ich weiterspielen oder meine Leistungen speichern möchte. |
| 12  | muss | Funktional | Als ein Administrator möchte ich sicherstellen, dass das Spiel mit einer spielbaren Anzahl Wörtern und Fragen gefüllt ist, damit es genug Rätsel für die Kandidaten gibt. |
| 13  | muss | Funktional | Als ein Administrator möchte ich die Anzahl der Spielrunden zählen können, damit ich weiß, wie oft das Spiel gespielt wurde. |
| 14  | muss | Qualität | Als Entwickler möchte ich sicherstellen, dass einfache Formulareingaben, wie leere Textfelder etc., auf Client- und Serverseite geprüft werden, damit die Dateneingabe korrekt ist. |
| 15  | muss | Qualität | Als Entwickler möchte ich eine Datenbank auswählen, die möglichst unabhängig vom tatsächlich eingesetzten Produkt ist, damit die Applikation flexibel ist. |
| 16  | muss | Qualität | Als Entwickler möchte ich Transaktionsmanagement einsetzen, damit die Datenbankintegrität gewährleistet ist. |
| 17  | muss | Qualität | Als Entwickler möchte ich Sicherheitsaspekte umsetzen, damit die Daten der Benutzer geschützt sind. |
| 18  | muss | Qualität | Als Entwickler möchte ich eine session-basierte, professionelle 4-Tier Architektur verwenden, damit die Applikation stabil und skalierbar ist. |
| A | muss | Funktional | Als Kandidat möchte ich die Funktion haben, alle meine Punkte für diese eine Runde einzusetzen und das doppelte wieder zurück zu erhalten bei einem Gewinn |
| B | muss | Qualität | Als Kandidat möchte ich das Spiel auf verschiedenen Geräten spielen |



# 4.2 Testfälle

| TC-№ | Vorbereitung                                         |                           Eingabe                            | Erwartete Ausgabe                                            |
| ---- | ---------------------------------------------------- | :----------------------------------------------------------: | ------------------------------------------------------------ |
| 1.1  | Ein Spieler hat die Applikation geöffnet             | Spieler gibt Benutzername und Passwort für Administrator Login ein | Spieler wird als Administrator angemeldet und gelangt in die Admin Ansicht |
| 2.1  | Administrator hat sich erfolgreich angemeldet        |          Administrator legt ein neues Rätselwort an          | Rätselwort wurde erfolgreich angelegt und ist in der Datenbank verfügbar |
| 2.2  | Administrator hat sich erfolgreich angemeldet        |       Administrator ändert ein bestehendes Rätselwort        | Rätselwort wurde erfolgreich geändert                        |
| 3.1  | Ein Spieler hat sich erfolgreich angemeldet          |              Spieler gibt einen Konsonanten ein              | Wenn der Konsonant im Lösungswort enthalten ist, wird der entsprechende Betrag dem Konto des Spielers gutgeschrieben, andernfalls wird ein Lebenspunkt abgezogen |
| 4.1  | Ein Spieler hat sich erfolgreich angemeldet          |                  Spieler kauft einen Vokal                   | Der gewählte Vokal wird auf der Ratewand angezeigt und der Preis wird vom Konto des Spielers abgezogen |
| 5.1  | Ein Spieler hat sich erfolgreich angemeldet          |                  Spieler dreht am Glücksrad                  | Der Spieler erhält entweder einen Geldbetrag oder erreicht den Bankrott und verliert sein gesamtes Guthaben |
| 6.1  | Ein Spieler hat sich erfolgreich angemeldet          |             Spieler versucht das Rätsel zu lösen             | Wenn die Lösung korrekt ist, erhält der Spieler einen Bonus und das Spiel ist beendet, andernfalls wird ein Lebenspunkt abgezogen |
| 7.1  | Ein Spieler hat das Spiel erfolgreich beendet        | Spieler entscheidet sich, seinen Gewinn in die Highscore-Liste einzutragen | Der Name des Spielers, der erzielte Geldbetrag, die Zeit und die Anzahl der Runden werden in der Highscore-Liste gespeichert |
| 8.1  | Administrator hat sich erfolgreich angemeldet        |  Administrator löscht einen Eintrag in der Highscore-Liste   | Der ausgewählte Eintrag wird aus der Highscore-Liste gelöscht |
| 9.1  | Administrator hat sich erfolgreich angemeldet        |          Administrator legt eine neue Kategorie an           | Kategorie wurde erfolgreich angelegt und ist in der Datenbank verfügbar |
| 10.1 | Administrator hat sich erfolgreich angemeldet        | Administrator ordnet ein bestehendes Wort einer Kategorie zu | Das Wort wurde erfolgreich der ausgewählten Kategorie zugeordnet |
| 11.1 | Ein Spieler hat sich erfolgreich angemeldet          |                 Spieler gibt einen Namen ein                 | Der eingegebene Name wird als Name des Spielers in der Highscore-Liste gespeichert |
| 12.1 | Ein Spieler hat sich erfolgreich angemeldet          |            Spieler sieht den aktuellen Kontostand            | Der aktuelle Kontostand des Spielers wird angezeigt          |
| 13.1 | Ein Spieler hat sich erfolgreich angemeldet          |   Spieler sieht die Anzahl der verbleibenden Lebenspunkte    | Die Anzahl der verbleibenden Lebenspunkte des Spielers wird angezeigt |
| 14.1 | Ein Spieler hat sich erfolgreich angemeldet          |                Spieler gibt eine Antwort ein                 | Eine Meldung wird angezeigt, ob die Antwort des Spielers richtig oder falsch ist |
| 15.1 | Ein Spieler hat ein Spiel beendet                    | Spieler entscheidet sich, seinen Gewinn in die Highscore-Liste zu übernehmen | Der Gewinn des Spielers wird in die Highscore-Liste aufgenommen und sortiert nach Rang |
| 16.1 | Ein Spieler hat sich erfolgreich angemeldet          |               Spieler startet eine neue Runde                | Eine neue Runde wird gestartet und kein Rätsel-Wort oder keine Phrase werden einem Spieler mehr als einmal gestellt. |
| 17.1 | Ein Spieler hat sich erfolgreich angemeldet          |               Spieler gibt eine leere Eingabe                | Eine Meldung wird angezeigt, dass das Feld nicht leer sein darf |
| 18.1 | Ein Administrator hat sich erfolgreich angemeldet    | Administrator versucht einen Eintrag in der Highscore-Liste zu löschen | Der Eintrag wurde erfolgreich gelöscht                       |
| 19.1 | Ein Administrator hat sich erfolgreich angemeldet    |         Administrator versucht eine Phrase zu ändern         | Die Phrase wurde erfolgreich geändert                        |
| A.1  | Ein Spieler hat erfolgreich die Applikation geöffnet |            Spieler klickt auf "verdoppeln"-Button            | Die gesamten Punkte des Spielers werden gesetzt und bei Gewinn verdoppelt |
| B.1  | Ein Spieler hat erfolgreich die Applikation geöffnet |       Öffnen der Applikation auf verschiedenen Geräten       | Die Applikation passt sich dem entsprechenden Gerät an       |




# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).
![GUI_Prototyp](https://user-images.githubusercontent.com/69577267/212009993-c5f03a64-a0aa-4c77-b171-25d7f97464b9.png)

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| US-№ | User Story                                                   | Datum                    | Beschreibung                                                 |
| ---- | ------------------------------------------------------------ | ------------------------ | ------------------------------------------------------------ |
| 1    | Als ein Administrator möchte ich mich durch Benutzername und Passwort authentifizieren können, damit ich auf die Funktionen für Phrasen und Rätselwörter zugreifen kann. | 26.01.2023 \| 02.02.2023 | Login durch E-Mail und Passwort. Authentifizierung durch Firebase Authenticator |
| 2    | Als ein Administrator möchte ich Phrasen und Rätselwörter anlegen, ändern und löschen können, damit ich das Spiel mit aktuellen Rätseln und Phrasen füllen kann. | 28.02.2023               | An Implementation gearbeitet, jedoch an dem einbinden der Datenbank gescheitert |
| 3    | Als ein Administrator möchte ich Kategorien anlegen und jedes Wort bzw. jede Frage einer Kategorie zuordnen können, damit ich die Rätsel und Phrasen organisieren kann. | 28.02.2023               | An Implementation gearbeitet, jedoch an dem einbinden der Datenbank gescheitert |
| 4    | Als ein Administrator möchte ich einzelne Einträge der Highscore-Liste löschen können, damit ich die Highscore-Liste aktuell halten kann. |                          |                                                              |
| 5    | Als ein Kandidat möchte ich einen Namen eingeben können, der auf der Highscore-Liste erscheint, damit ich meine Leistungen mit anderen vergleichen kann. |                          |                                                              |
| 6    | Als ein Kandidat möchte ich zu jeder Zeit den Kontostand sehen können, damit ich weiß, wie viel Geld ich erspielt habe. | 26.01.2023               | Score/Kontostand jederzeit auf dem Spielbildschirm einsehbar |
| 7    | Als ein Kandidat möchte ich zu jeder Zeit die Lebenspunkte sehen können, damit ich weiß, wie viele Fehler ich noch machen darf. | 26.01.2023               | Lebenspunkte jederzeit auf dem Spielbildschirm einsehbar     |
| 8    | Als ein Kandidat möchte ich erfahren, ob meine Antwort richtig oder falsch war, damit ich weiß, wie ich mich im Rätsel verbessern kann. | 26.01.2023               | Richtigkeit der Antworten werden nach jeder Eingabe angezeigt, bei kompletten Lebenspunkteverlust wird ein "You Lost" screen angezeigt |
| 9    | Als ein Kandidat möchte ich in der Highscore-Liste folgende Daten sehen: Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und Anzahl Spielrunden, damit ich meine Leistungen mit anderen vergleichen kann. |                          |                                                              |
| 10   | Als ein Kandidat möchte ich sicherstellen, dass kein Rätsel-Wort und keine Phrase mir mehr als einmal gestellt werden, damit ich nicht immer dasselbe Rätsel bekomme. | 02.02.2023               | An der Implementation gearbeitet. Kategorie und Wort ändert sich nach jedem Gewinn, jedoch garantiert es nicht, dass kein Wort nach einer bestimmten Zeit wiederholt wird |
| 11   | Als ein Kandidat möchte ich jederzeit entweder spielen oder aufhören und meinen Gewinn in die Highscore-Liste übernehmen können, damit ich die Wahl habe, ob ich weiterspielen oder meine Leistungen speichern möchte. |                          |                                                              |
| 12   | Als ein Administrator möchte ich sicherstellen, dass das Spiel mit einer spielbaren Anzahl Wörtern und Fragen gefüllt ist, damit es genug Rätsel für die Kandidaten gibt. | 28.02.2023               | An Implementation in einer Datenbank daran gearbeitet, jedoch gescheitert. Wörter/Fragen und Kategorien können über den Code direkt hinzugefügt werden |
| 13   | Als ein Administrator möchte ich die Anzahl der Spielrunden zählen können, damit ich weiß, wie oft das Spiel gespielt wurde. |                          |                                                              |
| 14   | Als Entwickler möchte ich sicherstellen, dass einfache Formulareingaben, wie leere Textfelder etc., auf Client- und Serverseite geprüft werden, damit die Dateneingabe korrekt ist. | 28.02.2023               | Jegliche Fehleingaben werden abgefangen                      |
| 15   | Als Entwickler möchte ich eine Datenbank auswählen, die möglichst unabhängig vom tatsächlich eingesetzten Produkt ist, damit die Applikation flexibel ist. | 12.01.2023               | Als Entwickler habe ich mich für Firebase / Cloud Firestore Database entschieden |
| 16   | Als Entwickler möchte ich Transaktionsmanagement einsetzen, damit die Datenbankintegrität gewährleistet ist. |                          |                                                              |
| 17   | Als Entwickler möchte ich Sicherheitsaspekte umsetzen, damit die Daten der Benutzer geschützt sind. | 23.02.2023               | Daten momentan nicht geschützt, da die Datenbank auf Firebase auf öffentlich gesetzt ist aus Test zwecken |
| 18   | Als Entwickler möchte ich eine session-basierte, professionelle 4-Tier Architektur verwenden, damit die Applikation stabil und skalierbar ist. |                          |                                                              |
| A    | Als Kandidat möchte ich die Funktion haben, alle meine Punkte für diese eine Runde einzusetzen und das doppelte wieder zurück zu erhalten bei einem Gewinn |                          |                                                              |
| B    | Als Kandidat möchte ich das Spiel auf verschiedenen Geräten spielen | 02.03.2023               | Die Applikation/Webseite ist responsive gestaltet und kann auf allen Geräten gespielt werden |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung        |
| ---- | --------- | ------------------------------------------------ |
| 1    | ja        | SignIn.js                                        |
| 2    | nein      |                                                  |
| 3    | nein      |                                                  |
| 4    | nein      |                                                  |
| 5    | nein      |                                                  |
| 6    | ja        | Game.js                                          |
| 7    | ja        | Game.js                                          |
| 8    | ja        | Game.js                                          |
| 9    | nein      |                                                  |
| 10   | ja        | Game.js                                          |
| 11   | nein      |                                                  |
| 12   | nein      |                                                  |
| 13   | nein      |                                                  |
| 14   | ja        | SignIn.js / Game.js                              |
| 15   | ja        | firebase.js                                      |
| 16   | nein      |                                                  |
| 17   | ja        | firebase.js                                      |
| 18   | nein      |                                                  |
| A    | nein      |                                                  |
| B    | ja        | Home.js / Game.js / SignIn.js / Highscorelist.js |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№   |   Datum    | Resultat | Tester       |
| ------ | :--------: | -------- | ------------ |
| 1.1.1  | 02.03.2023 | OK       | Flynn Guerra |
| 2.1.1  | 02.03.2023 | NOK      | Flynn Guerra |
| 3.1.1  | 02.03.2023 | NOK      | Flynn Guerra |
| 4.1.1  | 02.03.2023 | OK       | Flynn Guerra |
| 5.1.1  | 02.03.2023 | NOK      | Flynn Guerra |
| 6.1.1  | 02.03.2023 | OK       | Flynn Guerra |
| 7.1.1  | 02.03.2023 | NOK      | Flynn Guerra |
| 8.1.1  | 02.03.2023 | NOK      | Flynn Guerra |
| 9.1.1  | 02.03.2023 | NOK      | Flynn Guerra |
| 10.1.1 | 02.03.2023 | NOK      | Flynn Guerra |
| 11.1.1 | 02.03.2023 | NOK      | Flynn Guerra |
| 12.1.1 | 02.03.2023 | OK       | Flynn Guerra |
| 13.1.1 | 02.03.2023 | OK       | Flynn Guerra |
| 14.1.1 | 02.03.2023 | OK       | Flynn Guerra |
| 15.1.1 | 02.03.2023 | NOK      | Flynn Guerra |
| 16.1.1 | 02.03.2023 | OK       | Flynn Guerra |
| 17.1.1 | 02.03.2023 | OK       | Flynn Guerra |
| 18.1.1 | 02.03.2023 | NOK      | Flynn Guerra |
| 19.1.1 | 02.03.2023 | NOK      | Flynn Guerra |
| A.1    | 02.03.2023 | NOK      | Flynn Guerra |
| B.1    | 02.03.2023 | OK       | Flynn Guerra |

#### Fazit

Die grundsätzliche Spielefunktion und das Spiel ist spielbar und man kann auch Münzen/Score verdienen. Die Anmeldung in den Adminbereich ist auch voll funktionstüchtig, jedoch ist der Adminbereich unvollständig. Für die Implementation einer Datenbank hat es an Wissen und Zeit gefehlt, dasselbe gilt auch für die Implementation einer funktionierenden Highscore liste.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [x] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [x] Ich habe alle mit ✍️ markierten Teile ersetzt
