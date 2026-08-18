# Content- & Design-Spezifikation — jasmin-mezzadri.de

Sprache: Deutsch (de). Zielgruppe: Marken-, Vertriebs- und Trade-Marketing-Verantwortliche
bei FMCG- und LEH-Marken. Tonalität: klar, sachlich-warm, keine Agentur-Floskeln, "Ich"-Form.

Basis: Texte stammen von Jasmin Mezzadri (Copyright bei ihr), inhaltlich weitgehend übernommen,
sprachlich geglättet und für Conversion/SEO leicht optimiert.

## Design-Tokens
--ink:        #16130F   (Fließtext/Headlines, warmes Fast-Schwarz)
--ink-soft:   #5C544B   (Sekundärtext)
--paper:      #FFFDF9   (Seitenhintergrund, warmes Weiß)
--paper-alt:  #F5F0E8   (abgesetzte Sektionen)
--accent:     #C2410C   (warmes Terracotta/Orange — CTAs, Akzente)
--accent-dk:  #9A330A   (Hover)
--accent-sft: #FDEDE4   (Akzent-Flächen, Badges)
--line:       #E4DCD0   (Rahmen/Trenner)

Typografie: System-Font-Stack (kein externer Font-Request → schneller, keine DSGVO-Frage).
  Headings: ui-sans-serif, "Segoe UI", Inter, Roboto, Helvetica Neue, Arial
  Body:     gleiche Familie, Zeilenhöhe 1.65
  Fluid Type via clamp(). H1 clamp(2.2rem, 5vw, 3.6rem), Letter-spacing -0.02em.
Layout: max-width 1120px Container, Sektionspadding clamp(4rem, 9vw, 7rem) vertikal.
Radius: 12px (Karten), 999px (Buttons). Schatten sparsam, weich.
Prinzip: viel Weißraum, kräftige Typo, EINE Akzentfarbe. Keine Stockfoto-Optik.

## Seitenarchitektur
1. index.html — One-Pager mit Sektionen (siehe unten)
2. impressum.html
3. datenschutz.html
4. 404.html

## Navigation (sticky, transparent → solid beim Scrollen)
Logo/Wortmarke "Jasmin Mezzadri" + Zeile "POS Marketing & Vertrieb"
Links: Leistungen · Ansatz · Über mich · FAQ · [CTA-Button] Termin vereinbaren
Mobile: Hamburger → Fullscreen-Overlay-Menü.

---

## SEKTION 1 — HERO  (id="start")
Eyebrow: POS Marketing · Produkt Promotion · Vertrieb
H1: Probieren ist nicht das Ziel. Wiederkauf schon.
Sub (Lead, ~2 Sätze):
  Sichtbarkeit am Point of Sale erzeugt noch keine Nachfrage. Entscheidend ist,
  was nach dem Kontaktmoment im Kopf des Verbrauchers bleibt — und ob er beim
  nächsten Einkauf wieder zu Ihrer Marke greift.
Primär-CTA: "Potenziale entdecken" → #termin
Sekundär-CTA: "Leistungen ansehen" → #leistungen
Trust-Zeile unter den CTAs (klein, gedämpft):
  Selbstständig für FMCG- & LEH-Marken · Bundesweite Umsetzung · Persönliche Betreuung

## SEKTION 2 — PROBLEM  (Hintergrund: paper-alt)
Eyebrow: Das eigentliche Problem
H2: Aufmerksamkeit im Handel führt nicht automatisch zu Kaufverhalten.
Absatz:
  Eine Aktion am POS erreicht viele Menschen — aber nur wenige davon verändern
  ihr Kaufverhalten. Der Grund ist selten fehlende Sichtbarkeit. Es fehlt der
  Moment, in dem ein Produkt emotional andockt und beim nächsten Einkauf wieder
  abgerufen wird.
Drei "Symptom"-Karten (Icon: schlichtes SVG-Strichsymbol, Titel, 1 Satz):
  a) "Viel Kontakt, wenig Wirkung" — Die Aktion läuft, die Zahlen danach bleiben flach.
  b) "Probieren ohne Erinnerung" — Verkostet wird gern. Wiedererkannt wird selten.
  c) "Starke Marke, schwache Aktivierung" — Die Markenvision stimmt, im Regal kommt sie nicht an.

## SEKTION 3 — ANSATZ / 3-SCHRITTE-MODELL  (id="ansatz")
Eyebrow: Mein Ansatz
H2: In drei Schritten vom Kontaktmoment zum Wiederkauf.
Nummerierte Schritte (01/02/03), je Titel + 2 Sätze:
  01 Kaufmoment verstehen
     Bevor eine Aktion geplant wird, schaue ich auf Produkt, Zielgruppe und die
     reale Situation vor Ort. Was entscheidet im Regal tatsächlich — und was nicht?
  02 Verbindung schaffen
     Ansprache, Story und Aktivierung werden direkt am POS auf diesen Moment
     ausgerichtet. Nicht lauter, sondern relevanter.
  03 Wirkung verlängern
     Aus dem einmaligen Kontakt wird Wiedererkennung: durch Kommunikation, die
     die Aktivierung begleitet und über den Aktionstag hinaus trägt.
Zitat-Block darunter (groß, Akzentlinie links):
  „Wir glauben nicht an Lautstärke, sondern an Relevanz im richtigen Moment."

## SEKTION 4 — LEISTUNGEN  (id="leistungen", Hintergrund: paper-alt)
Eyebrow: Leistungen
H2: Was ich für Ihre Marke am Point of Sale umsetze.
5 Karten (Titel + 1–2 Sätze):
  1. Aktive Verbraucheransprache
     Direkter Dialog am Regal statt passiver Präsenz — mit klarer Botschaft,
     die zum Produkt und zur Einkaufssituation passt.
  2. Verkostung mit Wiedererkennung
     Verkostungen, die nicht beim Probieren enden, sondern einen Eindruck
     hinterlassen, der beim nächsten Einkauf wieder abrufbar ist.
  3. Sampling-Aktionen
     Zielgerichtete Sampling-Konzepte — dort, wo die relevante Zielgruppe
     tatsächlich einkauft.
  4. Promotion-Personal mit Verbraucherfokus
     Auswahl und Briefing von Personal, das nicht nur ausgibt, sondern wirkt.
     Bundesweit umsetzbar, u. a. in Berlin, Hamburg, München, Köln, Düsseldorf,
     Frankfurt, Hannover und Stuttgart.
  5. Aktivierungsbegleitende Markenkommunikation
     Kommunikation, die die Aktion flankiert und die Wirkung über den
     Aktionszeitraum hinaus verlängert.
CTA-Zeile unter den Karten: "Promotion-Personal anfragen" → #termin

## SEKTION 5 — FÜR WEN  (id="fuer-wen")
Eyebrow: Passt das zu Ihnen?
H2: Besonders wirksam, wenn eine dieser Situationen zutrifft.
Checkliste (5 Punkte, Häkchen-Icon):
  - Ihr Produkt ist erklärungsbedürftig.
  - Der Wettbewerb im Regal ist hoch.
  - Sie setzen auf Probier- oder Sampling-Aktionen.
  - Sie führen eine neue Produktlinie ein.
  - Ihre Markenvision ist stark, die Aktivierungswirkung bleibt dahinter zurück.
Darunter: Branchen als Tag-Chips
  Lebensmittel & Getränke · FMCG · Functional Food · Health & Lifestyle ·
  Beauty & Care · Produktneuheiten

## SEKTION 6 — ÜBER MICH  (id="ueber-mich", zweispaltig: Bild links, Text rechts)
Bild: Platzhalter assets/img/jasmin.jpg (mit sichtbarem Platzhalter-Hinweis im Code-Kommentar,
      Alt-Text: "Jasmin Mezzadri, POS-Marketing- und Vertriebsexpertin")
Eyebrow: Über mich
H2: Ich kenne den Markt aus mehreren Perspektiven.
Absätze:
  Ich habe in der Gastronomie gearbeitet, im Außendienst und im Bereich Social
  Media. Dadurch habe ich den Markt aus sehr unterschiedlichen Blickwinkeln
  erlebt — aus Sicht des Verbrauchers, aus Sicht des Handels und aus Sicht der
  Marke.
  Heute unterstütze ich FMCG- und LEH-Marken dabei, reale Kaufmomente stärker mit
  Wiedererkennung, Nachfrageaufbau und Wiederkauf zu verbinden.
4 "Säulen" als kleine Liste:
  Reale Verbraucheraktivierung · Emotionale Markenmomente ·
  Echte Verbraucherperspektiven · Aktivierungsbegleitende Markenkommunikation
Social-Links: LinkedIn (https://www.linkedin.com/in/jasmin-mezzadri),
              Instagram (https://www.instagram.com/jazmzdri)

## SEKTION 7 — FAQ  (id="faq", Hintergrund: paper-alt, native <details>/<summary>)
Eyebrow: Häufige Fragen
H2: Was Marken mich am häufigsten fragen.
1. Warum führt Aufmerksamkeit im Handel oft nicht zu Kaufverhalten?
   Weil Aufmerksamkeit und Erinnerung zwei verschiedene Dinge sind. Ein Produkt
   kann gesehen und probiert werden, ohne dass daraus ein Eindruck entsteht, der
   beim nächsten Einkauf wieder abgerufen wird. Genau an dieser Lücke setze ich an.
2. Was unterscheidet Ihren Ansatz von klassischer POS-Promotion?
   Klassische Promotion misst den Aktionstag. Ich plane von dem her, was danach
   bleibt: Wiedererkennung, Nachfrage und Wiederkauf. Das verändert Ansprache,
   Briefing und Begleitkommunikation.
3. Für welche Marken ist das relevant?
   Für FMCG- und LEH-Marken, die im Handel sichtbar sind, deren Aktivierungswirkung
   aber hinter der Sichtbarkeit zurückbleibt.
4. Funktioniert das auch für kleine oder wachsende Marken?
   Ja. Entscheidend ist der richtige Hebel, nicht die Budgetgröße. Gerade bei
   kleineren Marken zahlt eine präzise geplante Aktion überproportional ein.
5. Für welche Branchen eignet sich Produkt Promotion?
   Vor allem für Lebensmittel & Getränke, FMCG, Functional Food, Health & Lifestyle,
   Beauty & Care sowie für Produktneuheiten allgemein.
6. Ist eine kurzfristige Buchung von Promotion-Personal möglich?
   Kurzfristige Anfragen sind je nach Zeitraum und Region möglich. Am besten
   schreiben Sie mir kurz Termin und Standort — dann sage ich Ihnen schnell,
   was realistisch ist.
7. Woran erkennt man eine erfolgreiche Aktivierung?
   Daran, dass Verbraucher emotional andocken, das Produkt später wiedererkennen
   und Nachfrage entsteht — nicht allein an der Zahl der ausgegebenen Proben.
8. Wie läuft eine Zusammenarbeit ab?
   Wir starten mit der Markt- und Verbraucherperspektive, daraus entsteht eine
   Analyse der Kaufsituation und darauf aufbauend das Aktivierungskonzept und
   die Umsetzung.
→ FAQPage JSON-LD mit genau diesen 8 Fragen/Antworten.

## SEKTION 8 — KONTAKT / TERMIN  (id="termin", Akzent-Hintergrund)
Eyebrow: Kontakt
H2: Lassen Sie uns über Ihre Potenziale im Markt sprechen.
Sub: Unverbindlicher Strategieaustausch — 30 Minuten, konkret, ohne Verkaufsdruck.
Zwei Spalten:
  LINKS: Kontaktformular (POST an Web3Forms-Endpoint, Platzhalter-Access-Key)
    Felder: Name*, Unternehmen, E-Mail*, Telefon, Betreff (Select: Strategieaustausch /
            Promotion-Personal anfragen / Sampling- oder Verkostungsaktion / Sonstiges),
            Nachricht*, Datenschutz-Checkbox* (Text mit Link auf datenschutz.html)
    Honeypot-Feld (versteckt) gegen Spam.
    JS: Fetch-Submit, Inline-Erfolgs-/Fehlermeldung, aria-live, kein Redirect.
    Fallback: <noscript>-Hinweis mit mailto-Link.
  RECHTS: Calendly Klick-to-Load-Block
    Überschrift "Direkt Termin buchen"
    Platzhalter-Box mit Hinweistext:
      "Beim Laden des Kalenders wird eine Verbindung zu Calendly LLC (USA)
       hergestellt und Ihre IP-Adresse übertragen. Details in der
       Datenschutzerklärung."
    Button "Kalender laden" → lädt erst dann das Calendly-Widget-Script.
    Darunter direkte Kontaktdaten: E-Mail (Platzhalter), Telefon (Platzhalter), LinkedIn.

## FOOTER
Links: Impressum · Datenschutz · LinkedIn · Instagram
Copyright: © 2026 Jasmin Mezzadri
Kleiner Hinweis: "POS Marketing, Produkt Promotion und Vertrieb für FMCG- und LEH-Marken — bundesweit."

## SEO / <head>
title: POS Marketing & Produkt Promotion für FMCG- und LEH-Marken | Jasmin Mezzadri
description: Probieren ist nicht das Ziel. Wiederkauf schon. Ich aktiviere FMCG- und
  LEH-Marken am Point of Sale — Verkostung, Sampling und Promotion-Personal mit Fokus
  auf Wiedererkennung und Nachfrage. Bundesweit.
lang="de", canonical, Open Graph + Twitter Card, theme-color,
JSON-LD: ProfessionalService (+ Person) und FAQPage.
robots.txt + sitemap.xml.

## Platzhalter, die Jasmin ausfüllen muss (im README auflisten)
[DOMAIN], [E-MAIL], [TELEFON], [STRASSE], [PLZ ORT], [USt-IdNr. oder streichen],
[WEB3FORMS-ACCESS-KEY], [CALENDLY-URL], Portraitfoto.
