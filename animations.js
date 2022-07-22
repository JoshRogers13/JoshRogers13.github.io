const fadeInUp = gsap.utils.toArray('.fade-in-up');
fadeInUp.forEach(fadeInUpElms => {
    gsap.to(fadeInUpElms, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: fadeInUpElms,
            scrub: true,
            start: 'top 95%',
            end: 'top 60%'
        }
    });
});

const fadeInLeft = gsap.utils.toArray('.fade-in-left');
fadeInLeft.forEach(fadeInLeftElms => {
    gsap.to(fadeInLeftElms, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: fadeInLeftElms,
            scrub: true,
            start: 'top 95%',
            end: 'top 60%'
        }
    });
});
