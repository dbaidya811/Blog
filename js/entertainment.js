// Entertainment Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Category Tab Filtering
    const categoryTabs = document.querySelectorAll('.category-tab');
    const newsCards = document.querySelectorAll('.news-card');
    
    if (categoryTabs.length > 0) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                categoryTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                const category = tab.getAttribute('data-category');
                
                // Filter news cards
                newsCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Trending Now Slider
    const scoresSlider = document.querySelector('.scores-slider');
    
    if (scoresSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        scoresSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            scoresSlider.classList.add('active');
            startX = e.pageX - scoresSlider.offsetLeft;
            scrollLeft = scoresSlider.scrollLeft;
        });
        
        scoresSlider.addEventListener('mouseleave', () => {
            isDown = false;
            scoresSlider.classList.remove('active');
        });
        
        scoresSlider.addEventListener('mouseup', () => {
            isDown = false;
            scoresSlider.classList.remove('active');
        });
        
        scoresSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scoresSlider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed
            scoresSlider.scrollLeft = scrollLeft - walk;
        });
        
        // Auto-scroll for mobile/touch devices
        let scrollDirection = 1;
        let scrollSpeed = 1;
        let autoScrollInterval;
        
        function startAutoScroll() {
            autoScrollInterval = setInterval(() => {
                scoresSlider.scrollLeft += scrollDirection * scrollSpeed;
                
                // Change direction when reaching the end
                if (scoresSlider.scrollLeft <= 0) {
                    scrollDirection = 1;
                } else if (scoresSlider.scrollLeft >= (scoresSlider.scrollWidth - scoresSlider.clientWidth)) {
                    scrollDirection = -1;
                }
            }, 30);
        }
        
        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }
        
        // Start auto-scroll on mobile devices
        if (window.innerWidth <= 768) {
            startAutoScroll();
            
            scoresSlider.addEventListener('touchstart', () => {
                stopAutoScroll();
            });
            
            scoresSlider.addEventListener('touchend', () => {
                setTimeout(startAutoScroll, 5000); // Resume after 5 seconds
            });
        }
    }
    
    // Celebrity Profile Cards Animation
    const profileCards = document.querySelectorAll('.profile-card');
    
    if (profileCards.length > 0) {
        // Add scroll animation
        window.addEventListener('scroll', () => {
            profileCards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (cardTop < windowHeight * 0.8) {
                    card.classList.add('visible');
                }
            });
        });
        
        // Trigger initial check
        setTimeout(() => {
            window.dispatchEvent(new Event('scroll'));
        }, 500);
    }
    
    // Video Play Button Hover Effect
    const videoCards = document.querySelectorAll('.video-card');
    
    if (videoCards.length > 0) {
        videoCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const playButton = card.querySelector('.play-button');
                playButton.classList.add('hover');
            });
            
            card.addEventListener('mouseleave', () => {
                const playButton = card.querySelector('.play-button');
                playButton.classList.remove('hover');
            });
            
            // Simulate video play on click
            card.addEventListener('click', () => {
                // This would normally open a video player or redirect to a video page
                // For demo purposes, we'll just log to console
                const videoTitle = card.querySelector('h3').textContent;
                console.log(`Playing video: ${videoTitle}`);
            });
        });
    }
    
    // Box Office Updates Simulation
    const boxOfficeCard = document.querySelector('.score-card:first-child');
    
    if (boxOfficeCard) {
        const boxOfficeScore = boxOfficeCard.querySelector('.team-score');
        const initialValue = parseInt(boxOfficeScore.textContent.replace(/\D/g, ''));
        
        // Simulate box office updates
        setInterval(() => {
            const randomIncrease = Math.floor(Math.random() * 5) + 1;
            const newValue = initialValue + randomIncrease;
            boxOfficeScore.textContent = `$${newValue}M`;
            
            // Add a flash effect
            boxOfficeScore.classList.add('flash');
            setTimeout(() => {
                boxOfficeScore.classList.remove('flash');
            }, 500);
        }, 30000); // Update every 30 seconds
    }
});
