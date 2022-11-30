

gsap.registerPlugin(ScrollTrigger);
// gsap.to(".start .bodyScroll", {
//   autoAlpha: 0,
//   scrollTrigger: {
//     trigger: ".start .bodyScroll",
//     start: "center center",
//     end: "center center",
//     scrub: true,
//     markers: true,
//   }
// });

//Pin Single Content
let st = ScrollTrigger.create({
  trigger: '.start',
  pin: true,
  start: "top top",
  end: "+=100%",
  pinSpacing: false,
});

const scrollAnimated = gsap.utils.toArray('.start-content.bodyScroll');
scrollAnimated.forEach((box, i) => {
    const anim = gsap.fromTo(box, { scale: 1, }, { scale: .6 });
    ScrollTrigger.create({
        trigger: box,
        animation: anim,
        toggleActions: 'restart none none none',
        scrub:true,
        // markers:true,
        once: true,
        end: "+=350%",
        // end: "+=450%",
        start: "center 45%",
        // end: "center center",
        id: "scrubbbbbb",
    });
});

const bodybg = gsap.utils.toArray('.start');
bodybg.forEach((bodybg, i) => {
    const anim = gsap.fromTo(bodybg, { backgroundColor:"#fff" }, { backgroundColor:"#14141D" });
    ScrollTrigger.create({
        trigger: bodybg,
        animation: anim,
        toggleActions: 'restart none none none',
        scrub:true,
        // markers:true,
        end: "+=800%",
        // end: "+=450%",
        start: "center center",
        // end: "center center",
        id: "start",

    });
});

gsap.to(".arrowdown", { y: -25, ease: "power1.inOut", repeat: -1, duration:1.2, yoyo: true, delay:3,});

//Fadeup
const fadeupAnimated = gsap.utils.toArray('.fadeup');
fadeupAnimated.forEach((box, i) => {
  const anim = gsap.fromTo(box, { autoAlpha: 0, y: 150 }, { duration: 1, autoAlpha: 1, y: 0 });
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: 'play none none none',
    once: true
  });
});

//FadeIn Text
const fadeInAnimated = gsap.utils.toArray('.imageScale');
fadeInAnimated.forEach((box, i) => {
  const anim = gsap.fromTo(box, { scale: 1.8,willChange: "transform",}, { duration: 4, autoAlpha: 1, scale: 1, willChange: "transform",});
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: 'play none none none',
    once: true
  });



const mm = gsap.matchMedia();
  mm.add("(min-width: 768px)", () => {

      const startcard = gsap.utils.toArray('.card-items .caption .head');
      startcard.forEach((startcard, i) => {
        const anim = gsap.fromTo(startcard, { scale: 1.2, willChange: "transform", }, {scale: 1, duration:10, willChange: "transform", });
        ScrollTrigger.create({
          trigger: startcard,
          animation: anim,
          toggleActions: 'play none none none',
          scrub: 1,
          start: '-20% center',
          end: '-40% top',
        });
      });

    });
});


