/* Dev Doshi — portfolio v3. Vanilla JS + GSAP ScrollTrigger + Lenis. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mobile = window.matchMedia('(max-width: 760px)');

  /* ================= data ================= */
  var PROJECTS = [
    { t: 'AI Enrichment Agent', c: 'Sales & Outreach', p: 'Manual lead research across multiple tools was slow, inconsistent, and unscalable.', s: 'Autonomous workflow that detects new entries, gathers verified company and contact data from multiple sources, applies structured logic to pick the best results, and updates records automatically.', k: ['n8n', 'OpenAI', 'Apify', 'SalesQL'] },
    { t: 'Autonomous Outreach & Follow-Up Engine', c: 'Sales & Outreach', p: 'Manual email drafting, follow-up scheduling and response monitoring made outbound unscalable.', s: 'End-to-end engine that sends personalized emails, runs structured follow-up sequences, stops instantly on reply, and tracks sent / delivered / opened / replied in one place.', k: ['n8n', 'InboxPlus', 'AI personalization'] },
    { t: 'AI Voice Lead Qualification Engine', c: 'Sales & Outreach', p: 'Manual qualification calls, inconsistent notes, untracked missed calls, fragmented CRM documentation.', s: 'Auto-triggered AI voice calls on new CRM contacts — intent classification, structured CRM notes, recordings filed to Drive, intelligent follow-up emails and real-time Slack alerts.', k: ['HubSpot', 'Voice AI', 'OpenAI', 'Slack'] },
    { t: 'Hiring Intent Intelligence System', c: 'Sales & Outreach', p: 'Identifying companies with real buying intent from hiring signals required slow manual research.', s: 'Scrapes job postings, AI-scores hiring intent 0–100, enriches decision-makers via Apollo, retrieves verified contacts and pushes them straight into an outbound campaign.', k: ['LinkedIn scraping', 'OpenAI', 'Apollo'] },
    { t: 'Deal Intelligence & Risk Monitoring', c: 'Sales & Outreach', p: 'No real-time visibility into deal health; high-risk deals went unnoticed and forecasting was unreliable.', s: 'Daily engine that scores conversion probability and risk per deal, flags stalls, sends Slack alerts with recommended actions and logs predictive insights for forecasting.', k: ['HubSpot', 'OpenAI', 'Slack'] },
    { t: 'Pre-Call Meeting Intelligence', c: 'Sales & Outreach', p: 'Sales teams entered meetings unprepared; research was manual and scattered.', s: 'Runs nightly, pulls next-day meetings, matches CRM records, enriches each company, and posts clean structured briefings to Slack before every external call.', k: ['Google Calendar', 'HubSpot', 'Apollo', 'OpenAI'] },
    { t: 'Invoice Processing & ERP Matching', c: 'Operations & Finance', p: 'Manual invoice validation, PO matching, ERP updates and document storage created AP bottlenecks.', s: 'Zero-touch AP pipeline: detects invoice emails, extracts structured data with strict validation, matches POs against ERP, updates Plex via API and files everything audit-ready.', k: ['Outlook', 'OpenAI', 'Plex ERP', 'Excel'] },
    { t: 'Proposal Generation & Document Engine', c: 'Operations & Finance', p: 'Manual proposal drafting, templating, folder management and status tracking slowed turnaround.', s: 'Client data in, finished proposal out — structured sections via schema, master template filled, docs filed and links logged back automatically.', k: ['OpenAI', 'Google Docs', 'Drive'] },
    { t: 'Autonomous SEO Blog Publishing Engine', c: 'Content & Marketing', p: 'Each SEO article took hours of writing, meta creation, image generation and uploading.', s: 'Daily pipeline that picks topics, writes 1000-word articles with meta and slugs, generates images, assigns categories semantically and publishes via API — zero touch.', k: ['n8n', 'OpenAI', 'Cloudinary', 'CMS API'] },
    { t: 'LinkedIn Content & Carousel System', c: 'Content & Marketing', p: 'Consistent LinkedIn posting required ideation, writing, design, approval and scheduling across tools.', s: 'Topic + date in; brand-voice caption and carousel script out, slides auto-designed, preview for approval, then scheduled and published to LinkedIn.', k: ['OpenAI', 'Image gen', 'LinkedIn API'] },
    { t: 'YouTube Avatar Video Cloning Engine', c: 'Content & Marketing', p: 'Short-form personalized video required scripting, recording, editing and multiple tools.', s: 'Turns any YouTube video into a voice-cloned AI-avatar short — script, talking-photo avatar, cloned voice, rendered video and public link, fully automatic.', k: ['HeyGen', 'OpenAI', 'Cloud storage'] },
    { t: 'Gmail AI Auto-Labeling & Triage', c: 'Communication & Support', p: 'Email overload buried important messages; manual triage drained productivity.', s: 'Daily workflow that fetches unread email, AI-summarizes and classifies each into FYI / Meeting / To-Respond, and applies labels automatically.', k: ['n8n', 'OpenAI', 'Gmail'] },
    { t: 'WhatsApp Agent & Lead Management', c: 'Communication & Support', p: 'Manual WhatsApp replies caused delays, inconsistent communication and incomplete data capture.', s: 'Context-aware conversational agent that qualifies leads with adaptive follow-up questions, logs structured data keyed by phone number, and escalates when complete.', k: ['WhatsApp API', 'OpenAI'] },
    { t: 'Resume Screening & Interview Scheduling', c: 'HR & Recruitment', p: 'Manual application review, scoring, tracking and interview scheduling slowed hiring.', s: 'Monitors the inbox, AI-scores every resume against open roles into Airtable, books interviews on Calendar and sends confirmations for top candidates automatically.', k: ['OpenAI', 'Airtable', 'Google Calendar'] }
  ];

  var TREKS = [
    { name: 'Buran Ghati', alt: '15,000 ft', loc: 'Himachal Pradesh',
      desc: 'Endless Dayara meadows, frozen Chandranahan lakes, and a rappel down the ice wall.',
      dir: 'assets/treks/buran-ghati/', cover: '03-snow-peaks-panorama.jpg',
      photos: ['01-camp-dog-meadow.jpg', '02-pass-summit-snow.jpg', '03-snow-peaks-panorama.jpg', '04-base-camp-boulder.jpg', '05-frozen-lake-balance.jpg', '06-frozen-lake-arms-wide.jpg', '07-camp-under-wall.jpg', '08-forest-peak-view.jpg'] },
    { name: 'Hampta Pass', alt: '14,100 ft', loc: 'Himachal Pradesh',
      desc: 'Green Kullu meadows on one side, the stark moonscape of Lahaul on the other.',
      dir: 'assets/treks/hampta-pass/', cover: '01.jpg',
      photos: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg'] },
    { name: 'Sar Pass, Kasol', alt: '13,800 ft', loc: 'Parvati Valley',
      desc: 'Pine forests, alpine snowfields, and the legendary snow-slide descent.',
      dir: 'assets/treks/sar-pass-kasol/', cover: '01.jpg',
      photos: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg'] }
  ];

  /* ================= nav ================= */
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open'); burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ================= work list ================= */
  var list = document.getElementById('workList');
  PROJECTS.forEach(function (p, i) {
    var row = document.createElement('div');
    row.className = 'work-row';
    row.innerHTML =
      '<button class="work-btn" aria-expanded="false">' +
        '<span class="work-i">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="work-t">' + p.t + '</span>' +
        '<span class="work-c">' + p.c + '</span>' +
        '<span class="work-a">+</span>' +
      '</button>' +
      '<div class="work-body"><div class="work-body-in">' +
        '<div class="work-cols">' +
          '<div class="prob"><h5>The problem</h5><p>' + p.p + '</p></div>' +
          '<div class="sol"><h5>The system</h5><p>' + p.s + '</p></div>' +
        '</div>' +
        '<div class="work-tools">' + p.k.map(function (k) { return '<span>' + k + '</span>'; }).join('') + '</div>' +
      '</div></div>';
    row.querySelector('.work-btn').addEventListener('click', function () {
      var was = row.classList.contains('open');
      list.querySelectorAll('.work-row.open').forEach(function (r) {
        r.classList.remove('open');
        r.querySelector('.work-btn').setAttribute('aria-expanded', 'false');
      });
      if (!was) {
        row.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
    list.appendChild(row);
  });

  /* ================= trek cards + lightbox ================= */
  var cardsWrap = document.getElementById('trekCards');
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var cur = { trek: null, i: 0 };

  TREKS.forEach(function (t) {
    var b = document.createElement('button');
    b.className = 'trek-card';
    b.innerHTML =
      '<img src="' + t.dir + t.cover + '" alt="' + t.name + '" loading="lazy">' +
      '<span class="tc-grad"></span>' +
      '<span class="tc-txt"><h3>' + t.name + '</h3>' +
      '<span class="tc-m">' + t.alt + ' · ' + t.loc + ' · ' + t.photos.length + ' photos</span></span>';
    b.addEventListener('click', function () { openLb(t, 0); });
    cardsWrap.appendChild(b);
  });

  function openLb(trek, i) {
    cur.trek = trek; cur.i = i;
    showLb();
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function showLb() {
    lbImg.src = cur.trek.dir + cur.trek.photos[cur.i];
    lbCap.textContent = cur.trek.name + ' — ' + (cur.i + 1) + ' / ' + cur.trek.photos.length;
  }
  function stepLb(d) {
    var n = cur.trek.photos.length;
    cur.i = (cur.i + d + n) % n;
    showLb();
  }
  function closeLb() { lb.hidden = true; document.body.style.overflow = ''; }
  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbPrev').addEventListener('click', function () { stepLb(-1); });
  document.getElementById('lbNext').addEventListener('click', function () { stepLb(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') stepLb(-1);
    if (e.key === 'ArrowRight') stepLb(1);
  });

  /* ================= motion ================= */
  function startMotion() {
    if (reduced || !window.gsap || !window.ScrollTrigger) {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.style.opacity = 1; el.style.transform = 'none';
      });
      document.querySelectorAll('.flag-panel').forEach(function (p) { p.classList.add('active'); });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    /* Lenis smooth scroll wired into ScrollTrigger */
    if (window.Lenis) {
      var lenis = new Lenis({ lerp: 0.11 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
      document.documentElement.classList.add('lenis');
      document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          var id = a.getAttribute('href');
          if (id.length > 1 && document.querySelector(id)) {
            e.preventDefault();
            lenis.scrollTo(id, { offset: -10, duration: 1.2 });
          }
        });
      });
    }

    /* hero line + reveal intro */
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.hero-title .line > span', { yPercent: 110, duration: 1.05, stagger: 0.12 }, 0.1)
      .to('.reveal', { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 }, 0.35);

    /* stat counters */
    document.querySelectorAll('.stat-n[data-count]').forEach(function (el) {
      var target = +el.dataset.count;
      var obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 1.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 92%' },
        onUpdate: function () { el.textContent = Math.round(obj.v); }
      });
    });

    /* section headers drift in (.trek-head excluded — the pin owns it) */
    document.querySelectorAll('.sec-head, .contact > *').forEach(function (el) {
      gsap.from(el, {
        opacity: 0, y: 34, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      });
    });

    /* ---------- pinned sections (desktop only, responsive-safe) ---------- */
    var mm = gsap.matchMedia();
    mm.add('(min-width: 761px)', function () {
      /* flagship pinned panels */
      var panels = gsap.utils.toArray('.flag-panel');
      var dots = document.querySelectorAll('.flag-dots i');
      var active = 0;
      panels[0].classList.add('active');
      function setPanel(n) {
        if (n === active) return;
        panels[active].classList.remove('active');
        panels[active].classList.add('leaving');
        (function (old) {
          setTimeout(function () { panels[old].classList.remove('leaving'); }, 450);
        })(active);
        panels[n].classList.add('active');
        dots.forEach(function (d, i) { d.classList.toggle('on', i === n); });
        active = n;
      }
      ScrollTrigger.create({
        trigger: '.flag-pin',
        start: 'top top',
        end: '+=' + (panels.length * 85) + '%',
        pin: true,
        scrub: true,
        onUpdate: function (self) {
          var n = Math.min(panels.length - 1, Math.floor(self.progress * panels.length));
          setPanel(n);
        }
      });

      /* treks pinned photo stack — cards rise and fan out like a photo pile */
      var cards = gsap.utils.toArray('.stack-card');
      var OX = [-46, 40, -26, 34, -14];
      var ROT = [-4, 3, -2.4, 4.2, -3.2];
      cards.forEach(function (card, i) {
        gsap.set(card, {
          xPercent: -50, yPercent: -50,
          x: OX[i] || 0, y: '120vh',
          rotation: ROT[i] || 0
        });
      });
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.trek-pin',
          start: 'top top',
          end: '+=' + (cards.length * 62) + '%',
          pin: true,
          scrub: 0.6
        }
      });
      tl.to('.trek-head', { opacity: 0.12, scale: 0.97, duration: 0.8 }, 0.35);
      cards.forEach(function (card, i) {
        tl.to(card, { y: 0, ease: 'power2.out', duration: 1 }, i * 0.9);
        if (i > 0) {
          tl.to(cards[i - 1], { scale: 0.965, duration: 0.6 }, i * 0.9 + 0.2);
        }
      });
      tl.to({}, { duration: 0.4 });      /* breathing room at the end */

      return function () {               /* cleanup on breakpoint change */
        panels.forEach(function (p) { p.classList.remove('active', 'leaving'); });
        gsap.set(cards, { clearProps: 'all' });
        gsap.set('.trek-head', { clearProps: 'all' });
      };
    });

    /* work rows rise in */
    gsap.utils.toArray('.work-row').forEach(function (row, i) {
      gsap.from(row, {
        opacity: 0, y: 26, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: row, start: 'top 94%' }
      });
    });

    /* stack columns */
    gsap.from('.stack-col', {
      opacity: 0, y: 30, duration: 0.7, stagger: 0.07, ease: 'power2.out',
      scrollTrigger: { trigger: '.stack-grid', start: 'top 86%' }
    });

    /* trek cards */
    gsap.from('.trek-card', {
      opacity: 0, y: 44, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.trek-cards', start: 'top 88%' }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startMotion);
  } else {
    startMotion();
  }
})();
