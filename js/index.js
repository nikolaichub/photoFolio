document.addEventListener('DOMContentLoaded', (event) => {

    // text animation
    CustomEase.create("textappers", "M0,0 C0.5,0 0,1 1,1");

    gsap.from('.start__heading-item', {
        translateY: '350%',
        duration: 1.25,
        stagger: 0.115,
        ease: 'textappers',
        delay: .25,
        rotate: -15});

    // first scene
    let firstScene = document.getElementById('firstScene'),
        firstContent = document.getElementById('firstContent'),
        firstOne = document.getElementById('firstOne'),
        firstSecond = document.getElementById('firstSecond'),
        firstThird = document.getElementById('firstThird');
        firstText = document.getElementById('firstText');

    let firstAnimation = gsap.timeline()
        .to(firstContent, {
            width: firstScene.offsetWidth,
            duration: 1})
        .from(firstOne, {
            scale: 1.1,
            opacity: 0,
            duration: 0.25,
            rotate: -10,
            ease: "power2.in"})
        .from(firstSecond, {
            scale: 1.1,
            opacity: 0,
            duration: 0.25,
            rotate: 10,
            ease: "power2.in"})
        .from(firstThird, {
                scale: 1.1,
                opacity: 0,
                duration: 0.25,
                rotate: -6,
                ease: "power2.in"})
        .fromTo(firstText, {
            opacity: 0,
            fontSize: 150,
            letterSpacing: -10}, {
            opacity: 1,
            fontSize: 250,
            letterSpacing: 16,
            duration: 2}).pause();

    firstContent.addEventListener('click', () => {
        console.log('firstAnimation: ', firstAnimation);
        firstAnimation.play();
    });
});