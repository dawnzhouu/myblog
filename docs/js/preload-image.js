document.addEventListener("DOMContentLoaded", function () {
  // Function to dynamically preload the right image based on screen size
  function preloadBackgroundImage() {
    let preloadImage;

    // Determine the appropriate image to preload based on viewport width
    if (window.innerWidth <= 480) {
      preloadImage = smallImg;
    } else {
      preloadImage = largeImg;
    }

    // Create a link element to preload the image
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.href = preloadImage;
    preloadLink.as = "image";
    preloadLink.type = "image/webp";

    // Append the preload link to the head of the document
    document.head.appendChild(preloadLink);
  }

  preloadBackgroundImage();
});
