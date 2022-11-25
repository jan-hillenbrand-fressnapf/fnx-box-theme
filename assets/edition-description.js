// function initCardListeners(){
//   document.querySelectorAll(".card").forEach(card => 
//  card.addEventListener("click",function(event){
//   getProductDetails(this.dataset.productId, function(){
//     let containerID = document.querySelector(".product-details-container").dataset.product;
//     this.dataset.productId == containerID;

//   })
//   document.querySelector(".card.active").classList.remove("active");
//   this.classList.add("active")
//  })
//  )
// }

// // function getProductDetails(productId, callback)
// // {
// //   fetch("/admin/api/2021-10/products/"+ productId +".json", requestOptions)
// // .then(response => response.json())
// //   .then(result => printDescription(result))
// //   .catch(error => console.log('error', error));
// // }
// function getProductDetails(productId){
//   console.log("here",objectConst)
// }

// function printDescription(productResponse){

//   let product = Object.values(productResponse)
//  product = product[0];

//   let productDescription = document.querySelector(".product-details-container");
//   //  ^set dataattribute
//   productDescription.dataset.product = product.id;

//   // Product Image
//   // productDescription.querySelector(".product-picture").src= product.images[0].src;
//   //  product-title
//   productDescription.querySelector(".product-title").innerHTML= product.title;
//     // company image 
//   productDescription.querySelector(".company-image").src= product.images[1].src
//   // company name
//   productDescription.querySelector(".company-name").innerHTML = product.vendor;
//   // Tags
//  let tagList =  productDescription.querySelector(".product-tag-list")
//  let tagArray= product.tags;
//       tagArray = tagArray.split(", ");

//       tagList.querySelectorAll(".product-tag").forEach(tag => tag.remove())
//  for(let i=0; i < tagArray.length;i++)
// {
//       let tagListContent= '<p class="product-tag">'+ tagArray[i] +'</p>';
//       tagList.insertAdjacentHTML("afterbegin",tagListContent)
// } 

//   // Description
//   let descriptionContent = product.body_html;
//   // descriptionContent.split("URL:")[0]
//   let tempDescription = productDescription.querySelector(".product-description-content");
//   tempDescription.innerHTML = ""+descriptionContent.split("URL:")[0]+"";

//   console.log(descriptionContent.split("URL:")[1])
//   // Video
//   console.log(product.images[2])
//   if (product.images[2] != undefined){
//     let information = document.querySelector("#extra-information");
//     information.querySelector("source").src= product.images[2].src
//   }
//   else{
//     document.querySelector("#extra-information").style.display="none"
//   }
  
//   // link
  

// //  let getLink=  productDescription.querySelector(".ewa-rteLine:last-child span");
// let button = productDescription.querySelector(".product-link")
// console.log(descriptionContent)
// getLink = descriptionContent.split("URL:")
// getLink.forEach(link => {
//   if(link.includes("http")){
//     getLink= link;
//     return getLink;
//   }
// })
//     if(getLink){
//       button.classList.remove("hidden")
//       button.href= getLink.innerHTML
//     }
//     else{
//       button.classList.add("hidden")
//     }
//   // callback();
//   }

// function filterByTag(filterTag){
//   let cardsArray = document.querySelectorAll(".card")
//   cardsArray.forEach(card => {
//     console.log(card.dataset.productTags)
//     if(card.dataset.productTags.includes(filterTag)){
//       card.classList.remove("hidden");
//     }
//     else {
//       card.classList.add("hidden");
//     }
//     })
// }

// document.querySelector(".filter-field").addEventListener("click", function(event){
//  let filterTag= event.target.dataset.filterTag
//  if(filterTag!=undefined){
//   filterByTag(filterTag);
//  }
// })
