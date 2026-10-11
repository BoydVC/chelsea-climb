/* Chelsea Climb — offline EPL table / form theater (EXAMPLE DATA ONLY) */
(function () {
  "use strict";

  const DEMO = true;
  const SEASON_LABEL = "EXAMPLE 2025/26 · MW12";

  /** EXAMPLE 20-team table — real club names as public labels; all stats fictional */
  const TABLE = [
    { club: "Arsenal",           p:12, w:9, d:2, l:1, gf:28, ga:10, form:"WWWDW" },
    { club: "Liverpool",         p:12, w:8, d:3, l:1, gf:26, ga:12, form:"WDWWW" },
    { club: "Man City",          p:12, w:8, d:2, l:2, gf:27, ga:14, form:"WWLWW" },
    { club: "Chelsea",           p:12, w:7, d:3, l:2, gf:24, ga:13, form:"WWDWL", chelsea:true },
    { club: "Tottenham",         p:12, w:6, d:3, l:3, gf:22, ga:16, form:"DWWLW" },
    { club: "Newcastle",         p:12, w:6, d:2, l:4, gf:20, ga:15, form:"WLWDW" },
    { club: "Aston Villa",       p:12, w:5, d:4, l:3, gf:19, ga:17, form:"DDWWL" },
    { club: "Brighton",          p:12, w:5, d:3, l:4, gf:18, ga:16, form:"WDLWW" },
    { club: "Man United",        p:12, w:5, d:2, l:5, gf:17, ga:18, form:"LWWDL" },
    { club: "West Ham",          p:12, w:4, d:4, l:4, gf:16, ga:17, form:"DWLDW" },
    { club: "Fulham",            p:12, w:4, d:3, l:5, gf:15, ga:18, form:"LDLWW" },
    { club: "Crystal Palace",    p:12, w:3, d:5, l:4, gf:14, ga:16, form:"DDWLD" },
    { club: "Bournemouth",       p:12, w:3, d:4, l:5, gf:14, ga:19, form:"LDWDL" },
    { club: "Brentford",         p:12, w:3, d:3, l:6, gf:15, ga:21, form:"WLLDD" },
    { club: "Wolves",            p:12, w:3, d:2, l:7, gf:12, ga:22, form:"LLWDL" },
    { club: "Everton",           p:12, w:2, d:5, l:5, gf:11, ga:18, form:"DDLWL" },
    { club: "Nottingham Forest", p:12, w:2, d:4, l:6, gf:12, ga:20, form:"LDDLL" },
    { club: "Leicester",         p:12, w:2, d:3, l:7, gf:13, ga:24, form:"LLDWL" },
    { club: "Ipswich",           p:12, w:1, d:4, l:7, gf:10, ga:23, form:"DLLLD" },
    { club: "Southampton",       p:12, w:1, d:2, l:9, gf: 9, ga:26, form:"LLLLD" },
  ].map((r) => {
    r.gd = r.gf - r.ga;
    r.pts = r.w * 3 + r.d;
    return r;
  });

  /** Climb path: fictional positions Chelsea held week-by-week (EXAMPLE) */
  const CLIMB_PATH = [12, 11, 10, 9, 8, 7, 6, 5, 5, 4, 4, 4];

  /** Last 8 EXAMPLE results — opponents as labels only */
  const FORM = [
    { opp: "Example Utd",   ha: "H", score: "2–1", result: "W", mw: 5, note: "Late winner · EXAMPLE" },
    { opp: "Bridge City",   ha: "A", score: "1–1", result: "D", mw: 6, note: "Shared points · EXAMPLE" },
    { opp: "North End FC",  ha: "H", score: "3–0", result: "W", mw: 7, note: "Dominant display · EXAMPLE" },
    { opp: "River Plate XI",ha: "A", score: "0–2", result: "L", mw: 8, note: "Tough away day · EXAMPLE" },
    { opp: "Coast Town",    ha: "H", score: "2–0", result: "W", mw: 9, note: "Clean sheet · EXAMPLE" },
    { opp: "Mill Town",     ha: "A", score: "2–2", result: "D", mw: 10, note: "Comeback draw · EXAMPLE" },
    { opp: "Park Rangers",  ha: "H", score: "1–0", result: "W", mw: 11, note: "Narrow win · EXAMPLE" },
    { opp: "Harbor FC",     ha: "A", score: "3–1", result: "W", mw: 12, note: "Climb continues · EXAMPLE" },
  ];

  /** EXAMPLE XI — jersey numbers + role labels only (no real player names) */
  const XI = [
    { num: 1,  role: "GK",  label: "Blue #1",  x: 210, y: 560 },
    { num: 2,  role: "RB",  label: "Blue #2",  x: 340, y: 460 },
    { num: 6,  role: "CB",  label: "Blue #6",  x: 260, y: 480 },
    { num: 4,  role: "CB",  label: "Blue #4",  x: 160, y: 480 },
    { num: 3,  role: "LB",  label: "Blue #3",  x: 80,  y: 460 },
    { num: 8,  role: "CDM", label: "Blue #8",  x: 260, y: 380 },
    { num: 5,  role: "CDM", label: "Blue #5",  x: 160, y: 380 },
    { num: 7,  role: "RW",  label: "Blue #7",  x: 340, y: 260 },
    { num: 10, role: "CAM", label: "Blue #10", x: 210, y: 280 },
    { num: 11, role: "LW",  label: "Blue #11", x: 80,  y: 260 },
    { num: 9,  role: "CF",  label: "Blue #9",  x: 210, y: 160 },
  ];

  /** EXAMPLE season milestones + cumulative points for sparkline */
  const MILESTONES = [
    { mw: 1,  title: "Opening night",   text: "EXAMPLE: Blues open with a home win. Climb meter starts at mid-table.", pts: 3 },
    { mw: 3,  title: "First away scalp", text: "EXAMPLE: Narrow victory on the road. Form strip starts to glow.", pts: 7 },
    { mw: 5,  title: "Derby theater",   text: "EXAMPLE: London derby draw keeps the climb honest.", pts: 11 },
    { mw: 7,  title: "Three on the bounce", text: "EXAMPLE: Winning run pushes Chelsea into the top half.", pts: 17 },
    { mw: 9,  title: "Bridge fortress", text: "EXAMPLE: Consecutive home clean sheets — fictional narrative.", pts: 21 },
    { mw: 12, title: "Top-four touch",  text: "EXAMPLE: Reach 4th on the DEMO table. Replay climb to relive it.", pts: 24 },
  ];

  const PTS_SERIES = [0, 3, 4, 7, 8, 11, 12, 15, 17, 20, 21, 22, 24];

  /* ---------- helpers ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function ordinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  function posClass(i) {
    if (i < 4) return "top4";
    if (i < 6) return "euro";
    if (i >= 17) return "releg";
    return "";
  }

  function formPillsHTML(str, mini) {
    return str.split("").map((c) =>
      `<span class="fpill ${c}${mini ? " mini" : ""}">${c}</span>`
    ).join("");
  }

  /* ---------- background canvas (Bridge night sky) ---------- */
  function initBg() {
    const c = $("#bg");
    if (!c) return;
    const ctx = c.getContext("2d");
    let w, h, stars = [], t = 0;

    function resize() {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
      stars = Array.from({ length: Math.min(120, Math.floor(w * h / 12000)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h * 0.7,
        r: Math.random() * 1.6 + 0.3,
        a: Math.random(),
        s: Math.random() * 0.02 + 0.005,
      }));
    }

    function frame() {
      t += 1;
      ctx.clearRect(0, 0, w, h);
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#031a3a");
      g.addColorStop(0.45, "#022a5a");
      g.addColorStop(1, "#011220");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // soft blue bloom
      const bloom = ctx.createRadialGradient(w * 0.5, h * 0.15, 0, w * 0.5, h * 0.15, w * 0.45);
      bloom.addColorStop(0, "rgba(59,158,255,0.18)");
      bloom.addColorStop(1, "transparent");
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, w, h);

      stars.forEach((st) => {
        st.a += st.s;
        const alpha = 0.3 + Math.sin(st.a) * 0.4;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,230,255,${alpha})`;
        ctx.fill();
      });

      // distant "stands" silhouette bands
      ctx.fillStyle = "rgba(0,20,50,0.55)";
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 40) {
        const y = h - 40 - Math.sin(x * 0.01 + t * 0.008) * 8 - Math.cos(x * 0.02) * 12;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.fill();

      requestAnimationFrame(frame);
    }
    window.addEventListener("resize", resize);
    resize();
    frame();
  }

  /* ---------- tabs ---------- */
  function initTabs() {
    const tabs = $$(".tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const id = tab.dataset.tab;
        tabs.forEach((t) => {
          t.classList.toggle("on", t === tab);
          t.setAttribute("aria-selected", t === tab ? "true" : "false");
        });
        $$(".panel").forEach((p) => {
          const on = p.id === "panel-" + id;
          p.classList.toggle("on", on);
          if (on) p.removeAttribute("hidden");
          else p.setAttribute("hidden", "");
        });
        if (id === "matchday") animateXI(false);
        if (id === "arc") drawSparkline(true);
        if (location.hash !== "#" + id) history.replaceState(null, "", "#" + id);
      });
    });
    const hash = (location.hash || "#home").slice(1);
    const start = tabs.find((t) => t.dataset.tab === hash) || tabs[0];
    if (start) start.click();
  }

  /* ---------- home ---------- */
  function initHome() {
    const chel = TABLE.find((r) => r.chelsea);
    const pos = TABLE.indexOf(chel) + 1;
    $("#homePos").innerHTML = pos + `<span class="stat-suffix">${ordinal(pos).replace(String(pos), "")}</span>`;
    // fix ordinal display
    $("#homePos").innerHTML = `${pos}<span class="stat-suffix">${["th","st","nd","rd"][(pos%100-20)%10]||["th","st","nd","rd"][pos%100]||"th"}</span>`;
    $("#homePts").textContent = chel.pts;
    $("#homeFormPills").innerHTML = formPillsHTML(chel.form.slice(-5));

    const meter = $("#climbMeter");
    const pctEl = $("#meterPct");
    function runMeter() {
      meter.classList.add("shimmer");
      meter.style.width = "0%";
      pctEl.textContent = "0%";
      requestAnimationFrame(() => {
        setTimeout(() => {
          const target = 78; // fictional climb progress toward 4th
          meter.style.width = target + "%";
          meter.classList.remove("shimmer");
          let n = 0;
          const tick = setInterval(() => {
            n += 2;
            if (n >= target) { n = target; clearInterval(tick); }
            pctEl.textContent = n + "%";
          }, 30);
        }, 80);
      });
    }
    runMeter();
    $("#btnReplayHome").addEventListener("click", runMeter);
  }

  /* ---------- table ---------- */
  let climbTimer = null;

  function renderTable(rows) {
    const body = $("#tableBody");
    body.innerHTML = rows.map((r, i) => {
      const pc = posClass(i);
      const chel = r.chelsea ? " chelsea" : "";
      return `<tr class="${chel.trim()}" data-idx="${i}" data-club="${r.club}">
        <td class="pos"><span class="pos-badge ${pc}">${i + 1}</span></td>
        <td class="club"><div class="club-cell">${r.chelsea ? '<span class="club-dot"></span>' : ""}<span>${r.club}${r.chelsea ? " ★" : ""}</span></div></td>
        <td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td>
        <td>${r.gf}</td><td>${r.ga}</td><td>${r.gd > 0 ? "+" + r.gd : r.gd}</td>
        <td class="pts">${r.pts}</td>
        <td class="form-col"><div class="form-mini">${formPillsHTML(r.form.slice(-5), true)}</div></td>
      </tr>`;
    }).join("");

    $$("#tableBody tr").forEach((tr) => {
      tr.addEventListener("click", () => {
        $$("#tableBody tr").forEach((x) => x.classList.remove("highlight"));
        tr.classList.add("highlight");
      });
    });
  }

  function sortedByPts(list) {
    return list.slice().sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
  }

  function initTable() {
    renderTable(sortedByPts(TABLE));

    $("#btnResetHighlight").addEventListener("click", () => {
      $$("#tableBody tr").forEach((x) => x.classList.remove("highlight"));
    });

    $("#btnReplayClimb").addEventListener("click", replayClimb);
  }

  /**
   * Animate Chelsea climbing from lower positions through the EXAMPLE path.
   * Rebuilds a fictional mid-season table snapshot each step.
   */
  function replayClimb() {
    if (climbTimer) { clearInterval(climbTimer); climbTimer = null; }
    const body = $("#tableBody");
    let step = 0;

    // Build fictional historical snapshots: Chelsea starts lower, others shuffle lightly
    function snapshotAt(pathIdx) {
      const targetPos = CLIMB_PATH[pathIdx]; // 1-based position we want Chelsea at
      const others = TABLE.filter((r) => !r.chelsea).map((r) => Object.assign({}, r));
      const chel = Object.assign({}, TABLE.find((r) => r.chelsea));
      // Scale chelsea pts roughly by climb progress
      const progress = pathIdx / (CLIMB_PATH.length - 1);
      chel.pts = Math.round(8 + progress * (24 - 8));
      chel.w = Math.round(2 + progress * 5);
      chel.d = 3;
      chel.l = Math.max(0, 12 - chel.w - chel.d);
      chel.gf = Math.round(10 + progress * 14);
      chel.ga = Math.round(18 - progress * 5);
      chel.gd = chel.gf - chel.ga;
      chel.p = 12;
      chel.chelsea = true;
      chel.form = "LLDWWWDWLWWD".slice(pathIdx, pathIdx + 5) || "WWDWL";

      // Nudge others so Chelsea lands near targetPos
      const combined = sortedByPts(others.concat([chel]));
      const curIdx = combined.findIndex((r) => r.chelsea);
      if (curIdx !== targetPos - 1) {
        combined.splice(curIdx, 1);
        combined.splice(Math.min(targetPos - 1, combined.length), 0, chel);
        // Adjust pts display to look consistent
        combined.forEach((r, i) => {
          if (!r.chelsea) {
            // leave as-is for visual; ordering forced for theater
          }
        });
      }
      // Force order: place chelsea at target, keep relative order of others
      const forced = [];
      const pool = others.slice().sort((a, b) => b.pts - a.pts);
      for (let i = 0; i < 20; i++) {
        if (i === targetPos - 1) forced.push(chel);
        else forced.push(pool.shift());
      }
      return forced;
    }

    function tick() {
      if (step >= CLIMB_PATH.length) {
        clearInterval(climbTimer);
        climbTimer = null;
        renderTable(sortedByPts(TABLE));
        const row = $("#tableBody tr.chelsea");
        if (row) {
          row.classList.add("highlight", "climbing", "pulse-glow");
          setTimeout(() => row.classList.remove("climbing"), 800);
          setTimeout(() => row.classList.remove("pulse-glow"), 3000);
          row.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        return;
      }
      const snap = snapshotAt(step);
      renderTable(snap);
      const row = $("#tableBody tr.chelsea");
      if (row) {
        row.classList.add("climbing", "climbing-move", "highlight");
        setTimeout(() => row.classList.remove("climbing-move"), 500);
      }
      step++;
    }
    tick();
    climbTimer = setInterval(tick, 650);
  }

  /* ---------- form strip ---------- */
  function initForm() {
    const strip = $("#formStrip");
    const cards = $("#matchCards");
    let openIdx = -1;

    strip.innerHTML = FORM.map((m, i) => `
      <button type="button" class="form-pill-btn" data-i="${i}" role="listitem" aria-expanded="false">
        <span class="fpill ${m.result}">${m.result}</span>
        <span class="fp-opp">${m.opp}</span>
        <span class="fp-score">${m.score}</span>
      </button>
    `).join("");

    cards.innerHTML = FORM.map((m, i) => {
      const gf = parseInt(m.score.split("–")[0], 10);
      const ga = parseInt(m.score.split("–")[1], 10);
      const bar = Math.min(100, Math.round((gf / Math.max(1, gf + ga)) * 100));
      return `<div class="match-card" data-i="${i}" id="mcard-${i}">
        <div class="mc-top">
          <div>
            <div class="mw" style="color:var(--gold-lite);font-size:.72rem;font-weight:700;letter-spacing:.06em">EXAMPLE · MW${m.mw} · ${m.ha === "H" ? "Home" : "Away"}</div>
            <h3 style="margin:.2rem 0">Chelsea ${m.ha === "H" ? "vs" : "@"} ${m.opp}</h3>
          </div>
          <div class="mc-score">${m.score} <span class="fpill ${m.result}" style="display:inline-flex;vertical-align:middle;margin-left:.4rem">${m.result}</span></div>
        </div>
        <div class="mc-bar"><span data-bar="${bar}"></span></div>
        <p class="mc-meta">${m.note}</p>
      </div>`;
    }).join("");

    function openCard(i) {
      openIdx = i;
      $$(".form-pill-btn").forEach((b) => {
        const on = +b.dataset.i === i;
        b.classList.toggle("open", on);
        b.setAttribute("aria-expanded", on ? "true" : "false");
      });
      $$(".match-card").forEach((c) => {
        const on = +c.dataset.i === i;
        c.classList.toggle("open", on);
        if (on) {
          const bar = c.querySelector("[data-bar]");
          bar.style.width = "0%";
          requestAnimationFrame(() => { bar.style.width = bar.dataset.bar + "%"; });
        }
      });
    }

    $$(".form-pill-btn").forEach((b) => {
      b.addEventListener("click", () => {
        const i = +b.dataset.i;
        if (openIdx === i) {
          openIdx = -1;
          b.classList.remove("open");
          b.setAttribute("aria-expanded", "false");
          $(`#mcard-${i}`).classList.remove("open");
        } else openCard(i);
      });
    });

    // summary
    const w = FORM.filter((m) => m.result === "W").length;
    const d = FORM.filter((m) => m.result === "D").length;
    const l = FORM.filter((m) => m.result === "L").length;
    let gf = 0, ga = 0;
    FORM.forEach((m) => {
      const [a, b] = m.score.split("–").map(Number);
      if (m.ha === "H") { gf += a; ga += b; }
      else { gf += a; ga += b; } // scores already from Chelsea POV in our DEMO
    });
    $("#formW").textContent = w;
    $("#formD").textContent = d;
    $("#formL").textContent = l;
    $("#formGF").textContent = gf;
    $("#formGA").textContent = ga;

    // open last by default
    openCard(FORM.length - 1);
  }

  /* ---------- matchday XI ---------- */
  function renderXI(entering) {
    const g = $("#xiDots");
    const list = $("#xiList");
    g.innerHTML = XI.map((p, i) => `
      <g class="player-dot${entering ? " enter" : ""}" data-i="${i}" transform="translate(${p.x},${p.y})">
        <circle class="kit" r="18" cx="0" cy="0"/>
        <text y="1">${p.num}</text>
        <text class="role-label" y="28">${p.role}</text>
      </g>
    `).join("");
    list.innerHTML = XI.map((p) =>
      `<li><span class="num">${p.num}</span><span>${p.role}</span><span style="margin-left:auto;color:var(--muted);font-size:.78rem">${p.label}</span></li>`
    ).join("");
  }

  function animateXI(fromReset) {
    renderXI(true);
    const dots = $$(".player-dot");
    dots.forEach((d, i) => {
      // start off-pitch below
      d.style.opacity = "0";
      d.style.transform = "translateY(40px) scale(0.5)";
      setTimeout(() => {
        d.style.transition = "opacity .45s ease, transform .55s cubic-bezier(.22,1,.36,1)";
        d.style.opacity = "1";
        d.style.transform = "translateY(0) scale(1)";
        d.classList.remove("enter");
      }, fromReset ? 40 + i * 55 : 60 + i * 70);
    });
  }

  function initMatchday() {
    renderXI(false);
    $("#btnAnimateXI").addEventListener("click", () => animateXI(true));
    $("#btnResetXI").addEventListener("click", () => {
      renderXI(false);
    });
  }

  /* ---------- season arc / sparkline ---------- */
  function drawSparkline(animate) {
    const svg = $("#sparkline");
    const W = 640, H = 160, pad = 16;
    const series = PTS_SERIES;
    const maxP = Math.max(...series) * 1.1;
    const pts = series.map((v, i) => {
      const x = pad + (i / (series.length - 1)) * (W - pad * 2);
      const y = H - pad - (v / maxP) * (H - pad * 2);
      return [x, y, v];
    });

    const grid = $("#sparkGrid");
    grid.innerHTML = "";
    for (let g = 0; g <= 4; g++) {
      const y = pad + (g / 4) * (H - pad * 2);
      grid.innerHTML += `<line x1="${pad}" y1="${y}" x2="${W - pad}" y2="${y}" stroke="rgba(255,255,255,.08)" stroke-width="1"/>`;
    }

    const lineD = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
    const areaD = lineD + ` L${pts[pts.length - 1][0]},${H - pad} L${pts[0][0]},${H - pad} Z`;

    const line = $("#sparkLine");
    const area = $("#sparkArea");
    line.setAttribute("d", lineD);
    area.setAttribute("d", areaD);

    if (animate) {
      const len = line.getTotalLength ? line.getTotalLength() : 800;
      line.style.strokeDasharray = len;
      line.style.strokeDashoffset = len;
      line.getBoundingClientRect();
      line.style.transition = "stroke-dashoffset 1.4s ease";
      line.style.strokeDashoffset = "0";
    }

    const dots = $("#sparkDots");
    dots.innerHTML = pts.map((p, i) =>
      `<circle cx="${p[0]}" cy="${p[1]}" r="${i === pts.length - 1 ? 5 : 3.5}" fill="${i === pts.length - 1 ? "#f5d76e" : "#7ec8ff"}" stroke="#034694" stroke-width="1.5">
        <title>MW${i}: ${p[2]} pts (EXAMPLE)</title>
      </circle>`
    ).join("");

    $("#sparkPtsLabel").textContent = series[series.length - 1] + " pts · EXAMPLE";
  }

  function initArc() {
    const tl = $("#timeline");
    tl.innerHTML = MILESTONES.map((m, i) => `
      <li style="animation-delay:${i * 0.08}s">
        <div class="mw">Matchweek ${m.mw} · ${m.pts} pts</div>
        <h4>${m.title}</h4>
        <p>${m.text}</p>
      </li>
    `).join("");
    drawSparkline(false);
  }

  /* ---------- chrome ---------- */
  function initChrome() {
    $("#btnWall").addEventListener("click", () => {
      document.body.classList.toggle("wall");
    });
    $("#btnHelp").addEventListener("click", () => {
      $("#helpDlg").showModal();
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    if (!DEMO) console.warn("Chelsea Climb expects DEMO mode");
    document.title = "Chelsea Climb — " + SEASON_LABEL;
    initBg();
    initTabs();
    initHome();
    initTable();
    initForm();
    initMatchday();
    initArc();
    initChrome();

    // Auto-run home meter glow once more after paint for screenshot polish
    setTimeout(() => {
      const m = $("#climbMeter");
      if (m && parseFloat(m.style.width) < 10) {
        m.style.width = "78%";
        $("#meterPct").textContent = "78%";
      }
    }, 400);

    console.info("Chelsea Climb ready · EXAMPLE data only · port theater offline");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();

/* ---- Extra polish modules (still EXAMPLE / offline) ---- */
(function extraClimbModules() {
  "use strict";

  const STORAGE_KEY = "chelsea-climb-prefs-v1";

  function loadPrefs() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
    catch (e) { return {}; }
  }
  function savePrefs(p) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) { /* ignore */ }
  }

  /** Keyboard shortcuts: 1-5 tabs, R replay climb (on table), W wall */
  function initKeys() {
    const tabOrder = ["home", "table", "form", "matchday", "arc"];
    document.addEventListener("keydown", (ev) => {
      if (ev.target && /input|textarea|select/i.test(ev.target.tagName)) return;
      if (ev.key >= "1" && ev.key <= "5") {
        const tab = document.querySelector(`.tab[data-tab="${tabOrder[+ev.key - 1]}"]`);
        if (tab) tab.click();
      }
      if (ev.key === "r" || ev.key === "R") {
        const btn = document.getElementById("btnReplayClimb");
        const panel = document.getElementById("panel-table");
        if (btn && panel && panel.classList.contains("on")) btn.click();
      }
      if (ev.key === "w" || ev.key === "W") {
        document.getElementById("btnWall")?.click();
      }
      if (ev.key === "?" ) {
        document.getElementById("btnHelp")?.click();
      }
    });
  }

  /** Confetti-ish blue/gold particle burst when climb finishes (canvas overlay) */
  function burstClimbCelebrate() {
    const layer = document.createElement("canvas");
    layer.width = window.innerWidth;
    layer.height = window.innerHeight;
    layer.style.cssText = "position:fixed;inset:0;z-index:50;pointer-events:none;";
    document.body.appendChild(layer);
    const ctx = layer.getContext("2d");
    const colors = ["#034694", "#3b9eff", "#f5d76e", "#ffffff", "#0a6ad4"];
    const parts = Array.from({ length: 60 }, () => ({
      x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 80,
      y: window.innerHeight * 0.35,
      vx: (Math.random() - 0.5) * 10,
      vy: -Math.random() * 8 - 2,
      g: 0.18 + Math.random() * 0.1,
      r: 2 + Math.random() * 4,
      c: colors[(Math.random() * colors.length) | 0],
      life: 60 + (Math.random() * 40) | 0,
    }));
    let frame = 0;
    function tick() {
      frame++;
      ctx.clearRect(0, 0, layer.width, layer.height);
      let alive = 0;
      parts.forEach((p) => {
        if (p.life <= 0) return;
        alive++;
        p.life--;
        p.vy += p.g;
        p.x += p.vx;
        p.y += p.vy;
        ctx.globalAlpha = Math.max(0, p.life / 80);
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      if (alive > 0 && frame < 120) requestAnimationFrame(tick);
      else layer.remove();
    }
    tick();
  }

  /** Hook celebrate onto Replay climb completion via MutationObserver on chelsea row pulse */
  function watchClimbCelebrate() {
    const body = document.getElementById("tableBody");
    if (!body) return;
    const obs = new MutationObserver(() => {
      const row = body.querySelector("tr.chelsea.pulse-glow");
      if (row && !row.dataset.celebrated) {
        row.dataset.celebrated = "1";
        burstClimbCelebrate();
        setTimeout(() => { delete row.dataset.celebrated; }, 4000);
      }
    });
    obs.observe(body, { attributes: true, subtree: true, attributeFilter: ["class"] });
  }

  /** Live "EXAMPLE clock" stamp in footer */
  function initStamp() {
    const foot = document.querySelector(".foot");
    if (!foot) return;
    const el = document.createElement("span");
    el.id = "demoStamp";
    el.style.cssText = "opacity:.7;font-family:ui-monospace,monospace;font-size:.7rem";
    const prefs = loadPrefs();
    const visits = (prefs.visits || 0) + 1;
    prefs.visits = visits;
    prefs.last = new Date().toISOString();
    savePrefs(prefs);
    function paint() {
      const now = new Date();
      el.textContent = `EXAMPLE theater · visit #${visits} · ${now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })} ET`;
    }
    paint();
    setInterval(paint, 30000);
    foot.appendChild(el);
  }

  /** Soft parallax on hero crest from pointer */
  function initParallax() {
    const crest = document.querySelector(".crest-hero");
    if (!crest) return;
    document.addEventListener("pointermove", (ev) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (ev.clientX - cx) / cx;
      const dy = (ev.clientY - cy) / cy;
      crest.style.transform = `translate(${dx * 8}px, ${dy * 6 - 0}px)`;
    });
  }

  /** Announce DEMO on first open via aria-live region */
  function initA11yLive() {
    const live = document.createElement("div");
    live.setAttribute("aria-live", "polite");
    live.className = "sr-only";
    live.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)";
    document.body.appendChild(live);
    setTimeout(() => {
      live.textContent = "Chelsea Climb loaded. All standings and scores are example demo data, not live Premier League.";
    }, 600);
  }

  /** Mini standings ticker under tabs (EXAMPLE) */
  function initTicker() {
    const nav = document.querySelector(".tabs");
    if (!nav) return;
    const ticker = document.createElement("div");
    ticker.setAttribute("aria-hidden", "true");
    ticker.style.cssText = "position:relative;z-index:5;overflow:hidden;margin:0 1.2rem .4rem;border-radius:8px;background:rgba(0,0,0,.25);border:1px solid rgba(255,255,255,.08);height:28px";
    const inner = document.createElement("div");
    inner.style.cssText = "display:inline-block;white-space:nowrap;padding:.35rem 0;font-size:.72rem;font-weight:650;color:#9bb4d4;animation:tickerScroll 28s linear infinite";
    const bits = [
      "DEMO TABLE · Chelsea 4th · 24 pts",
      "EXAMPLE form WWWDL · last 8",
      "Climb path 12th → 4th · fictional",
      "Matchday theater · 4-2-3-1 · Blue #s only",
      "Stamford Bridge vibe · offline TokenMax",
      "Not live EPL · geometric crest · no APIs",
    ];
    inner.textContent = bits.concat(bits).join("   ·   ") + "   ·   ";
    ticker.appendChild(inner);
    // inject keyframes once
    if (!document.getElementById("tickerCSS")) {
      const s = document.createElement("style");
      s.id = "tickerCSS";
      s.textContent = "@keyframes tickerScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}";
      document.head.appendChild(s);
    }
    nav.after(ticker);
  }

  /** Position flash labels on pitch when animating XI */
  function enhancePitchLabels() {
    const btn = document.getElementById("btnAnimateXI");
    if (!btn) return;
    btn.addEventListener("click", () => {
      setTimeout(() => {
        const dots = document.querySelectorAll(".player-dot");
        dots.forEach((d, i) => {
          d.style.filter = "drop-shadow(0 0 8px rgba(245,215,110,.6))";
          setTimeout(() => { d.style.filter = ""; }, 900 + i * 40);
        });
      }, 100);
    });
  }

  /** Compare mode: click two clubs in table — show pts delta toast */
  let comparePick = [];
  function initCompare() {
    const body = document.getElementById("tableBody");
    if (!body) return;
    body.addEventListener("click", (ev) => {
      if (!ev.shiftKey) return;
      const tr = ev.target.closest("tr");
      if (!tr) return;
      const club = tr.dataset.club;
      const pts = tr.querySelector(".pts")?.textContent;
      comparePick.push({ club, pts });
      if (comparePick.length > 2) comparePick = comparePick.slice(-2);
      if (comparePick.length === 2) {
        const a = comparePick[0], b = comparePick[1];
        const delta = Math.abs((+a.pts) - (+b.pts));
        toast(`EXAMPLE compare: ${a.club} (${a.pts}) vs ${b.club} (${b.pts}) · Δ ${delta} pts`);
        comparePick = [];
      } else {
        toast(`EXAMPLE compare: selected ${club} — Shift+click another club`);
      }
    });
  }

  function toast(msg) {
    let t = document.getElementById("climbToast");
    if (!t) {
      t = document.createElement("div");
      t.id = "climbToast";
      t.style.cssText = "position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);z-index:60;background:#034694;color:#fff;padding:.7rem 1.2rem;border-radius:12px;font-size:.85rem;font-weight:650;box-shadow:0 8px 30px rgba(0,0,0,.45);border:1px solid rgba(245,215,110,.4);opacity:0;transition:opacity .25s,transform .25s;max-width:90vw;text-align:center";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    requestAnimationFrame(() => {
      t.style.opacity = "1";
      t.style.transform = "translateX(-50%) translateY(0)";
    });
    clearTimeout(t._hide);
    t._hide = setTimeout(() => {
      t.style.opacity = "0";
      t.style.transform = "translateX(-50%) translateY(20px)";
    }, 3200);
  }

  /** Expose a tiny debug handle for screenshots / QA */
  window.ChelseaClimb = {
    version: "1.0.0-demo",
    season: "EXAMPLE 2025/26",
    celebrate: burstClimbCelebrate,
    toast,
    prefs: loadPrefs,
  };

  function bootExtra() {
    initKeys();
    watchClimbCelebrate();
    initStamp();
    initParallax();
    initA11yLive();
    initTicker();
    enhancePitchLabels();
    initCompare();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bootExtra);
  else bootExtra();
})();
