class CustomSelect extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.querySelectorAll("[data-value]").forEach((option) =>
      option.addEventListener("click", () => {
        // Handle select
        const select = this.querySelector("select");

        if (select) {
          select.value = option.dataset.value;
          select.dispatchEvent(new Event('change', {bubbles: true}));
        }

        this.querySelector('details').removeAttribute('open');
        this.querySelector('.accordion__title').innerHTML = option.dataset.title;

        // Toggle descriptions
        const descriptions = this.querySelectorAll(".custom-select__description");
        Array.prototype.forEach.call(descriptions, d => {
          d.classList.add('hidden');
        });
        const activeDescription = this.querySelector(`[data-option="${option.dataset.value}"]`);
        if(activeDescription) {
          activeDescription.classList.remove('hidden');
        }
      })
    );
  }
}

customElements.define("custom-select", CustomSelect);
