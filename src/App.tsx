import { Reveal } from "./components/Reveal";
import { Marquee } from "./components/Marquee";
import { Icon } from "./components/Icon";
import { Brand } from "./components/Brand";
import { useScrolled } from "./hooks/useScrolled";
import { useParallax } from "./hooks/useParallax";
import { bentoTiles, capabilities, featureCards, modules, navLinks, pullQuote, roles, stats } from "./content";

function App() {
  const scrolled = useScrolled(40);
  const heroImgRef = useParallax<HTMLDivElement>(0.12);

  return (
    <main className="page" id="top">
      <div className="grain" aria-hidden="true" />

      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="shell nav__inner">
          <Brand />
          <nav className="nav__links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav__actions">
            <a className="nav__signin" href="https://church-admin.theliberec.com">
              Log in
            </a>
            <a className="button button--primary button--sm" href="#contact">
              Book a demo
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="shell hero__inner">
          <div className="hero__copy">
            <Reveal>
              <p className="eyebrow">For churches &amp; ministries</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="hero__headline">
                Your church's
                <br />
                <span className="hero__headline-accent">operating system.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lede">
                Gather replaces the pile of separate tools with one platform: a branded app your members
                actually open, a realtime dashboard your staff actually use, and a landing site that helps
                you sell the system.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="hero__actions">
                <a className="button button--primary" href="#contact">
                  Book a demo
                </a>
                <a className="button button--ghost" href="#suite">
                  See how it works
                </a>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div className="capabilities">
                {capabilities.map((cap) => (
                  <div className="capability" key={cap.label}>
                    <strong>{cap.label}</strong>
                    <span>{cap.detail}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="hero__media">
            <div className="hero__media-main" ref={heroImgRef}>
              <img src="/images/pexels-caleboquendo-34520615.jpg" alt="A member kneeling in prayer during worship, stage lights glowing behind him" />
            </div>
            <div className="hero__media-float">
              <img src="/images/pexels-jibarofoto-14373426.jpg" alt="A man worshiping, lit in blue stage light" />
            </div>
            <div className="hero__badge">
              <span className="pulse" />
              Live check-in &amp; realtime alerts
            </div>
          </div>
        </div>
      </section>

      <Marquee items={modules} />

      <section className="section section--feature-grid" id="features">
        <div className="shell">
          <Reveal>
            <div className="section__heading">
              <p className="eyebrow">Buyer features</p>
              <h2>Everything a church needs to run members, ministry, and growth.</h2>
              <p className="lede">
                Lead with the features people care about most: a polished mobile app, a powerful admin console,
                and the workflows that keep the church organized without extra tools or extra training.
              </p>
            </div>
          </Reveal>

          <div className="feature-grid">
            {featureCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 45} className={`feature-card ${i < 3 ? "feature-card--wide" : ""}`}>
                <span className="feature-card__icon">
                  <Icon name={card.icon} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={featureCards.length * 45} className="feature-banner">
            <div>
              <p className="eyebrow">Built for trust</p>
              <h3>Role-based permissions, realtime updates, and clear ownership from day one.</h3>
            </div>
            <div className="feature-banner__roles">
              {roles.map((role) => (
                <span key={role} className="pill">
                  {role}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="bento bento--secondary">
            {bentoTiles.map((tile, i) => (
              <Reveal key={tile.id} delay={i * 60} className={`bento__tile bento__tile--${tile.id}`}>
                {tile.kind === "image" ? (
                  <>
                    <img src={tile.image} alt="" className="bento__image" />
                    <div className="bento__scrim" />
                    <div className="bento__copy bento__copy--image">
                      <p className="eyebrow">{tile.eyebrow}</p>
                      <h3>{tile.title}</h3>
                      <p>{tile.body}</p>
                    </div>
                  </>
                ) : (
                  <div className="bento__copy">
                    <span className="bento__icon">
                      <Icon name={tile.icon} />
                    </span>
                    <h3>{tile.title}</h3>
                    <p>{tile.body}</p>
                  </div>
                )}
              </Reveal>
            ))}

            <Reveal delay={bentoTiles.length * 60} className="bento__tile bento__tile--roles">
              <div className="bento__roles">
                <div>
                  <h3>Every role, one login</h3>
                  <p>Permissions are read from the database per organization, not hardcoded — customize what each role can touch.</p>
                </div>
                <div className="role-pills">
                  {roles.map((role) => (
                    <span key={role} className="pill">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--split" id="suite">
        <div className="shell suite">
          <Reveal className="suite-copy">
            <p className="eyebrow">Product suite</p>
            <h2>Three surfaces. One source of truth.</h2>
            <p>
              The landing site brings buyers in. The dashboard runs your operations. The member app keeps everyone
              connected. All three speak the same visual language, backed by one API, so the system feels premium
              instead of stitched together.
            </p>
            <div className="pill-grid">
              {modules.map((mod) => (
                <span key={mod} className="pill">
                  {mod}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="suite-photo" delay={120}>
            <img src="/images/pexels-caleboquendo-34597163.jpg" alt="A member kneeling in worship, colorful stage lighting behind him" />
            <div className="suite-photo__card">
              <strong>Buyer-ready story</strong>
              <span>Sell the system with a landing page that shows the app, dashboard, and outcomes up front.</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="quote">
        <img className="quote__bg" src="/images/pexels-jibarofoto-17302769.jpg" alt="" aria-hidden="true" />
        <div className="quote__scrim" />
        <div className="shell quote__inner">
          <Reveal>
            <p className="quote__mark">&ldquo;</p>
            <p className="quote__text">{pullQuote}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="stats">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta" id="contact">
        <img className="cta__bg" src="/images/pexels-mart-production-7219393.jpg" alt="" aria-hidden="true" />
        <div className="cta__scrim" />
        <div className="shell cta__inner">
          <Reveal>
            <p className="eyebrow">Next step</p>
            <h2>Ready to bring it all together?</h2>
            <p className="lede">
              Tell us about your church and we'll walk you through Gather — giving, people, and ministry
              workflow, live in one platform.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="mailto:hello@gather.church">
                Book a demo
              </a>
              <a className="button button--ghost" href="#top">
                Back to top
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer__inner">
          <Brand />
          <nav className="nav__links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <p className="footer__copy">© {new Date().getFullYear()} Gather.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
