/* Custom */
/* Anker for buttons on product page */ 
if (window.location.href.includes('/products/')){
    
    let ankerId = 'product_section';
    let product = document.getElementsByClassName('product');
    if (product.length && product.length > 0) {
      section = product[0].parentElement;
      section.setAttribute('id', ankerId);
    }
    let buttons = document.getElementsByClassName('button');
    if (buttons.length && buttons.length > 0) {
      Array.from(buttons).forEach((button) => {
        if (button.pathname == '/products/deine-wau-box') {
          button.setAttribute('href', '#' + ankerId)
        }
      });
    }

    let buyButtons = document.getElementsByClassName('product-form__submit');
    if (buyButtons.length && buttons.length > 0) {
      buyButtons[0].classList.add('inverted_button');
    }
    let imageTextSection = document.querySelectorAll(".image-with-text");

    // waubox-/miaubox
    //imageTextSection[0].classList.add("waubox-teaser");
    //imageTextSection[1].classList.add("manual");

    //
    let multicol = document.querySelectorAll(".multicolumn");
    multicol[1].classList.add("new-products");
  }
  
// add classes for css
if (
  window.document.location.pathname == "/" ||
  window.document.location.pathname == "/products/deine-miau-box" ||
  window.document.location.pathname == "/products/deine-wau-box"
) {
  
}


// Hide ayment processors not usable for ReCharge Subscriptions
var disabledPayments = [
  'klarna',
  'maestro'
]

let paymentItems = document.getElementsByClassName('list-payment__item');
if (paymentItems.length && paymentItems.length > 0) {
  Array.from(paymentItems).forEach((paymentItem) => {
    let paymentAttribute = paymentItem.firstElementChild.getAttribute('aria-labelledby').split('-')[1];
    if(disabledPayments.includes(paymentAttribute)) {
    	paymentItem.style.display = 'none';
    }
  });
}

// Copy Coupon Code to Clipboard
function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

const copyCouponBtns = document.getElementsByClassName('copy-coupon-code');
if (copyCouponBtns.length && copyCouponBtns.length > 0) {
  Array.from(copyCouponBtns).forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      let code = btn.getAttribute('data-code');
      copyToClipboard(code);
  });
  });
}

// Accordion Tabs
function updateTabs() {
  const activeTab = this.querySelector('input[type="radio"]:checked');
  if(activeTab) {
    const labels = this.querySelectorAll('label');
    Array.prototype.forEach.call(labels, function(label) {
      label.classList.remove('active');
    })

    const activeLabel = this.querySelector(`label[for="${activeTab.id}"]`);
    if(activeLabel) {
      activeLabel.classList.add('active');
    }
  }
}

const collapsibles = document.querySelectorAll('.collapsible-content');
Array.prototype.forEach.call(collapsibles, function(c) {
  c.addEventListener('change', updateTabs.bind(c));
  updateTabs.call(c);
})