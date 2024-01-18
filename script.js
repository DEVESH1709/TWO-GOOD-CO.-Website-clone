const scroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper'),
    smooth: true
});



function videoconAnimation(){
    let videocon = document.querySelector(".video-container")

let playbtn = document.querySelector(".play")

videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
       
    })
})

videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn, {
        scale:0,
        opacity:0
    
})
})


videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-70, 
        top:dets.y-80
    })
})
}

videoconAnimation()

function  loadingAnimation(){
    gsap.from(".section1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.2
    })
    gsap.from(".section1 .video-container",{
        scale:0.9,
        opacity:0,
        delay:0.5,
        duration:0.5,
       
    })
}

loadingAnimation()



document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        left:dets.x-70,
        top:dets.y-80
    })
})

// document.querySelector("#child1").addEventListener("mouseenter",function(){
//     gsap.to(".cursor",{
//         transform: 'translate(-50%,-50%) scale(1)',
//     })
// })

// document.querySelector("#child1").addEventListener("mouseleave",function(){
//     gsap.to(".cursor",{
//         transform: 'translate(-50%,-50%) scale(0)',
//     })
// })


let a =document.querySelectorAll(".child")
a.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
                    transform: 'translate(-50%,-50%) scale(1)',
                })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
                    transform: 'translate(-50%,-50%) scale(0)',
                })
    })
})

function navbarAnimation(){
gsap.to(".nav2 #links",{
    transform:" translateY(-100%)",
    opacity:0,
    scrollTrigger:{
  trigger:"section1",
  scroller:".wrapper",
 
  start:"top 0",
  end:"top -5%",
  scrub:true

    }
})
}

navbarAnimation();