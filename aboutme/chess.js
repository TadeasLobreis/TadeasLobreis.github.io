
let slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  

  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";


  const header = document.getElementById("para");
  if( slideIndex == 1){
    header.textContent = "Hello there ! My Name is Tadeas Lobreis and I am 23 year old Software Engineer born in Brno, Czech Republic, currently living in Dunedin, Florida.";
  }
  if( slideIndex == 2){
    header.textContent = "I love to learn as many aspects about Software Engineering as possible, However my main interists lie in Data Science, and Frontend Development.";
  }
  if( slideIndex == 3){
    header.textContent = "In August of 2022 I graduated with a Bachelors of Computer Science from the University of Central Florida.";
  }
  if( slideIndex == 4){
    header.textContent = "Outside of coding my hobbies include Chess, Music, and going to the Gym. Here are some of my recent Chess stats!";
  }
  if( slideIndex == 5){
    header.textContent = "My philosophy in life boils down to hard work, pursuit of knowledge and being there for the ones you care for. Thank you for you time!";
  }
}
function goback(){
    location.href = "http://127.0.0.1:5500"
}