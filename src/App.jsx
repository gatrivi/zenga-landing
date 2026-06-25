import { siteContent } from './data/siteContent.js';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import WorkSamples from './components/WorkSamples.jsx';
import Team from './components/Team.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skipLink" href="#services">
        Skip to content
      </a>
      <Header brand={siteContent.brand} navItems={siteContent.navItems} />
      <main>
        <Hero hero={siteContent.hero} />
        <Services services={siteContent.services} features={siteContent.features} />
        <WorkSamples samples={siteContent.workSamples} />
        <Team team={siteContent.team} />
        <Testimonials testimonials={siteContent.testimonials} />
        <Contact contact={siteContent.contact} />
      </main>
      <Footer footer={siteContent.footer} />
    </>
  );
}

