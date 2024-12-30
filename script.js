let tl=gsap.timeline()
tl.from(".front",{
    y:1000,
    duration:0.7
})
tl.from("#coffeec" ,{
    y:1000,
    duration:0.7,
    scale:2
})
tl.from(".front h1" ,{
    y:1000,
    duration:0.7
})

tl.from("#coffeeb1" ,{
    y:800,
    duration:0.5,
    scale:2
})
tl.from("#coffeeb2" ,{
    y:800,
    duration:0.5,
    scale:2
})
tl.from("#coffeeb3" ,{
    y:800,
    duration:0.5,
    scale:2
})
tl.from("#coffeeb4" ,{
    y:800,
    duration:0.5,
    scale:2
})
tl.from("#coffeeb5" ,{
    y:800,
    duration:0.5,
    scale:2
})
let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        scrub:2,
        start:"0% 90%",
        end:"50% 50%"
    }
})
tl2.to("#coffeec",{
    top:680,
 left:105,
 scale:0.9
} ,"hi")
  
tl2.to("#coffeeb1",{
    top:680,
    left:253,
    scale:0.9,
    rotate:310 
} ,"hi")
let tl3=gsap.timeline({
    scrollTrigger:{
        trigger:"#menu",
        scroller:"body",
        scrub:2,
        start:"0% 90%",
        end:"50% 50%"
    }
})
tl3.to("#coffeec",{
    top:1300,
 left:580,
 scale:0.9
} ,"hi")
tl3.to("#coffeeb1",{
    top:1399,
    left:720,
    scale:0.9,
    rotate:790 
} ,"hi")
tl3.from("#can1",{
    x:-300,
    duration:1
},"hi")
tl3.from("#can2",{
    x:300,
    duration:1
},"hi")
tl3.from("#bean1",{
    x:-300,
    duration:1,
    rotate:200
},"hi")
tl3.from("#bean2",{
    x:-300,
    duration:1,
    rotate:200
},"hi")
let tl4=gsap.timeline({
    scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        scrub:2,
        start:"0% 90%",
        end:"50% 50%"
    }
})
tl4.to("#coffeec",{
    top:1975,
 left:832,
 duration:1

} ,"hi")
tl4.to("#coffeeb1",{
    top:2283,
    left:969,
    scale:0.9,
    rotate:20
} ,"hi")
tl4.to("#can1",{
    top:658,
    left:451,
    duration:1
})
tl4.to("#can2",{
    top:658,
    left:50,
    duration:1
})