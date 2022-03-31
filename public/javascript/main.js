/////////////////////////
/// GALERIE FILTRABLE ///
/////////////////////////

const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filter-item")){
 
      // deactivate existing active 'filter-item'
     filterContainer.querySelector(".active").classList.remove("active");
 
      // activate new 'filter-item'
     event.target.classList.add("active");
 
     const filterValue = event.target.getAttribute("data-filter");
 
     galleryItems.forEach((item) =>{
 
        if(item.classList.contains(filterValue) || filterValue === 'all'){
         item.classList.remove("hide");
          item.classList.add("show");
        }
 
        else{
         item.classList.remove("show");
         item.classList.add("hide");
        }
 
      });
    }
  });

  

///////////////////////////////////////////////
/// BOUTON RETOUR EN HAUT (back to the top) ///
///////////////////////////////////////////////

// obtenir le bouton
let mybutton = document.getElementById("btn-back-to-the-top");

// quand l'utilisateur scroll vers le bas de 40px, faire apparaître le bouton
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 40 ||
    document.documentElement.scrollTop > 40
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// quand l'utilisateur clique sur le bouton, scroller vers le haut du document

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
