const splitTypes = document.querySelectorAll('.text-anim')
const lenis = new Lenis()
lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Fonction pour bloquer le défilement
function disableScroll() {
    // document.body.style.overflow = 'hidden';
    lenis.stop()
}

// Fonction pour débloquer le défilement
function enableScroll() {
    // document.body.style.overflow = '';
    lenis.start()
}

// TEXT ANIMATION
splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars,words' })

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
        },
        opacity: .1,
        stagger: .1
    })
})
