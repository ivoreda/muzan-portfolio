import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimations = () => {
  gsap
    .timeline({ defaults: { ease: "power4.out" } })
    .from(".nav", { y: -28, opacity: 0, duration: 0.8 })
    .from(".hero-title", { y: 60, opacity: 0, duration: 1 }, "-=0.35")
    .from(".hero-copy, .hero-kicker, .hero-actions", {
      y: 34,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
    }, "-=0.55")
    .from(".hero-stack-labels span", {
      y: 20,
      opacity: 0,
      duration: 0.55,
      stagger: 0.08,
    }, "-=0.45");
};

export const initScrollReveals = () => {
  gsap.utils.toArray("[data-reveal]").forEach((element) => {
    gsap.from(element, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 84%",
        once: true,
      },
    });
  });

  gsap.utils.toArray("[data-stagger]").forEach((group) => {
    gsap.from(group.children, {
      y: 32,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: group,
        start: "top 82%",
        once: true,
      },
    });
  });
};

export const initTextReveals = () => {
  gsap.utils.toArray(".reveal-text").forEach((heading) => {
    gsap.from(heading.querySelectorAll(".word"), {
      yPercent: 110,
      opacity: 0,
      duration: 0.8,
      stagger: 0.035,
      ease: "power4.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        once: true,
      },
    });
  });
};

export const initSkillStack = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    return;
  }

  gsap.utils.toArray(".skill-stack-card").forEach((card, index) => {
    gsap.to(card, {
      scale: 0.92 + index * 0.015,
      rotate: index % 2 === 0 ? -1.5 : 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: "top 120px",
        end: "bottom 120px",
        scrub: true,
      },
    });
  });
};

export const initStackRibbon = () => {
  gsap.to(".stack-ribbon-track", {
    xPercent: -50,
    duration: 34,
    repeat: -1,
    ease: "linear",
  });
};

export const initFloatingIcons = () => {
  gsap.to(".retro-icon", {
    y: -14,
    rotate: 4,
    duration: 2.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.18,
  });

  gsap.to(".retro-wiggle, .code-line", {
    scaleX: 0.68,
    transformOrigin: "left center",
    duration: 1.15,
    repeat: -1,
    yoyo: true,
    stagger: 0.12,
    ease: "sine.inOut",
  });

  gsap.to(".retro-blink", {
    opacity: 0.25,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
};

export const initExperienceReveals = () => {
  gsap.utils.toArray(".experience-card").forEach((card) => {
    gsap.from(card, {
      y: 48,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 82%",
        once: true,
      },
    });

    gsap.from(card.querySelectorAll("li"), {
      y: 16,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 78%",
        once: true,
      },
    });
  });
};

export const initProjectsHorizontalScroll = () => {
  const stage = document.querySelector(".projects-pin-stage");
  const wrap = document.querySelector(".projects-horizontal-wrap");
  const track = document.querySelector(".projects-horizontal-track");

  if (!stage || !wrap || !track) {
    return;
  }

  const getTravel = () => Math.max(0, track.scrollWidth - wrap.clientWidth);

  if (getTravel() === 0) {
    return;
  }

  const cardCount = track.querySelectorAll(".project-horizontal-card").length;

  gsap.to(track, {
    x: () => -getTravel(),
    ease: "none",
    scrollTrigger: {
      trigger: stage,
      start: "top top",
      end: () => `+=${Math.max((cardCount - 1) * window.innerHeight * 0.9, getTravel())}`,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
};

export const disableMotion = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.globalTimeline.clear();
  document.body.classList.add("reduced-motion");
};

export { gsap, ScrollTrigger };
