function locomotive() {
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
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotive()

function countnum() {
    var count = document.querySelector("#div1 #count h2");
    var a = 0;
    setInterval(function () {
        a++;
        if (a <= 100) {
            count.innerHTML = a;
        } else if (a === 100) {
            clearInterval(a);
        }
    }, 35)
}
countnum()

function loader() {
    var tl = gsap.timeline();
    tl.from(".line", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    })
    tl.from("#div4 p", {
        opacity: 0,
    })
    tl.to("#loader", {
        y: -1500,
        opacity: 0,
        duration: 2,
        delay: 2.5,
    })
}
loader()

function curser() {
    var page1 = document.querySelector("#page1");
    var curser = document.querySelector("#curser");
    page1.addEventListener("mousemove", function (dets) {
        curser.style.left = dets.clientX + "px";
        curser.style.top = dets.clientY + "px";
    })
}
curser();