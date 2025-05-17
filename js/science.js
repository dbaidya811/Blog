// Science Page JavaScript

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
    
    // Science Highlights Animation
    const marketIndicators = document.querySelectorAll('.market-indicator');
    
    if (marketIndicators.length > 0) {
        marketIndicators.forEach((indicator, index) => {
            setTimeout(() => {
                indicator.classList.add('animate');
            }, 100 * index);
        });
    }
    
    // Scientist Profile Cards Animation
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
    
    // Interactive Science Cards Animation
    const interactiveCards = document.querySelectorAll('.interactive-card');
    
    if (interactiveCards.length > 0) {
        // Add scroll animation
        window.addEventListener('scroll', () => {
            interactiveCards.forEach((card, index) => {
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
        interactiveCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.interactive-icon');
                icon.classList.add('pulse');
            });
            
            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.interactive-icon');
                icon.classList.remove('pulse');
            });
            
            // Add click effect for interactive links
            const interactiveLink = card.querySelector('.interactive-link');
            if (interactiveLink) {
                interactiveLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // This would normally open an interactive model or animation
                    // For demo purposes, we'll just log to console and show a message
                    const title = card.querySelector('h3').textContent;
                    console.log(`Opening interactive content: ${title}`);
                    
                    // Create a modal message
                    const modal = document.createElement('div');
                    modal.className = 'interactive-modal';
                    modal.innerHTML = `
                        <div class="interactive-modal-content">
                            <span class="close-modal">&times;</span>
                            <h3>${title}</h3>
                            <p>Interactive content would load here. This is a placeholder for demonstration purposes.</p>
                            <div class="loading-animation">
                                <div class="spinner"></div>
                                <p>Loading interactive content...</p>
                            </div>
                        </div>
                    `;
                    
                    document.body.appendChild(modal);
                    
                    // Close modal functionality
                    const closeBtn = modal.querySelector('.close-modal');
                    closeBtn.addEventListener('click', () => {
                        modal.remove();
                    });
                    
                    // Close on click outside
                    modal.addEventListener('click', (e) => {
                        if (e.target === modal) {
                            modal.remove();
                        }
                    });
                });
            }
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
    
    // Science Highlights Live Updates Simulation
    const quantumIndicator = document.querySelector('.market-indicator:nth-child(3) .indicator-value');
    const renewableIndicator = document.querySelector('.market-indicator:nth-child(5) .indicator-value');
    
    if (quantumIndicator && renewableIndicator) {
        // Simulate Quantum Computing updates
        setInterval(() => {
            const currentQubits = parseInt(quantumIndicator.textContent);
            const newQubits = currentQubits + Math.floor(Math.random() * 8); // Random increase
            
            quantumIndicator.textContent = `${newQubits} Qubits`;
            
            // Add a flash effect
            quantumIndicator.classList.add('flash');
            setTimeout(() => {
                quantumIndicator.classList.remove('flash');
            }, 500);
        }, 90000); // Update every 1.5 minutes
        
        // Simulate Renewable Energy updates
        setInterval(() => {
            const currentPercentage = parseFloat(renewableIndicator.textContent);
            const randomChange = (Math.random() * 0.2).toFixed(1); // Random increase up to 0.2%
            const newPercentage = (currentPercentage + parseFloat(randomChange)).toFixed(1);
            
            renewableIndicator.textContent = `${newPercentage}%`;
            
            // Add a flash effect
            renewableIndicator.classList.add('flash');
            setTimeout(() => {
                renewableIndicator.classList.remove('flash');
            }, 500);
        }, 60000); // Update every minute
    }
});
