import { useEffect } from 'react';

const revealSelector = [
  '.hero .eyebrow',
  '.hero .h1',
  '.heroLead',
  '.heroButtons',
  '.heroBullets',
  '.sectionHeader',
  '.card',
  '.teamHead',
  '.contactFormPanel',
  '.footerInner',
].join(', ');

export default function MotionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(pointer: fine)');
    const revealTargets = [...document.querySelectorAll(revealSelector)];
    const nav = document.querySelector('.topNav');
    const heroCard = document.querySelector('.heroSideCard');
    const interactiveCards = [...document.querySelectorAll('.cardHover')];
    const cleanups = [];

    root.classList.add('motion-ready');

    revealTargets.forEach((element, index) => {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', `${(index % 4) * 55}ms`);
    });

    let observer;
    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      revealTargets.forEach((element) => element.classList.add('isVisible'));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('isVisible');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
      );
      revealTargets.forEach((element) => observer.observe(element));
    }

    let scrollFrame = 0;
    const updateScroll = () => {
      scrollFrame = 0;
      const maxScroll = root.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      root.style.setProperty('--scroll-progress', progress.toFixed(4));
      nav?.classList.toggle('isScrolled', window.scrollY > 18);
    };
    const onScroll = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
    };
    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
    });

    if (!reduceMotion.matches && finePointer.matches) {
      let pointerFrame = 0;
      let pointerX = window.innerWidth / 2;
      let pointerY = window.innerHeight / 2;
      const paintPointer = () => {
        pointerFrame = 0;
        root.style.setProperty('--pointer-x', `${pointerX}px`);
        root.style.setProperty('--pointer-y', `${pointerY}px`);
      };
      const onPointerMove = (event) => {
        pointerX = event.clientX;
        pointerY = event.clientY;
        if (!pointerFrame) pointerFrame = requestAnimationFrame(paintPointer);
      };
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      cleanups.push(() => {
        window.removeEventListener('pointermove', onPointerMove);
        if (pointerFrame) cancelAnimationFrame(pointerFrame);
      });

      interactiveCards.forEach((card) => {
        const onCardMove = (event) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--card-x', `${event.clientX - rect.left}px`);
          card.style.setProperty('--card-y', `${event.clientY - rect.top}px`);
        };
        card.addEventListener('pointermove', onCardMove, { passive: true });
        cleanups.push(() => card.removeEventListener('pointermove', onCardMove));
      });

      if (heroCard) {
        const onHeroMove = (event) => {
          const rect = heroCard.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          heroCard.style.setProperty('--tilt-x', `${x * 5}deg`);
          heroCard.style.setProperty('--tilt-y', `${y * -5}deg`);
        };
        const resetHero = () => {
          heroCard.style.setProperty('--tilt-x', '0deg');
          heroCard.style.setProperty('--tilt-y', '0deg');
        };
        heroCard.addEventListener('pointermove', onHeroMove, { passive: true });
        heroCard.addEventListener('pointerleave', resetHero);
        cleanups.push(() => {
          heroCard.removeEventListener('pointermove', onHeroMove);
          heroCard.removeEventListener('pointerleave', resetHero);
        });
      }
    }

    return () => {
      observer?.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      revealTargets.forEach((element) => {
        element.classList.remove('reveal', 'isVisible');
        element.style.removeProperty('--reveal-delay');
      });
      nav?.classList.remove('isScrolled');
      root.classList.remove('motion-ready');
      root.style.removeProperty('--scroll-progress');
      root.style.removeProperty('--pointer-x');
      root.style.removeProperty('--pointer-y');
    };
  }, []);

  return (
    <div className="motionLayer" aria-hidden="true">
      <div className="pointerAura" />
      <div className="scrollProgress" />
    </div>
  );
}
