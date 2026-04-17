$(document).ready(function(){
    let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.visual',
                start: 'top top',
                end: '+=500',
                scrub:true,
                pin: true,
                aniticipatePin: 1,
                markers: true,
            }
        })
        tl
            .to('.visual h1',{
                opacity: 1,
        
            },"a")
            .to('.visual img',{
                scale:'0.4',
                opacity: 0.3,
            },"b")
    // Dynamically set ScrollTrigger start and points
    let triggerStart = $(window).width() > 480 ? "50% 100%":"35% 100%"
    let triggerEnd = '100% 0'
    gsap.utils.toArray('.imgBox').forEach(function(imgBox){
        gsap.timeline({
            scrollTrigger: {
                trigger: imgBox,
                start: triggerStart,
                end: triggerEnd,
                // toggleClass: 'active',
                markers: true,
                onEnter: function(){
                    $(imgBox).addClass('active')
                    // imgBox.classList.add('active')
                }
            }
        })
    })

})

