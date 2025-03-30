/**
 * Main JavaScript file for Nicholas Sendyk's portfolio site
 */
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileNavToggle && navMenu) {
      mobileNavToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
      });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (navMenu) {
            navMenu.classList.remove('active');
          }
        }
      });
    });
    
    // Active menu item based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavItem() {
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector('nav a[href*=' + sectionId + ']');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink?.classList.add('active');
        } else {
          navLink?.classList.remove('active');
        }
      });
    }
    
    window.addEventListener('scroll', highlightNavItem);
    
    // Initialize on page load
    highlightNavItem();
  });