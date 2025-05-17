// Advertise Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Animate stats numbers on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        const animateStats = () => {
            statNumbers.forEach(stat => {
                const statTop = stat.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (statTop < windowHeight * 0.8 && !stat.classList.contains('animated')) {
                    const targetValue = stat.textContent;
                    const numericValue = parseFloat(targetValue.replace(/[^0-9.]/g, ''));
                    const suffix = targetValue.replace(/[0-9.]/g, '');
                    
                    // Start from zero
                    stat.textContent = '0' + suffix;
                    stat.classList.add('animated');
                    
                    // Animate to target value
                    let startTime;
                    const duration = 2000; // 2 seconds
                    
                    function animateNumber(timestamp) {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);
                        const currentValue = Math.floor(progress * numericValue);
                        stat.textContent = currentValue + suffix;
                        
                        if (progress < 1) {
                            requestAnimationFrame(animateNumber);
                        } else {
                            stat.textContent = targetValue;
                        }
                    }
                    
                    requestAnimationFrame(animateNumber);
                }
            });
        };
        
        // Trigger animation on scroll
        window.addEventListener('scroll', animateStats);
        
        // Initial check
        setTimeout(animateStats, 500);
    }
    
    // Animate chart bars on scroll
    const chartBars = document.querySelectorAll('.bar-fill');
    
    if (chartBars.length > 0) {
        const animateCharts = () => {
            const chartContainer = document.querySelector('.chart-container');
            if (!chartContainer) return;
            
            const chartTop = chartContainer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (chartTop < windowHeight * 0.8 && !chartContainer.classList.contains('animated')) {
                chartContainer.classList.add('animated');
                
                chartBars.forEach(bar => {
                    const height = bar.style.height;
                    bar.style.height = '0';
                    bar.style.setProperty('--target-height', height);
                    
                    setTimeout(() => {
                        bar.style.animation = 'bar-rise 1.5s forwards';
                    }, 100);
                });
            }
        };
        
        // Trigger animation on scroll
        window.addEventListener('scroll', animateCharts);
        
        // Initial check
        setTimeout(animateCharts, 500);
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
    
    // Testimonial Slider (simple version)
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (testimonialCards.length > 1) {
        let currentIndex = 0;
        const totalCards = testimonialCards.length;
        
        // Function to show only the current testimonial on mobile
        const updateTestimonials = () => {
            if (window.innerWidth <= 768) {
                testimonialCards.forEach((card, index) => {
                    if (index === currentIndex) {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                    } else {
                        card.style.display = 'none';
                        card.style.opacity = '0';
                    }
                });
            } else {
                // Show all on desktop
                testimonialCards.forEach(card => {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                });
            }
        };
        
        // Create navigation dots
        if (testimonialCards.length > 0) {
            const slider = document.querySelector('.testimonials-slider');
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'slider-dots';
            
            for (let i = 0; i < totalCards; i++) {
                const dot = document.createElement('span');
                dot.className = 'slider-dot';
                if (i === 0) dot.classList.add('active');
                
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateTestimonials();
                    updateDots();
                });
                
                dotsContainer.appendChild(dot);
            }
            
            slider.parentNode.appendChild(dotsContainer);
            
            // Function to update dots
            const updateDots = () => {
                const dots = document.querySelectorAll('.slider-dot');
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            };
            
            // Auto-rotate testimonials on mobile
            setInterval(() => {
                if (window.innerWidth <= 768) {
                    currentIndex = (currentIndex + 1) % totalCards;
                    updateTestimonials();
                    updateDots();
                }
            }, 5000);
            
            // Initial setup
            updateTestimonials();
            
            // Update on window resize
            window.addEventListener('resize', updateTestimonials);
        }
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values (would normally be sent to server)
            const name = document.getElementById('name').value;
            const company = document.getElementById('company').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const adType = document.getElementById('ad-type').value;
            const budget = document.getElementById('budget').value;
            const message = document.getElementById('message').value;
            
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h3>Thank you for your inquiry!</h3>
                <p>We've received your advertising request and our team will contact you within 24 hours to discuss your campaign.</p>
            `;
            
            // Replace form with success message
            contactForm.innerHTML = '';
            contactForm.appendChild(successMessage);
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Media Kit download button
    const downloadButton = document.querySelector('.download-button');
    
    if (downloadButton) {
        downloadButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // This would normally trigger a download
            // For demo purposes, show a message
            alert('In a real implementation, this would download the media kit PDF. This is a demo message.');
        });
    }
});
