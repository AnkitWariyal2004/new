function cursoreffect(){
    var page1Content=document.querySelector(".page1-content")
var Cursor=document.querySelector(".cursor")
page1Content.addEventListener("mousemove",function(dets){
    // Cursor.style.left=dets.x+"px"
    // Cursor.style.top=dets.y+"px"

    gsap.to(Cursor,{
        x:dets.x,
        y:dets.y
    })
})


page1Content.addEventListener("mouseenter", function(){
    gsap.to(Cursor,{
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave",function(){
    gsap.to(Cursor, {
        scale:0,
        opacity:0
    })
})
}
cursoreffect()