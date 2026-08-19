# Deployment — Schritt für Schritt

Stand: 19.08.2026. Das Repository ist lokal angelegt und enthält einen Commit
(`Website: erster Stand mit Bildern`). **Hochgeladen ist noch nichts.**

Repo-Wurzel ist bewusst der Ordner `website/` — nicht der ganze Projektordner.
So landen die Bild-Originale, die Fachartikel und die Backups nicht auf GitHub.

---

## 1. Vor dem Livegang ausfüllen — das ist Pflicht

Ohne diese Angaben darf die Seite nicht öffentlich erreichbar sein. Ein
gewerbliches Angebot ohne vollständiges Impressum nach § 5 DDG ist abmahnfähig.

| Platzhalter | Vorkommen | Was einsetzen |
|---|---|---|
| `[DOMAIN]` | 21× (index, impressum, datenschutz, 404, robots.txt, sitemap.xml) | die gekaufte Domain **ohne** `https://`, z. B. `jasmin-mezzadri.de` |
| `[E-MAIL]` | 12× | geschäftliche E-Mail-Adresse. **Auch in `assets/js/main.js`** — die steht im Fallback-Text des Formulars |
| `[TELEFON]` | 7× | Telefonnummer im Format `+49 …` |
| `[STRASSE UND HAUSNUMMER]` | 3× | ladungsfähige Anschrift (Postfach reicht nicht) |
| `[PLZ ORT]` | 4× | Postleitzahl und Ort |
| `[USt-IdNr.]` | 1× | USt-IdNr. — oder die Zeile ganz löschen, falls Kleinunternehmerregelung |
| `WEB3FORMS_ACCESS_KEY_HIER_EINSETZEN` | index.html | Access Key von web3forms.com |
| `CALENDLY_URL_HIER_EINSETZEN` | index.html, 2× | URL des Calendly-Events |

Prüfen, ob noch etwas übrig ist:

```bash
cd website
grep -rn "\[DOMAIN\]\|\[E-MAIL\]\|\[TELEFON\]\|\[PLZ ORT\]\|\[STRASSE\|HIER_EINSETZEN" \
  --include=*.html --include=*.js --include=*.txt --include=*.xml .
```

Erst wenn dieser Befehl **nichts** ausgibt, ist die Seite livefähig.

Zusätzlich offen: Rechtstexte anwaltlich oder von der IHK prüfen lassen,
AV-Vertrag nach Art. 28 DSGVO bei Web3Forms anfordern, Bildrechte klären
(siehe Checkliste in `README.md`).

---

## 2. Auf GitHub hochladen

Repository auf github.com anlegen (leer, **ohne** README/Lizenz/gitignore),
z. B. `jasmin-website`. Dann im Terminal:

```bash
cd ~/Documents/jasmin-pos-marketing/website

# Falls Name und E-Mail im Commit noch nicht stimmen:
git config user.name  "Dein Name"
git config user.email "deine@mail.de"

git remote add origin https://github.com/DEIN-ACCOUNT/jasmin-website.git
git push -u origin main
```

GitHub fragt beim Push nach Zugangsdaten. Das normale Passwort funktioniert
nicht — nötig ist ein **Personal Access Token** (github.com → Settings →
Developer settings → Personal access tokens → Fine-grained → Zugriff auf
dieses eine Repository, Berechtigung „Contents: Read and write"). Das Token
wird als Passwort eingegeben. Alternativ vorher `gh auth login` mit der
GitHub-CLI, dann entfällt die Abfrage.

---

## 3. GitHub Pages einschalten

Im Repository → **Settings → Pages**:

- Source: `Deploy from a branch`
- Branch: `main`, Ordner: `/ (root)`
- Speichern. Nach ein bis zwei Minuten läuft die Seite unter
  `https://DEIN-ACCOUNT.github.io/jasmin-website/`.

Die Datei `.nojekyll` liegt schon im Repo — ohne sie ignoriert GitHub Pages
Ordner, die mit einem Unterstrich beginnen.

**Wichtig:** Unter dieser github.io-Adresse liegen die Seiten in einem
Unterordner. Alle Pfade im Projekt sind relativ, das funktioniert — nur
`404.html` nutzt absolute Pfade und sieht dort unformatiert aus. Mit eigener
Domain (Schritt 4) ist das erledigt.

---

## 4. Eigene Domain verbinden

Beim Domain-Anbieter im DNS eintragen:

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  DEIN-ACCOUNT.github.io.
```

Dann im Repository → Settings → Pages → **Custom domain** die Domain
eintragen und speichern. GitHub legt dabei selbst eine Datei `CNAME` im Repo
an — die also nicht von Hand anlegen, sondern danach einmal `git pull`.

Sobald das Zertifikat ausgestellt ist (kann bis zu 24 Stunden dauern), den
Haken bei **Enforce HTTPS** setzen.

---

## 5. Nach dem Livegang prüfen

- [ ] Startseite, Impressum, Datenschutz, eine kaputte URL (404) aufrufen
- [ ] Kontaktformular einmal echt abschicken — kommt die Mail an?
- [ ] Calendly-Kachel anklicken — lädt der Kalender erst nach dem Klick?
- [ ] Auf dem Handy durchscrollen
- [ ] Im Browser die Netzwerk-Analyse öffnen und prüfen, dass **kein**
      Request an eine fremde Domain geht, solange man Calendly nicht anklickt.
      Das ist die Grundlage dafür, dass die Seite ohne Cookie-Banner auskommt.
- [ ] `https://DOMAIN/sitemap.xml` und `/robots.txt` erreichbar
- [ ] Seite in der Google Search Console anmelden

---

## Änderungen später hochladen

```bash
cd ~/Documents/jasmin-pos-marketing/website
git add -A
git commit -m "Kurz beschreiben, was sich geändert hat"
git push
```

GitHub Pages baut nach jedem Push automatisch neu, das dauert etwa eine Minute.
