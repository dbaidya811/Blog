// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Normally, you would send this data to a server
            // For demo purposes, we'll just show a success message
            
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h3>Thank you for your message!</h3>
                <p>We've received your inquiry and will get back to you shortly.</p>
            `;
            
            // Replace form with success message
            contactForm.innerHTML = '';
            contactForm.appendChild(successMessage);
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // FAQ Toggles
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    if (faqToggles.length > 0) {
        faqToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const faqItem = toggle.closest('.faq-item');
                const faqAnswer = faqItem.querySelector('.faq-answer');
                const icon = toggle.querySelector('i');
                
                // Toggle FAQ answer
                if (faqAnswer.style.maxHeight) {
                    faqAnswer.style.maxHeight = null;
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                    faqItem.classList.remove('active');
                } else {
                    faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                    faqItem.classList.add('active');
                }
            });
        });
    }
    
    // Map Interaction (placeholder for actual map implementation)
    const mapContainer = document.querySelector('.map-container');
    
    if (mapContainer) {
        mapContainer.addEventListener('click', () => {
            // This would normally open a larger map or interactive map
            console.log('Map clicked - would open interactive map in a real implementation');
        });
    }
    
    // Social Connect Icons Animation
    const socialIcons = document.querySelectorAll('.social-connect .social-icon');
    
    if (socialIcons.length > 0) {
        socialIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.add('animate');
            }, 100 * index);
        });
    }
    
    // Contact Methods Animation on Scroll
    const contactMethods = document.querySelectorAll('.contact-method');
    
    if (contactMethods.length > 0) {
        // Add scroll animation
        window.addEventListener('scroll', () => {
            contactMethods.forEach((method, index) => {
                const methodTop = method.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (methodTop < windowHeight * 0.8) {
                    setTimeout(() => {
                        method.classList.add('visible');
                    }, 100 * index);
                }
            });
        });
        
        // Trigger initial check
        setTimeout(() => {
            window.dispatchEvent(new Event('scroll'));
        }, 500);
    }
});
