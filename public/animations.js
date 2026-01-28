// OKTEND Animations - Typewriter effect

(function() {
  'use strict';

  function init() {
    // Hide preloader
    var preloader = document.querySelector('.preloader-area');
    if (preloader) {
      preloader.style.display = 'none';
    }
    
    // Initialize all typewriter headlines
    var headlines = document.querySelectorAll('.cd-headline.clip');
    headlines.forEach(function(headline) {
      new TypewriterHeadline(headline);
    });
  }

  function TypewriterHeadline(element) {
    this.element = element;
    this.words = element.querySelectorAll('.cd-words-wrapper b');
    this.currentIndex = 0;
    this.typeSpeed = 80;      // Speed of typing each character
    this.deleteSpeed = 40;    // Speed of deleting each character
    this.pauseBeforeDelete = 2000;  // Pause before starting to delete
    this.pauseBeforeType = 500;     // Pause before typing new word
    
    if (this.words.length === 0) return;
    
    // Set initial state
    this.words.forEach(function(word, index) {
      if (index === 0) {
        word.classList.add('is-visible');
        word.style.opacity = '1';
      } else {
        word.classList.remove('is-visible');
        word.style.opacity = '0';
      }
    });
    
    // Start the animation cycle after initial pause
    var self = this;
    setTimeout(function() {
      self.deleteWord();
    }, this.pauseBeforeDelete);
  }

  TypewriterHeadline.prototype.deleteWord = function() {
    var self = this;
    var currentWord = this.words[this.currentIndex];
    var text = currentWord.textContent;
    var charIndex = text.length;
    
    function deleteChar() {
      if (charIndex > 0) {
        charIndex--;
        currentWord.textContent = text.substring(0, charIndex);
        setTimeout(deleteChar, self.deleteSpeed);
      } else {
        // Word deleted, switch to next word
        currentWord.classList.remove('is-visible');
        currentWord.style.opacity = '0';
        
        // Move to next word
        self.currentIndex = (self.currentIndex + 1) % self.words.length;
        
        // Store original text for next word
        var nextWord = self.words[self.currentIndex];
        if (!nextWord.dataset.originalText) {
          nextWord.dataset.originalText = nextWord.textContent;
        }
        nextWord.textContent = '';
        nextWord.classList.add('is-visible');
        nextWord.style.opacity = '1';
        
        setTimeout(function() {
          self.typeWord();
        }, self.pauseBeforeType);
      }
    }
    
    deleteChar();
  };

  TypewriterHeadline.prototype.typeWord = function() {
    var self = this;
    var currentWord = this.words[this.currentIndex];
    var fullText = currentWord.dataset.originalText || currentWord.textContent;
    var charIndex = 0;
    
    // Store original text if not stored yet
    if (!currentWord.dataset.originalText) {
      currentWord.dataset.originalText = fullText;
    }
    
    currentWord.textContent = '';
    
    function typeChar() {
      if (charIndex < fullText.length) {
        charIndex++;
        currentWord.textContent = fullText.substring(0, charIndex);
        setTimeout(typeChar, self.typeSpeed);
      } else {
        // Word fully typed, pause then delete
        setTimeout(function() {
          self.deleteWord();
        }, self.pauseBeforeDelete);
      }
    }
    
    typeChar();
  };

  // Run init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
