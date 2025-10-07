document.addEventListener("DOMContentLoaded", function () {
  const headerImage = document.querySelector(".headerImage");
  const loader = document.querySelector(".loader");

  // Get image URLs from the data attributes
  const smallImg = headerImage.getAttribute("small-Image");
  const largeImg = headerImage.getAttribute("large-Image");

  // Set default background image (small screen)
  headerImage.style.backgroundImage = `url(${smallImg})`;

  // Change background image based on screen width
  function updateBackgroundImage() {
    let backgroundImage;
    if (window.innerWidth <= 480) {
      backgroundImage = smallImg;
    } else {
      backgroundImage = largeImg;
    }

    headerImage.style.backgroundImage = `url(${backgroundImage})`;

    const img = new Image();
    img.src = backgroundImage;
    img.onload = function () {
      // Once the background image is loaded, hide the loader
      loader.style.display = "none";
    };
  }

  updateBackgroundImage();

  // Update background image on window resize
  window.addEventListener("resize", updateBackgroundImage);
});
