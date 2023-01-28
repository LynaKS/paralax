const element = document.getElementById("menu");
element.addEventListener("click", myFunction);

function myFunction() {
    $(".navigation").slideToggle();
}

gsap.from("#txt", {
    scrollTigger: {
        scrub: true
    },
    x: 350
});
gsap.from("#img1", {
    scrollTrigger: {
        scrub: true
    },
    y: 100
});
gsap.from("#img2", {
    scrollTrigger: {
        scrub: true
    },
    y: 50
});
gsap.from("#img3", {
    scrollTrigger: {
        scrub: true
    },
    y: 200
});
gsap.from("#img4", {
    scrollTrigger: {
        scrub: true
    },
    y: 150
});
gsap.from("#img4", {
    scrollTrigger: {
        scrub: true
    },
    y: 150
});
gsap.from("#crs", {
    scrollTrigger: {
        scrub: true
    },
    y: 100
});
gsap.from("#house", {
    scrollTrigger: {
        scrub: true
    },
    y: 50
});