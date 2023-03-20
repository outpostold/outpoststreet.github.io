// Set up variables for the postcards
const postcards = document.querySelectorAll('.postcard');
const windowHeight = window.innerHeight;

// Define a function to show the postcards when scrolled to
function showPostcards() {
  postcards.forEach(postcard => {
    const postcardTop = postcard.getBoundingClientRect().top;
    if (postcardTop < windowHeight) {
      postcard.classList.add('show');
    }
  });
}

// Call the showPostcards function when the page is loaded and when scrolled
window.addEventListener('load', showPostcards);
window.addEventListener('scroll', showPostcards);
