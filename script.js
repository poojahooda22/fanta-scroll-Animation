var tl = gsap.timeline({scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    markers: false,
}})

tl.to("#fanta", {
    top: "120%",
    left: "0%",
}, 'orange')

tl.to("#orangeCut", {
    top: "160%",
    left: "23%",
}, 'orange')

tl.to("#orange", {
    width: '15%',
    top: "160%",
    right: "10%",
}, 'orange')

tl.to("#leaf1", {
    rotate: "130deg",
    top: "108%",
    left: "75%",
}, 'orange')

tl.to("#leaf2", {
    rotate: "130deg",
    top: "110%",
    left: "5%",
}, 'orange')

var tl2 = gsap.timeline({scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    markers: true,
}})

// tl2.from("#cocacola", {
//     rotate: "-80deg",
//     left: '-50%',
//     top: '100%',
// }, 'a')

// tl2.from(".lemon1", {
//     rotate: "-90deg",
//     left: '-50%',
//     top: '100%',
// }, 'a')
