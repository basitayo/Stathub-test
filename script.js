document.addEventListener('DOMContentLoaded', () => {

    // 2. Header Scroll Effect (Blur & Background)
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 3. Selected Artists Carousel Logic (Now "Popular Modules")
    const carouselContainer = document.querySelector('.artists-carousel-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (carouselContainer && prevBtn && nextBtn) {
        const scrollAmount = 305; 
        prevBtn.addEventListener('click', () => {
            carouselContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            carouselContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    // 4. Hero Dynamic Image Carousel (Updated for StatHub Tools)
    const heroSlides = [
        { 
            img: 'images/data-analysis.jpg', 
            artist: 'Data Analysis' 
        },
        { 
            img: 'images/sql-training.jpg', 
            artist: 'SQL Fundamentals' 
        },
        { 
            img: 'images/powerbi.jpg', 
            artist: 'PowerBI Dashboards' 
        },
        { 
            img: 'images/excel-mastery.jpg', 
            artist: 'Excel Mastery' 
        }
    ];

    const heroImageEl = document.querySelector('.hero-imagae');
    const exploreImgEl = document.querySelector('.explorimgg');
    const artistNameEl = document.querySelector('.traas');
    const indicators = document.querySelectorAll('.circle-indicator');
    
    let currentSlideIndex = 0;
    let heroCarouselInterval;

    if (heroImageEl && exploreImgEl && indicators.length > 0) {
        const updateHeroSection = (index) => {
            currentSlideIndex = index;
            const nextSlideIndex = (currentSlideIndex + 1) % heroSlides.length;

            // Update Background Images (Ensure you add your StatHub images to these paths)
            heroImageEl.style.backgroundImage = `url(${heroSlides[currentSlideIndex].img})`;
            exploreImgEl.style.backgroundImage = `url(${heroSlides[nextSlideIndex].img})`;
            
            if(artistNameEl) {
                artistNameEl.textContent = heroSlides[currentSlideIndex].artist;
            }

            indicators.forEach((ind, i) => {
                if (i === currentSlideIndex) {
                    ind.classList.add('active');
                } else {
                    ind.classList.remove('active');
                }
            });
        };

        const startHeroCarousel = () => {
            heroCarouselInterval = setInterval(() => {
                let next = (currentSlideIndex + 1) % heroSlides.length;
                updateHeroSection(next);
            }, 5000); 
        };

        updateHeroSection(0);
        startHeroCarousel();

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                clearInterval(heroCarouselInterval);
                updateHeroSection(index);
                startHeroCarousel();
            });
        });
    }
});