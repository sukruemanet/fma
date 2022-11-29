let windowWidth = window.outerWidth;

$(".split-text").each(function (index) {
  let myText = $(this);
  let mySplitText;
  function createSplits() {
    mySplitText = new SplitText(myText, {
      type: "chars,words,lines",
      charsClass: "split-chars",
      wordsClass: "split-words",
      linesClass: "split-lines"
    });
  }
  createSplits();
  $(window).resize(function () {
    if (window.outerWidth !== windowWidth) {
      mySplitText.revert();
      location.reload();
    }
    windowWidth = window.outerWidth;
  });
});

gsap.registerPlugin(ScrollTrigger);

function createTextAnimations() {
  // Letter Animation
  $(".letter-animation").each(function (index) {
    let triggerElement = $(this);
    let myText = $(this).find(".split-text");
    let targetElement = $(this).find(".split-chars");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none none",
        // toggleActions: "restart none none none"
      }
    });
    tl.from(targetElement, {
      duration: 0.5,
      y: "60%",
      opacity: 0,
      rotationX: -90,
      ease: "power1.inOut",
      stagger: {
        amount: 0.7,
        from: "0"
      }
    });
  });
}
createTextAnimations();


// ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();