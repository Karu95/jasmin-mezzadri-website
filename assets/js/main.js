/* =============================================================================
   Jasmin Mezzadri — main.js
   Mobile-Nav, Sticky-Header, Scroll-Reveal, aktiver Nav-Link,
   Formular-Submit (Web3Forms), Calendly Klick-to-Load.
   Kein Framework, keine externen Abhängigkeiten.
   ========================================================================== */
(function () {
  'use strict';

  // Signal an den Inline-Failsafe im <head>: JS läuft, Reveal-Animation ist sicher.
  window.__jmReady = true;

  /* ---------------------------------------------------------------------------
     KONFIGURATION — hier die echten Kontaktdaten eintragen.
     --------------------------------------------------------------------------- */
  var KONTAKT_EMAIL = '[E-MAIL]'; // ← HIER die echte E-Mail-Adresse eintragen

  // Erzeugt einen fertigen mailto-Link auf KONTAKT_EMAIL, optional mit Betreff.
  // Die Adresse selbst wird nicht URL-kodiert (mailto-Adressteil bleibt roh),
  // nur der Betreff — und beides wird fürs HTML-Attribut maskiert.
  function mailtoLink(betreff) {
    var esc = function (v) {
      return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };
    var href = 'mailto:' + KONTAKT_EMAIL;
    if (betreff) { href += '?subject=' + encodeURIComponent(betreff); }
    return '<a href="' + esc(href) + '">' + esc(KONTAKT_EMAIL) + '</a>';
  }

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- 1. Nav */
  var header = document.getElementById('site-header');
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  var DESKTOP = '(min-width: 900px)';

  // Bereiche, die bei offenem Overlay nicht per Tab erreichbar sein dürfen.
  function backgroundRegions() {
    return Array.prototype.slice.call(document.querySelectorAll('main, .site-footer'));
  }

  function setBackgroundInert(state) {
    backgroundRegions().forEach(function (el) {
      if (state) {
        el.inert = true;                       // moderne Browser
        el.setAttribute('inert', '');          // Attribut-Fallback
        el.setAttribute('aria-hidden', 'true'); // Fallback für ältere Screenreader
      } else {
        el.inert = false;
        el.removeAttribute('inert');
        el.removeAttribute('aria-hidden');
      }
    });
  }

  function closeNav() {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menü öffnen');
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    if (header) { header.classList.remove('nav-open'); }
    setBackgroundInert(false);
    if (typeof setHeaderState === 'function') { setHeaderState(); }
  }

  function openNav() {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Menü schließen');
    nav.classList.add('is-open');
    document.body.classList.add('nav-open');
    // Header bei scrollY = 0 solide setzen, damit der Hero nicht durchscheint.
    if (header) { header.classList.add('nav-open', 'is-scrolled'); }
    setBackgroundInert(true);
    var firstLink = nav.querySelector('a');
    if (firstLink) { firstLink.focus(); }
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      if (toggle.getAttribute('aria-expanded') === 'true') { closeNav(); }
      else { openNav(); }
    });

    // Klick auf einen Link schließt das Overlay
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { closeNav(); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeNav();
        toggle.focus();
      }
    });

    // Beim Wechsel auf Desktop-Breite Zustand zurücksetzen
    if (window.matchMedia) {
      var mq = window.matchMedia(DESKTOP);
      var onChange = function (ev) { if (ev.matches) { closeNav(); } };
      if (mq.addEventListener) { mq.addEventListener('change', onChange); }
      else if (mq.addListener) { mq.addListener(onChange); }
    }
  }

  /* ------------------------------------------------- 2. Sticky-Header-State */
  function setHeaderState() {
    if (!header) return;
    // Bei offenem Mobile-Overlay bleibt der Header immer solide.
    if (window.scrollY > 12 || header.classList.contains('nav-open')) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  if (header) {
    setHeaderState();
    window.addEventListener('scroll', setHeaderState, { passive: true });
  }

  /* ------------------------------------------ 3. Smooth-Scroll mit Offset */
  // Fallback für Browser ohne scroll-padding-Unterstützung + exakter Offset.
  function headerHeight() {
    return header ? header.getBoundingClientRect().height : 0;
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var hash = link.getAttribute('href');
    if (!hash || hash === '#' || hash === '#main') return;
    var target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();
    var top = target.getBoundingClientRect().top + window.scrollY - headerHeight() - 16;
    window.scrollTo({ top: top < 0 ? 0 : top, behavior: reduceMotion ? 'auto' : 'smooth' });

    if (history.replaceState) { history.replaceState(null, '', hash); }
    // Fokus für Screenreader/Tastatur setzen, ohne erneut zu springen
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });

  /* -------------------------------------------------- 4. Scroll-Reveal */
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if (!('IntersectionObserver' in window) || reduceMotion) {
      Array.prototype.forEach.call(revealables, function (el) {
        el.classList.add('is-visible');
      });
    } else {
      var revealObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

      Array.prototype.forEach.call(revealables, function (el) {
        revealObserver.observe(el);
      });
    }
  }

  /* ---------------------------------------------- 5. Aktiver Nav-Link */
  var navLinks = document.querySelectorAll('.nav-list a[href^="#"]:not(.btn)');
  if (navLinks.length && 'IntersectionObserver' in window) {
    var linkMap = {};
    var sections = [];
    Array.prototype.forEach.call(navLinks, function (link) {
      var id = link.getAttribute('href').slice(1);
      var section = document.getElementById(id);
      if (section) { linkMap[id] = link; sections.push(section); }
    });

    if (sections.length) {
      var setActive = function (id) {
        Array.prototype.forEach.call(navLinks, function (l) {
          l.classList.remove('is-active');
          l.removeAttribute('aria-current');
        });
        if (linkMap[id]) {
          linkMap[id].classList.add('is-active');
          linkMap[id].setAttribute('aria-current', 'true');
        }
      };

      var visible = {};
      var sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          visible[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });
        var bestId = null, bestRatio = 0;
        Object.keys(visible).forEach(function (id) {
          if (visible[id] > bestRatio) { bestRatio = visible[id]; bestId = id; }
        });
        setActive(bestId);
      }, {
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0, 0.15, 0.35, 0.6, 1]
      });

      sections.forEach(function (s) { sectionObserver.observe(s); });
    }
  }

  /* --------------------------------------------------- 6. Kontaktformular */
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  var submitBtn = document.getElementById('form-submit');

  if (form && status && submitBtn) {
    var defaultLabel = submitBtn.textContent;

    var escapeHtml = function (value) {
      return String(value)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    };

    var setStatus = function (message, kind) {
      status.classList.remove('is-success', 'is-error');
      if (kind) { status.classList.add(kind); }
      status.innerHTML = message;
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Native Validierung auswerten und Meldungen sichtbar machen
      if (!form.checkValidity()) {
        form.reportValidity();
        var firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) { firstInvalid.focus(); }
        setStatus('Bitte füllen Sie die markierten Pflichtfelder korrekt aus.', 'is-error');
        return;
      }

      var data = Object.fromEntries(new FormData(form).entries());

      submitBtn.disabled = true;
      submitBtn.textContent = 'Wird gesendet …';
      setStatus('Ihre Nachricht wird gesendet …', null);

      fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (response) {
          return response.json().then(function (json) {
            return { ok: response.ok, json: json };
          });
        })
        .then(function (result) {
          if (result.ok && result.json && result.json.success) {
            form.reset();
            setStatus('Vielen Dank — Ihre Nachricht ist angekommen. Ich melde mich zeitnah bei Ihnen.', 'is-success');
          } else {
            var msg = (result.json && result.json.message)
              ? escapeHtml(result.json.message) : 'Unbekannter Fehler.';
            setStatus('Das Senden hat leider nicht geklappt (' + msg + '). ' +
              'Schreiben Sie mir gern direkt an ' + mailtoLink('Anfrage über die Website') + '.', 'is-error');
          }
        })
        .catch(function () {
          setStatus('Die Nachricht konnte nicht gesendet werden. Bitte prüfen Sie Ihre Verbindung ' +
            'oder schreiben Sie mir direkt an ' + mailtoLink('Anfrage über die Website') + '.', 'is-error');
        })
        .then(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = defaultLabel;
        });
    });
  }

  /* --------------------------------------- 7. Calendly Klick-to-Load (DSGVO) */
  var calendlyBtn = document.getElementById('calendly-load');
  var calendlyBox = document.getElementById('calendly-box');
  var calendlyWidget = document.getElementById('calendly-widget');

  if (calendlyBtn && calendlyBox && calendlyWidget) {
    var loaded = false;

    calendlyBtn.addEventListener('click', function () {
      if (loaded) return;
      loaded = true;

      calendlyBtn.disabled = true;
      calendlyBtn.textContent = 'Kalender wird geladen …';

      var url = calendlyWidget.getAttribute('data-url');

      var CSS_HREF = 'https://assets.calendly.com/assets/external/widget.css';
      if (!document.querySelector('link[href="' + CSS_HREF + '"]')) {
        var css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = CSS_HREF;
        document.head.appendChild(css);
      }

      var script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;

      script.onload = function () {
        calendlyWidget.hidden = false;
        if (window.Calendly && typeof window.Calendly.initInlineWidget === 'function') {
          window.Calendly.initInlineWidget({
            url: url,
            parentElement: calendlyWidget,
            prefill: {},
            utm: {}
          });
        }
        // Platzhalter-Box entfernen — der Button wirkt nur einmal
        calendlyBox.remove();
      };

      script.onerror = function () {
        if (script.parentNode) { script.parentNode.removeChild(script); }
        calendlyBtn.disabled = false;
        calendlyBtn.textContent = 'Kalender laden';
        loaded = false;
        var note = calendlyBox.querySelector('.calendly-note');
        if (note) {
          note.innerHTML = 'Der Kalender konnte nicht geladen werden. ' +
            'Schreiben Sie mir gern direkt an ' + mailtoLink('Terminanfrage') + '.';
        }
      };

      document.head.appendChild(script);
    });
  }
})();
