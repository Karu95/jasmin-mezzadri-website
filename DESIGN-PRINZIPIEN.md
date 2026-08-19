# Design-Leitlinien für dieses Projekt

Abgeleitet aus den drei Quellen im Projektordner. Diese Datei ist die verbindliche
Grundlage für alle weiteren Design- und Umsetzungsentscheidungen an der Website.

**Quellen**

| Kürzel | Quelle | Belastbarkeit |
|---|---|---|
| **[UX]** | Jongmans, Jeannot, Liang & Dampérat (2022): *Impact of website visual design on user experience and website evaluation.* Journal of Marketing Management | Hoch — peer-reviewed, zwei Experimentalstudien (n=205 / n=81), Serienmediation via PROCESS |
| **[VI]** | Lindström (2016): *Defining and designing the elements for a company's visual identity.* Bachelorarbeit, Arcada | Mittel — Fachliteraturarbeit mit Praxisfall, nicht empirisch, teilweise zeitgebunden (2016) |
| **[WEB]** | Rama Rao, Chaurasia & Singh (2023): *Modern Web Design: Utilizing HTML5, CSS3, and Responsive Techniques.* JNRID | **Niedrig — nur als Checkliste verwenden.** Siehe Warnhinweis unten |

> **Warnhinweis zu [WEB]:** Die dort ausgewiesenen „Ergebnisse" (85 % HTML5-Nutzung,
> 2,5 s Ladezeitgewinn, 8,2/10 Zufriedenheit) sind im Text ausdrücklich als
> angenommenes Beispiel eingeleitet („we'll assume that the study involves…") —
> es sind **keine erhobenen Daten**. Mehrere Literaturangaben verweisen auf
> nicht existierende Journals, eine Quelle datiert nach dem Erscheinungsdatum des
> Artikels. Die inhaltlichen Empfehlungen sind gängige, unstrittige Praxis und als
> Checkliste brauchbar — aber **nichts aus dieser Quelle darf als Beleg zitiert werden.**

---

## Prinzip 1 — Optik wirkt nur über Nutzbarkeit und Gefühl [UX]

Das zentrale Ergebnis von [UX]: Visuelles Design hat **keinen direkten Effekt** auf
die Bewertung einer Website. Der Effekt läuft ausschließlich über eine Kette:

```
Visuelles Design → Usability → Pleasure → Weiterempfehlung / Zahlungsbereitschaft
```

Der direkte Pfad Usability → Bewertung war in beiden Studien **nicht signifikant** —
Usability zahlt nur ein, wenn daraus ein angenehmes Gefühl entsteht. Und schöneres
Design verbesserte in Studie 1 sogar die **objektiv gemessene** Aufgabenleistung.

**Konsequenz für dieses Projekt:** Rein optische Politur ohne Abbau von
Bedienreibung bringt laut Modell nichts. Bei jeder Designentscheidung zuerst
fragen: Macht das die Seite leichter benutzbar? Erst danach: Sieht es besser aus?

## Prinzip 2 — Die vier belegten Gestaltungsdimensionen [UX]

[UX] hat „attraktives Design" über genau vier Merkmale operationalisiert. Diese
gelten hier als Heuristik:

| Dimension | attraktiv | unattraktiv | Status im Projekt |
|---|---|---|---|
| **Farbe** | niedrige Sättigung, niedriger Kontrast, benachbarte Farbtöne | hohe Sättigung, harte Komplementärkontraste | erfüllt — eine warme Akzentfarbe, Volltonflächen sparsam |
| **Symmetrie** | vertikale Symmetrie, ausgerichtete Blöcke | nicht ausgerichtete Blöcke | erfüllt — Leistungs-Grid auf 6 Spalten umgestellt, keine angebrochene Schlusszeile |
| **Formsprache** | abgerundete Kanten | scharfe Kanten | erfüllt — `--radius: 12px`, Pill-Buttons |
| **Typografie** | eigenständige Headline-Schrift + humanistische Fließschrift | überall dieselbe Systemschrift | erfüllt — Fraunces für H1/H2, Wortmarke und Zitat; System-Stack für Fließtext |

Die Studie empfiehlt ausdrücklich **zwei** Schriften: eine für Headlines, eine für
Fließtext.

## Prinzip 3 — Grenzen der Übertragbarkeit ehrlich benennen [UX]

[UX] testete **B2C-E-Commerce** (Reisebuchung, Lifestyle-Shop) mit französischen
Stichproben; Studie 2 bestand zu 96 % aus männlichen Informatikstudierenden
(Ø 19,5 Jahre). Gemessen wurden Wiedernutzung, Weiterempfehlung und
Zahlungsbereitschaft — **nicht** Conversion, **nicht** Lead-Generierung,
**nicht** Vertrauen (die Autoren nennen Vertrauen selbst als Forschungslücke).

**Konsequenz:** Der Wirkmechanismus (Prinzip 1) und die vier Dimensionen
(Prinzip 2) sind übertragbar. Konkrete Farbaussagen sind es nicht — der
Farbbefund stammt aus einem Vergleich Grün/Rot gegen Blau/Gelb und sagt nichts
über Terracotta. „Intention to reuse" ist für einen One-Pager praktisch
bedeutungslos und wird hier nicht optimiert.

## Prinzip 4 — Die Wortmarke ist die richtige Logo-Strategie [VI]

[VI] unterscheidet rein typografische Logos, Kombinationen aus Wortmarke und
Symbol sowie reine Bildmarken — letztere funktionieren nur bei bereits bekannten
Marken. Symbole sind zudem kulturell mehrdeutig; die in der Arbeit behandelte
Firma verzichtete deshalb bewusst darauf.

**Konsequenz:** Für eine Solo-Beraterin, deren Name die Marke ist, ist die reine
**Wortmarke** richtig. Ein minimales, kulturneutrales Detail als
Wiedererkennungsanker ist zulässig. Regeln, die ein Styleguide festlegen muss:
ein- und zweizeilige Variante, Version mit und ohne Zusatzzeile, Schutzraum als
Vielfaches der x-Höhe, Mindestbreite (ca. 20 mm bzw. 120 px), Positiv-, Negativ-
und Einfarbig-Version, erlaubte Hintergründe sowie eine Seite mit Fehlgebrauch
(nicht verzerren, umfärben, drehen, auf Fotos setzen, mit Schatten versehen).

## Prinzip 5 — Bei einer Wortmarke trägt die Schrift die Identität [VI]

Das ist der schärfste Konflikt im Projekt. [VI] hält fest: In einer typografischen
Wortmarke **ist** die Schriftwahl das Identitätsmerkmal. Der aktuelle
System-Font-Stack rendert auf Windows als Segoe UI, auf macOS als SF und auf
Android als Roboto — die Marke sieht also auf jedem Gerät anders aus, und die
Visitenkarte kann nie mit der Website übereinstimmen.

Gewählt wurde der Stack bewusst wegen Datenschutz (keine externen Requests) und
Ladezeit. Der Kompromiss, der beides löst:

- **Wortmarke als SVG mit in Pfade konvertierter Schrift** — löst Web/Print-Identität und Lizenzfrage in einem Schritt
- **Eine selbst gehostete WOFF2-Displayschrift** nur für H1–H3, lokal ausgeliefert (kein Google-Fonts-CDN, ~20–30 kB, `font-display: swap`) — erfüllt zugleich Prinzip 2
- **Fließtext bleibt System-Stack** — dort fordert [VI] primär Lesbarkeit und eine hohe x-Höhe, nicht Wiedererkennbarkeit

Lizenzkostenfrei über SIL-OFL-Schriften (z. B. Inter, Source Sans, Fraunces).

## Prinzip 6 — Der Farbsatz ist noch unvollständig [VI]

[VI] fordert 2–4 Farben, definiert für **Print und Screen getrennt**, hergeleitet
aus den Markenwerten. Terracotta `#C2410C` liegt zwischen Orange
(„Komfort, Sicherheit, Aktivierung") und Braun („Seriosität, Wärme, Verlässlichkeit")
und passt inhaltlich gut zu POS- und FMCG-Beratung.

Es fehlen aber, gemessen an [VI]:

1. **CMYK-Werte** für Visitenkarte, Mappe, Aufsteller
2. **Pantone-Näherung** als druckübergreifender Anker
3. **Graustufen-Entsprechung** für S/W-Druck
4. **Eine gedeckte Sekundärfarbe** — aktuell gibt es nur Abstufungen des Akzents; für Diagramme, Tabellen und Kategorien in Präsentationen reicht das nicht
5. **Signalfarben** für Erfolg/Fehler/Warnung *(nicht aus [VI] — 2016 kennt keine UI-Zustände)*. Wichtig: Ein rot-oranger Fehlerzustand kollidiert mit `#C2410C`; nötig ist ein entsättigtes Rot (~`#B3261E`)
6. **Eine Regel gegen Fehlgebrauch** — Akzent nicht als Fließtextfarbe, nicht großflächig unter Fotos

Als Flächenregel gilt: **Akzentfarbe maximal etwa 10 % der Fläche.**

## Prinzip 7 — Technische Basis: erfüllt, mit einer Lücke [WEB]

Der Abgleich der bestehenden Seite gegen die Empfehlungen von [WEB] ergab, dass
praktisch alles erfüllt ist — semantisches HTML5, Mobile-First-Media-Queries,
Flexbox eindimensional / Grid zweidimensional, fluid typography über `clamp()`,
Lazy Loading, Progressive Enhancement. Mehrere Punkte gehen darüber hinaus
(`prefers-reduced-motion`, ARIA-Praxis, dokumentierte WCAG-Kontraste, null externe
Requests), die [WEB] gar nicht behandelt.

**Einzige offene Lücke:** responsive Rasterbilder. Sobald das echte Portraitfoto
eingesetzt wird, gehört es in ein `<picture>` mit AVIF/WebP-Quellen und `srcset`.
Die Bilder werden einmal lokal konvertiert und mit eingecheckt — das erfordert
keinen Build-Step.

## Prinzip 8 — Harte Rahmenbedingungen bleiben unangetastet

Unabhängig von allen Quellen gelten weiterhin:

- kein Build-Step, keine npm-Abhängigkeiten
- **null externe Requests beim Seitenaufruf** (deshalb Schriften nur selbst gehostet, niemals über ein CDN)
- muss auf GitHub Pages laufen
- muss ohne JavaScript nutzbar bleiben
- Kontraste nach WCAG AA

---

## Abgeleitete Maßnahmenliste

**Hohe Priorität — Bedienreibung (Prinzip 1)** — erledigt am 19.08.2026

- [x] Kontaktformular umsortiert — Name/E-Mail/Nachricht zuerst, optionale Angaben in einem abgesetzten `<fieldset>` darunter
- [x] Direktlink „Bei Calendly öffnen" neben dem Klick-zu-Laden-Button ergänzt
- [x] Scroll-Reveals abgeschwächt — 0,6 s → 0,28 s, Versatz 14 px → 5 px, Einblenden beginnt 20 % vor dem Viewport

**Hohe Priorität — belegte Gestaltungsdimensionen (Prinzip 2)** — erledigt am 19.08.2026

- [x] Fraunces als Display-Schrift eingeführt — Variable Font, 35 KB, lokal unter `assets/fonts/`, SIL-OFL, null externe Requests
- [x] Leistungs-Grid symmetrisch — ab 900 px 6-Spalten-Raster (3 Karten à 2 Spalten, 2 Karten à 3 Spalten), beide Zeilen randbündig

**Mittlere Priorität**

- [ ] Echtes Portrait groß einsetzen, als `<picture>` mit AVIF/WebP und `srcset`
- [ ] Wortmarke als SVG mit in Pfade konvertierter Schrift
- [ ] Farbsatz vervollständigen: CMYK, Pantone-Näherung, Graustufe, Sekundärfarbe, Signalfarben
- [ ] Mini-Styleguide (8–10 Seiten) nach der Gliederung aus [VI]

**Niedrige Priorität**

- [ ] `og-image.png` komprimieren (aktuell 272 KB)
- [ ] `text-wrap: pretty` für Fließtext
- [ ] `content-visibility: auto` für Sektionen unterhalb des Folds — vorher auf Mobilgeräten testen, falsche `contain-intrinsic-size` erzeugt Scroll-Sprünge

**Bewusst nicht verfolgt**

- „Intention to reuse" optimieren — für einen One-Pager bedeutungslos (Prinzip 3)
- Container Queries für `.card-grid` — `repeat(auto-fit, minmax(…))` erfüllt denselben Zweck einfacher
- Farbwechsel auf Basis von [UX] — der Farbbefund ist nicht auf Terracotta übertragbar
