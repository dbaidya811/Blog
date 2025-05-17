// Policy Pages JavaScript (Privacy Policy, Terms of Service)

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for table of contents links
    const tocLinks = document.querySelectorAll('.policy-toc a');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Print functionality
    const printButton = document.querySelector('.print-policy');
    
    if (printButton) {
        printButton.addEventListener('click', () => {
            window.print();
        });
    }
    
    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Highlight active section based on scroll position
    const highlightActiveSection = () => {
        const sections = document.querySelectorAll('.policy-section');
        const tocItems = document.querySelectorAll('.policy-toc a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // 150px offset for header
            if (pageYOffset >= (sectionTop - 150)) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        tocItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === currentSection) {
                item.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', highlightActiveSection);
    
    // Initialize section highlighting
    setTimeout(highlightActiveSection, 100);
    
    // Handle initial hash in URL
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        
        if (targetElement) {
            setTimeout(() => {
                // Offset for fixed header
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 300);
        }
    }
    
    // Add copy functionality to code blocks if present
    const codeBlocks = document.querySelectorAll('.policy-section pre');
    
    codeBlocks.forEach(block => {
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-btn';
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.title = 'Copy to clipboard';
        
        // Add button to code block
        block.appendChild(copyButton);
        
        // Add copy functionality
        copyButton.addEventListener('click', () => {
            const code = block.querySelector('code').innerText;
            
            navigator.clipboard.writeText(code).then(() => {
                // Show success state
                copyButton.innerHTML = '<i class="fas fa-check"></i>';
                copyButton.classList.add('success');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                    copyButton.classList.remove('success');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                
                // Show error state
                copyButton.innerHTML = '<i class="fas fa-times"></i>';
                copyButton.classList.add('error');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                    copyButton.classList.remove('error');
                }, 2000);
            });
        });
    });
});
