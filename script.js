/* ── Cursor ─────────────────────────────────────────────── */
const cursorDot = document.createElement('div');
const cursorRing = document.createElement('div');
cursorDot.className = 'cursor-dot';
cursorRing.className = 'cursor-ring';
document.body.append(cursorDot, cursorRing);

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});

(function animateCursor() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateCursor);
})();

/* ── Constellation canvas ────────────────────────────────── */
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');

let stars = [];
const STAR_COUNT = 180;
const CONNECT_DIST = 120; // distance max pour tracer une ligne entre étoiles

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', () => { resizeCanvas(); initStars(); });
resizeCanvas();

class Star {
    constructor() { this.reset(true); }

    reset(initial = false) {
        this.x = Math.random() * canvas.width;
        this.y = initial ? Math.random() * canvas.height : -2;
        this.radius = Math.random() * 1.1 + 0.2;
        this.alpha = Math.random() * 0.6 + 0.2;
        this.speed = Math.random() * 0.08 + 0.02;
        this.twinkleSpeed = Math.random() * 0.008 + 0.003;
        this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
    }

    update() {
        this.y += this.speed;
        this.alpha += this.twinkleSpeed * this.twinkleDir;
        if (this.alpha > 0.85 || this.alpha < 0.1) this.twinkleDir *= -1;
        if (this.y > canvas.height + 2) this.reset();
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 240, ${this.alpha})`;
        ctx.fill();
    }
}

function initStars() {
    stars = Array.from({ length: STAR_COUNT }, () => new Star());
}

/* Mouse position for interactive constellations */
let mx = -9999, my = -9999;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function drawConstellations() {
    for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < CONNECT_DIST) {
                // Distance de la souris au milieu du segment
                const midX = (stars[i].x + stars[j].x) / 2;
                const midY = (stars[i].y + stars[j].y) / 2;
                const mdx = midX - mx;
                const mdy = midY - my;
                const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);

                // N'affiche les lignes que si la souris est proche
                const maxMouseDist = 200;
                if (mouseDist > maxMouseDist) continue;

                const proximity = 1 - mouseDist / maxMouseDist;
                const alpha = (1 - dist / CONNECT_DIST) * 0.25 * proximity;

                ctx.beginPath();
                ctx.moveTo(stars[i].x, stars[i].y);
                ctx.lineTo(stars[j].x, stars[j].y);
                ctx.strokeStyle = `rgba(94, 205, 190, ${alpha})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => { s.update(); s.draw(); });
    drawConstellations();
    requestAnimationFrame(animate);
}

initStars();
animate();

/* ── Parallax hero ───────────────────────────────────────── */
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    hero.style.transform = `translateY(${window.scrollY * 0.18}px)`;
});

/* ── Intersection Observer (sections + projects) ─────────── */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .project').forEach(el => observer.observe(el));