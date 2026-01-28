// OKTEND Animations - No redirects, just animations

(function() {
  'use strict';

  // Hide preloader when page loads
  window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader-area');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(function() {
        preloader.style.display = 'none';
      }, 500);
    }
  });

  // Text rotation animation for cd-headline
  function initTextRotation() {
    var headlines = document.querySelectorAll('.cd-headline');
    
    headlines.forEach(function(headline) {
      var words = headline.querySelectorAll('.cd-words-wrapper b');
      if (words.length === 0) return;
      
      var currentIndex = 0;
      
      // Initially show only first word
      words.forEach(function(word, index) {
        if (index === 0) {
          word.classList.add('is-visible');
          word.style.opacity = '1';
        } else {
          word.classList.remove('is-visible');
          word.style.opacity = '0';
          word.style.display = 'none';
        }
      });
      
      // Rotate words every 3 seconds
      setInterval(function() {
        var current = words[currentIndex];
        currentIndex = (currentIndex + 1) % words.length;
        var next = words[currentIndex];
        
        // Fade out current
        current.style.opacity = '0';
        setTimeout(function() {
          current.style.display = 'none';
          current.classList.remove('is-visible');
          
          // Fade in next
          next.style.display = 'inline-block';
          next.classList.add('is-visible');
          setTimeout(function() {
            next.style.opacity = '1';
          }, 50);
        }, 500);
      }, 3000);
    });
  }

  // Flip card animation for team leagues
  function initFlipCards() {
    var flipContainers = document.querySelectorAll('.flip-container, .flip-container-2');
    
    flipContainers.forEach(function(container) {
      container.addEventListener('mouseenter', function() {
        var flipper = this.querySelector('.flipper');
        if (flipper) {
          flipper.style.transform = 'rotateY(180deg)';
        }
      });
      
      container.addEventListener('mouseleave', function() {
        var flipper = this.querySelector('.flipper');
        if (flipper) {
          flipper.style.transform = 'rotateY(0deg)';
        }
      });
    });
  }

  // Circle hover animation for pricing
  function initCircleHover() {
    var circles = document.querySelectorAll('.ch-item');
    
    circles.forEach(function(circle) {
      var info = circle.querySelector('.ch-info');
      var front = circle.querySelector('.ch-info-front');
      var back = circle.querySelector('.ch-info-back');
      
      if (!info || !front || !back) return;
      
      circle.addEventListener('mouseenter', function() {
        info.style.transform = 'rotateY(180deg)';
      });
      
      circle.addEventListener('mouseleave', function() {
        info.style.transform = 'rotateY(0deg)';
      });
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Sticky header on scroll
  function initStickyHeader() {
    var header = document.getElementById('sticky-header');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  }

  // Mobile menu toggle
  function initMobileMenu() {
    var hamburger = document.querySelector('.hamburger');
    var mobileMenu = document.querySelector('.mobile-menu-area');
    
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function() {
        this.classList.toggle('is-active');
        mobileMenu.classList.toggle('active');
      });
    }
  }

  // Progress bar animation on scroll
  function initProgressBars() {
    var progressBars = document.querySelectorAll('.progress-bar');
    var animated = false;
    
    function animateProgressBars() {
      var portfolioSection = document.getElementById('portfolio');
      if (!portfolioSection || animated) return;
      
      var rect = portfolioSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        animated = true;
        progressBars.forEach(function(bar) {
          var width = bar.getAttribute('aria-valuenow') + '%';
          bar.style.width = width;
        });
      }
    }
    
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Check on load
  }

  // Initialize all animations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initTextRotation();
    initFlipCards();
    initCircleHover();
    initSmoothScroll();
    initStickyHeader();
    initMobileMenu();
    initProgressBars();
  }
})();
