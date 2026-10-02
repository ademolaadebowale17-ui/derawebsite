:root {
  --bg: #f2f0ee;
  --panel: #f7f6f4;
  --card: #ffffff;
  --text: #131313;
  --muted: #595959;
  --soft: #dcd3d2;
  --line: rgba(0, 0, 0, 0.08);
  --orange: #ff7c5d;
  --orange-2: #ff5b4d;
  --pink: #f7a2c5;
  --purple: #9a69f4;
  --black: #050505;
  --white: #ffffff;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

 a {
  color: inherit;
  text-decoration: none;
}

.page-shell {
  width: min(1220px, calc(100% - 40px));
  margin: 28px auto;
  padding: 16px 0 0;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 18px 24px;
  margin-bottom: 28px;
}

.brand {
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: -0.08em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 0.96rem;
  color: var(--muted);
}

.nav a {
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--text);
}

.nav-btn,
.footer-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--orange), var(--orange-2));
  color: var(--white);
  border-radius: 999px;
  padding: 0.8rem 1.4rem;
  font-weight: 700;
  box-shadow: 0 16px 28px rgba(255, 111, 89, 0.22);
}

.showcase {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 28px;
  align-items: end;
  padding: 10px 0 32px;
}

.phone-frame {
  height: 620px;
  border-radius: 34px;
  padding: 14px 14px 18px;
  background: rgba(0, 0, 0, 0.08);
  box-shadow: 0 30px 60px rgba(15, 21, 23, 0.08);
}

.dark-frame {
  background: #0b0b0b;
}

.pink-frame {
  background: linear-gradient(180deg, #f4d8ea, #efbdd4);
}

.purple-frame {
  background: linear-gradient(180deg, #d0b7ff, #b78bf0);
}

.statusbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 6px 12px 10px;
  color: rgba(255, 255, 255, 0.92);
}

.pink-frame .statusbar,
.purple-frame .statusbar {
  color: rgba(255, 255, 255, 0.9);
}

.icons {
  letter-spacing: 0.15em;
}

.screen {
  position: relative;
  height: calc(100% - 34px);
  border-radius: 28px;
  overflow: hidden;
}

.black-screen {
  background: #050505;
  display: flex;
  align-items: flex-end;
  padding: 24px 22px 26px;
}

.brand-mark {
  font-size: 2.15rem;
  font-weight: 800;
  letter-spacing: -0.08em;
  color: var(--white);
}

.pink-screen,
.purple-screen {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  padding: 18px 18px 22px;
}

.pink-screen {
  background: linear-gradient(180deg, #ff82b6 0%, #eb6aa5 100%);
}

.purple-screen {
  background: linear-gradient(180deg, #ad7bf0 0%, #8b5ae9 100%);
}

.light {
  color: rgba(255, 255, 255, 0.96);
}

.fashion-card {
  position: relative;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 20px;
}

.portrait {
  width: 88%;
  height: 66%;
  border-radius: 26px 26px 0 0;
  background-size: cover;
  background-position: center;
  box-shadow: 0 24px 44px rgba(79, 28, 45, 0.2);
}

.portrait-one {
  background-image: linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.22)), url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80');
}

.portrait-two {
  width: 92%;
  height: 68%;
  background-image: linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.18)), url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80');
}

.promo-copy {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 18px;
  padding: 16px 14px;
  text-align: center;
  color: var(--white);
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.3;
}

.large {
  font-size: 1.2rem;
  width: 84%;
  left: 50%;
  transform: translateX(-50%);
  bottom: 24px;
}

.project-gallery {
  display: grid;
  grid-template-columns: 1.15fr 1fr 1fr;
  gap: 18px;
  margin: 10px 0 28px;
}

.gallery-card {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid var(--line);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(8, 7, 8, 0.04);
}

.large-card {
  grid-column: span 1;
}

.card-visual {
  height: 220px;
  background-size: cover;
  background-position: center;
}

.visual-one {
  background-image: linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.25)), url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80');
}

.visual-two {
  background-image: linear-gradient(180deg, rgba(255,123,78,0.18), rgba(255,93,89,0.25)), url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80');
}

.visual-three {
  background-image: linear-gradient(180deg, rgba(0,0,0,0.14), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80');
}

.card-copy {
  padding: 18px 18px 20px;
}

.label {
  margin: 0 0 10px;
  color: var(--orange-2);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 700;
}

.card-copy h3 {
  margin: 0 0 8px;
  font-size: 1.45rem;
  letter-spacing: -0.05em;
}

.card-copy p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.about {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 26px;
  background: rgba(255, 255, 255, 0.35);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 28px;
  margin: 28px 0 34px;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--orange-2);
  font-size: 0.76rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.about-copy h2 {
  margin: 0 0 14px;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.06em;
}

.about-copy p:last-child {
  margin: 0;
  color: var(--muted);
  font-size: 1.04rem;
  line-height: 1.8;
}

.skill-stack {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 12px;
  padding-top: 12px;
}

.skill-stack span {
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  background: rgba(255, 124, 93, 0.08);
  border: 1px solid rgba(255, 124, 93, 0.18);
  color: var(--orange-2);
  border-radius: 999px;
  font-weight: 600;
}

.footer {
  padding: 18px 0 30px;
}

.foot-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid var(--line);
  padding: 22px 20px;
  border-radius: 26px;
}

.footer p {
  margin: 10px 0 0;
  color: var(--muted);
}

@media (max-width: 980px) {
  .showcase {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin: 0 auto;
  }

  .project-gallery {
    grid-template-columns: 1fr;
  }

  .about {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-wrap: wrap;
  }

  .nav {
    order: 3;
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 560px) {
  .page-shell {
    width: min(100% - 18px, 1220px);
  }

  .topbar {
    padding: 14px 16px;
  }

  .nav {
    gap: 16px;
    flex-wrap: wrap;
  }

  .nav-btn {
    padding: 0.7rem 1rem;
  }

  .phone-frame {
    height: 540px;
  }

  .brand-mark {
    font-size: 1.8rem;
  }

  .foot-wrap {
    flex-direction: column;
    align-items: flex-start;
  }
}

