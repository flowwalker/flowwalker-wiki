import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const FloatingButtons: QuartzComponent = () => {
  return (
    <>
      <canvas id="universe"></canvas>
      <div class="floating-buttons">
        <button
          class="fb-btn fb-search"
          id="fb-search-btn"
          title="搜索"
          aria-label="搜索"
          onclick="document.getElementsByClassName('search-button')[0]?.click()"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>
        <button
          class="fb-btn fb-darkmode"
          id="fb-darkmode-btn"
          title="切换明暗"
          aria-label="切换明暗"
          onclick="document.getElementsByClassName('darkmode')[0]?.click()"
        >
          <svg class="fb-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg class="fb-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
        <a
          class="fb-btn fb-back"
          href="https://flowwalker.top"
          title="归返本山"
          aria-label="归返本山"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </a>
        <a
          class="fb-btn fb-github"
          href="https://github.com/flowwalker"
          target="_blank"
          rel="noopener"
          title="GitHub"
          aria-label="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <span class="fb-tooltip">归返本山</span>
      </div>
    </>
  )
}

FloatingButtons.css = `
canvas#universe {
  display: none;
}
:root[saved-theme="dark"] canvas#universe {
  display: block;
  position: fixed;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-buttons {
  position: fixed;
  bottom: 28px;
  left: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 500;
}

.fb-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--lightgray);
  background: var(--light);
  color: var(--darkgray);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  text-decoration: none;
  position: relative;
}

.fb-btn:hover {
  color: var(--tertiary);
  border-color: var(--tertiary);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.fb-btn:active {
  transform: scale(0.95);
}

/* search button highlight */
.fb-search:hover {
  color: #60a5fa;
  border-color: #60a5fa;
  box-shadow: 0 4px 18px rgba(96, 165, 250, 0.35);
}

/* darkmode button highlight */
.fb-darkmode:hover {
  color: #f59e0b;
  border-color: #f59e0b;
  box-shadow: 0 4px 18px rgba(245, 158, 11, 0.35);
}

/* back button highlight */
.fb-back:hover {
  color: #6C63FF;
  border-color: #6C63FF;
  box-shadow: 0 4px 18px rgba(108, 99, 255, 0.35);
}

/* github button highlight */
.fb-github:hover {
  color: #8b5cf6;
  border-color: #8b5cf6;
  box-shadow: 0 4px 18px rgba(139, 92, 246, 0.35);
}

/* sun/moon icon toggle */
.floating-buttons .fb-icon-sun { display: none; }
.floating-buttons .fb-icon-moon { display: block; }
:root[saved-theme="dark"] .floating-buttons .fb-icon-sun { display: block; }
:root[saved-theme="dark"] .floating-buttons .fb-icon-moon { display: none; }

@media (max-width: 768px) {
  .floating-buttons {
    bottom: 20px;
    left: 16px;
    gap: 8px;
  }
  .fb-btn {
    width: 36px;
    height: 36px;
  }
}
`

// Universe particle animation
FloatingButtons.afterDOMLoaded = `
(function(){
  var canvas = document.getElementById('universe');
  if (!canvas) return;
  var ctx, n, e, i, particles = [];
  var t = 0.05, notFirst = true;
  var colorA = '180,184,240', colorB = '226,225,142', colorC = '226,225,224';

  function resize() {
    n = window.innerWidth; e = window.innerHeight;
    i = 0.216 * n; canvas.width = n; canvas.height = e;
  }
  function render() {
    if (document.documentElement.getAttribute('saved-theme') !== 'dark') {
      requestAnimationFrame(render); return;
    }
    ctx.clearRect(0, 0, n, e);
    for (var j = 0; j < particles.length; j++) {
      var p = particles[j];
      p.move(); p.fadeIn(); p.fadeOut(); p.draw();
    }
    requestAnimationFrame(render);
  }
  function rand(a, b) { return Math.random() * (b - a) + a; }
  function chance(pct) { return Math.floor(1000 * Math.random()) + 1 < 10 * pct; }

  function Particle() {
    this.reset = function() {
      this.giant = chance(3);
      this.comet = !this.giant && !notFirst && chance(10);
      this.x = rand(0, n - 10); this.y = rand(0, e);
      this.r = rand(1.1, 2.6);
      this.dx = rand(t, 6*t) + (this.comet ? 1 : 0) * t * rand(50, 120) + 2*t;
      this.dy = -rand(t, 6*t) - (this.comet ? 1 : 0) * t * rand(50, 120);
      this.fadingOut = null; this.fadingIn = true;
      this.opacity = 0;
      this.opacityTresh = rand(0.2, 1 - 0.4 * (this.comet ? 1 : 0));
      this.do = rand(0.0005, 0.002) + 0.001 * (this.comet ? 1 : 0);
    };
    this.fadeIn = function() {
      if (!this.fadingIn) return;
      this.fadingIn = !(this.opacity > this.opacityTresh);
      this.opacity += this.do;
    };
    this.fadeOut = function() {
      if (!this.fadingOut) return;
      this.fadingOut = !(this.opacity < 0);
      this.opacity -= this.do / 2;
      if (this.x > n || this.y < 0) { this.fadingOut = false; this.reset(); }
    };
    this.draw = function() {
      ctx.beginPath();
      if (this.giant) {
        ctx.fillStyle = 'rgba(' + colorA + ',' + this.opacity + ')';
        ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
      } else if (this.comet) {
        ctx.fillStyle = 'rgba(' + colorC + ',' + this.opacity + ')';
        ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);
        for (var k = 0; k < 30; k++) {
          ctx.fillStyle = 'rgba(' + colorC + ',' + (this.opacity - this.opacity / 20 * k) + ')';
          ctx.fillRect(this.x - this.dx / 4 * k, this.y - this.dy / 4 * k - 2, 2, 2);
        }
      } else {
        ctx.fillStyle = 'rgba(' + colorB + ',' + this.opacity + ')';
        ctx.fillRect(this.x, this.y, this.r, this.r);
      }
      ctx.closePath(); ctx.fill();
    };
    this.move = function() {
      this.x += this.dx; this.y += this.dy;
      if (!this.fadingOut && (this.x > n - n / 4 || this.y < 0)) this.fadingOut = true;
      if (this.fadingOut === false) this.reset();
    };
    setTimeout(function() { notFirst = false; }, 50);
  }

  resize();
  window.addEventListener('resize', resize);
  ctx = canvas.getContext('2d');
  for (var j = 0; j < i; j++) { particles.push(new Particle()); particles[j].reset(); }
  render();
})();
`

export default (() => FloatingButtons) satisfies QuartzComponentConstructor
