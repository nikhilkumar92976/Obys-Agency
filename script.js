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
    tl.from("#nav , #num p", {
        opacity: 0,
        duration: 0.2,
    })
    tl.from(".lines h1, #hero h2, #hero h3", {
        y: 120,
        stagger: 0.2,
        duration: 0.2,
    })
}
loader()

function curser() {

    document.addEventListener("mousemove", function (dets) {
        gsap.to("#curser", {
            left: dets.x,
            top: dets.y
        })
    })
    Shery.makeMagnet("#nav-part2 h4");
}
curser();

function Sheryanimation() {
    Shery.imageEffect(".cutimage", {
        style: 5,
        config: { "a": { "value": 1.37, "range": [0, 30] }, "b": { "value": 0.02, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7272695760684946 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1.12, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.46, "range": [0, 10] }, "metaball": { "value": 0.53, "range": [0, 2] }, "discard_threshold": { "value": 0.6, "range": [0, 1] }, "antialias_threshold": { "value": 0.03, "range": [0, 0.1] }, "noise_height": { "value": 0.56, "range": [0, 2] }, "noise_scale": { "value": 11.45, "range": [0, 100] } },
        gooey: true
    })
}
Sheryanimation()

function videofun() {
    var videobox = document.querySelector("#video-box");
    var video = document.querySelector("#video-box video");
    videobox.addEventListener("mouseenter", function () {
        videobox.addEventListener("mousemove", function (dets) {
            gsap.to("#curser", {
                opacity: 0
            })
            gsap.to("#gola", {
                left: dets.x - 570,
                y: dets.y - 300
            })
        })
    })
    videobox.addEventListener("mouseleave", function (dets) {
        gsap.to("#curser", {
            opacity: 1
        })
        gsap.to("#gola", {
            left: "70%",
            y: "-13%"
        })
    })
    var flag = 0
    videobox.addEventListener("click", function () {
        if (flag == 0) {
            video.play()
            video.style.opacity = 1
            document.querySelector("#gola").innerHTML = `<i class="ri-pause-mini-fill"></i>`
            gsap.to("#gola", {
                scale: 0.5
            })
            flag = 1
        }
        else {
            video.pause()
            video.style.opacity = 0
            document.querySelector("#gola").innerHTML = `<i class="ri-play-large-fill"></i>`
            gsap.to("#gola", {
                scale: 1
            })
            flag = 0
        }
    })
}
videofun()

function flaganimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y
        })
    })
    document.querySelector("#hero").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1
        })
    })
    document.querySelector("#hero").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0
        })
    })
}
flaganimation()