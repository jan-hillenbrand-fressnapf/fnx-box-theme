Function.prototype.throttle = function(minimumDistance) {
  let timeout,
      lastCalled = 0,
      throttledFunction = this;

  function throttleCore() {
     let context = this;

     function callThrottledFunction(args) {
        lastCalled = Date.now();
        throttledFunction.apply(context, args);
     }
     // Wartezeit bis zum nächsten Aufruf bestimmen
     let timeToNextCall = minimumDistance - (Date.now() - lastCalled);
     // Egal was kommt, einen noch offenen alten Call löschen
     cancelTimer();
     // Aufruf direkt durchführen oder um offene Wartezeit verzögern
     if (timeToNextCall < 0) {
        callThrottledFunction(arguments, 0);
     } else {
        timeout = setTimeout(callThrottledFunction, timeToNextCall, arguments);
     }
  }
  function cancelTimer() {
     if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
     }
  }
  // Aufsperre aufheben und gepeicherte Rest-Aufrufe löschen
  throttleCore.reset = function() {
     cancelTimer();
     lastCalled = 0;
  }
  return throttleCore;
};

class ProductNavigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.navigation = document.querySelector('.product-navigation');
    this.navigationItems = Array.prototype.slice.call(this.navigation.querySelectorAll('a')).reverse();
    this.bounds = {};
    this.currentScrollTop = 0;
    this.preventReveal = false;
    this.originalPosition = this.navigation.offsetTop;

    this.onScrollHandler = this.onScroll.bind(this);
    this.throttledScrollToActiveItem = this.scrollToActiveItem.throttle(300).bind(this);

    this.hideHeaderOnScrollUp = () => this.preventReveal = true;

    this.addEventListener('preventHeaderReveal', this.hideHeaderOnScrollUp);
    window.addEventListener('scroll', this.onScrollHandler, false);

    this.navigationItems.map(navigationItem => navigationItem.addEventListener('click', (e) => {
      e.preventDefault();

      const target = document.querySelector(navigationItem.dataset.target);
      if(target) {
        window.scrollTo({top: target.parentElement.offsetTop - this.navigation.offsetHeight + 1, behavior: 'smooth'});
      }
    }))

    // Give parent height to prevent jumping
    this.navigation.parentElement.style.height = `${this.navigation.offsetHeight}px`;

    this.createObserver();
  }

  disconnectedCallback() {
    this.removeEventListener('preventHeaderReveal', this.hideHeaderOnScrollUp);
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  createObserver() {
    let observer = new IntersectionObserver((entries, observer) => {
      this.bounds = entries[0].intersectionRect;
      observer.disconnect();
    });

    observer.observe(this.navigation);
  }

  scrollToActiveItem(activeItem) {
    this.navigation.querySelector("ul").scrollTo({left: activeItem.offsetLeft - 16, behavior: 'smooth'});
  }

  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > this.originalPosition) {
      requestAnimationFrame(this.reveal.bind(this));  
      let activeItem = false;

      // Reset navigation items
      this.navigationItems.forEach(n => n.parentElement.classList.remove('product-navigation__item--active'));

      // Set active item
      for(const navigationItem of this.navigationItems) {
        const id = navigationItem.dataset.target;
        const targetElement = document.querySelector(id);

        if(targetElement) {
          const rect = targetElement.parentElement.getBoundingClientRect();
          if(rect.top <= this.navigation.offsetHeight) {
            // Set active class
            activeItem = navigationItem.parentElement;
            activeItem.classList.add('product-navigation__item--active');
            break;
          }
        }
      }

      if(!activeItem) {
        activeItem = this.navigation.querySelector('li');
        if(activeItem) {
          activeItem.classList.add('product-navigation__item--active');
        }
      }

      // Scroll to active item (mobile)
      this.throttledScrollToActiveItem(activeItem);
    } else {
      requestAnimationFrame(this.hide.bind(this));  
    }
  }

  hide() {
    this.navigation.classList.remove('product-navigation--sticky');
    this.navigationItems.forEach(n => n.parentElement.classList.remove('product-navigation__item--active'));
  }

  reveal() {
    this.navigation.classList.add('product-navigation--sticky', 'animate');
  }
}

customElements.define('product-navigation', ProductNavigation);