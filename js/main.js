// Main JavaScript for News Blog

document.addEventListener('DOMContentLoaded', () => {
    // Loading System
    const loadingBar = document.querySelector('.loading-bar');
    const loadingContainer = document.querySelector('.loading-container');
    const content = document.querySelector('.content');
    
    let progress = 0;
    const totalAssets = 10; // Total number of assets to load
    let loadedAssets = 0;
    
    // Simulate loading progress
    function updateProgress() {
        loadedAssets++;
        progress = (loadedAssets / totalAssets) * 100;
        loadingBar.style.width = `${progress}%`;
        
        if (loadedAssets >= totalAssets) {
            // Loading complete
            setTimeout(() => {
                loadingContainer.style.opacity = '0';
                setTimeout(() => {
                    loadingContainer.classList.add('hidden');
                    content.classList.remove('hidden');
                    initAnimations();
                }, 500);
            }, 500);
        }
    }
    
    // Simulate asset loading
    function simulateLoading() {
        const interval = setInterval(() => {
            updateProgress();
            if (loadedAssets >= totalAssets) {
                clearInterval(interval);
            }
        }, 200);
    }
    
    // Start loading process
    simulateLoading();
    
    // Mobile Menu Toggle - Simple direct implementation
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            // Simply toggle the active class on nav links
            if (navLinks) {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                
                // Change icon
                const icon = this.querySelector('i');
                if (icon) {
                    if (icon.classList.contains('fa-bars')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    }
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (emailInput.value.trim() !== '') {
                // Show success message
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Thank you for subscribing!';
                successMessage.className = 'success-message';
                
                // Replace form with success message
                newsletterForm.innerHTML = '';
                newsletterForm.appendChild(successMessage);
            }
        });
    }
    
    // Update current date in header
    const currentDateElement = document.querySelector('.current-date');
    
    if (currentDateElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        currentDateElement.textContent = now.toLocaleDateString('en-US', options);
    }
});

// Initialize animations when content is loaded
function initAnimations() {
    // Animate featured cards
    const featuredCards = document.querySelectorAll('.featured-card');
    featuredCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Animate news cards
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Animate category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}
