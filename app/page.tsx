import Image from "next/image";
import type { ComponentProps } from "react";

const whatsappUrl = "https://wa.me/60138119120";
const mapsUrl = "https://maps.app.goo.gl/4yyuNLaK4pV1WM728";

function StaticImage(props: ComponentProps<typeof Image>) {
  return <Image {...props} unoptimized />;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Seishinkan Aikido home">
          <span className="brand-logo" aria-hidden="true">
            <StaticImage src="/images/seishinkan-logo.png" alt="" width={72} height={72} priority />
          </span>
          <span>
            <strong>Seishinkan</strong>
            <small>Aikido Dojo · Kuching</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#story">Our story</a>
          <a href="#aikido">What is Aikido</a>
          <a href="#classes">Classes</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp us
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Aikido in Kuching · Established 1998</p>
          <h1>
            Practise with purpose.
            <em>Grow together.</em>
          </h1>
          <p className="hero-intro">
            A welcoming community devoted to the art of Aikido—developing calm,
            connection and confidence through sincere practice.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Message us on WhatsApp
            </a>
            <a className="text-link" href="#classes">View class times</a>
          </div>
          <div className="hero-note">
            <span>Beginners welcome</span>
            <span>Adults &amp; teens</span>
            <span>Three classes weekly</span>
          </div>
          <div className="hero-crest" aria-label="Official Seishinkan Aikido dojo mark">
            <StaticImage src="/images/seishinkan-logo.png" alt="Seishinkan Aikido dojo logo" width={132} height={132} />
            <span><small>Our dojo mark</small><strong>Seishinkan Aikido</strong></span>
          </div>
        </div>
        <figure className="hero-photo">
          <StaticImage
            src="/images/seishinkan-community.jpg"
            alt="Seishinkan Aikido members gathered together in the dojo"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <figcaption>One dojo. Many journeys. A shared practice.</figcaption>
        </figure>
      </section>

      <section className="story section" id="story">
        <div className="section-heading">
          <p className="eyebrow">Our story</p>
          <h2>A living tradition,<br /><em>warmly shared.</em></h2>
        </div>
        <div className="story-grid">
          <div className="story-photo">
            <StaticImage
              src="/images/seishinkan-partner-practice.jpg"
              alt="Seishinkan students practising together on the mat"
              fill
              sizes="(max-width: 760px) 100vw, 35vw"
            />
          </div>
          <div className="story-copy">
            <p className="dropcap">
              Seishinkan Aikido was founded in 1998 by Jong Kong Min and Colin
              Jarraw. From its beginning, the dojo has been a place for careful
              study, friendship and growth through the practice of Aikido.
            </p>
            <p>
              The current dojo-cho of Seishinkan Aikido is Reuben Yap (5th Dan),
              who is assisted by Jack Chong Wan Fung (3rd Dan), Desmond Andrew
              (2nd Dan) and Teguh Yuwono Pratiknyo (2nd Dan).
            </p>
          </div>
        </div>
      </section>

      <section className="aikido section" id="aikido">
        <div className="aikido-heading">
          <p className="eyebrow">What is Aikido?</p>
          <h2>A martial way<br /><em>for inner growth.</em></h2>
        </div>
        <div className="aikido-copy">
          <p className="dropcap">
            Aikido is a budo (martial way) that is focused on personal development
            and character refinement through martial art practice. The primary goal
            of Aikido is to overcome oneself instead of cultivating violence or
            aggressiveness.
          </p>
          <p>
            Aikido utilizes circular movements, joint locks, throws and pins to
            redirect an opponent&apos;s momentum and balance rather than meeting force
            with force. Its roots come from Daitō-ryū Aiki-jūjutsu, which was a
            fighting style created from the Seiwa Minamoto clan and handed down from
            generation to generation. Aikido was also heavily influenced by
            traditional swordsmanship, which can be seen in techniques where the
            hands emulate a sword.
          </p>
        </div>
      </section>

      <section className="affiliation">
        <div className="affiliation-copy">
          <p className="eyebrow">Our affiliation</p>
          <h2>Part of a wider<br />Aikido family.</h2>
          <p>
            Seishinkan is an affiliated dojo of <strong><a className="affiliation-link" href="https://akademiaikido.com/" target="_blank" rel="noreferrer">Akademi Aikido</a></strong>,
            under the technical direction of <strong>Jun Yamada Shihan, 8th Dan</strong>.
            This connection guides our technical standards and keeps our practice
            rooted in the Aikikai tradition.
          </p>
          <div className="affiliation-meta">
            <a className="affiliation-link affiliation-name" href="https://akademiaikido.com/" target="_blank" rel="noreferrer">Akademi Aikido ↗</a>
            <span>Technical direction</span>
            <strong>Jun Yamada Shihan · 8th Dan</strong>
          </div>
        </div>
        <div className="affiliation-photo">
          <StaticImage
            src="/images/seishinkan-group.jpg"
            alt="A formal group photograph of Seishinkan Aikido members and teachers"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="section practical" id="classes">
        <div className="section-heading practical-heading">
          <p className="eyebrow">Train with us</p>
          <h2>Make space<br /><em>for practice.</em></h2>
          <p>Come watch a class, meet the community, or join us on the mat.</p>
        </div>
        <div className="schedule-card">
          <p className="card-label">Weekly class schedule</p>
          <div className="schedule-row">
            <div><strong>Monday</strong><span>Evening class</span></div>
            <time>7:30–9:00 pm</time>
          </div>
          <div className="schedule-row">
            <div><strong>Wednesday</strong><span>Evening class</span></div>
            <time>7:30–9:00 pm</time>
          </div>
          <div className="schedule-row">
            <div><strong>Saturday</strong><span>Afternoon class</span></div>
            <time>2:00–3:30 pm</time>
          </div>
          <p className="schedule-note">Please arrive 10–15 minutes early for your first visit.</p>
        </div>
        <div className="fees-card">
          <p className="card-label">Fees</p>
          <dl>
            <div><dt>Registration</dt><dd>RM35 <small>one time</small></dd></div>
            <div><dt>Quarterly fee</dt><dd>RM130</dd></div>
            <div><dt>Examination fee</dt><dd>RM25</dd></div>
            <div><dt>Uniform</dt><dd>RM110</dd></div>
          </dl>
          <p>Questions about getting started? Send us a WhatsApp message.</p>
        </div>
      </section>

      <section className="gallery" aria-label="Life at Seishinkan">
        <div className="gallery-image gallery-tall">
          <StaticImage src="/images/seishinkan-training.jpg" alt="Students practising Aikido techniques in the dojo" fill sizes="50vw" />
        </div>
        <div className="gallery-image">
          <StaticImage src="/images/seishinkan-after-class.jpg" alt="Seishinkan members relaxing together after class" fill sizes="50vw" />
        </div>
        <div className="gallery-caption">
          <p className="eyebrow">More from the mat</p>
          <h2>Follow our everyday practice.</h2>
          <p>For regular training updates, events and community moments, find us on social media.</p>
          <div>
            <a href="https://www.facebook.com/seishinkan/" target="_blank" rel="noreferrer">Facebook ↗</a>
            <a href="https://www.instagram.com/seishinkanaikido/" target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </div>
      </section>

      <section className="visit section" id="visit">
        <div className="visit-details">
          <p className="eyebrow">Come say hello</p>
          <h2>Find us<br /><em>in Kuching.</em></h2>
          <address>
            3rd Floor, SL 28,<br />
            Jalan Simpang Tiga,<br />
            Panovel Commercial Centre, Kuching
          </address>
          <a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
        </div>
        <div className="whatsapp-card">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h3>WhatsApp Seishinkan</h3>
            <a className="phone" href={whatsappUrl} target="_blank" rel="noreferrer">+60 13 811 9120</a>
            <p>Scan the code or tap the number to open a WhatsApp chat with the dojo.</p>
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Open WhatsApp</a>
          </div>
          <a className="qr-wrap" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Open WhatsApp chat with Seishinkan Aikido">
            <StaticImage src="/images/whatsapp-qr.png" alt="WhatsApp QR code for Seishinkan Aikido at +60 13 811 9120" width={420} height={420} />
            <span>Scan with your phone</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-logo" aria-hidden="true">
            <StaticImage src="/images/seishinkan-logo.png" alt="" width={72} height={72} />
          </span>
          <span><strong>Seishinkan Aikido</strong><small>Kuching, Sarawak · Since 1998</small></span>
        </div>
        <p>Affiliated with <a href="https://akademiaikido.com/" target="_blank" rel="noreferrer">Akademi Aikido</a> under Jun Yamada Shihan, 8th Dan.</p>
        <div className="footer-links">
          <a href="https://www.facebook.com/seishinkan/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com/seishinkanaikido/" target="_blank" rel="noreferrer">Instagram</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
