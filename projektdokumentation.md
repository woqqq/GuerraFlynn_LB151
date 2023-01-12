# Projekt-Dokumentation

Guerra

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 11.01.2023    | 0.0.1   | Fragen 1-5 Beantwortet                                       |
|       | 0.0.2   |                                                              |
|       | 0.0.3   |                                                              |
|       | 0.0.4   |                                                              |
|       | 0.0.5   |                                                              |
|       | 0.0.6   |                                                              |
|       | 1.0.0   |                                                              |

# 0 Ihr Projekt

Das Projekt ist ein Spiel, bei dem der Benutzer Wörter oder Redewendungen in einem Gitter erraten muss, indem er Buchstaben an einer Rate-Wand ratet und dabei versucht, möglichst hohe Geldbeträge zu erspielen, indem er ein Glücksrad dreht, das verschiedene Arten von Feldern enthält.

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): ...
* Tier 2 (Webserver):
* Tier 3 (Application Server):
* Tier 4 (Dataserver):

# 2 Technologie

✍️ Beschreiben Sie für dieselben Tiers, welche Programmiersprache bzw. Technologie Sie verwenden möchten.

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut? 

# 4.1 User Stories

✍️ Formulieren Sie klare Anforderungen in der Form von User Stories (*„als … möchte ich … damit …“*) und zu jeder Anforderung mindestens einen dazugehörigen Testfall (in Kapitel 4.2). 

✍️ Formulieren Sie weitere, eigene Anforderungen und Testfälle, wie Sie Ihre Applikation erweitern möchten. Geben Sie diesen statt einer Nummer einen Buchstaben (`A`, `B`, etc.)

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


✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc. oder Zahl), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). 

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |              |         |                   |
| ...  |              |         |                   |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| ...        |       |              |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja / nein |                                           |
| ...  |           |                                           |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
