gsap.registerPlugin(TextPlugin);

const tl = gsap.timeline({ delay: 1 });

tl.to(".animated-text", {
  duration: 2,
  text: "Learn Languages with Ease",
  ease: "none",
  scrollTrigger: {
    trigger: ".animated-text",
    start: "top 80%",
    toggleActions: "play none none none",
  },
})
  .fromTo(
    ".join-text",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".join-text",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  )
  .fromTo(
    ".join-btn",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".join-btn",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  )
  .fromTo(
    ".coures-title",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".coures-title",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  )
  .fromTo(
    ".coures-subtitle",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".coures-subtitle",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  )
  .fromTo(
    ".card-course",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".card-course",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

gsap.utils.toArray(".why-item").forEach((item, index) => {
  gsap.from(item, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    delay: index * 0.3,
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      end: "top 80%",
      toggleActions: "play none none none",
    },
  });
});

gsap.from(".why-title", {
  opacity: 0,
  y: 30,
  duration: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".why-title",
    start: "top 80%",
    end: "top 80%",
    toggleActions: "play none none none",
  },
});
