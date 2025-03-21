


//Pin Single Content
// let st = ScrollTrigger.create({
//   trigger: ".start",
//   pin: true,
//   start: "top top",
//   end: "bottom top",
//   pinSpacing: false,
//   markers: true
// });

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
        id: "scale",
    });
});

// const bodybg = gsap.utils.toArray('.start-bg');
// bodybg.forEach((bodybg, i) => {
//     const anim = gsap.fromTo(bodybg, { backgroundColor:"#fff" }, { backgroundColor:"#14141D" });
//     ScrollTrigger.create({
//         trigger: bodybg,
//         animation: anim,
//         toggleActions: 'restart none none none',
//         scrub:true,
//         markers:true,
//         end: "+=800%",
//         // end: "+=450%",
//         start: "center center",
//         end: "center center",
//         id: "start-bg",

//     });
// });

//Image Scale
const imageScale = gsap.utils.toArray('.imageScale');
imageScale.forEach((box, i) => {
  const anim = gsap.fromTo(box, { scale: 1.8,willChange: "transform",}, { duration: 4, autoAlpha: 1, scale: 1, willChange: "transform",});
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: 'play none none none',
    once: true
  });
});

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".start-content",
    toggleActions: "play none none none",
    // markers: true,
    scrub: true,
    pin: ".start",
    pinSpacing: false,
    start: "top+=1 top",
    end: "bottom top",
    // end: "bottom top+=10%",
    id: "start-bg"
  }
});

timeline.to(
  ".start-bg",{
    backgroundColor: "#CECFD4",
  }
);

//Footer
// gsap.registerPlugin(ScrollTrigger);
// gsap.set(".footer-content", { yPercent: -50 });

// const uncover = gsap.timeline({ paused: true });

// uncover.to(".footer-content", { yPercent: 0, ease: "none" });

// ScrollTrigger.create({
//   trigger: ".conclusion",
//   start: "bottom bottom",
//   end: "+=75%",
//   animation: uncover,
//   scrub: true,
// });

// ScrollTrigger.refresh();


const tl1 = gsap.timeline();
const categoryMenu = gsap.timeline({
  paused: "true",
});

categoryMenu.to(".side-menu", 0.20, {
  autoAlpha: 1,
  visibility:"visible"
});

categoryMenu.to(".menu-container", {
  duration: 1,
  x: 0,
  ease:Power3.easeOut,
});
categoryMenu.from(
  ".menu-close",
  {
    opacity: 0,
    // rotate: "180deg",
  },
  "-=.2"
);
categoryMenu.from(
  ".line",
  {
    duration: 1,
    stagger: {
      amount: 0.5,
    },
    width: "0%",
  },
  "-=.2"
);

categoryMenu.to(
  ".menu-title",
  {
    duration: .5,
    autoAlpha: 1,
  },
  "-=1.3"
);

categoryMenu.from(
  ".menu-item-name",
  {
    duration: 1.4,
    stagger: {
      amount: 0.5,
    },
    y: 150,
  },
  "-=1.3"
);

function menuOpen() {
  categoryMenu.play();
  smoother.paused(true);
}
function menuClose() {
  categoryMenu.reverse();
  smoother.paused(false);
}

$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    categoryMenu.reverse();
    smoother.paused(false);
  }
});

