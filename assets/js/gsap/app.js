

gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.create({
	trigger: 'footer',
	animation: gsap.fromTo('.footercontent', {y:-300, willChange: "transform", }, {y:0, willChange: "transform",}),
	start: '-400px center',
	end: 'bottom top',
	scrub: true, // I like the 1 sec delay, set to true for exact anime on scroll
	// markers: true,
})

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

