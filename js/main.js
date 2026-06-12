/* ============================================================
   DEV DOSHI .OS — portfolio logic (vanilla JS, no dependencies)
   ============================================================ */
(function () {
  'use strict';

  /* ============================================================
     REPLACE WITH YOUR TREK PHOTOS — image URLs per trek.
     `cover` is the card image; if omitted, photos[0] is used.
     Buran Ghati uses real photos from assets/treks/buran-ghati/
     (see the README there for the expected filenames).
     ============================================================ */
  var TREKS = [
    {
      id: 'hampta', name: 'Hampta Pass', location: 'Himachal Pradesh', alt: '14,100 FT',
      vibe: 'From lush Kullu greens to the stark moonscape of Lahaul — two worlds in one crossing.',
      desc: 'A dramatic valley-crossover trek at 14,100 ft. Green meadows and river crossings on the Kullu side, then over the pass into the barren, beautiful high desert of Lahaul & Spiti.',
      cover: 'https://picsum.photos/id/1036/1200/800',
      photos: [
        'assets/treks/hampta-pass/01.jpg',
        'assets/treks/hampta-pass/02.jpg',
        'assets/treks/hampta-pass/03.jpg',
        'assets/treks/hampta-pass/04.jpg',
        'assets/treks/hampta-pass/05.jpg',
        'assets/treks/hampta-pass/06.jpg',
        'assets/treks/hampta-pass/07.jpg',
        'assets/treks/hampta-pass/08.jpg'
      ]
    },
    {
      id: 'sarpass', name: 'Sar Pass, Kasol', location: 'Parvati Valley, Himachal Pradesh', alt: '13,800 FT',
      vibe: 'Pine forests, snowfields, and the Parvati Valley spread out far below.',
      desc: 'A classic Parvati Valley trek to 13,800 ft — through Grahan village and dense pine forest, across alpine meadows, ending with the legendary snow-slide descent to Biskeri Thach.',
      cover: 'https://picsum.photos/id/1021/1200/800',
      photos: [
        'assets/treks/sar-pass-kasol/01.jpg',
        'assets/treks/sar-pass-kasol/02.jpg',
        'assets/treks/sar-pass-kasol/03.jpg',
        'assets/treks/sar-pass-kasol/04.jpg',
        'assets/treks/sar-pass-kasol/05.jpg',
        'assets/treks/sar-pass-kasol/06.jpg',
        'assets/treks/sar-pass-kasol/07.jpg',
        'assets/treks/sar-pass-kasol/08.jpg'
      ]
    },
    {
      id: 'buran', name: 'Buran Ghati', location: 'Himachal Pradesh', alt: '15,000 FT',
      vibe: 'An ice-wall rappel and meadows that go on forever.',
      desc: 'One of Himachal’s most thrilling passes at 15,000 ft — the endless Dayara meadows, the frozen Chandranahan lakes, and a heart-pounding rappel down the ice wall on the far side.',
      cover: 'https://picsum.photos/id/1018/1200/800',
      photos: [
        'assets/treks/buran-ghati/01-camp-dog-meadow.jpg',
        'assets/treks/buran-ghati/02-pass-summit-snow.jpg',
        'assets/treks/buran-ghati/03-snow-peaks-panorama.jpg',
        'assets/treks/buran-ghati/04-base-camp-boulder.jpg',
        'assets/treks/buran-ghati/05-frozen-lake-balance.jpg',
        'assets/treks/buran-ghati/06-frozen-lake-arms-wide.jpg',
        'assets/treks/buran-ghati/07-camp-under-wall.jpg',
        'assets/treks/buran-ghati/08-forest-peak-view.jpg'
      ]
    }
  ];

  var CATS = ['All', 'Sales & Outreach', 'Operations & Finance', 'Content & Marketing', 'Communication & Support', 'HR & Recruitment'];

  var PROJECTS = [
    { title: 'AI Enrichment Agent', cat: 'Sales & Outreach', desc: 'Autonomous data processing system that researches, verifies and enriches every new lead end-to-end.', tools: ['n8n', 'OpenAI', 'Apify', 'SalesQL', 'Google Sheets'], problem: 'Manual lead research across multiple tools was slow, inconsistent, and unscalable.', solution: 'Autonomous enrichment workflow that detects new entries, gathers verified company and contact data from multiple sources, applies structured logic to select the best results, cleans and standardizes data, and updates the sheet automatically.' },
    { title: 'Autonomous Outreach & Follow-Up Engine', cat: 'Sales & Outreach', desc: 'End-to-end outbound engine: personalized sends, structured follow-ups, instant stop-on-reply.', tools: ['n8n', 'InboxPlus', 'AI Personalization'], problem: 'Manual email drafting, follow-up scheduling and response monitoring made outbound unscalable.', solution: 'End-to-end engine that sends personalized emails, runs structured follow-up sequences, stops instantly on reply, and tracks sent / delivered / opened / replied metrics in one place.' },
    { title: 'AI Voice Lead Qualification & Follow-Up Orchestration Engine', cat: 'Sales & Outreach', desc: 'AI voice calls qualify new CRM contacts, document everything, and orchestrate intelligent follow-up.', tools: ['HubSpot', 'Voice AI', 'OpenAI', 'Google Drive', 'Google Sheets', 'Slack/Discord'], problem: 'Manual qualification calls, inconsistent notes, untracked missed calls, fragmented CRM documentation.', solution: 'Auto-triggered AI outbound voice calls on new CRM contacts, conversation summary and intent classification, structured CRM notes, call recordings stored in Drive, dashboard updates, intelligent follow-up emails, fallback sequences for unanswered calls, and real-time Slack/Discord notifications.' },
    { title: 'Gmail AI Auto-Labeling & Prioritization System', cat: 'Communication & Support', desc: 'Daily AI triage that summarizes, classifies and labels every unread email automatically.', tools: ['n8n', 'OpenAI', 'Gmail'], problem: 'Email overload buried important messages; manual triage drained productivity.', solution: 'Daily automated workflow that fetches unread emails, AI-summarizes and classifies each into FYI / Meeting Update / To Respond, and applies Gmail labels automatically.' },
    { title: 'AI-Powered Resume Screening & Automated Interview Scheduling System', cat: 'HR & Recruitment', desc: 'AI scores every application against open roles and books interviews for top candidates automatically.', tools: ['Gmail', 'OpenAI', 'Google Drive', 'Airtable', 'Google Calendar'], problem: 'Manual application review, scoring, tracking and interview scheduling slowed hiring.', solution: 'Monitors inbox, AI-classifies applications, extracts and analyzes resumes against open roles, assigns structured fit scores into Airtable, auto-books interviews on Google Calendar and sends confirmation emails for high-scoring candidates.' },
    { title: 'AI-Powered Autonomous SEO Blog Publishing Engine', cat: 'Content & Marketing', desc: 'A daily pipeline that writes, illustrates, categorizes and publishes SEO articles with zero touch.', tools: ['n8n', 'OpenAI', 'Google Sheets', 'Cloudinary', 'Blog CMS API'], problem: 'Each SEO article took hours of writing, meta creation, image generation, categorization and uploading.', solution: 'Daily autonomous pipeline that picks unused topics, generates 1000-word SEO articles with meta descriptions and URL slugs, creates and processes images, semantically assigns categories and tags, publishes via API, and updates the tracking sheet with live URLs.' },
    { title: 'AI-Powered Hiring Intent Intelligence System', cat: 'Sales & Outreach', desc: 'Turns LinkedIn hiring signals into scored, enriched decision-makers pushed straight into outbound.', tools: ['LinkedIn Scraping', 'OpenAI', 'Apollo API', 'Google Sheets'], problem: 'Identifying companies with real buying intent from hiring signals required slow manual research.', solution: 'Scrapes LinkedIn job postings, AI-scores hiring intent (0–100), filters companies scoring ≥70, enriches decision-makers via Apollo (prioritizing Head of IT / CRM / RevOps titles), retrieves verified contacts, and auto-pushes them into an Apollo outbound campaign.' },
    { title: 'AI-Powered Invoice Processing & ERP Matching Engine', cat: 'Operations & Finance', desc: 'Zero-touch AP pipeline: invoice detection, strict extraction, PO matching and ERP updates.', tools: ['Outlook', 'OpenAI', 'Plex ERP API', 'Microsoft Excel', 'OneDrive'], problem: 'Manual invoice validation, PO matching, ERP updates and document storage created AP bottlenecks and errors.', solution: 'Monitors Outlook, AI-detects invoice emails, extracts structured data from PDFs with strict validation, matches POs against ERP, verifies amounts, updates Plex status via secure API, appends Excel records, and renames and stores files in OneDrive — a zero-touch, auditable AP pipeline.' },
    { title: 'AI-Powered Deal Intelligence & Risk Monitoring Engine', cat: 'Sales & Outreach', desc: 'Daily deal-health engine: conversion probability, risk levels and Slack alerts with next actions.', tools: ['HubSpot', 'OpenAI', 'Slack', 'Google Sheets'], problem: 'No real-time visibility into deal health; high-risk deals went unnoticed and forecasting was unreliable.', solution: 'Daily engine that retrieves active deals, enriches them with engagement activity, AI-calculates conversion probability, behavioral scores, risk levels and health trends, flags stalled deals, sends Slack alerts with recommended actions, and logs predictive insights for forecasting.' },
    { title: 'AI-Powered Proposal Generation & Document Management Engine', cat: 'Operations & Finance', desc: 'Client data in, finished proposal out — templated, filed, linked and tracked automatically.', tools: ['OpenAI', 'Google Drive', 'Google Docs', 'Google Sheets'], problem: 'Manual proposal drafting, templating, folder management and status tracking slowed turnaround.', solution: 'Converts client data into structured proposal sections via a predefined schema, creates or identifies client folders, copies a master template, replaces placeholders with generated content, stores finalized docs, and logs links and status back to the tracking sheet.' },
    { title: 'AI-Powered Pre-Call Meeting Intelligence Engine', cat: 'Sales & Outreach', desc: 'Nightly briefings on every external meeting: CRM context, company intel, posted to Slack.', tools: ['Google Calendar', 'HubSpot', 'Apollo', 'OpenAI', 'Slack/Discord'], problem: 'Sales teams entered meetings unprepared; research was manual and scattered.', solution: 'Runs nightly, pulls next-day meetings, filters external attendees, matches CRM records, enriches corporate domains via Apollo (industry, size, LinkedIn), and posts clean structured AI briefings plus a total meeting count to Slack/Discord.' },
    { title: 'AI LinkedIn Content & Carousel Publishing System', cat: 'Content & Marketing', desc: 'Topic + date in; brand-voice caption, designed carousel, approval preview and scheduled post out.', tools: ['Google Sheets', 'OpenAI', 'Image Generation', 'LinkedIn API'], problem: 'Consistent LinkedIn posting required ideation, writing, design, approval and scheduling across multiple tools.', solution: 'User enters topic and date; AI generates a brand-voice caption and carousel script, auto-designs slides, shares a preview for approval, then schedules and publishes to LinkedIn on the selected date.' },
    { title: 'AI-Powered WhatsApp Agent & Lead Management System', cat: 'Communication & Support', desc: 'Context-aware WhatsApp agent that qualifies leads conversationally and logs structured data.', tools: ['WhatsApp API', 'OpenAI', 'Google Sheets'], problem: 'Manual WhatsApp replies caused delays, inconsistent communication and incomplete data capture.', solution: 'Context-aware conversational agent that activates on each new message, identifies intent, dynamically asks follow-up questions to collect structured info, adapts its flow to responses, logs everything to Google Sheets keyed by phone number, and confirms or escalates when complete.' },
    { title: 'AI YouTube Avatar Video Cloning Engine', cat: 'Content & Marketing', desc: 'Turns any YouTube video into a voice-cloned, AI-avatar short — scripted, rendered and stored.', tools: ['HeyGen', 'OpenAI', 'Cloud Storage'], problem: 'Producing short-form personalized video required scripting, recording, editing and multiple tools.', solution: 'Transforms a YouTube video into a new AI avatar short — extracts metadata, generates a 30-second brand-aligned script, captures a frame to create a talking-photo avatar, clones the creator’s voice from the original audio, renders the video, uploads to cloud storage with a public link, and logs it to a database.' }
  ];

  var FEATURED_TITLES = ['AI Voice Lead Qualification & Follow-Up Orchestration Engine', 'AI Enrichment Agent', 'AI-Powered Autonomous SEO Blog Publishing Engine'];

  var TOOLS = ['n8n', 'OpenAI', 'Apify', 'SalesQL', 'Apollo', 'HubSpot', 'InboxPlus', 'Airtable', 'Google Sheets', 'Google Drive', 'Google Calendar', 'Gmail', 'Outlook', 'OneDrive', 'Microsoft Excel', 'Plex ERP', 'Slack', 'Discord', 'WhatsApp API', 'HeyGen', 'Cloudinary', 'LinkedIn API', 'Voice AI', 'Webhooks & REST APIs'];

  var SKILL_GROUPS = [
    { title: 'Automation Platforms', items: ['n8n', 'Webhooks', 'REST APIs'] },
    { title: 'AI & LLMs', items: ['OpenAI', 'AI Agents', 'Classification', 'Voice AI'] },
    { title: 'Sales & CRM', items: ['HubSpot', 'Apollo', 'SalesQL', 'InboxPlus'] },
    { title: 'Data & Docs', items: ['Google Workspace', 'Airtable', 'Excel', 'OneDrive', 'Plex ERP'] },
    { title: 'Content & Media', items: ['HeyGen', 'Cloudinary', 'LinkedIn API', 'WhatsApp API'] }
  ];

  var CONTACTS = [
    { key: 'email', label: 'Email', display: 'doshidev58@gmail.com', copyValue: 'doshidev58@gmail.com' },
    { key: 'phone', label: 'Phone', display: '+91 96382 22009', copyValue: '+919638222009' },
    { key: 'linkedin', label: 'LinkedIn', display: 'linkedin.com/in/dev-doshi-1ba604247', copyValue: 'https://www.linkedin.com/in/dev-doshi-1ba604247/' }
  ];

  var ABOUT_STATS = [
    { value: '200+', title: 'Advanced automations shipped' },
    { value: '100+', title: 'Third-party API integrations' },
    { value: '1500+', title: 'Hours of system engineering' },
    { value: '3+', title: 'Countries — USA, Ireland, India & more' }
  ];

  var STAT_CARDS = [
    { target: 200, title: 'Automations', sub: 'Advanced systems — sales, ops, AI & more' },
    { target: 100, title: 'Integrations', sub: 'Third-party APIs — CRMs, AI models, business systems' },
    { target: 1500, title: 'Eng. Hours', sub: 'Clients across USA, Ireland, India & more' }
  ];

  var BOOT_LINES = [
    'DOSHI.OS v2.6.0 — agentic runtime',
    'mounting workflow engine .............',
    'loading 200+ automations .............',
    'connecting 100+ third-party APIs .....',
    'calibrating decision matrix ..........',
    'agent status: AUTONOMOUS',
    'rendering interface'
  ];

  var LOG_EVENTS = [
    { tag: 'lead.enriched', text: '→ CRM updated ✓', color: 'var(--accent)' },
    { tag: 'voice.call', text: '→ intent: HIGH — follow-up queued', color: 'var(--accent2)' },
    { tag: 'invoice.matched', text: '→ PO #4821 verified ✓', color: 'var(--success)' },
    { tag: 'email.classified', text: '→ TO_RESPOND — label applied', color: 'var(--accent)' },
    { tag: 'blog.published', text: '→ /agentic-ops-at-scale — live', color: 'var(--success)' },
    { tag: 'deal.risk_scan', text: '→ 3 deals flagged — alerts sent', color: 'var(--warn)' },
    { tag: 'whatsapp.agent', text: '→ lead captured → row 1042', color: 'var(--accent)' },
    { tag: 'resume.scored', text: '→ 87/100 → interview booked', color: 'var(--success)' },
    { tag: 'briefing.posted', text: '→ #sales-ops — 6 meetings prepped', color: 'var(--accent2)' },
    { tag: 'carousel.scheduled', text: '→ LinkedIn — Tue 09:00', color: 'var(--accent)' }
  ];

  var FIELD_COLORS = {
    dark: { line: '#00E5FF', dot: '#7DD8EE' },
    light: { line: '#0090AF', dot: '#3E7A92' }
  };

  /* ---------- state & helpers ---------- */
  var state = {
    page: 'home', filter: 'All', theme: 'dark',
    openTrek: null, lightbox: -1, statsRun: false, menuOpen: false
  };
  var $ = function (sel) { return document.querySelector(sel); };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var sysNum = function (i) { return 'SYS-' + String(i + 1).padStart(2, '0'); };
  var fieldColors = FIELD_COLORS.dark;
  var mouse = { x: -9999, y: -9999 };

  /* ---------- theme ---------- */
  function applyTheme(t) {
    state.theme = t;
    document.documentElement.setAttribute('data-theme', t);
    fieldColors = FIELD_COLORS[t] || FIELD_COLORS.dark;
    var label = $('#themeLabel');
    if (label) label.textContent = t === 'dark' ? 'LIGHT' : 'DARK';
    try { localStorage.setItem('doshi-theme', t); } catch (e) {}
  }
  function toggleTheme() { applyTheme(state.theme === 'dark' ? 'light' : 'dark'); }

  /* ---------- navigation ---------- */
  var PAGES = [['home', 'HOME', '01'], ['projects', 'PROJECTS', '02'], ['about', 'ABOUT', '03'], ['treks', 'TREKS', '04'], ['contact', 'CONTACT', '05']];

  function renderNav() {
    $('#navLinks').innerHTML = PAGES.map(function (p) {
      return '<button class="nav-link' + (state.page === p[0] ? ' active' : '') + '" data-nav="' + p[0] + '">' +
        '<span class="num">' + p[2] + '</span>' + p[1] + '<span class="bar"></span></button>';
    }).join('');
    $('#mobileMenu').innerHTML = PAGES.map(function (p) {
      return '<button class="mobile-link' + (state.page === p[0] ? ' active' : '') + '" data-nav="' + p[0] + '">' +
        '<span class="num">' + p[2] + '</span>' + p[1] + '</button>';
    }).join('');
  }

  function go(page) {
    state.page = page;
    closeMenu();
    closeAllOverlays();
    $$('.page').forEach(function (el) {
      var on = el.getAttribute('data-page') === page;
      el.classList.remove('active');
      if (on) {
        // retrigger the pageIn animation
        void el.offsetWidth;
        el.classList.add('active');
      }
    });
    renderNav();
    window.scrollTo(0, 0);
    requestAnimationFrame(function () { scanReveals(); revealInView(); });
  }

  function openMenu() {
    state.menuOpen = true;
    $('#mobileMenu').hidden = false;
    $('#hamburger').classList.add('open');
    $('#hamburger').setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    state.menuOpen = false;
    $('#mobileMenu').hidden = true;
    $('#hamburger').classList.remove('open');
    $('#hamburger').setAttribute('aria-expanded', 'false');
  }

  /* ---------- reveals ---------- */
  var revealIO = null;
  function revealEl(el) {
    if (el.classList.contains('in')) return;
    var delay = (parseFloat(el.getAttribute('data-rd')) || 0) * 1000;
    setTimeout(function () { el.classList.add('in'); }, delay);
  }
  function inView(el) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight - 20 && r.bottom > 0;
  }
  function scanReveals() {
    $$('.page.active [data-reveal]:not(.in)').forEach(function (el) {
      if (revealIO && !el._obs) { el._obs = true; revealIO.observe(el); }
    });
  }
  function revealInView() {
    $$('.page.active [data-reveal]:not(.in)').forEach(function (el) {
      if (inView(el)) revealEl(el);
    });
    maybeStats();
  }
  if ('IntersectionObserver' in window) {
    revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { revealIO.unobserve(en.target); revealEl(en.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  } else {
    // ancient browsers: just show everything
    $$('[data-reveal]').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- stats count-up ---------- */
  function renderStats() {
    $('#statCards').innerHTML = STAT_CARDS.map(function (st, i) {
      return '<div class="card stat-card" data-reveal>' +
        '<div class="stat-top"><span class="stat-value"><span id="statV' + i + '">0</span><span class="accent">+</span></span>' +
        '<span class="stat-title">' + esc(st.title) + '</span></div>' +
        '<div class="stat-sub">' + esc(st.sub) + '</div>' +
        '<div class="stat-bar"><div id="statB' + i + '"></div></div></div>';
    }).join('');
  }
  function runStats() {
    if (state.statsRun) return;
    state.statsRun = true;
    var t0 = performance.now(), dur = 1500;
    function step() {
      var k = Math.min(1, (performance.now() - t0) / dur);
      var e = 1 - Math.pow(1 - k, 3);
      STAT_CARDS.forEach(function (st, i) {
        var v = $('#statV' + i), b = $('#statB' + i);
        if (v) v.textContent = Math.round(st.target * e);
        if (b) b.style.width = Math.round(e * 100) + '%';
      });
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function maybeStats() {
    var el = $('[data-stats]');
    if (el && state.page === 'home' && inView(el)) runStats();
  }

  /* ---------- typing ---------- */
  function startTyping() {
    var phrases = ['AI Automation Architect', 'Agentic AI Systems Builder', 'n8n Workflow Engineer'];
    var el = $('#typed'), pi = 0, ci = 0, deleting = false;
    function tick() {
      var p = phrases[pi];
      if (!deleting) {
        ci++;
        el.textContent = p.slice(0, ci);
        if (ci === p.length) { deleting = true; setTimeout(tick, 2100); return; }
        setTimeout(tick, 58);
      } else {
        ci--;
        el.textContent = p.slice(0, ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 320); return; }
        setTimeout(tick, 30);
      }
    }
    setTimeout(tick, 800);
  }

  /* ---------- clock & live log ---------- */
  function pad(n) { return String(n).padStart(2, '0'); }
  function tickClock() {
    var d = new Date();
    $('#clock').textContent = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  }

  var logLines = [], logIdx = 0;
  function pushLog(seed) {
    var ev = LOG_EVENTS[logIdx % LOG_EVENTS.length];
    logIdx++;
    var d = new Date(Date.now() - (seed ? Math.floor(Math.random() * 40000) : 0));
    logLines.push({ ts: pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()), ev: ev });
    logLines = logLines.slice(-5);
    var box = $('#logLines');
    if (box) {
      box.innerHTML = logLines.map(function (l) {
        return '<div class="log-line"><span class="ts">' + l.ts + '</span>' +
          '<span class="tag" style="color:' + l.ev.color + '">' + esc(l.ev.tag) + '</span>' +
          '<span class="txt">' + esc(l.ev.text) + '</span></div>';
      }).join('');
    }
  }

  /* ---------- renderers ---------- */
  function projectCardHTML(p, idx, reveal) {
    return '<article class="card proj-card tilt" data-project="' + idx + '"' + (reveal ? ' data-reveal' : '') + ' tabindex="0" role="button">' +
      '<i class="cor tl"></i><i class="cor br"></i>' +
      '<div class="card-top"><span class="cat-badge">' + esc(p.cat) + '</span><span class="sys-num">' + sysNum(idx) + '</span></div>' +
      '<h3>' + esc(p.title) + '</h3>' +
      '<p class="card-desc">' + esc(p.desc) + '</p>' +
      '<div class="tool-row">' + p.tools.map(function (t) { return '<span class="tool-badge">' + esc(t) + '</span>'; }).join('') + '</div>' +
      '</article>';
  }

  function renderFeatured() {
    $('#featured').innerHTML = FEATURED_TITLES.map(function (t) {
      var idx = PROJECTS.findIndex(function (p) { return p.title === t; });
      return projectCardHTML(PROJECTS[idx], idx, true);
    }).join('');
  }

  function renderChips() {
    $('#chips').innerHTML = CATS.map(function (c) {
      return '<button class="chip' + (state.filter === c ? ' active' : '') + '" data-filter="' + esc(c) + '">' + esc(c) + '</button>';
    }).join('');
  }

  function renderProjects() {
    var html = '';
    PROJECTS.forEach(function (p, i) {
      if (state.filter === 'All' || p.cat === state.filter) html += projectCardHTML(p, i, false);
    });
    $('#projectGrid').innerHTML = html;
  }

  function renderMarquee() {
    var items = TOOLS.concat(TOOLS).map(function (t) {
      return '<span class="marquee-item"><span class="d">&#9671;</span>' + esc(t) + '</span>';
    }).join('');
    $('#marqueeTrack').innerHTML = items;
  }

  function renderAbout() {
    $('#aboutStats').innerHTML = ABOUT_STATS.map(function (st) {
      return '<div class="about-stat"><div class="v">' + esc(st.value) + '</div><div class="t">' + esc(st.title) + '</div></div>';
    }).join('');
    $('#skillGrid').innerHTML = SKILL_GROUPS.map(function (g) {
      return '<div class="skill-card" data-reveal><div class="t"><span class="d">&#9670;</span>' + esc(g.title) + '</div>' +
        '<div class="skill-items">' + g.items.map(function (it) { return '<span class="skill-item">' + esc(it) + '</span>'; }).join('') + '</div></div>';
    }).join('');
  }

  function renderTreks() {
    $('#trekGrid').innerHTML = TREKS.map(function (tk, i) {
      return '<div class="trek-card" data-trek="' + i + '" data-reveal tabindex="0" role="button">' +
        '<div class="trek-cover"><img src="' + esc(tk.cover || tk.photos[0]) + '" alt="' + esc(tk.name) + '" loading="lazy"></div>' +
        '<div class="trek-body"><div class="trek-head"><h3>' + esc(tk.name) + '</h3><span class="trek-alt">' + esc(tk.alt) + '</span></div>' +
        '<div class="trek-loc">&#9906; ' + esc(tk.location) + '</div>' +
        '<p class="trek-vibe">' + esc(tk.vibe) + '</p>' +
        '<div class="trek-open">OPEN GALLERY &#8594;</div></div></div>';
    }).join('');
  }

  var ICONS = {
    email: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg>',
    phone: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.6 2.81.72A2 2 0 0 1 22 16.92z"></path></svg>',
    linkedin: '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path></svg>'
  };

  function renderContacts() {
    $('#contactGrid').innerHTML = CONTACTS.map(function (c) {
      return '<div class="contact-card"><i class="cor tl"></i><i class="cor br"></i>' +
        '<div class="contact-head"><span class="contact-icon">' + ICONS[c.key] + '</span>' +
        '<div class="contact-label">' + esc(c.label) + '</div></div>' +
        '<div class="contact-value">' + esc(c.display) + '</div>' +
        '<button class="copy-btn" data-copy="' + esc(c.key) + '">COPY</button></div>';
    }).join('');
  }

  /* ---------- copy to clipboard ---------- */
  var copyTimer = null;
  function copyContact(key, btn) {
    var c = CONTACTS.find(function (x) { return x.key === key; });
    if (!c) return;
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = c.copyValue;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(c.copyValue).catch(fallback);
    else fallback();
    $$('.copy-btn').forEach(function (b) { b.classList.remove('copied'); b.textContent = 'COPY'; });
    if (btn) { btn.classList.add('copied'); btn.textContent = 'COPIED ✓'; }
    if (copyTimer) clearTimeout(copyTimer);
    copyTimer = setTimeout(function () {
      $$('.copy-btn').forEach(function (b) { b.classList.remove('copied'); b.textContent = 'COPY'; });
    }, 1800);
  }

  /* ---------- modals ---------- */
  function lockScroll() {
    var locked = !$('#projectModal').hidden || !$('#trekModal').hidden || !$('#lightbox').hidden ||
      !$('#cmdModal').hidden || !$('#boot').hidden || state.menuOpen;
    document.body.style.overflow = locked ? 'hidden' : '';
  }

  function openProject(idx) {
    var p = PROJECTS[idx];
    $('#opNum').textContent = sysNum(idx);
    $('#opCat').textContent = p.cat;
    $('#opTitle').textContent = p.title;
    $('#opTools').innerHTML = p.tools.map(function (t) { return '<span class="tool-badge">' + esc(t) + '</span>'; }).join('');
    $('#opProblem').textContent = p.problem;
    $('#opSolution').textContent = p.solution;
    $('#projectModal').hidden = false;
    lockScroll();
  }

  function openTrek(idx) {
    var tk = TREKS[idx];
    state.openTrek = tk;
    $('#tkLocation').textContent = tk.location;
    $('#tkName').textContent = tk.name;
    $('#tkDesc').textContent = tk.desc;
    $('#tkPhotos').innerHTML = tk.photos.map(function (src, i) {
      return '<img src="' + esc(src) + '" alt="' + esc(tk.name) + ' photo ' + (i + 1) + '" data-photo="' + i + '" loading="lazy">';
    }).join('');
    $('#trekModal').hidden = false;
    lockScroll();
  }

  function openLightbox(i) {
    if (!state.openTrek) return;
    state.lightbox = i;
    $('#lbImg').src = state.openTrek.photos[i];
    $('#lbCount').textContent = 'IMG ' + (i + 1) + ' / ' + state.openTrek.photos.length;
    $('#lightbox').hidden = false;
    lockScroll();
  }
  function lbStep(dir) {
    if (!state.openTrek || state.lightbox < 0) return;
    var n = state.openTrek.photos.length;
    openLightbox((state.lightbox + dir + n) % n);
  }
  function closeLightbox() { state.lightbox = -1; $('#lightbox').hidden = true; lockScroll(); }

  function closeAllOverlays() {
    $('#projectModal').hidden = true;
    $('#trekModal').hidden = true;
    $('#lightbox').hidden = true;
    $('#cmdModal').hidden = true;
    state.openTrek = null;
    state.lightbox = -1;
    lockScroll();
  }

  /* ---------- command palette ---------- */
  function cmdList() {
    var q = ($('#cmdInput').value || '').toLowerCase();
    var all = [
      { label: 'go: home', hint: 'NAV', action: function () { go('home'); } },
      { label: 'go: projects — 14 systems', hint: 'NAV', action: function () { go('projects'); } },
      { label: 'go: about — system specs', hint: 'NAV', action: function () { go('about'); } },
      { label: 'go: treks — off-grid mode', hint: 'NAV', action: function () { go('treks'); } },
      { label: 'go: contact — open channel', hint: 'NAV', action: function () { go('contact'); } },
      { label: 'toggle: light / dark theme', hint: 'SYS', action: function () { toggleTheme(); closeCmd(); } },
      { label: 'copy: email — doshidev58@gmail.com', hint: 'ACTION', action: function () { copyContact('email', null); closeCmd(); } },
      { label: 'copy: phone — +91 96382 22009', hint: 'ACTION', action: function () { copyContact('phone', null); closeCmd(); } },
      { label: 'open: linkedin profile', hint: 'LINK', action: function () { window.open('https://www.linkedin.com/in/dev-doshi-1ba604247/', '_blank'); closeCmd(); } },
      { label: 'filter: sales & outreach systems', hint: 'FILTER', action: function () { state.filter = 'Sales & Outreach'; renderChips(); renderProjects(); go('projects'); } },
      { label: 'filter: content & marketing systems', hint: 'FILTER', action: function () { state.filter = 'Content & Marketing'; renderChips(); renderProjects(); go('projects'); } },
      { label: 'replay: boot sequence', hint: 'SYS', action: function () { try { sessionStorage.removeItem('doshi-booted'); } catch (e) {} closeCmd(); runBoot(); } }
    ];
    if (!q) return all;
    return all.filter(function (c) { return c.label.toLowerCase().indexOf(q) !== -1; });
  }
  var cmdActions = [];
  function renderCmd() {
    var list = cmdList();
    cmdActions = list.map(function (c) { return c.action; });
    $('#cmdResults').innerHTML = list.map(function (c, i) {
      return '<button class="cmd-item' + (i === 0 ? ' first' : '') + '" data-cmd="' + i + '">' +
        '<span>' + esc(c.label) + '</span><span class="hint">' + esc(c.hint) + '</span></button>';
    }).join('');
  }
  function openCmd() {
    $('#cmdInput').value = '';
    renderCmd();
    $('#cmdModal').hidden = false;
    lockScroll();
    requestAnimationFrame(function () { $('#cmdInput').focus(); });
  }
  function closeCmd() { $('#cmdModal').hidden = true; lockScroll(); }

  /* ---------- boot sequence ---------- */
  var bootTimer = null, booting = false;
  function runBoot() {
    booting = true;
    $('#boot').hidden = false;
    $('#bootLines').innerHTML = '';
    $('#bootFill').style.width = '0%';
    $('#bootPct').textContent = '0%';
    lockScroll();
    var i = 0;
    function add() {
      if (!booting) return;
      i++;
      $('#bootLines').innerHTML = BOOT_LINES.slice(0, i).map(function (t, idx) {
        var ok = idx > 0 && idx < BOOT_LINES.length - 2 && idx < i - 1 ? ' <span class="okk">OK</span>' : '';
        return '<div class="boot-line"><span class="gt">&gt;</span> ' + esc(t) + ok + '</div>';
      }).join('');
      var pct = Math.round((i / BOOT_LINES.length) * 100);
      $('#bootFill').style.width = pct + '%';
      $('#bootPct').textContent = pct + '%';
      if (i < BOOT_LINES.length) bootTimer = setTimeout(add, 200);
      else bootTimer = setTimeout(finishBoot, 520);
    }
    add();
  }
  function finishBoot() {
    booting = false;
    if (bootTimer) clearTimeout(bootTimer);
    try { sessionStorage.setItem('doshi-booted', '1'); } catch (e) {}
    $('#boot').hidden = true;
    lockScroll();
    requestAnimationFrame(function () { scanReveals(); revealInView(); });
  }

  /* ---------- particle field ---------- */
  function setupField() {
    var c = $('#field');
    var ctx = c.getContext('2d');
    function size() { c.width = window.innerWidth; c.height = window.innerHeight; }
    size();
    window.addEventListener('resize', size);
    var N = Math.min(85, Math.max(36, Math.floor(window.innerWidth / 20)));
    var pts = [];
    for (var i = 0; i < N; i++) {
      pts.push({
        x: Math.random() * c.width, y: Math.random() * c.height,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3
      });
    }
    var DIST = 120, MDIST = 170;
    function draw() {
      var W = c.width, H = c.height;
      ctx.clearRect(0, 0, W, H);
      var m = mouse;
      pts.forEach(function (p) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        var dx = m.x - p.x, dy = m.y - p.y;
        var md = Math.sqrt(dx * dx + dy * dy);
        if (md < MDIST && md > 0.001) { p.x += (dx / md) * 0.35; p.y += (dy / md) * 0.35; }
      });
      ctx.lineWidth = 1;
      for (var i = 0; i < pts.length; i++) {
        for (var j = i + 1; j < pts.length; j++) {
          var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < DIST) {
            ctx.globalAlpha = (1 - d / DIST) * 0.14;
            ctx.strokeStyle = fieldColors.line;
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
        var mdx = m.x - pts[i].x, mdy = m.y - pts[i].y;
        var mdd = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdd < MDIST) {
          ctx.globalAlpha = (1 - mdd / MDIST) * 0.3;
          ctx.strokeStyle = fieldColors.line;
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(m.x, m.y); ctx.stroke();
        }
      }
      ctx.fillStyle = fieldColors.dot;
      pts.forEach(function (p) {
        ctx.globalAlpha = 0.45;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2); ctx.fill();
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  /* ---------- custom cursor ---------- */
  function setupCursor() {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    var dot = $('#cursorDot'), ring = $('#cursorRing');
    document.body.classList.add('has-cursor');
    var mx = -100, my = -100, rx = -100, ry = -100, shown = false, hot = false;
    window.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      mouse.x = mx; mouse.y = my;
      if (!shown) { shown = true; dot.style.opacity = '1'; ring.style.opacity = '0.65'; }
      var t = e.target;
      hot = !!(t && t.closest && t.closest('button, a, input, textarea, [role="button"]'));
    });
    function step() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) scale(' + (hot ? 1.7 : 1) + ')';
      ring.style.borderColor = hot ? 'var(--success)' : 'var(--accent)';
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- card tilt ---------- */
  function setupTilt() {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    document.addEventListener('mousemove', function (e) {
      var el = e.target.closest && e.target.closest('.tilt');
      if (!el) return;
      var r = el.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = 'perspective(900px) rotateX(' + (-y * 5).toFixed(2) + 'deg) rotateY(' + (x * 7).toFixed(2) + 'deg) translateY(-3px)';
      el.style.borderColor = 'rgba(0, 229, 255, 0.45)';
    });
    document.addEventListener('mouseout', function (e) {
      var el = e.target.closest && e.target.closest('.tilt');
      if (!el || (e.relatedTarget && el.contains(e.relatedTarget))) return;
      el.style.transform = '';
      el.style.borderColor = '';
    });
  }

  /* ---------- contact form ----------
     Delivered to doshidev58@gmail.com via FormSubmit.co (free relay,
     no backend needed). The very first submission emails an activation
     link to that address — click it once and the form is live. */
  var FORM_ENDPOINT = 'https://formsubmit.co/ajax/doshidev58@gmail.com';

  function setupForm() {
    var btn = $('#fSubmit');
    var fields = [$('#fName'), $('#fEmail'), $('#fMsg')];
    var err = $('#formErr');

    function showSent() {
      $('#formIdle').hidden = true;
      $('#formSent').hidden = false;
      btn.disabled = false;
      btn.innerHTML = 'TRANSMIT →';
      setTimeout(function () {
        fields.forEach(function (el) { el.value = ''; });
        $('#formSent').hidden = true;
        $('#formIdle').hidden = false;
      }, 4500);
    }

    btn.addEventListener('click', function () {
      fields.forEach(function (el) { el.classList.remove('field-error'); });
      err.hidden = true;

      var name = $('#fName').value.trim();
      var email = $('#fEmail').value.trim();
      var msg = $('#fMsg').value.trim();
      var bad = [];
      if (!name) bad.push($('#fName'));
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) bad.push($('#fEmail'));
      if (!msg) bad.push($('#fMsg'));
      if (bad.length) {
        bad.forEach(function (el) { el.classList.add('field-error'); });
        err.textContent = '> ERROR: please fill every field (with a valid email).';
        err.hidden = false;
        return;
      }
      if ($('#fHoney').value) { showSent(); return; } // bot trap: pretend success, send nothing

      btn.disabled = true;
      btn.textContent = 'TRANSMITTING...';
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Message: msg,
          _subject: 'New portfolio inquiry — ' + name,
          _template: 'table',
          _replyto: email,
          _captcha: 'false'
        })
      }).then(function (r) {
        if (!r.ok) throw new Error('relay error ' + r.status);
        return r.json();
      }).then(function (data) {
        // FormSubmit can answer 200 while reporting failure in the body
        // (e.g. form pending activation) — only celebrate a real success.
        if (!(data && (data.success === true || data.success === 'true'))) {
          throw new Error(data && data.message ? data.message : 'relay reported failure');
        }
        showSent();
      }).catch(function () {
        btn.disabled = false;
        btn.innerHTML = 'TRANSMIT →';
        err.textContent = '> TRANSMISSION FAILED — please email me directly: doshidev58@gmail.com';
        err.hidden = false;
      });
    });
  }

  /* ---------- global events ---------- */
  function setupEvents() {
    // delegated clicks
    document.addEventListener('click', function (e) {
      var t = e.target;
      var nav = t.closest && t.closest('[data-nav]');
      if (nav) { go(nav.getAttribute('data-nav')); return; }
      var chip = t.closest && t.closest('[data-filter]');
      if (chip) {
        state.filter = chip.getAttribute('data-filter');
        renderChips(); renderProjects();
        return;
      }
      var proj = t.closest && t.closest('[data-project]');
      if (proj) { openProject(parseInt(proj.getAttribute('data-project'), 10)); return; }
      var trek = t.closest && t.closest('[data-trek]');
      if (trek) { openTrek(parseInt(trek.getAttribute('data-trek'), 10)); return; }
      var photo = t.closest && t.closest('[data-photo]');
      if (photo) { openLightbox(parseInt(photo.getAttribute('data-photo'), 10)); return; }
      var copy = t.closest && t.closest('[data-copy]');
      if (copy) { copyContact(copy.getAttribute('data-copy'), copy); return; }
      var cmd = t.closest && t.closest('[data-cmd]');
      if (cmd) { cmdActions[parseInt(cmd.getAttribute('data-cmd'), 10)](); return; }
    });

    // keyboard activation for card "buttons"
    document.addEventListener('keydown', function (e) {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('[role="button"]')) {
        e.preventDefault();
        e.target.click();
      }
    });

    // overlay backdrop + close buttons
    $('#projectModal').addEventListener('click', function (e) {
      if (e.target === this || e.target.closest('[data-close]')) { this.hidden = true; lockScroll(); }
    });
    $('#trekModal').addEventListener('click', function (e) {
      if (e.target === this || e.target.closest('[data-close]')) {
        this.hidden = true; state.openTrek = null; state.lightbox = -1; lockScroll();
      }
    });
    $('#lightbox').addEventListener('click', function (e) {
      if (e.target === this || e.target.closest('[data-close]')) closeLightbox();
    });
    $('#lbPrev').addEventListener('click', function (e) { e.stopPropagation(); lbStep(-1); });
    $('#lbNext').addEventListener('click', function (e) { e.stopPropagation(); lbStep(1); });
    $('#cmdModal').addEventListener('click', function (e) { if (e.target === this) closeCmd(); });
    $('#cmdBtn').addEventListener('click', openCmd);
    $('#cmdInput').addEventListener('input', renderCmd);
    $('#boot').addEventListener('click', finishBoot);

    $('#themeToggle').addEventListener('click', toggleTheme);
    $('#themeToggleM').addEventListener('click', toggleTheme);
    $('#hamburger').addEventListener('click', function () { state.menuOpen ? closeMenu() : openMenu(); });

    // global keys
    window.addEventListener('keydown', function (e) {
      var typing = e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable);
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
        e.preventDefault();
        if ($('#cmdModal').hidden) openCmd(); else closeCmd();
        return;
      }
      if (booting && (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape')) { finishBoot(); return; }
      if (e.key === 'Escape') {
        if (!$('#cmdModal').hidden) closeCmd();
        else if (!$('#lightbox').hidden) closeLightbox();
        else if (!$('#trekModal').hidden) { $('#trekModal').hidden = true; state.openTrek = null; lockScroll(); }
        else if (!$('#projectModal').hidden) { $('#projectModal').hidden = true; lockScroll(); }
        else if (state.menuOpen) closeMenu();
      }
      if (!$('#cmdModal').hidden && e.key === 'Enter') {
        if (cmdActions.length) cmdActions[0]();
        return;
      }
      if (!$('#lightbox').hidden) {
        if (e.key === 'ArrowRight') lbStep(1);
        if (e.key === 'ArrowLeft') lbStep(-1);
      }
    });

    // reveal fallbacks
    var scrollPend = false;
    window.addEventListener('scroll', function () {
      if (scrollPend) return;
      scrollPend = true;
      requestAnimationFrame(function () { scrollPend = false; revealInView(); });
    }, { passive: true });
    document.addEventListener('visibilitychange', function () { scanReveals(); revealInView(); });
    window.addEventListener('resize', function () { revealInView(); });
  }

  /* ---------- init ---------- */
  function init() {
    var theme = 'dark';
    try { if (localStorage.getItem('doshi-theme') === 'light') theme = 'light'; } catch (e) {}
    applyTheme(theme);

    renderNav();
    renderStats();
    renderFeatured();
    renderChips();
    renderProjects();
    renderMarquee();
    renderAbout();
    renderTreks();
    renderContacts();
    setupEvents();
    setupForm();
    setupField();
    setupCursor();
    setupTilt();
    startTyping();

    tickClock();
    setInterval(tickClock, 1000);
    for (var i = 0; i < 5; i++) pushLog(true);
    setInterval(pushLog, 2300);

    go('home');

    var seen = false;
    try { seen = sessionStorage.getItem('doshi-booted') === '1'; } catch (e) {}
    if (!seen) runBoot();
    else { $('#boot').hidden = true; }

    // safety: reveal anything in view shortly after load
    setTimeout(revealInView, 300);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
