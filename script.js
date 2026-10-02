:root {
  --bg: #e8e5e2;
  --screen-dark: #0f0f10;
  --screen-dark-2: #191919;
  --screen-light: #f4f4f3;
  --text-dark: #101010;
  --text-light: #f8f8f8;
  --muted-light: rgba(255, 255, 255, 0.7);
  --muted-dark: rgba(16, 16, 16, 0.7);
  --line: rgba(17, 17, 17, 0.15);
  --green: #6edc6c;
  --green-2: #4dbd5d;
  --pink: #ff7ac7;
  --purple: #8d5ef3;
  --yellow: #f7d154;
  --orange: #ff8650;
  --red: #ff6b5d;
  --chip-bg: rgba(255, 255, 255, 0.08);
  --light-chip-bg: rgba(0, 0, 0, 0.02);
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
  background: var(--bg);
  font-family: "Inter", sans-serif;
  color: var(--text-dark);
}

button {
  font: inherit;
}

.layout {
  width: min(1180px, calc(100% - 36px));
  padding: 20px 0;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(310px, 1fr));
  gap: 52px;
  align-items: stretch;
  justify-items: center;
}

.phone {
  width: 100%;
  max-width: 420px;
  height: 720px;
  border-radius: 38px;
  padding: 14px 14px 18px;
  box-shadow: 0 32px 70px rgba(17, 17, 17, 0.08);
}

.dark-phone {
  background: #050505;
}

.light-phone {
  background: #f1f1f1;
  border: 1px solid rgba(16, 16, 16, 0.06);
}

.status-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px 10px;
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.light-status {
  color: rgba(17, 17, 17, 0.9);
}

.signal {
  letter-spacing: 0.14em;
}

.screen {
  position: relative;
  height: calc(100% - 34px);
  border-radius: 30px;
  overflow: hidden;
  padding: 18px 18px 16px;
}

.dark-screen {
  background: linear-gradient(180deg, #101010 0%, #070707 100%);
  color: var(--text-light);
}

.light-screen {
  background: #fdfdfd;
  color: var(--text-dark);
}

.back-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--text-light);
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  opacity: 0.9;
}

.light-back {
  color: var(--text-dark);
}

.screen h2 {
  margin: 14px 0 8px;
  font-size: clamp(2.2rem, 2.3vw, 2.8rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.screen p {
  margin: 0 0 20px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--muted-light);
}

.light-screen p {
  color: var(--muted-dark);
}

.trend-board {
  position: relative;
  height: 154px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
  border: 1px solid rgba(255,255,255,0.08);
  overflow: hidden;
}

.light-board {
  background: rgba(18, 18, 18, 0.02);
  border-color: rgba(17,17,17,0.08);
}

.trend-board::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 18% 25%, rgba(255,255,255,0.08) 0 2px, transparent 2px),
                    radial-gradient(circle at 46% 34%, rgba(255,255,255,0.06) 0 2px, transparent 2px),
                    radial-gradient(circle at 70% 25%, rgba(255,255,255,0.07) 0 2px, transparent 2px),
                    radial-gradient(circle at 88% 45%, rgba(255,255,255,0.05) 0 2px, transparent 2px);
  background-size: 90px 80px;
  opacity: 0.8;
}

.trend-item {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.25);
}

.trend-item:nth-child(1) { left: 28px; top: 58px; background: var(--green); }
.trend-item:nth-child(2) { left: 112px; top: 32px; background: var(--purple); }
.trend-item:nth-child(3) { left: 176px; top: 52px; background: var(--yellow); }
.trend-item:nth-child(4) { left: 238px; top: 40px; background: var(--pink); }
.trend-item:nth-child(5) { left: 286px; top: 82px; background: var(--orange); }

.choice-list {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.24);
  background: var(--chip-bg);
  color: #fff;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
}

.chip span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  font-size: 1rem;
  line-height: 1;
}

.light-choices .chip {
  background: var(--light-chip-bg);
  border-color: rgba(17,17,17,0.12);
  color: #111;
}

.light-choices .chip span {
  background: rgba(17, 17, 17, 0.06);
}

.chip.selected {
  background: #111;
  border-color: rgba(255,255,255,0.1);
  color: #fff;
}

.light-choices .chip.selected {
  background: #111;
  color: #fff;
}

.cta-row {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  background: transparent;
}

.counter {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.75);
}

.light-row .counter {
  color: rgba(17,17,17,0.7);
}

.next-btn {
  border: none;
  border-radius: 999px;
  min-width: 120px;
  height: 52px;
  background: #fff;
  color: #111;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 18px 30px rgba(0,0,0,0.18);
}

.light-next {
  background: #111;
  color: #fff;
}

@media (max-width: 820px) {
  .showcase-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .phone {
    max-width: 460px;
  }
}

@media (max-width: 480px) {
  .layout {
    width: min(100% - 18px, 1180px);
  }

  .phone {
    height: 660px;
  }

  .screen h2 {
    font-size: 2rem;
  }

  .choice-list {
    gap: 8px;
  }

  .chip {
    font-size: 0.7rem;
    padding: 0 10px;
  }
}

