var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 100 + "px";
  blur.style.top = dets.y - 100 + "px";
});

// comes in the form of node list like a array
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "0.5px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = " 0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "90px",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    // end
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 60%",
    end: "top 58%",
    scrub: 3,
  },
});
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
// gsap.from("#colon2", {
//   y: -70,
//   x: -70,
//   scrollTrigger: {
//     trigger: "#colon2",
//     scroller: "body",
//     start: "top 55%",
//     end: "top 47%",
//     scrub: 4,
//   },
// });
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 50%",
    end: "top 47%",
    scrub: 4,
  },
});
