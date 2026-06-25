import reactStoreImg from '../../ZengaSoft - Software Services_files/react1.png';
import omniSiteImg from '../../ZengaSoft - Software Services_files/ssomni1.png';
import gizReadyImg from '../../ZengaSoft - Software Services_files/ssglozzom1.png';
import looplabImg from '../../ZengaSoft - Software Services_files/ssloop.png';
import mizuxeImg from '../../ZengaSoft - Software Services_files/mizuxe2.png';
import animatedImg from '../../ZengaSoft - Software Services_files/ssanimated1.png';

import teamAlexImg from '../../ZengaSoft - Software Services_files/smile.jpeg';
import teamJoeImg from '../../ZengaSoft - Software Services_files/smile_4.jpg';
import teamFacuImg from '../../ZengaSoft - Software Services_files/smile_6.jpg';
import teamUlisesImg from '../../ZengaSoft - Software Services_files/smile_man_1.jpg';
import testimonialImg from '../../ZengaSoft - Software Services_files/frida.jpg';

import iconTwitterImg from '../../ZengaSoft - Software Services_files/tr.png';
import iconTelegramImg from '../../ZengaSoft - Software Services_files/tg.png';
import iconInstagramImg from '../../ZengaSoft - Software Services_files/ig.png';

export const siteContent = {
  brand: {
    name: 'ZengaSoft',
  },
  navItems: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    backgroundImage: 'https://www.photos.zengasoft.com/zstudio1.jpg',
    headline: 'Software that makes the boring parts of your business behave.',
    lead: 'We build fast, practical web apps for small businesses: stores, dashboards, booking systems, automations, and AI tools that save time instead of creating new chores.',
    primaryCta: { label: 'Tell us what is wasting your time', href: '#contact' },
    secondaryCta: { label: 'See what we build', href: '#work' },
    pills: ['Fast builds', 'Practical tools', 'Human-first automation'],
  },
  services: [
    {
      title: 'Websites & landing pages that convert',
      description:
        'Clear messaging, fast load times, and conversion-focused layouts for small businesses that need sales—without drama.',
      tags: ['Mobile-first', 'SEO-ready', 'Conversion copy'],
    },
    {
      title: 'Stores, dashboards, and booking systems',
      description:
        'From “pick a product” to “manage orders,” we build the workflow your team actually uses.',
      tags: ['Stores', 'Dashboards', 'Bookings'],
    },
    {
      title: 'Automation & integrations',
      description:
        'Connect your tools so lead → customer → follow-up happens automatically (and reliably).',
      tags: ['Zap-ready', 'Calendars', 'CRMs'],
    },
    {
      title: 'AI-assisted workflows',
      description:
        'We turn messy work into repeatable flows: summaries, drafts, routing, and decision support—kept human-safe.',
      tags: ['Assistive AI', 'Workflows', 'Safeguards'],
    },
    {
      title: 'Modern design systems',
      description:
        'A consistent look that stays maintainable, so you can ship updates without breaking the site.',
      tags: ['Components', 'Consistency', 'Maintainable UI'],
    },
    {
      title: 'Fast support & iteration',
      description:
        'When something stops working, we fix it. When something can be better, we make it better—continuously.',
      tags: ['Quick fixes', 'Small releases', 'Reliability'],
    },
  ],
  features: [
    {
      title: 'Reliable delivery',
      text: 'We ship in small steps and keep you in the loop. Less waiting. More momentum.',
    },
    {
      title: 'Clarity over complexity',
      text: 'We build for humans first: clear UX, readable code, and predictable behavior.',
    },
    {
      title: 'Automation that earns its keep',
      text: 'Every integration we add has a purpose: it saves time, reduces errors, or increases throughput.',
    },
    {
      title: 'AI, but grounded',
      text: 'We use AI to help the right people at the right time—never as a black box.',
    },
    {
      title: 'Launch-ready performance',
      text: 'Fast pages, stable flows, and sensible defaults so your business doesn’t stall after day one.',
    },
  ],
  workSamples: [
    {
      title: 'React Online Store',
      description: 'A fast, modern storefront with a clean checkout flow.',
      href: 'https://www.crown-clothes.com/',
      image: reactStoreImg,
      tags: ['Store', 'React', 'Conversion'],
    },
    {
      title: 'Custom Business Site',
      description: 'Mobile-first design with built-in structure for future pages.',
      href: 'https://omni.gatrivi.com/',
      image: omniSiteImg,
      tags: ['Landing', 'Brand', 'Structure'],
    },
    {
      title: 'Ready-to-go Web Solution',
      description: 'A practical base you can adapt without starting from scratch.',
      href: 'https://glozzom.gatrivi.com/',
      image: gizReadyImg,
      tags: ['Template-safe', 'Fast', 'Maintainable'],
    },
    {
      title: 'Automation-friendly App',
      description: 'A workflow that keeps your operations moving with less manual effort.',
      href: 'https://looplab.gatrivi.com/',
      image: looplabImg,
      tags: ['Automation', 'Workflow', 'Quality'],
    },
    {
      title: 'Modern Web Project',
      description: 'A sharp UI with sensible performance and responsive layout.',
      href: 'https://mizuxe.gatrivi.com/',
      image: mizuxeImg,
      tags: ['UI', 'Responsive', 'Performance'],
    },
    {
      title: 'Animated Webpage (Lightweight)',
      description: 'Polish that doesn’t slow you down—built for real users.',
      href: 'https://animated.zengasoft.com/',
      image: animatedImg,
      tags: ['Polish', 'UX', 'Speed'],
    },
  ],
  team: [
    {
      name: 'G Alex Trivi',
      role: 'Frontend & DevOps',
      href: 'https://www.linkedin.com/in/gatrivi/',
      image: teamAlexImg,
    },
    {
      name: 'Joe "Tiny" Ruiz',
      role: 'Sketching & Design',
      href: 'https://www.linkedin.com/in/jose-leopoldo-ruiz-carbonell-26a4b133/',
      image: teamJoeImg,
    },
    {
      name: 'Facu Salz',
      role: 'Backend',
      href: 'https://www.linkedin.com/in/facundo-salz/',
      image: teamFacuImg,
    },
    {
      name: 'Ulises Trivi',
      role: 'UX/UI',
      href: 'https://www.linkedin.com/in/ulises-trivi-yudewitz-8343b0207/?originalSubdomain=ar',
      image: teamUlisesImg,
    },
  ],
  testimonials: {
    heading: 'We made their work life better. What about yours?',
    quote:
      'ZengaSoft tightened our sales flow and made our online store dependable. We stopped firefighting and finally used our time where it matters most.',
    author: 'Mabel Vallejos',
    title: 'Cake Artisan',
    image: testimonialImg,
  },
  contact: {
    title: 'Tell us what is wasting your time',
    lead: 'Wonder how ZengaSoft can help? Send us a quick story and we’ll reply with a practical plan in 40 words or less.',
    formAction: 'https://formspree.io/f/xpzbybyw',
    fields: {
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'What’s the problem?',
    },
    submitLabel: 'Let our code do the heavy lifting',
    placeholders: {
      firstName: 'Mr',
      lastName: 'Plenty',
      email: 'leader@yourbusiness.com',
      message: "So here's the thing...",
    },
  },
  footer: {
    copyright: '© 2021 ZengaSoft. All rights reserved.',
    socials: [
      { label: 'Twitter', href: 'https://twitter.com/ZengaSoft/', image: iconTwitterImg },
      { label: 'Telegram', href: 'https://t.me/zengasoft', image: iconTelegramImg },
      { label: 'Instagram', href: 'https://instagram.com/devzenga', image: iconInstagramImg },
    ],
  },
};

