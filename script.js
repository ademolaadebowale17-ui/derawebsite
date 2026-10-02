:root {
  --bg-page: #dfe2df;
  --frame-bg: #202020;
  --device-bg: #f4f4f3;
  --text: #111010;
  --muted: #5e5d5a;
  --soft: #f5f5f4;
  --accent: #8e5ad8;
  --border: rgba(0, 0, 0, 0.15);
  --pill: rgba(255, 255, 255, 0.18);
  --shadow: rgba(0, 0, 0, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--bg-page);
  font-family: "Inter", sans-serif;
  color: var(--text);
}

.device-shell {
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.device-frame {
  width: min(100%, 420px);
  min-height: 780px;
  background: var(--device-bg);
  border-radius: 28px 28px 0 0;
  box-shadow: 0 22px 42px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.status-bar {
  height: 62px;
  background: rgba(26, 26, 26, 0.95);
  color: rgba(255, 255, 255, 0.9);
  padding: 16px 18px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}

.time {
  font-size: 1.1rem;
}

.status-icons {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8rem;
  opacity: 0.9;
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(28, 28, 28, 0.58);
  padding: 10px 14px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.sparkle,
.share {
  color: rgba(255, 255, 255, 0.74);
  font-size: 1.05rem;
}

.url-box {
  flex: 1;
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.95rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.content {
  background: #f4f4f3;
  padding: 24px 18px 18px;
  min-height: 620px;
}

h1 {
  font-size: clamp(2.1rem, 3vw, 3.3rem);
  line-height: 1.02;
  letter-spacing: -0.08em;
  margin: 8px 0 18px;
  font-weight: 900;
  color: #1c1c1c;
}

.ui {
  display: inline-block;
}

.designer {
  display: inline-block;
  margin-left: 0.02em;
}

.lead {
  margin: 0 0 18px;
  font-size: 1.08rem;
  line-height: 1.46;
  max-width: 360px;
  color: rgba(17, 17, 17, 0.88);
}

.work-link {
  display: inline-block;
  margin: 6px 0 20px;
  color: var(--accent);
  font-size: 1.05rem;
  font-weight: 700;
  text-decoration: none;
}

h2 {
  margin: 14px 0 16px;
  font-size: clamp(2.2rem, 3vw, 3.8rem);
  line-height: 0.96;
  letter-spacing: -0.08em;
  font-weight: 900;
}

.project-list {
  display: block;
}

.project-item {
  padding: 8px 0 22px;
  border-bottom: none;
}

.project-item h3 {
  margin: 0 0 10px;
  font-size: clamp(1.65rem, 2vw, 2.3rem);
  line-height: 1.08;
  letter-spacing: -0.07em;
  font-weight: 800;
}

.project-item p {
  margin: 0 0 8px;
  font-size: 1.02rem;
  line-height: 1.5;
  color: var(--muted);
  max-width: 360px;
}

.tag {
  display: inline-block;
  margin-top: 4px;
  font-size: 0.95rem;
  color: var(--accent);
  font-weight: 600;
}

.bottom-nav {
  height: 86px;
  background: rgba(170, 170, 170, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px 18px;
  gap: 12px;
}

.nav-arrow,
.center-btn,
.emoji-btn,
.dots {
  border: none;
  background: transparent;
  cursor: pointer;
}

.nav-arrow {
  width: 36px;
  height: 36px;
  color: var(--text);
  font-size: 2.2rem;
  line-height: 1;
  opacity: 0.85;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-btn {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.12);
  color: var(--text);
  font-size: 2.8rem;
  line-height: 1;
  display: grid;
  place-items: center;
  margin: 0 12px;
}

.emoji-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.3rem;
  color: var(--text);
  opacity: 0.9;
}

.dots {
  color: rgba(15, 15, 15, 0.9);
  font-size: 2rem;
  letter-spacing: 0.1em;
  line-height: 1;
  transform: translateY(-2px);
}

@media (max-width: 480px) {
  .device-shell {
    padding: 0;
  }

  .device-frame {
    width: 100%;
    min-height: 100vh;
    border-radius: 0;
  }

  .content {
    padding-inline: 16px;
  }

  h2 {
    font-size: 2.3rem;
  }

  .project-item h3 {
    font-size: 1.5rem;
  }
}
