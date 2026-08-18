# Website Jasmin Mezzadri — POS Marketing & Vertrieb

Statische Website. Kein Build-Step, keine Abhängigkeiten, kein npm.
Reines HTML/CSS/JS — einfach die Dateien hochladen, fertig.

**Kosten: 0 €** (nur die Domain kostet, ca. 10–15 €/Jahr).

---

## 1. Was drin ist

```
index.html            One-Pager (Hero, Problem, Ansatz, Leistungen, Für wen,
                      Über mich, FAQ, Kontakt/Termin)
impressum.html        Impressum nach § 5 DDG (Vorlage!)
datenschutz.html      Datenschutzerklärung nach Art. 13 DSGVO (Vorlage!)
404.html              Fehlerseite
assets/css/style.css  komplettes Stylesheet (ein einziges, für alle Seiten)
assets/js/main.js     Navigation, Formular, Calendly-Klick-zu-Laden
assets/img/           Social-Preview-Bild + Portrait-Platzhalter
robots.txt            Suchmaschinen-Anweisungen
sitemap.xml           Seitenverzeichnis für Google
.nojekyll             nötig für GitHub Pages
CONTENT.md            Content-/Design-Spezifikation (Arbeitsdokument, muss nicht hoch)
```

---

## 2. Checkliste: Platzhalter ersetzen (VOR dem Livegang)

Alle Platzhalter stehen in eckigen Klammern und sind mit Suchen & Ersetzen
in einem Editor (VS Code: Cmd+Shift+F) in Sekunden erledigt.

| Platzhalter | Wo | Was eintragen |
|---|---|---|
| `[DOMAIN]` | index, impressum, datenschutz, 404, robots.txt, sitemap.xml (16×) | z. B. `jasmin-mezzadri.de` (**ohne** `https://`) |
| `[E-MAIL]` | index (5×), impressum (2×), datenschutz (4×), **assets/js/main.js (1×)** | Geschäfts-E-Mail |
| `[TELEFON]` | index (3×), impressum (2×), datenschutz (2×) | Telefonnummer |
| `[STRASSE UND HAUSNUMMER]` | impressum (2×), datenschutz (1×) | ladungsfähige Anschrift — **Pflicht**, ein Postfach reicht nicht |
| `[PLZ ORT]` | impressum (2×), datenschutz (2×) | PLZ + Ort |
| `[USt-IdNr.]` | impressum (1×) | USt-IdNr. — **oder** die ganze Zeile löschen, falls keine vorhanden ist (im HTML steht daneben eine auskommentierte Kleinunternehmer-Alternative nach § 19 UStG) |
| `WEB3FORMS_ACCESS_KEY_HIER_EINSETZEN` | index.html (1×) | siehe Schritt 3 |
| `CALENDLY_URL_HIER_EINSETZEN` | index.html (1×) | siehe Schritt 4 |

Außerdem:

- [ ] **Portraitfoto** als `assets/img/jasmin.jpg` ablegen (Hochformat 4:5, ca. 800×1000 px)
      und in `index.html` beim `<img>` in der Sektion „Über mich" den `src` umstellen.
      Direkt daneben steht ein Kommentar mit dem passenden `alt`-Text — den bitte
      mit übernehmen (aktuell steht dort bewusst `alt=""`, weil ein Platzhalterbild
      keine inhaltliche Bedeutung hat).
      **Wichtig:** ein *neues* Foto verwenden — das alte Bild von der The-Hostess-Seite
      gehört ggf. dem Fotografen bzw. der Agentur.
- [ ] Prüfen, ob im Impressum eine Berufshaftpflicht o. Ä. anzugeben ist.
- [ ] Beide Rechtstexte sind **Vorlagen** — vor dem Livegang von einer Anwältin/
      einem Anwalt oder der IHK prüfen lassen. Der Hinweis steht auch als Kommentar
      ganz oben in beiden Dateien.

### Schnellprüfung, ob noch etwas offen ist

Im Projektordner im Terminal:

```bash
grep -rn "\[DOMAIN\]\|\[E-MAIL\]\|\[TELEFON\]\|\[PLZ ORT\]\|\[STRASSE\|\[USt-IdNr\|HIER_EINSETZEN" . --include=*.html --include=*.js --include=*.xml --include=*.txt
```

Gibt der Befehl nichts mehr aus, sind alle Platzhalter ersetzt.

---

## 3. Kontaktformular aktivieren (Web3Forms, kostenlos)

Das Formular braucht einen Dienst, der die Nachrichten per E-Mail zustellt —
eine statische Seite kann das selbst nicht.

1. Auf https://web3forms.com die E-Mail-Adresse eintragen → der Access Key kommt per Mail.
   Kein Konto nötig, Free-Tier: 250 Nachrichten/Monat.
2. In `index.html` `WEB3FORMS_ACCESS_KEY_HIER_EINSETZEN` durch den Key ersetzen.
3. **DSGVO:** Auftragsverarbeitungsvertrag (AV-Vertrag nach Art. 28 DSGVO) beim
   Anbieter anfordern. Die Server stehen in den USA — das ist in der
   Datenschutzerklärung bereits beschrieben.

Alternative mit EU-Bezug, falls der US-Transfer stören sollte: einfach das
`<form>`-Element entfernen und nur E-Mail/Telefon/Calendly anbieten. Die Seite
funktioniert auch ohne Formular vollständig.

---

## 4. Calendly einbinden

1. Bei Calendly einen Event-Typ „Strategieaustausch, 30 Min." anlegen (Free-Tier reicht).
2. Die öffentliche Buchungs-URL kopieren (z. B. `https://calendly.com/jasmin-mezzadri/30min`).
3. In `index.html` `CALENDLY_URL_HIER_EINSETZEN` ersetzen.

**Datenschutz-Hinweis:** Der Kalender lädt bewusst **erst nach einem Klick**
auf „Kalender laden" (Klick-zu-Laden). Vorher geht kein einziger Request an
Calendly — geprüft. Genau deshalb braucht die Seite **kein Cookie-Banner**.
Diese Logik bitte nicht durch ein direkt eingebettetes Calendly-Widget ersetzen,
sonst wäre ein Consent-Banner Pflicht.

---

## 5. Kostenlos veröffentlichen mit GitHub Pages

### Einmalig einrichten

1. Kostenloses Konto auf https://github.com anlegen.
2. Neues Repository anlegen, z. B. `jasmin-mezzadri-website`, Sichtbarkeit **Public**
   (Public ist bei GitHub Pages im Free-Tarif nötig).
3. Alle Dateien aus diesem Ordner hochladen (Repo-Seite → „Add file" →
   „Upload files" → Ordnerinhalt hineinziehen → „Commit changes").
   `CONTENT.md` und `README.md` können mit hoch, sie stören nicht.
4. Repository → **Settings → Pages** → unter „Build and deployment"
   Source = „Deploy from a branch", Branch = `main`, Ordner = `/ (root)` → Save.
5. Nach 1–2 Minuten ist die Seite unter `https://BENUTZERNAME.github.io/jasmin-mezzadri-website/` erreichbar.

### Eigene Domain anbinden

Nach dem Domainkauf beim Registrar (z. B. INWX, Netcup, IONOS) im DNS-Bereich eintragen:

**Für die Domain ohne www (`jasmin-mezzadri.de`) — vier A-Records:**

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

Optional zusätzlich IPv6 (AAAA-Records):
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`

**Für www — ein CNAME-Record:**

```
CNAME   www   BENUTZERNAME.github.io.
```

Dann in **Settings → Pages → Custom domain** die Domain eintragen und speichern.
GitHub legt dabei automatisch eine Datei `CNAME` im Repository an.

Zum Schluss: Häkchen bei **„Enforce HTTPS"** setzen.

**Was normal ist und keinen Fehler bedeutet:**
- DNS-Änderungen brauchen bis zu 24 Stunden, bis sie überall ankommen.
- „Enforce HTTPS" ist am Anfang ausgegraut — das Let's-Encrypt-Zertifikat wird
  erst nach korrekter DNS-Konfiguration ausgestellt, das dauert bis zu 24 Stunden.
  Einfach am nächsten Tag noch einmal reinschauen.
- Nicht gleichzeitig A-Records und einen CNAME auf denselben Namen setzen.

### Später etwas ändern

Datei im Repository anklicken → Stift-Symbol → bearbeiten → „Commit changes".
Nach etwa einer Minute ist die Änderung live.

---

## 6. Nach dem Livegang

- [ ] Domain in `robots.txt`, `sitemap.xml` und allen `canonical`-/`og:url`-Tags geprüft
- [ ] Google Search Console einrichten (kostenlos), Property verifizieren, Sitemap
      `https://DEINE-DOMAIN/sitemap.xml` einreichen
- [ ] Formular einmal echt testen (kommt die Mail an? Landet sie im Spam?)
- [ ] Calendly-Buchung einmal echt testen
- [ ] Auf dem Handy durchklicken
- [ ] Link auf LinkedIn und Instagram im Profil hinterlegen
- [ ] Google-Unternehmensprofil anlegen (kostenlos, hilft bei lokaler Sichtbarkeit)

---

## 7. Technische Entscheidungen (kurz erklärt)

- **Kein Framework, kein Build-Step.** Die Seite besteht aus Dateien, die jeder
  Editor öffnen kann. Nichts kann „veralten" oder durch ein Dependency-Update brechen.
- **Keine externen Schriften, keine CDNs.** Beim Laden der Seite geht **kein einziger**
  Request an Dritte. Das ist schnell und datenschutzrechtlich der einfachste Weg.
- **Kein Cookie-Banner nötig**, weil vor einer Nutzerinteraktion nichts gespeichert
  und nichts an Dritte übertragen wird (TDDDG § 25).
- **Calendly per Klick-zu-Laden** statt direktem Embed — siehe Schritt 4.
- **Barrierefreiheit:** Skip-Link, sichtbare Fokus-Rahmen, Tastaturbedienung,
  Kontraste über WCAG-AA, `prefers-reduced-motion` respektiert. Das
  Barrierefreiheitsstärkungsgesetz (BFSG) greift bei einer reinen
  B2B-Dienstleistungsseite höchstwahrscheinlich nicht — die Grundlagen sind
  trotzdem umgesetzt.
- **Funktioniert auch ohne JavaScript:** alle Inhalte sichtbar, Navigation nutzbar,
  Formular mit mailto-Hinweis als Rückfallebene.

---

## 8. Was inhaltlich noch fehlt (größter Hebel)

Die Seite hat aktuell **keine Referenzen und keine Fallbeispiele** — das ist der
mit Abstand stärkste fehlende Vertrauensbaustein. Vorbereitet ist bereits ein
auskommentierter Referenz-/Logo-Block in `index.html` zwischen „Leistungen" und
„Für wen" (mitsamt fertigem CSS). Sobald Freigaben vorliegen, muss dort nur der
Kommentar entfernt und Inhalt eingesetzt werden.

Sinnvolle Reihenfolge:
1. Echtes Portraitfoto (wirkt bei Einzelanbieterinnen am stärksten)
2. 2–3 anonymisierte Fallbeispiele („Functional-Food-Marke, Verkostung in X Märkten, …")
3. 1–2 Zitate von Auftraggebern, sobald eine Freigabe vorliegt
4. Markenlogos — nur mit ausdrücklicher schriftlicher Freigabe
