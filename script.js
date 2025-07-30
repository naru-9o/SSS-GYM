function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}


gsap.from(".nav .nav-content1 img, .nav .nav-content1 h1, .nav .nav-content3", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});



const slides = document.querySelectorAll(".bg-slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

showSlide();
setInterval(showSlide, 4000); // Change every 4 seconds


gsap.from(".page1, .bottom-page1, .bottom-page1>h1, .bottom-page1-inner, .bottom-page1-inner>button, .bottom-page1-inner>h4", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});



gsap.from(".page2 .page2-sec1, .page2 .page2-sec2 h1", {
    scrollTrigger: {
        trigger: ".page2",
        start: "5% center",
        end: "top -10%",
        scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});



gsap.from(".page3 .page3-upper, .page3 .page3-upper h1, .page3 .page3-upper h3", {
    scrollTrigger: {
        trigger: ".page3",
        start: "1% center",
        end: "top -10%",
        scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});


const pics = document.querySelector('.pic');

setInterval(() => {
  const scrollY = window.scrollY; // Save scroll position
  pics.appendChild(pics.querySelector('img')); // Move image
  window.scrollTo(0, scrollY); // Restore scroll position
}, 2000);




gsap.from(".page4 .page4-sec1, .page4 .page4-sec1 h1, .page .page4-sec1 h3", {
    scrollTrigger: {
        trigger: ".page4",
        start: "1% center",
        end: "top -10%",
        scrub: true,
    },
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});


gsap.from(".page4 .page4-sec2, .page4 .page4-sec2 .cont", {
    scrollTrigger: {
        trigger: ".page4",
        start: "1% center",
        end: "top -10%",
        scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});


let page5Slides = document.querySelectorAll('.slid');
let page5Index = 0;

page5Slides[page5Index].classList.add('active');

document.getElementById('next').onclick = () => {
    page5Slides[page5Index].classList.remove('active');
    page5Index = (page5Index + 1) % page5Slides.length;
    page5Slides[page5Index].classList.add('active');
}

document.getElementById('prev').onclick = () => {
    page5Slides[page5Index].classList.remove('active');
    page5Index = (page5Index - 1 + page5Slides.length) % page5Slides.length;
    page5Slides[page5Index].classList.add('active');
}


gsap.from(".page5 .slider", {
    scrollTrigger: {
        trigger: ".page5",
        start: "1% center",
        end: "top -10%",
        scrub: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});
