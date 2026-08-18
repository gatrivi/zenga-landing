import { siteContent } from './data/siteContent.js';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import WorkSamples from './components/WorkSamples.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import MotionLayer from './components/MotionLayer.jsx';

export default function App() {
  return (
    <>
      <a className="skipLink" href="#services">
        Skip to content
      </a>
      <MotionLayer />
      <Header brand={siteContent.brand} navItems={siteContent.navItems} />
      <main>
        <Hero hero={siteContent.hero} sideImage={siteContent.workSamples?.[0]?.image} />
        <Services services={siteContent.services} features={siteContent.features} />
        <WorkSamples samples={siteContent.workSamples} testimonials={siteContent.testimonials} />
        <Team team={siteContent.team} />
        <Contact contact={siteContent.contact} />
      </main>
      <Footer footer={siteContent.footer} />
    </>
  );
}
