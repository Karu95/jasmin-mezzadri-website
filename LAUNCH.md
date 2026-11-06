# Launch-Checkliste — www.mesmerizing.eu

Stand: 19.08.2026, nach dem Positionierungs-Umbau.

## 0. Vorschau-Modus (seit 06.11.2026)

Die Seite läuft zur Abstimmung mit Jasmin unter https://karu95.github.io/jasmin-mezzadri-website/ und ist für Suchmaschinen gesperrt: `noindex,nofollow` im Kopf von `index.html` und `Disallow: /` in `robots.txt`. **Beides vor dem Livegang auf mesmerizing.eu zurücksetzen.** Unter dem github.io-Unterpfad laufen die Root-Pfade der `404.html` ins Leere; mit eigener Domain ist das behoben.

## 1. Noch offene Platzhalter (blockieren den Livegang)

| Platzhalter | Wo | Was einsetzen |
|---|---|---|
| `[E-MAIL]` | index.html (JSON-LD, Kontaktliste, noscript), impressum.html, datenschutz.html, `assets/js/main.js` (`KONTAKT_EMAIL`) | die Geschäfts-E-Mail, idealerweise `@mesmerizing.eu` |
| `[TELEFON]` | index.html, impressum.html | Telefonnummer im Format `+49...` |
| `[STRASSE UND HAUSNUMMER]`, `[PLZ ORT]` | impressum.html (2×), datenschutz.html | ladungsfähige Anschrift — Pflicht nach § 5 DDG |
| `[USt-IdNr.]` | impressum.html | USt-IdNr. **oder** die Zeile ersatzlos streichen (Alternativtext für Kleinunternehmerregelung steht auskommentiert darunter) |
| `WEB3FORMS_ACCESS_KEY_HIER_EINSETZEN` | index.html, Kontaktformular | Access Key aus dem Web3Forms-Konto |
| `CALENDLY_URL_HIER_EINSETZEN` | index.html (2×: Button und Widget) | die Calendly-Event-URL des 30-Minuten-Termins |

Die Domain `[DOMAIN]` ist überall durch `www.mesmerizing.eu` ersetzt — canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD, robots.txt und sitemap.xml sind konsistent.

## 2. Domain an GitHub Pages hängen

1. **CNAME-Datei nicht von Hand anlegen.** In GitHub → Settings → Pages → Custom domain `www.mesmerizing.eu` eintragen. GitHub committet die Datei selbst. Danach lokal `git pull`, sonst gibt es beim nächsten Push einen Konflikt.
2. **DNS beim .eu-Registrar setzen:**
   - `CNAME` für `www` → `BENUTZERNAME.github.io.` (mit Punkt am Ende)
   - Apex `mesmerizing.eu` → vier A-Records:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - optional AAAA: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - **Nie** A-Records und CNAME auf denselben Namen. Auf dem Apex ist ein CNAME nach RFC unzulässig — dort nur A/AAAA oder ein ALIAS/ANAME des Registrars.
3. **Weiterleitung:** Mit `www` als Custom Domain leitet GitHub den Apex automatisch auf `www` um — aber nur, wenn die Apex-A-Records auf GitHub zeigen. Ohne sie ist `mesmerizing.eu` schlicht tot.
4. **HTTPS:** „Enforce HTTPS" ist anfangs ausgegraut. Das Let's-Encrypt-Zertifikat wird erst nach korrektem DNS ausgestellt, das kann bis zu 24 Stunden dauern. Danach zwingend aktivieren.
5. Nach dem Livegang: Search Console als **Domain-Property** anlegen und die Sitemap einreichen.

## 3. Vor dem Livegang noch zu klären

- **Rechtstexte prüfen lassen** (Anwältin oder IHK) — Impressum und Datenschutzerklärung sind Vorlagen.
- **AV-Vertrag nach Art. 28 DSGVO** bei Web3Forms anfordern (US-Server).
- **Nutzungsrechte Portrait klären** — eingebunden ist Jasmins echtes Foto (`Portrait smiling 2.jpeg`); offen ist nur die schriftliche Nutzungsfreigabe der Fotografin bzw. des Fotografen.
- **og-image** trägt die Wortmarke „Jasmin Mezzadri". Passt weiterhin, da Jasmin Mezzadri der Absender bleibt. Seit 2.0 in Mint, gerendert per PIL (Skript nicht im Repo; `og-image.svg` ist farblich angeglichen, aber nicht die Quelle des PNG).

## 4. Bewusst nicht umgesetzt (siehe `Feedback-Triage.md`)

- Keine eigene „Hierarchie"-Sektion — die Hierarchie entsteht über Reihenfolge und Sprache, nicht über eine Sektion, die sie erklärt.
- Keine SEO-Unterseiten zum Launch. Ausbaustufe, wenn die Seite steht.
- „Ich stehe selbst am Stand" bleibt — gerahmt statt gestrichen.
- Die FAQ zur Buchung einzelner Aktivierungen bleibt — umformuliert statt gelöscht.
- Konsequent Ich-Form, kein „wir".
