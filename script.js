// locomtive scrolltrigger codepen
function init(){
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
init()

// cursor
var crsr = document.querySelector("#cursor");
var main = document.querySelector("#main");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+20+"px";
    crsr.style.top = dets.y+20+"px";
})
// var crsr2 = document.querySelector("#cursor2");
// function cursorAnim(){
    
//     document.querySelectorAll("#page1 video").forEach(function(video){
//         video.addEventListener("mouseenter", function(){
//             gsap.to("crsr2",{
//                 transform:'translate(-50%, -50%) scale(1)',
//             });
//         });
//         elem.addEventListener("mouseleave",function(){
//             gsap.to("crsr2",{
//                 transform:'translate(-50%, -50%) scale(0)',
//             });
//         });
//     });
// }
// cursorAnim()


// gsap code
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top 27%",
        end: "top 0%",
        scrub:3

    }
})
tl.to("#page1 h1", {
    x:-100,  
},"anim")
// anim is used as variable so that the both h1 and h2 work at the same time

tl.to("#page1 h2",{
    x:100,
},"anim")

tl.to("#page1 video",{
    width:"90%"
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top -115%",
        end: "top -120%",
        scrub:3

    }
})
tl2.to("#main",{
    backgroundColor:"#fff"
    
})
// timeline for page 4
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top -320%",
        end: "top -335%",
        scrub:3

    }
})
tl3.to("#main",{
    backgroundColor:"#0F0D0D"
    
})
var boxes = document.querySelectorAll(".box")

boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image");
        crsr.style.width="300px"
        crsr.style.height="300px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
        crsr.style.backgroundSize = "cover"
        // crsr.style.position = 'absolute'; 
        crsr.style.zIndex = '99'; 
        crsr.style.backgroundSize = 'cover';
    })
    elem.addEventListener("mouseleave",function(){
        var att = elem.getAttribute("data-image");
        crsr.style.width="20px"
        crsr.style.height="20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
        
        // crsr.style.position = 'static'; 
        crsr.style.zIndex = 'auto';
        
    })
})
var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})











