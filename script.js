var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#one",
    start: "60% 50%",
    end: "150% 50%",
    scrub: 1
  }
})
function one() {
  tl1.to("#img1", {
    width: "300px",
    top: "120%",
    left: "15%"
  }, "one")
  tl1.to("#img2", {
    top: "170%",
    left: "24.5%"
  }, "one")
  tl1.to("#img3", {
    top: "160%",
    left: "24.5%"
  }, "one")
  tl1.to("#img4", {
    width: "200px",
    top: "170%",
    left: "10.5%"
  }, "one")
  tl1.to("#img5", {
    top: "165%",
    left: "12.5%"
  }, "one")
  tl1.to("#img6", {
    width: "350px",
    top: "145%",
    left: "15.5%"
  }, "one")
}
one()
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#two",
    start: "50% 50%",
    end: "150% 50%",
    scrub: 1,
    // markers: true
  }
})
function two() {
  tl2.to("#one>#img1", {
    top: "200%",
    left: "42%",
    width: "290px"
  }, "two")
  tl2.to("#one>#img2", {
    top: "220%",
    left: "39%"
  }, "two")
  tl2.to("#one>#img3", {
    top: "220%",
    left: "48%"
  }, "two")
  tl2.to("#one>#img4", {
    top: "240%",
    left: "42%",
    width: "320px"
  }, "two")
  tl2.to("#one>#img5", {
    top: "240%",
    left: "39%",
    width: "320px"
  }, "two")
}
two()
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#three",
    start: "50% 50%",
    end: "350% 50%",
    scrub: 2,
  }
})
function three() {
  tl3.to(".one1>#img11", {
    top: "180%",
    left: "138.5%",
    width: "360px"
  }, "three")
  tl3.to(".one1>#img12", {
    top: "175%",
    left: "100.5%",
    width: "250px"
  }, "three")
  tl3.to(".one1>#img11", {
    top: "400%",
    left: "20%",
  }, "three1")
  tl3.to(".one1>#img12", {
    width: "517px",
    left: "5.033%",
    top: "391.435%"
  }, "three1")
  tl3.to(".one1>#img11", {
    width: "271px",
    left: "153%",
    top: "576%"
  }, "three2")
  tl3.to(".one1>#img12", {
    width: "292px",
    left: "151.5%",
    top: "565%"
  }, "three2")
}
three()
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#six",
    start: "55% 50%",
    end: "450% 50%",
    scrub: 2
  }
})
function four() {
  tl4.to("#img31", {
    top: "189%",
    left: "120%"
  }, "five1"),
    tl4.to("#img32", {
      width: "454px",
      zIndex: "2",
      left: "124.584%",
      top: "201.012%"
    }, "five1")
  tl4.to("#img31", {
    left: "-3%",
    top: "400%",
    width: "680px"
  }, "five2")
  tl4.to("#img32", {
    left: "24%",
    top: "444%",
    width: "400px"
  }, "five2")
  tl4.to("#img31", {
    left: "114%",
    top: "569%",
    width: "590px"
  }, "five3")
  tl4.to("#img32", {
    left: "140%",
    top: "600%",
    width: "400px"
  }, "five3")
  tl4.to("#img31", {
    top: "774%",
    left: "185%",
    rotate: "21deg"
  })
}
four()
var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ten",
    start: "60% 50%",
    end: "150% 50%",
    scrub: 2,
  }
})
function five() {
  tl5.to("#img51", {
    top: "182%",
    left: "90%",
    rotate: "-21deg"
  }, "same")
  tl5.to("#img53", {
    left: "-114%",
    top: "155%",
    width: "350px",
    zIndex:"11"
  }, "same")
}
five()  