const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image img");
const slideImage = document.querySelector(".slide-image img");
const exit = document.querySelector(".exit i");
const count =document.querySelector(".count span");
const prev =document.querySelector(".prev .btn");
const next =document.querySelector(".next .btn");
images.forEach((img , i) =>
img.addEventListener("click", (event) =>{
   slideShow(i);
   slider.classList.add("show");
   slideImage.setAttribute("src", img.src);
}),
);
exit.addEventListener("click", (event) =>{
   slider.classList.remove("show");
});

const slideShow = (i)=> {
   slideImage.src = images[i].src
   count.innerHTML = `${i+1}`;
   index = i;
}
prev.addEventListener("click", () => {
   if (index <= 0 ){
      slideShow(images.length - 1);
   }
   else if (index > 0){
      slideShow(index -1 );
   }
   
});
next.addEventListener("click", () => {
   if(index >= images.length - 1){
      slideShow((index+1) % images.length);
   }
    else if (index < images.length - 1){
      slideShow(index+1);
   }

});



