// ─── Détection tactile ──────────────────────────────────────
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

// ─── Custom cursor (desktop uniquement) ─────────────────────
if (!isTouchDevice) {
    const cursorDot = document.createElement('div');
    const cursorCrosshair = document.createElement('div');
    const cursorRing = document.createElement('div');

    cursorDot.className = 'cursor-dot';
    cursorCrosshair.className = 'cursor-crosshair';
    cursorRing.className = 'cursor-ring';

    document.body.append(cursorDot, cursorCrosshair, cursorRing);

    let mouseX = 0, mouseY = 0;
    let crosshairX = 0, crosshairY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursorRing.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorCrosshair.style.opacity = '1';
    });

    document.addEventListener('mouseup', () => {
        cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorCrosshair.style.opacity = '0.6';
    });

    // Occasional glitch effect
    setInterval(() => {
        if (Math.random() > 0.7) {
            cursorCrosshair.style.filter = 'hue-rotate(180deg)';
            cursorRing.style.borderColor = 'var(--red)';
            setTimeout(() => {
                cursorCrosshair.style.filter = 'none';
                cursorRing.style.borderColor = 'var(--cyan)';
            }, 80);
        }
    }, 3000);

    (function animateCursor() {
        crosshairX += (mouseX - crosshairX) * 0.2;
        crosshairY += (mouseY - crosshairY) * 0.2;
        cursorCrosshair.style.left = crosshairX + 'px';
        cursorCrosshair.style.top = crosshairY + 'px';

        ringX += (mouseX - ringX) * 0.1;
        ringY += (mouseY - ringY) * 0.1;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';

        requestAnimationFrame(animateCursor);
    })();
}

// ─── Tap ripple cyberpunk (mobile uniquement) ────────────────
if (isTouchDevice) {
    document.body.style.cursor = 'auto';

    document.addEventListener('touchstart', e => {
        const touch = e.touches[0];
        const ripple = document.createElement('div');
        ripple.className = 'touch-ripple';
        ripple.style.left = touch.clientX + 'px';
        ripple.style.top = touch.clientY + 'px';
        document.body.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    }, { passive: true });
}

// ─── Scroll-based cybernétisation tracker ───────────────────

const sections = document.querySelectorAll('section');
const trackerFill = document.getElementById('trackerFill');
const trackerValue = document.getElementById('trackerValue');
const trackerWarning = document.getElementById('trackerWarning');

// Intersection Observer pour révéler les sections et mettre à jour le tracker
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Révéler la section
            entry.target.classList.add('visible');

            // Mettre à jour le tracker de cybernétisation
            const cyber = parseInt(entry.target.dataset.cyber || 0);
            trackerFill.style.width = cyber + '%';
            trackerValue.textContent = cyber;

            // Afficher l'avertissement si critique
            if (cyber >= 70) {
                trackerWarning.classList.add('active');
                trackerFill.style.background = 'linear-gradient(90deg, var(--yellow), var(--red))';
            } else {
                trackerWarning.classList.remove('active');
            }
        }
    });
}, { threshold: 0.2 });

// Observer toutes les sections
sections.forEach(section => observer.observe(section));