// 1 <---- cursor animation ---->

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 200 +"px"
    blur.style.top = dets.y- 200 +"px"
})

// 1.1 <---- navbbar h4 animation ---->
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"

    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
        
    })
})

// 2 <---- naavbar animation ---->

gsap.to("#nav",{
    backgroundColor :"#000",
    height: "110px",
    duration:0.5,
    // delay:1,
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        start:"top -10%",
        end:"tpo -11%",
        scrub:1
    }
})

// 3<---  ain div animation ---->
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroll: "body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

// <---- aaabout us image animation ---->
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})

// <---- card animation ---->
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

// <---- logo image animation ---->
gsap.from("#logo1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger:"#logo1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#logo2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#logo2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

// <---- page4 ka h1 animation ---->
gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger:{
         trigger:"#page4 h1",
        scroller:"body",
         start:"top 75%",
         end:"top 70%",
         scrub:2
     }
})