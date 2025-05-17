// Health Page JavaScript

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
    
    // Health Indicators Animation
    const marketIndicators = document.querySelectorAll('.market-indicator');
    
    if (marketIndicators.length > 0) {
        marketIndicators.forEach((indicator, index) => {
            setTimeout(() => {
                indicator.classList.add('animate');
            }, 100 * index);
        });
    }
    
    // Health Expert Profile Cards Animation
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
    
    // Health Tips Animation
    const tipCards = document.querySelectorAll('.tip-card');
    
    if (tipCards.length > 0) {
        // Add scroll animation
        window.addEventListener('scroll', () => {
            tipCards.forEach((card, index) => {
                const cardTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (cardTop < windowHeight * 0.8) {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, 150 * index);
                }
            });
        });
        
        // Add hover effect
        tipCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.tip-icon');
                icon.classList.add('pulse');
            });
            
            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.tip-icon');
                icon.classList.remove('pulse');
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
    
    // Health Indicators Live Updates Simulation
    const covidIndicator = document.querySelector('.market-indicator:first-child .indicator-value');
    const airQualityIndicator = document.querySelector('.market-indicator:nth-child(3) .indicator-value');
    
    if (covidIndicator && airQualityIndicator) {
        // Simulate COVID cases updates
        setInterval(() => {
            const currentCases = parseInt(covidIndicator.textContent.replace(/\D/g, ''));
            const randomChange = Math.floor(Math.random() * 10) - 5; // Random number between -5 and 5
            const newCases = Math.max(0, currentCases + randomChange);
            
            covidIndicator.textContent = newCases.toLocaleString();
            
            // Add a flash effect
            covidIndicator.classList.add('flash');
            setTimeout(() => {
                covidIndicator.classList.remove('flash');
            }, 500);
        }, 60000); // Update every minute
        
        // Simulate Air Quality Index updates
        setInterval(() => {
            const currentAQI = parseInt(airQualityIndicator.textContent);
            const randomChange = Math.floor(Math.random() * 4) - 2; // Random number between -2 and 2
            const newAQI = Math.max(0, Math.min(500, currentAQI + randomChange)); // AQI between 0 and 500
            
            airQualityIndicator.textContent = newAQI;
            
            // Add a flash effect
            airQualityIndicator.classList.add('flash');
            setTimeout(() => {
                airQualityIndicator.classList.remove('flash');
            }, 500);
        }, 45000); // Update every 45 seconds
    }
});
