/**
 * Main JavaScript file for Nicholas Sendyk's portfolio site
 */
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('js-enabled');
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
    
    // Skills category filtering
    const categoryTabs = document.querySelectorAll('.category-tab');
    const skillCards = document.querySelectorAll('.skill-card');

    if (categoryTabs.length && skillCards.length) {
      categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          categoryTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');

          const category = tab.dataset.category;
          skillCards.forEach(card => {
            const cardCategories = (card.dataset.categories || '').split(' ');
            const isVisible = category === 'all' || cardCategories.includes(category);
            card.style.display = isVisible ? '' : 'none';
          });
        });
      });
    }

    const header = document.querySelector('header');
    const aboutSection = document.getElementById('about');

    function toggleHeaderVisibility() {
      if (!header || !aboutSection) {
        return;
      }

      const headerHeight = header.offsetHeight || 0;
      const aboutTop = aboutSection.getBoundingClientRect().top;

      if (aboutTop <= headerHeight + 10) {
        header.classList.add('is-visible');
      } else {
        header.classList.remove('is-visible');
      }
    }

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
    
    const handleScroll = () => {
      highlightNavItem();
      toggleHeaderVisibility();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', toggleHeaderVisibility);
    window.addEventListener('load', toggleHeaderVisibility);

    // Initialize on page load
    toggleHeaderVisibility();
    highlightNavItem();
  });



