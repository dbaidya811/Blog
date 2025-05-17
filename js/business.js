// Business Page JavaScript

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
    
    // Market Indicators Animation
    const marketIndicators = document.querySelectorAll('.market-indicator');
    
    if (marketIndicators.length > 0) {
        marketIndicators.forEach((indicator, index) => {
            setTimeout(() => {
                indicator.classList.add('animate');
            }, 100 * index);
        });
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
    
    // Expert Analysis Cards Animation
    const analysisCards = document.querySelectorAll('.analysis-card');
    
    if (analysisCards.length > 0) {
        // Add scroll animation
        window.addEventListener('scroll', () => {
            analysisCards.forEach(card => {
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
});
