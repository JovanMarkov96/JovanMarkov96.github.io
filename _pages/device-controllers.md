---
title: "Lab Instrument Controllers"
permalink: /device-controllers/
author_profile: false
classes: wide
---

<!-- ============================================================= -->
<!-- Blueprint SVG sprite: one <symbol> per device class           -->
<!-- ============================================================= -->
<svg width="0" height="0" style="position:absolute;overflow:hidden" aria-hidden="true" focusable="false">
  <defs>

    <!-- Oscilloscope -->
    <symbol id="dc-icon-oscilloscope" viewBox="0 0 240 140">
      <rect x="10" y="14" width="220" height="112" rx="9"/>
      <rect x="24" y="30" width="132" height="80" rx="4"/>
      <line x1="58" y1="30" x2="58" y2="110" opacity="0.4"/>
      <line x1="90" y1="30" x2="90" y2="110" opacity="0.4"/>
      <line x1="122" y1="30" x2="122" y2="110" opacity="0.4"/>
      <line x1="24" y1="50" x2="156" y2="50" opacity="0.4"/>
      <line x1="24" y1="70" x2="156" y2="70" opacity="0.4"/>
      <line x1="24" y1="90" x2="156" y2="90" opacity="0.4"/>
      <path d="M24 70 C 40 38, 56 102, 72 70 S 104 38, 120 70 S 148 102, 156 70" stroke-width="2.4"/>
      <circle cx="190" cy="52" r="17"/>
      <line x1="190" y1="52" x2="190" y2="38"/>
      <circle cx="190" cy="96" r="11"/>
      <rect x="208" y="86" width="14" height="8" rx="2"/>
      <rect x="208" y="100" width="14" height="8" rx="2"/>
    </symbol>

    <!-- Arbitrary Waveform Generator -->
    <symbol id="dc-icon-awg" viewBox="0 0 240 140">
      <rect x="10" y="14" width="220" height="112" rx="9"/>
      <rect x="24" y="28" width="124" height="62" rx="4"/>
      <path d="M30 78 H50 V44 H80 V78 H110 V44 H140" stroke-width="2.4"/>
      <path d="M30 100 l14 10 l14 -16 l14 8 l14 -4" stroke-width="2" opacity="0.7"/>
      <circle cx="190" cy="50" r="17"/>
      <line x1="190" y1="50" x2="202" y2="42"/>
      <circle cx="170" cy="104" r="10"/>
      <circle cx="170" cy="104" r="3"/>
      <circle cx="204" cy="104" r="10"/>
      <circle cx="204" cy="104" r="3"/>
    </symbol>

    <!-- Spectrum Analyzer -->
    <symbol id="dc-icon-spectrum" viewBox="0 0 240 140">
      <rect x="10" y="14" width="220" height="112" rx="9"/>
      <rect x="24" y="26" width="150" height="86" rx="4"/>
      <line x1="62" y1="26" x2="62" y2="112" opacity="0.35"/>
      <line x1="99" y1="26" x2="99" y2="112" opacity="0.35"/>
      <line x1="136" y1="26" x2="136" y2="112" opacity="0.35"/>
      <line x1="28" y1="104" x2="170" y2="104" opacity="0.6"/>
      <path d="M28 102 L52 98 L66 100 L84 96 L96 58 L99 40 L102 58 L116 96 L134 99 L150 95 L170 101" stroke-width="2.4"/>
      <circle cx="200" cy="46" r="14"/>
      <line x1="200" y1="46" x2="200" y2="34"/>
      <rect x="188" y="78" width="9" height="9" rx="1.5"/>
      <rect x="202" y="78" width="9" height="9" rx="1.5"/>
      <rect x="188" y="92" width="9" height="9" rx="1.5"/>
      <rect x="202" y="92" width="9" height="9" rx="1.5"/>
    </symbol>

    <!-- Laser Controller -->
    <symbol id="dc-icon-laser" viewBox="0 0 240 140">
      <rect x="10" y="14" width="220" height="112" rx="9"/>
      <rect x="28" y="58" width="26" height="26" rx="3"/>
      <circle cx="54" cy="71" r="6"/>
      <line x1="60" y1="71" x2="156" y2="71" stroke-width="2.4" stroke-dasharray="5 5"/>
      <path d="M150 64 L164 71 L150 78" stroke-width="2.4"/>
      <line x1="64" y1="60" x2="120" y2="48" opacity="0.5"/>
      <line x1="64" y1="82" x2="120" y2="94" opacity="0.5"/>
      <rect x="120" y="26" width="92" height="26" rx="3"/>
      <line x1="130" y1="35" x2="186" y2="35" opacity="0.6"/>
      <line x1="130" y1="43" x2="170" y2="43" opacity="0.6"/>
      <circle cx="150" cy="102" r="13"/>
      <line x1="150" y1="102" x2="150" y2="91"/>
      <circle cx="194" cy="102" r="13"/>
      <line x1="194" y1="102" x2="203" y2="94"/>
    </symbol>

    <!-- Laser Lock (dispersive / PDH error signal) -->
    <symbol id="dc-icon-laserlock" viewBox="0 0 240 140">
      <rect x="10" y="14" width="220" height="112" rx="9"/>
      <rect x="24" y="26" width="150" height="86" rx="4"/>
      <line x1="28" y1="69" x2="170" y2="69" opacity="0.5"/>
      <line x1="99" y1="30" x2="99" y2="108" opacity="0.5"/>
      <path d="M28 69 C 64 69, 80 36, 99 69 S 138 102, 170 69" stroke-width="2.4"/>
      <circle cx="99" cy="69" r="5" stroke-width="2.4"/>
      <line x1="84" y1="69" x2="114" y2="69" opacity="0.8"/>
      <line x1="99" y1="54" x2="99" y2="84" opacity="0.8"/>
      <path d="M196 40 a20 20 0 1 1 -14 6" stroke-width="2"/>
      <path d="M178 40 L182 52 L192 46" stroke-width="2"/>
      <circle cx="200" cy="96" r="12"/>
      <line x1="200" y1="96" x2="200" y2="85"/>
    </symbol>

    <!-- Piezo Controller -->
    <symbol id="dc-icon-piezo" viewBox="0 0 240 140">
      <rect x="10" y="14" width="220" height="112" rx="9"/>
      <rect x="22" y="26" width="56" height="28" rx="3"/>
      <rect x="86" y="26" width="56" height="28" rx="3"/>
      <rect x="150" y="26" width="56" height="28" rx="3"/>
      <line x1="30" y1="40" x2="70" y2="40" opacity="0.6"/>
      <line x1="94" y1="40" x2="134" y2="40" opacity="0.6"/>
      <line x1="158" y1="40" x2="198" y2="40" opacity="0.6"/>
      <circle cx="50" cy="92" r="16"/>
      <line x1="50" y1="92" x2="50" y2="78"/>
      <circle cx="114" cy="92" r="16"/>
      <line x1="114" y1="92" x2="126" y2="83"/>
      <circle cx="178" cy="92" r="16"/>
      <line x1="178" y1="92" x2="166" y2="83"/>
    </symbol>

    <!-- Motion / Translation Stage -->
    <symbol id="dc-icon-motion" viewBox="0 0 240 140">
      <rect x="10" y="14" width="220" height="112" rx="9"/>
      <rect x="40" y="86" width="170" height="18" rx="2"/>
      <rect x="92" y="64" width="76" height="22" rx="2"/>
      <line x1="40" y1="95" x2="210" y2="95" stroke-dasharray="4 4" opacity="0.7"/>
      <circle cx="30" cy="95" r="12"/>
      <line x1="30" y1="95" x2="30" y2="83"/>
      <line x1="92" y1="50" x2="168" y2="50" stroke-width="2.4"/>
      <path d="M99 43 L86 50 L99 57" stroke-width="2.4"/>
      <path d="M161 43 L174 50 L161 57" stroke-width="2.4"/>
      <line x1="104" y1="86" x2="104" y2="104" opacity="0.5"/>
      <line x1="130" y1="86" x2="130" y2="104" opacity="0.5"/>
      <line x1="156" y1="86" x2="156" y2="104" opacity="0.5"/>
    </symbol>

    <!-- Modular Mainframe / Rack Chassis -->
    <symbol id="dc-icon-mainframe" viewBox="0 0 240 140">
      <rect x="22" y="24" width="196" height="92" rx="5"/>
      <rect x="12" y="50" width="9" height="40" rx="2"/>
      <rect x="219" y="50" width="9" height="40" rx="2"/>
      <rect x="34" y="34" width="26" height="72" rx="2"/>
      <rect x="66" y="34" width="26" height="72" rx="2"/>
      <rect x="98" y="34" width="26" height="72" rx="2"/>
      <rect x="130" y="34" width="26" height="72" rx="2"/>
      <rect x="162" y="34" width="26" height="72" rx="2"/>
      <line x1="38" y1="46" x2="56" y2="46" opacity="0.6"/>
      <line x1="70" y1="46" x2="88" y2="46" opacity="0.6"/>
      <line x1="102" y1="46" x2="120" y2="46" opacity="0.6"/>
      <line x1="134" y1="46" x2="152" y2="46" opacity="0.6"/>
      <line x1="166" y1="46" x2="184" y2="46" opacity="0.6"/>
      <circle cx="47" cy="92" r="6"/>
      <circle cx="79" cy="92" r="6"/>
      <circle cx="111" cy="92" r="6"/>
      <circle cx="143" cy="92" r="6"/>
      <circle cx="175" cy="92" r="6"/>
    </symbol>

  </defs>
</svg>

<div class="device-controllers">

  <header class="dc-hero">
    <div class="dc-hero__grid" aria-hidden="true"></div>
    <h1 class="dc-hero__title">Lab Instrument Controllers</h1>
    <p class="dc-hero__sub">
      A growing collection of open-source <strong>Python drivers &amp; GUIs</strong> for the
      laboratory hardware behind our trapped-ion experiments &mdash; oscilloscopes, waveform
      generators, spectrum analyzers, laser &amp; diode controllers, piezo and motion stages,
      and modular mainframes. Pick an instrument to jump to its repository.
    </p>
    <p class="dc-hero__hint"><i class="fas fa-bolt"></i> Tap any module to open its code on GitHub</p>
  </header>

  <!-- ========================= KEYSIGHT ========================= -->
  <section class="dc-vendor">
    <h2 class="dc-vendor__name"><span>Keysight</span></h2>
    <div class="dc-grid">

      <a class="dc-card" href="https://github.com/JovanMarkov96/keysight-33600a-control" target="_blank" rel="noopener noreferrer">
        <svg class="dc-card__art" viewBox="0 0 240 140" aria-hidden="true"><use href="#dc-icon-awg"/></svg>
        <span class="dc-card__model">33600A</span>
        <span class="dc-card__class">Arbitrary Waveform Generator</span>
        <span class="dc-card__desc">Trueform series &middot; standalone SCPI control library</span>
        <span class="dc-card__cta"><i class="fab fa-github"></i> View code</span>
      </a>

      <a class="dc-card" href="https://github.com/JovanMarkov96/keysight-dsox1200-control" target="_blank" rel="noopener noreferrer">
        <svg class="dc-card__art" viewBox="0 0 240 140" aria-hidden="true"><use href="#dc-icon-oscilloscope"/></svg>
        <span class="dc-card__model">DSOX1200</span>
        <span class="dc-card__class">Oscilloscope</span>
        <span class="dc-card__desc">InfiniiVision 1200 X-Series &middot; DSOX1202 / 1204 &middot; EDUX1052</span>
        <span class="dc-card__cta"><i class="fab fa-github"></i> View code</span>
      </a>

    </div>
  </section>

  <!-- ========================= TEKTRONIX ========================= -->
  <section class="dc-vendor">
    <h2 class="dc-vendor__name"><span>Tektronix</span></h2>
    <div class="dc-grid">

      <a class="dc-card" href="https://github.com/JovanMarkov96/tektronix-tds2024c-control" target="_blank" rel="noopener noreferrer">
        <svg class="dc-card__art" viewBox="0 0 240 140" aria-hidden="true"><use href="#dc-icon-oscilloscope"/></svg>
        <span class="dc-card__model">TDS2024C</span>
        <span class="dc-card__class">Oscilloscope</span>
        <span class="dc-card__desc">TDS2000B/C digital storage scope &middot; qtpy / pyqtgraph GUI over USB</span>
        <span class="dc-card__cta"><i class="fab fa-github"></i> View code</span>
      </a>

    </div>
  </section>

  <!-- ========================= RIGOL ========================= -->
  <section class="dc-vendor">
    <h2 class="dc-vendor__name"><span>Rigol</span></h2>
    <div class="dc-grid">

      <a class="dc-card" href="https://github.com/JovanMarkov96/rigol-dg4162-control" target="_blank" rel="noopener noreferrer">
        <svg class="dc-card__art" viewBox="0 0 240 140" aria-hidden="true"><use href="#dc-icon-awg"/></svg>
        <span class="dc-card__model">DG4162</span>
        <span class="dc-card__class">Arbitrary Waveform Generator</span>
        <span class="dc-card__desc">DG4000 series function / AWG &middot; SCPI over pyvisa</span>
        <span class="dc-card__cta"><i class="fab fa-github"></i> View code</span>
      </a>

      <a class="dc-card" href="https://github.com/JovanMarkov96/rigol-dsa815-python" target="_blank" rel="noopener noreferrer">
        <svg class="dc-card__art" viewBox="0 0 240 140" aria-hidden="true"><use href="#dc-icon-spectrum"/></svg>
        <span class="dc-card__model">DSA815</span>
        <span class="dc-card__class">Spectrum Analyzer</span>
        <span class="dc-card__desc">9 kHz &ndash; 1.5 GHz &middot; Python remote interface</span>
        <span class="dc-card__cta"><i class="fab fa-github"></i> View code</span>
      </a>

    </div>
  </section>

  <!-- ============ STANFORD RESEARCH SYSTEMS ============ -->
  <section class="dc-vendor">
    <h2 class="dc-vendor__name"><span>Stanford Research Systems</span></h2>
    <div class="dc-grid">

      <a class="dc-card" href="https://github.com/JovanMarkov96/srs-ldc500-control" target="_blank" rel="noopener noreferrer">
        <svg class="dc-card__art" viewBox="0 0 240 140" aria-hidden="true"><use href="#dc-icon-laser"/></svg>
        <span class="dc-card__model">LDC500</span>
        <span class="dc-card__class">Laser Diode Controller</span>
        <span class="dc-card__desc">LDC501 / LDC502 &middot; precision current &amp; TEC over RS-232</span>
        <span class="dc-card__cta"><i class="fab fa-github"></i> View code</span>
      </a>

      <a class="dc-card" href="https://github.com/JovanMarkov96/srs-sim900-control" target="_blank" rel="noopener noreferrer">
        <svg class="dc-card__art" viewBox="0 0 240 140" aria-hidden="true"><use href="#dc-icon-mainframe"/></svg>
        <span class="dc-card__model">SIM900</span>
        <span class="dc-card__class">Modular Mainframe</span>
        <span class="dc-card__desc">SIM960 PID &middot; SIM928 source &middot; SIM970 DVM &middot; SIM922 &amp; more</span>
        <span class="dc-card__cta"><i class="fab fa-github"></i> View code</span>
      </a>

    </div>
  </section>

  <!-- ========================= TOPTICA ========================= -->
  <section class="dc-vendor">
    <h2 class="dc-vendor__name"><span>Toptica</span></h2>
    <div class="dc-grid">

      <a class="dc-card" href="https://github.com/JovanMarkov96/toptica-dlcpro-control" target="_blank" rel="noopener noreferrer">
        <svg class="dc-card__art" viewBox="0 0 240 140" aria-hidden="true"><use href="#dc-icon-laser"/></svg>
        <span class="dc-card__model">DLC pro</span>
        <span class="dc-card__class">Laser Controller</span>
        <span class="dc-card__desc">Diode laser controller &middot; Python driver &amp; GUI</span>
        <span class="dc-card__cta"><i class="fab fa-github"></i> View code</span>
      </a>

      <a class="dc-card" href="https://github.com/JovanMarkov96/toptica-digilock-110-control" target="_blank" rel="noopener noreferrer">
        <svg class="dc-card__art" viewBox="0 0 240 140" aria-hidden="true"><use href="#dc-icon-laserlock"/></svg>
        <span class="dc-card__model">DigiLock 110</span>
        <span class="dc-card__class">Laser Lock</span>
        <span class="dc-card__desc">Frequency locking module &middot; TCP/IP RCI control</span>
        <span class="dc-card__cta"><i class="fab fa-github"></i> View code</span>
      </a>

    </div>
  </section>

  <!-- ========================= THORLABS ========================= -->
  <section class="dc-vendor">
    <h2 class="dc-vendor__name"><span>Thorlabs</span></h2>
    <div class="dc-grid">

      <a class="dc-card" href="https://github.com/JovanMarkov96/Thorlabs_MDT" target="_blank" rel="noopener noreferrer">
        <svg class="dc-card__art" viewBox="0 0 240 140" aria-hidden="true"><use href="#dc-icon-piezo"/></svg>
        <span class="dc-card__model">MDT693 / 694</span>
        <span class="dc-card__class">Piezo Controller</span>
        <span class="dc-card__desc">MDT693A/B &amp; MDT694B &middot; precision piezo voltage &amp; positioning</span>
        <span class="dc-card__cta"><i class="fab fa-github"></i> View code</span>
      </a>

      <a class="dc-card" href="https://github.com/JovanMarkov96/Thorlabs_Motion_Control" target="_blank" rel="noopener noreferrer">
        <svg class="dc-card__art" viewBox="0 0 240 140" aria-hidden="true"><use href="#dc-icon-motion"/></svg>
        <span class="dc-card__model">Motion Control</span>
        <span class="dc-card__class">Motion Controller</span>
        <span class="dc-card__desc">T-Cube / K-Cube &amp; benchtop stages &middot; drivers, wrappers, examples</span>
        <span class="dc-card__cta"><i class="fab fa-github"></i> View code</span>
      </a>

    </div>
  </section>

  <!-- ==================== NEWPORT / NEW FOCUS ==================== -->
  <section class="dc-vendor">
    <h2 class="dc-vendor__name"><span>Newport / New Focus</span></h2>
    <div class="dc-grid">

      <a class="dc-card" href="https://github.com/JovanMarkov96/newport-8742-picomotor" target="_blank" rel="noopener noreferrer">
        <svg class="dc-card__art" viewBox="0 0 240 140" aria-hidden="true"><use href="#dc-icon-motion"/></svg>
        <span class="dc-card__model">8742</span>
        <span class="dc-card__class">Picomotor Controller</span>
        <span class="dc-card__desc">4-axis open-loop picomotor &middot; Python control interface</span>
        <span class="dc-card__cta"><i class="fab fa-github"></i> View code</span>
      </a>

    </div>
  </section>

</div>

<style>
/* ============================================================= */
/*  Device Controllers page — blueprint / hi-tech glass theme    */
/* ============================================================= */
.device-controllers {
  --dc-accent: var(--ion-accent, #4f46e5);
  --dc-accent-rgb: var(--ion-accent-rgb, 79, 70, 229);
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 0 3rem;
}

/* ---------- Hero ---------- */
.dc-hero {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(var(--dc-accent-rgb), 0.25);
  border-radius: 18px;
  padding: 2.4rem 2rem 2rem;
  margin: 0.5rem 0 2.6rem;
  background:
    radial-gradient(120% 140% at 85% -20%, rgba(var(--dc-accent-rgb), 0.18), transparent 60%),
    var(--ion-surface, #f8fafc);
  box-shadow: var(--ion-shadow-md);
}
.dc-hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(var(--dc-accent-rgb), 0.10) 1px, transparent 1px),
    linear-gradient(90deg, rgba(var(--dc-accent-rgb), 0.10) 1px, transparent 1px);
  background-size: 26px 26px;
  -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,0.9), transparent 80%);
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.9), transparent 80%);
  pointer-events: none;
}
.dc-hero__title {
  position: relative;
  margin: 0 0 0.6rem;
  font-size: clamp(1.9rem, 4vw, 2.7rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.05;
}
.dc-hero__sub {
  position: relative;
  max-width: 56ch;
  margin: 0 0 1rem;
  color: var(--ion-muted, #64748b);
  font-size: 1.02rem;
  line-height: 1.6;
}
.dc-hero__hint {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0.35rem 0.85rem;
  border: 1px solid rgba(var(--dc-accent-rgb), 0.35);
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--dc-accent);
  background: rgba(var(--dc-accent-rgb), 0.08);
}

/* ---------- Vendor section ---------- */
.dc-vendor { margin: 0 0 2.4rem; }
.dc-vendor__name {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 0 1.1rem;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ion-text, #1e293b);
}
.dc-vendor__name span { flex: 0 0 auto; }
.dc-vendor__name::after {
  content: "";
  flex: 1 1 auto;
  height: 1px;
  background: linear-gradient(90deg, rgba(var(--dc-accent-rgb), 0.5), transparent);
}

/* ---------- Device grid: 2–3 large columns ---------- */
.dc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 1.25rem;
}

/* ---------- Device card / light-up button ---------- */
.dc-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 188px;
  padding: 1.35rem 1.4rem 1.25rem;
  overflow: hidden;
  border: 1px solid var(--ion-border, rgba(226,232,240,0.8));
  border-radius: var(--ion-radius, 14px);
  background:
    linear-gradient(rgba(var(--dc-accent-rgb), 0.045) 1px, transparent 1px) 0 0 / 22px 22px,
    linear-gradient(90deg, rgba(var(--dc-accent-rgb), 0.045) 1px, transparent 1px) 0 0 / 22px 22px,
    var(--ion-surface, #f8fafc);
  box-shadow: var(--ion-shadow-sm);
  text-decoration: none !important;
  color: var(--ion-text, #1e293b) !important;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease, background-color .25s ease;
}
/* Kill the theme's default link underline/colour inside cards */
.dc-card,
.dc-card:hover,
.dc-card:focus { text-decoration: none !important; box-shadow: var(--ion-shadow-sm); }

/* Blueprint art watermark */
.dc-card__art {
  position: absolute;
  right: -14px;
  bottom: -16px;
  width: 168px;
  height: auto;
  color: var(--dc-accent);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.16;
  pointer-events: none;
  transition: opacity .25s ease, transform .35s ease, filter .25s ease;
}

.dc-card__model {
  position: relative;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1.1;
  color: var(--ion-text, #1e293b);
  transition: color .25s ease, text-shadow .25s ease;
}
.dc-card__class {
  position: relative;
  align-self: flex-start;
  margin-top: 0.55rem;
  padding: 0.22rem 0.7rem;
  border: 1px solid rgba(var(--dc-accent-rgb), 0.4);
  border-radius: 999px;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--dc-accent);
  background: rgba(var(--dc-accent-rgb), 0.07);
}
.dc-card__desc {
  position: relative;
  margin-top: 0.7rem;
  max-width: 24ch;
  color: var(--ion-muted, #64748b);
  font-size: 0.84rem;
  line-height: 1.5;
}
.dc-card__cta {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: auto;
  padding-top: 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--dc-accent);
  opacity: 0.55;
  transition: opacity .25s ease, transform .25s ease;
}
.dc-card__cta i { font-size: 0.95rem; }

/* ---------- Light-up hover / focus ---------- */
.dc-card:hover,
.dc-card:focus-visible {
  transform: translateY(-5px);
  border-color: rgba(var(--dc-accent-rgb), 0.75);
  box-shadow:
    0 0 0 1px rgba(var(--dc-accent-rgb), 0.45),
    0 14px 38px rgba(var(--dc-accent-rgb), 0.22),
    0 0 46px rgba(var(--dc-accent-rgb), 0.16) !important;
}
.dc-card:hover .dc-card__art,
.dc-card:focus-visible .dc-card__art {
  opacity: 0.5;
  transform: translateY(-4px) scale(1.04);
  filter: drop-shadow(0 0 7px rgba(var(--dc-accent-rgb), 0.65));
}
.dc-card:hover .dc-card__model,
.dc-card:focus-visible .dc-card__model {
  color: var(--dc-accent);
  text-shadow: 0 0 16px rgba(var(--dc-accent-rgb), 0.5);
}
.dc-card:hover .dc-card__cta,
.dc-card:focus-visible .dc-card__cta {
  opacity: 1;
  transform: translateX(3px);
}

/* ---------- Dark mode polish ---------- */
html.dark-mode .device-controllers .dc-hero,
html.dark-mode .device-controllers .dc-card {
  background-color: rgba(255, 255, 255, 0.02);
}
html.dark-mode .device-controllers .dc-card__art { opacity: 0.22; }
html.dark-mode .device-controllers .dc-card:hover .dc-card__art,
html.dark-mode .device-controllers .dc-card:focus-visible .dc-card__art { opacity: 0.6; }

@media (max-width: 560px) {
  .dc-grid { grid-template-columns: 1fr; }
  .dc-card__desc { max-width: none; }
}
</style>
