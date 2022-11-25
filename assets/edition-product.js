// global varibales for filtering
let currentCollection;
let currentCollectionMonth;
let filterTags;

// init
setFilter();
setCollectionFromUrl();
getCurrentCollection();
getCurrentCollectionMonth();
filterCards();
// after filters and collections are set
selectFirstOption();
initCarousel();
function updatePage() {
  getCurrentCollection();
  setFilter();
  filterCards();
  getCurrentCollectionMonth();
  // after everyvariable is set correctly
  selectFirstOption();
}

function getCurrentCollectionMonth() {
  let getCurrentCollection = document
    .querySelector(".collection-selection-button-wrapper.active")
    .querySelector(".collection-selection-button");
  if (getCurrentCollection != undefined) {
    currentCollectionMonth = getCurrentCollection.dataset.collectionMonth;
    updatePageCurrentCollectionMonth();
    return currentCollectionMonth;
  }
}

function getCurrentCollection() {
  let getCurrentCollection = document
    .querySelector(".collection-selection-button-wrapper.active")
    .querySelector(".collection-selection-button");
  if (getCurrentCollection != undefined) {
    currentCollection = getCurrentCollection.dataset.collectionName;
    updatePageCurrentCollection(currentCollection);
    return currentCollection;
  }
}

function setFilter() {
  let getFilter = document.querySelectorAll(".filter-field input:checked");
  if (getFilter.length != 0) {
    getFilter = getFilter[0].dataset.filterTag;
    filterTags = getFilter;
    return filterTags;
  }
}

function filterCards() {
  document.querySelectorAll(".card").forEach((productCard) => {
    if (
      productCard.dataset.productTags.includes(filterTags) &&
      productCard.dataset.productCollection == currentCollection
    ) {
      productCard.classList.remove("hidden");
    } else {
      productCard.classList.add("hidden");
    }
    if (filterTags == undefined) {
      if (productCard.dataset.productCollection == currentCollection) {
        {
          productCard.classList.remove("hidden");
        }
      }
    }
  });
}

function selectFirstOption() {
  // reset current active
  let currentActiveCard = document.querySelectorAll(".card.active");
  if (currentActiveCard != undefined) {
    currentActiveCard.forEach((element) => {
      element.classList.remove("active");
    });
  }
  let firstCard = document.querySelectorAll(".card:not(.hidden)")[0];
  if (firstCard != undefined) firstCard.classList.add("active");
  let activeProduct = getProductDetails(firstCard);
  printDescription(activeProduct);
  printReviews(activeProduct);
  initProductCardListeners();
  // here is the place for a loading animation / Card anzeige
  let detailsWrapper = document.querySelector(".product-details-container");
  detailsWrapper.querySelector("img").addEventListener("load", (event) => {
    detailsWrapper.classList.remove("visibility-hidden");
  });
}

function initProductCardListeners() {
  document.querySelectorAll(".card").forEach((productCard) =>
    productCard.addEventListener("click", function (event) {
      let activeProduct = getProductDetails(this);
      printDescription(activeProduct);
      printReviews(activeProduct);
      //printReviews(activeProduct)
      // removes active class from active productcard
      // sets new active card
      document.querySelector(".card.active").classList.remove("active");
      this.classList.add("active");
    })
  );
}

function getProductDetails(activeProduct) {
  // accesses selected products dataset
  if (activeProduct != null) {
    activeProduct = activeProduct.dataset;
  }
  return activeProduct;
}

function printReviews(activeProduct) {
  let reviewContainers = document.getElementsByClassName(
    "product-reviews-container"
  );
  Array.from(reviewContainers).forEach((review) => {
    if (!review.classList.contains("invisible")) {
      review.classList.add("invisible");
    }
    if (review.dataset.id == activeProduct.productId) {
      review.classList.remove("invisible");
    }
  });
  document
    .querySelectorAll(".spr-summary-actions-newreview")
    .forEach((element) => {
      addSubmitButtonValidationCorrection(element);
    });
}

// output of the selected products values. Takes the dataset of the selected Element
function printDescription(activeProduct) {
  let productDescription = document.querySelector(".product-details-container");
  //  ^set dataattribute
  productDescription.dataset.product = activeProduct.productDescription;
  // Product Image
  productDescription.querySelector(".uvp-price").innerHTML =
    activeProduct.productPrice;
  //  product-title
  productDescription.querySelector(".product-title").innerHTML =
    activeProduct.productTitle;
  // company image
  productDescription.querySelector(".company-image").src =
    activeProduct.productLogo;
  // company name
  productDescription.querySelector(".company-name").innerHTML =
    activeProduct.productVendor;
  // Tags
  let tagList = productDescription.querySelector(".product-tag-list");
  let tagArray = activeProduct.productTags;
  tagArray = tagArray.split(",");
  tagList.querySelectorAll(".product-tag").forEach((tag) => tag.remove());
  for (let i = 0; i < tagArray.length; i++) {
    let tagListContent =
      '<p class="product-tag">' + tagArray[i].replace(/\n/g, "");
    +"</p>";
    tagList.insertAdjacentHTML("afterbegin", tagListContent);
  }

  // Description
  let tempDescription = productDescription.querySelector(
    ".product-description-content"
  );
  tempDescription.innerHTML = activeProduct.productDescription;

  // videos
  if (!String(activeProduct.productVideo).includes("no-image")) {
    let information = document.querySelector("#extra-information");
    // information.querySelector("source").src= product.images[2].src
    information.querySelector("source").src =
      "https:" + activeProduct.productVideo;
    document.querySelector("#extra-information").style.display = "block";
  } else {
    document.querySelector("#extra-information").style.display = "none";
  }
  // lin button
  let button = document.querySelector(".product-link");
  if (activeProduct.productShoplink.length > 0) {
    button.classList.remove("hidden");
    button.href = activeProduct.productShoplink
      .replace(" ", "")
      .replace(/\u00a0/g, "")
      .replace("</p>", "");
  } else {
    button.classList.add("hidden");
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// searches the page and updates the collection Name on the page
function updatePageCurrentCollection() {
  let collectionNameCapitalized = capitalizeFirstLetter(currentCollection);
  document
    .querySelectorAll("[data-current-active-collection]")
    .forEach((element) => {
      element.dataset.currentActiveCollection = currentCollection;
      element.innerHTML = collectionNameCapitalized;
    });
}

// searches the page and updates the collection month
function updatePageCurrentCollection() {
  document
    .querySelectorAll("[data-current-active-month]")
    .forEach((element) => {
      element.dataset.currentActiveMonth = currentCollectionMonth;
      element.innerHTML = currentCollectionMonth;
    });
}

// searches the page and updates the collection month on the page
function updatePageCurrentCollectionMonth() {
  document
    .querySelectorAll("[data-current-active-month]")
    .forEach((element) => {
      element.dataset.collectionMonth = currentCollectionMonth;
      element.innerHTML = currentCollectionMonth;
    });
}

// click Listener for collectionSelection

// EventListener on filter field if filterfield exists
if (document.querySelector(".filter-field").length != 0) {
  document
    .querySelector(".filter-field")
    .addEventListener("click", function (event) {
      let filterTag = event.target.dataset.filterTag;
      if (filterTag != undefined) {
        filterTags = filterTag;
        updatePage();
      }
    });
}

// init carousel
function initCarousel() {
  document.querySelectorAll(".spr-reviews").forEach((reviewContainer) => {
    // appendButtons(element);
    let parentElement = reviewContainer.closest(".product-reviews-container");
    addCarouselClickListener(parentElement);
    //

    // init controlls
    parentElement
      .querySelector(".shopify-review-left")
      .classList.remove("hidden");
    parentElement
      .querySelector(".shopify-review-right")
      .classList.remove("hidden");
    if (parentElement.querySelectorAll(".spr-reviews").length != 1) {
      parentElement
        .querySelector(".review-button-right")
        .classList.remove("button-inactive");
    }
    //
    reviewContainer.addEventListener("click", (event) => {
      let currentCarousel = event.target.closest(".product-reviews-container");
      // keep track of index
      getCurrentSlideForMobile(currentCarousel);
    });
  });
  setTimeout(() => {
    addSubmitButtonValidationCorrection();
    // hideTogglebuttonOnClick();
  }, 2000);
}

function getCurrentSlideForMobile() {
  let container = document.querySelector(
    ".product-reviews-container:not(.invisible)"
  );
  let position = container.querySelector(".spr-reviews").scrollLeft;
  let totalCount = position.querySelectorAll(".spr-review").length;
  let containerWidth = position.querySelector(".spr-review").clientWidth;

  // set index
  let newCurrentIndex = Math.round(position / containerWidth) + 1;
  container.dataset.carouselIndex = newCurrentIndex;
}

// adds listeners active buttons;
function addCarouselClickListener(reviewContainer) {
  // leftbutton
  reviewContainer
    .querySelector(".shopify-review-left")
    .addEventListener("click", (event) => {
      let currentCarousel = event.target.closest(".product-reviews-container");
      // slide slider
      reviewContainer.querySelector(".spr-reviews").scrollLeft -=
        currentCarousel.clientWidth;
      // keep track of index
      decreaseCarouselIndex(currentCarousel);
    });

  // rightbutton
  reviewContainer
    .querySelector(".shopify-review-right")
    .addEventListener("click", (event) => {
      let currentCarousel = event.target.closest(".product-reviews-container");
      // slide animation
      reviewContainer.querySelector(".spr-reviews").scrollLeft +=
        currentCarousel.clientWidth;
      // adds index + 1
      addCarouselIndex(currentCarousel);
    });
}

function getSlideCount(element) {
  return element.querySelectorAll(".spr-review").length;
}
function getCarouselIndex(element) {
  return element.dataset.carouselIndex;
}
function addCarouselIndex(element) {
  let carouselIndex = Number(element.dataset.carouselIndex);
  // gets maxSlidesrCount

  if (element.dataset.maxSlides == "none") {
    element.dataset.maxSlides = getSlideCount(element);
  }

  // if not last slide
  if (carouselIndex < Number(element.dataset.maxSlides)) {
    carouselIndex += 1;
    element.dataset.carouselIndex = carouselIndex;
  }
  rightCarouselButton(element, carouselIndex);
  leftCarouselButton(element, carouselIndex);
}
function decreaseCarouselIndex(element) {
  let carouselIndex = Number(element.dataset.carouselIndex);
  if (carouselIndex == 1) {
  } else {
    carouselIndex -= 1;
    element.dataset.carouselIndex = carouselIndex;
  }
  leftCarouselButton(element, carouselIndex);
  rightCarouselButton(element, carouselIndex);
}
function leftCarouselButton(element, carouselIndex) {
  if (carouselIndex == 1) {
    // button inactive
    element
      .querySelector(".review-button-left")
      .classList.add("button-inactive");
  } else {
    element
      .querySelector(".review-button-left")
      .classList.remove("button-inactive");
  }
}
function rightCarouselButton(element, carouselIndex) {
  // if last slide
  if (carouselIndex == Number(element.dataset.maxSlides)) {
    element
      .querySelector(".review-button-right")
      .classList.add("button-inactive");
  } else {
    element
      .querySelector(".review-button-right")
      .classList.remove("button-inactive");
  }
}

function hideTogglebuttonOnClick() {
  document
    .querySelectorAll(".spr-summary-actions-newreview")
    .forEach((element) => {
      element.addEventListener("click", (event) => {
        event.target.classList.add("hidden");
      });
    });
}

// enters a whitespace in the form of the review if its not set.
function addSubmitButtonValidationCorrection(element) {
  // console.log("test")
  document
    .querySelectorAll(".spr-button-primary[type='submit']")
    .forEach((button) => {
      // console.log("title")
      button.addEventListener("click", () => {
        let textfield =
          button.parentElement.previousElementSibling.querySelector(
            ".spr-form-input-textarea"
          );
        //
        // console.log(textfield, "click");
        let titlefield =
          button.parentElement.previousElementSibling.querySelector(
            ".spr-form-input-text"
          );
        if (textfield.value == "") {
          textfield.value = "                                 ";
        }
        if (titlefield.value == "") {
          titlefield.value = "Produktbewertung";
        }
      });
    });
}

// dropdown
document.querySelectorAll(".collection-dropdown").forEach((menu) => {
  let dropdownMenu = menu;
  let selectedOptionDisplay = dropdownMenu.querySelector(
    ".collection-selected-display"
  );
  let collectionOptionsList = dropdownMenu.querySelector(
    ".collection-select-options"
  );
  let collectionOptions = collectionOptionsList.querySelectorAll(
    ".collection-select-options li"
  );
  let currentSelectedOption = selectedOptionDisplay.querySelector("span");
  // alert(currentSelectedOption.innerHTML)

  // show dropdown list
  selectedOptionDisplay.addEventListener("click", () => {
    collectionOptionsList.classList.toggle("open");
    collectionOptionsList.focus();
  });
  collectionOptions.forEach((element) => {
    element.addEventListener("click", (event) => {
      currentSelectedOption.innerHTML = event.target.innerHTML;
      collectionOptionsList.classList.remove("open");
      // set active style
      collectionOptionsList.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
      // set dataattributes
      let elementCollection = event.target.dataset.collectionName;
      let elementMonth = event.target.dataset.collectionMonth;

      currentSelectedOption.dataset.collectionName = elementCollection;
      currentSelectedOption.dataset.collectionMonth = elementMonth;

      updatePage();
    });
  });
});

//  reviews

setCollectionFromUrl();
// onload changes collection
function setCollectionFromUrl() {
  // console.log("url");
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const editionUrl = urlParams.get("edition");
  // console.log("editionUrl", editionUrl);
  if (editionUrl != null) {
    clickCollection(editionUrl);
  }
}
// clicks the collection with the urlParameter
function clickCollection(UrlParameter) {
  let searchValue = UrlParameter.replace('"', "");
  searchValue = searchValue.replace('"', "");
  let dropdownOption = document.querySelector(".collection-select-options");
  let dropdownMenuOption = 
    dropdownOption
      .querySelector("[data-collection-name=" + searchValue + "]")
      if (dropdownMenuOption)
      {dropdownMenuOption.click();}
}

