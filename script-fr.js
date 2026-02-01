// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});


// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(250, 247, 242, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(250, 247, 242, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Add animation delay to repertoire items
document.querySelectorAll('.repertoire-list li').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });
    
    itemObserver.observe(item);
});

// Add hover effect to media placeholders
document.querySelectorAll('.video-placeholder, .photo-placeholder, .press-kit-placeholder').forEach(placeholder => {
    placeholder.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    placeholder.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.newsletter-input').value;
        
        // Here you can add your newsletter service integration
        // For example: Mailchimp, SendGrid, etc.
        console.log('Newsletter subscription:', email);
        
        // Show success message (you can customize this)
        alert('Merci de vous être abonné ! Vous recevrez nos dernières actualités et événements.');
        
        // Reset form
        this.reset();
    });
}

// Privacy & Cookie Policy Modal
const privacyLink = document.getElementById('privacy-link');
const privacyModal = document.getElementById('privacy-modal');
const modalClose = document.getElementById('modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

if (privacyLink && privacyModal) {
    // Open modal
    privacyLink.addEventListener('click', function(e) {
        e.preventDefault();
        privacyModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            privacyModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function() {
            privacyModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && privacyModal.style.display === 'flex') {
            privacyModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Save cookie preferences
    const saveCookiesButton = document.getElementById('save-cookies');
    if (saveCookiesButton) {
        saveCookiesButton.addEventListener('click', function() {
            // Get selected preferences
            const essentialInput = document.querySelector('input[name="essential"]:checked');
            const analyticsInput = document.querySelector('input[name="analytics"]:checked');
            const marketingInput = document.querySelector('input[name="marketing"]:checked');
            
            if (essentialInput && analyticsInput && marketingInput) {
                // Save to localStorage
                localStorage.setItem('cookiePreferences', JSON.stringify({
                    essential: essentialInput.value,
                    analytics: analyticsInput.value,
                    marketing: marketingInput.value
                }));
                
                // Close modal
                privacyModal.style.display = 'none';
                document.body.style.overflow = '';
                
                // Show confirmation (you can customize this)
                alert('Préférences de cookies enregistrées avec succès !');
            }
        });
    }
}


