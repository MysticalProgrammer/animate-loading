const images = document.querySelectorAll("img");

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) return;
        const image = entry.target;
        if(image.getAttribute("data-src")){
            const newUrl = image.getAttribute("data-src");
            image.src = newUrl;
        }
        observer.unobserve(image);
    })
}, {})

images.forEach((image) => {
    observer.observe(image);
})

// Create an IntersectionObserver instance
const observerEffect = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.target.getAttribute("data-direction")){
            entry.target.style.transformOrigin = entry.target.getAttribute("data-direction");
        }

        if(entry.target.getAttribute("data-delay") || entry.target.getAttribute("data-duration")){
            entry.target.style.transition = `${entry.target.getAttribute("data-duration") ? parseInt(entry.target.getAttribute("data-duration")) : 500}ms linear ${entry.target.getAttribute("data-delay") ? parseInt(entry.target.getAttribute("data-delay")) : 0}ms`;
        }

        if (entry.isIntersecting) {
        // When component is on screen
        entry.target.style.transform = 'scaleX(0)';
        } else {
        // when the div is out of the screen
        entry.target.style.transform = 'scaleX(1)';
        }
    });
    });

    // Observe all elements with the class name 'ready'
    document.querySelectorAll('.motion-screen').forEach(div => {
    observerEffect.observe(div);
});