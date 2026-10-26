import Image from "next/image";
import { site, services, reviews, featuredQuote, highlights } from "@/lib/site";
import { EngineIcon } from "@/components/EngineIcon";
import { OpenStatus, TodayMarker } from "@/components/OpenStatus";
import { SiteMotion } from "@/components/SiteMotion";
import { VideoToggle } from "@/components/VideoToggle";

const fmt = (t: string) => {
  const h = Number(t.slice(0, 2));
  return `${((h + 11) % 12) + 1}:${t.slice(3)} ${h < 12 ? "AM" : "PM"}`;
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  );
}
function Stars() {
  return (
    <span className="stars" aria-hidden="true">
      {"★★★★★"}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <SiteMotion />
      <TodayMarker />
      <a className="skip" href="#main">Skip to content</a>

      <header className="bar">
        <a href="#top" className="mark" aria-label={`${site.name}, back to top`}>
          <EngineIcon className="mark-icon" />
          <span className="mark-text">
            <b>Affordable</b>
            <span>Auto Repair</span>
          </span>
        </a>
        <nav className="nav" aria-label="Sections">
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#visit">Hours &amp; directions</a>
        </nav>
        <a className="btn btn-amber btn-sm" href={site.phoneHref} aria-label={`Call ${site.phone}`}>
          <PhoneIcon />
          <span>{site.phone}</span>
        </a>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-media" data-depth="0.35">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/media/hero-poster.jpg"
              aria-hidden="true"
            >
              <source src="/media/hero-mobile.mp4" type="video/mp4" media="(max-width: 759px)" />
              <source src="/media/hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <VideoToggle />
          <div className="hero-inner wrap">
            <p className="kicker">
              <span>{site.street}</span>
              <span>Gastonia, NC</span>
            </p>
            <h1 id="hero-title" className="hero-title">
              Straight answers.
              <br />
              <em>Fair prices.</em>
            </h1>
            <p className="hero-lede">
              An independent repair shop on West Franklin Blvd. Bring us the noise, the light on the dash, or the
              car three other shops couldn&rsquo;t figure out.
            </p>
            <div className="hero-cta">
              <a className="btn btn-amber btn-lg" href={site.phoneHref}>
                <PhoneIcon />
                Call {site.phone}
              </a>
              <a className="btn btn-ghost btn-lg" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
            </div>
            <div className="hero-meta">
              <a className="rating" href={site.reviewsUrl} target="_blank" rel="noopener noreferrer">
                <strong>{site.rating}</strong>
                <span>
                  <Stars />
                  <small>{site.reviewCount} Google reviews</small>
                </span>
              </a>
              <OpenStatus className="status" />
            </div>
          </div>
        </section>

        {/* HIGHLIGHT TICKER */}
        <section className="ticker" aria-label="What customers say most">
          <div className="ticker-track">
            {[0, 1].map((k) => (
              <ul key={k} aria-hidden={k === 1 ? "true" : undefined}>
                {highlights.map((h) => (
                  <li key={h}>
                    <EngineIcon className="ticker-icon" />&ldquo;{h}&rdquo;
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* THE LIGHT */}
        <section className="light wrap" aria-labelledby="light-title">
          <div className="light-copy">
            <p className="label" data-reveal>Diagnostics</p>
            <h2 id="light-title" className="h2" data-reveal>
              That little light
              <br />
              on your dash.
            </h2>
            <blockquote className="pull" data-reveal>
              <p>&ldquo;{featuredQuote.text}&rdquo;</p>
              <footer>
                {featuredQuote.name} · Google review · then she brought it here.
              </footer>
            </blockquote>
            <p className="body" data-reveal>
              If that sounds familiar, start here. We diagnose first, tell you what we found and what it&rsquo;ll
              take, and only then pick up a wrench.
            </p>
          </div>
          <figure className="light-figure">
            <div className="frame" data-depth="0.12">
              <Image
                src="/media/diagnostics.jpg"
                alt="A technician reads a diagnostic scanner plugged in under a car's dashboard while the engine light glows"
                width={896}
                height={1120}
                sizes="(max-width: 860px) 92vw, 40vw"
              />
            </div>
          </figure>
        </section>

        {/* SERVICES */}
        <section className="services" id="services" aria-labelledby="services-title">
          <div className="wrap services-grid">
            <div className="services-head">
              <p className="label" data-reveal>Services</p>
              <h2 id="services-title" className="h2" data-reveal>
                What we
                <br />
                work on
              </h2>
              <p className="body" data-reveal>
                Not on the list? Call and describe what the car is doing. If it&rsquo;s something we don&rsquo;t do,
                we&rsquo;ll tell you that too.
              </p>
              <figure className="services-figure" data-reveal>
                <div className="frame" data-depth="0.08">
                  <Image
                    src="/media/brakes.jpg"
                    alt="A mechanic measures a brake rotor with calipers on a car raised on a lift"
                    width={896}
                    height={1120}
                    sizes="(max-width: 860px) 92vw, 32vw"
                  />
                </div>
              </figure>
            </div>
            <ol className="ro" aria-label="Services">
              <li className="ro-head" aria-hidden="true">
                <span>Line</span>
                <span>Work</span>
                <span>Price</span>
              </li>
              {services.map((s) => (
                <li className="ro-line" key={s.code} data-reveal>
                  <span className="ro-code">{s.code}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                  <span className="ro-price">Quoted up front</span>
                </li>
              ))}
              <li className="ro-foot" data-reveal>
                <span>No surprise charges. You approve the work before we start.</span>
                <a href={site.phoneHref}>Call for a quote &rarr;</a>
              </li>
            </ol>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about wrap" aria-labelledby="about-title">
          <figure className="about-figure">
            <div className="frame frame-tall" data-depth="0.1">
              <Image
                src="/media/lobby.jpg"
                alt="A smiling service writer hands car keys to a customer across the front counter of the shop lobby"
                width={896}
                height={1120}
                sizes="(max-width: 860px) 92vw, 42vw"
              />
            </div>
          </figure>
          <div className="about-copy">
            <p className="label" data-reveal>The shop</p>
            <h2 id="about-title" className="h2" data-reveal>
              Tim, the crew,
              <br />
              and a quiet lobby.
            </h2>
            <p className="body" data-reveal>
              Affordable Auto Repair is owner-run. Ask around and you&rsquo;ll hear the same three words about{" "}
              {site.owner} and the crew: honest, transparent, fair. No up-selling, no runaround.
            </p>
            <p className="body" data-reveal>
              While you wait, there&rsquo;s a peaceful, comfortable lobby. The entrance and parking lot are wheelchair
              accessible.
            </p>
            <dl className="facts" data-reveal>
              <div>
                <dt>{site.rating}★</dt>
                <dd>average on Google</dd>
              </div>
              <div>
                <dt>{site.reviewCount}</dt>
                <dd>customer reviews</dd>
              </div>
              <div>
                <dt>M–F</dt>
                <dd>7:30 AM to 5:30 PM</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="reviews" id="reviews" aria-labelledby="reviews-title">
          <div className="wrap">
            <div className="reviews-head">
              <h2 id="reviews-title" className="h2" data-reveal>
                In their words
              </h2>
              <a className="rating rating-dark" href={site.reviewsUrl} target="_blank" rel="noopener noreferrer" data-reveal>
                <strong>{site.rating}</strong>
                <span>
                  <Stars />
                  <small>Read all {site.reviewCount} on Google</small>
                </span>
              </a>
            </div>
            <div className="tickets">
              {reviews.map((r, i) => (
                <figure className="ticket" key={r.name} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="ticket-top" aria-hidden="true">
                    <span>Google review</span>
                    <Stars />
                  </div>
                  <blockquote>
                    <p>{r.text}</p>
                  </blockquote>
                  <figcaption>
                    <b>{r.name}</b>
                    <span>{r.when}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* VISIT */}
        <section className="visit" id="visit" aria-labelledby="visit-title">
          <div className="wrap visit-grid">
            <div className="visit-copy">
              <p className="label label-amber" data-reveal>Visit</p>
              <h2 id="visit-title" className="h2" data-reveal>
                Call ahead.
                <br />
                We stay busy.
              </h2>
              <address className="addr" data-reveal>
                {site.street}
                <br />
                {site.city}, {site.region} {site.zip}
              </address>
              <div className="visit-cta" data-reveal>
                <a className="btn btn-amber btn-lg" href={site.phoneHref}>
                  <PhoneIcon />
                  {site.phone}
                </a>
                <a className="btn btn-ghost btn-lg" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Directions
                </a>
              </div>
              <table className="hours" data-reveal>
                <caption>
                  <OpenStatus className="status status-sm" />
                </caption>
                <tbody>
                  {site.hours.map((h) => (
                    <tr key={h.day} data-day={h.d}>
                      <th scope="row">{h.day}</th>
                      <td>{h.open && h.close ? `${fmt(h.open)} – ${fmt(h.close)}` : "Closed"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="map" data-reveal>
              <iframe
                title={`Map to ${site.name}, ${site.street}, ${site.city}`}
                src={site.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-inner">
          <div className="mark mark-foot">
            <EngineIcon className="mark-icon" />
            <span className="mark-text">
              <b>Affordable</b>
              <span>Auto Repair</span>
            </span>
          </div>
          <p>
            {site.street}, {site.city}, {site.region} {site.zip} ·{" "}
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
          <p className="foot-small">
            Photos are illustrative. Reviews quoted from Google.
            <br />
            <span>
              Designed by{' '}
              <a
                href="https://www.sitesonpolaris.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition"
              >
                Sites on Polaris
              </a>
            </span>
          </p>
        </div>
      </footer>

      <a className="callbar" href={site.phoneHref} aria-label={`Call ${site.name} at ${site.phone}`}>
        <PhoneIcon />
        Call the shop
        <span>{site.phone}</span>
      </a>
    </>
  );
}
