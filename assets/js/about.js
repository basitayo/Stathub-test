document.addEventListener('DOMContentLoaded', () => {
    
    /**
     * Scroll Intersection Observer
     * Creates a smooth scroll-triggered reveal effect for all elements
     * tagged with the 'fade-in-section' class to enhance the visual hierarchy.
     */
    
    const fadeElements = document.querySelectorAll('.fade-in-section');
    
    // Configuration for the observer
    const observerOptions = {
        root: null, // Uses the viewport
        rootMargin: '0px 0px -100px 0px', // Triggers slightly before the element enters the view
        threshold: 0.1 // Triggers when 10% of the element is visible
    };
    
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that triggers the CSS transition
                entry.target.classList.add('is-visible');
                
                // Unobserve the element so the animation only happens once per page load
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Attach the observer to each section
    fadeElements.forEach(element => {
        scrollObserver.observe(element);
    });

});