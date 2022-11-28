// An event listener waits till some event has happened. In this case, when all the content on the page has loaded. Also note that the image format is webp, which is a very light image, and so allows for faster loading

document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();
   
    
    let timeline = new TimelineMax();
    timeline
    .to('.section_3_01', 4, {
        y: -250,
        ease: Power3.easeInOut
    })
    .to('.section_3_02', 4, {
        y: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_03', 4, {
        y: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_04', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_05', 4, {
        y: 150,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_06', 4, {
        y: 250,
        ease: Power3.easeInOut
    }, '-=4')

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%', // Measured in screen size/pixels
        triggerHook: 0,
        offset: '300'
    })
    .setTween(timeline)
    .setPin('.first-section')
    .addTo(controller);

    
})