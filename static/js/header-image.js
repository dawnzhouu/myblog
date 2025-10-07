document.addEventListener("DOMContentLoaded", function () {
  const headerImage = document.querySelector(".headerImage");
  const loader = document.querySelector(".loader");

  if (!headerImage || !loader) return;
  // Get image URLs from the data attributes
  const smallImg = headerImage.getAttribute("small-Image");
  const largeImg = headerImage.getAttribute("large-Image");

  // Determine which image to use based on screen width
  function getImageUrl() {
    return window.innerWidth <= 480 ? smallImg : largeImg;
  }

  const backgroundImage = getImageUrl();

  // Set background image immediately (will use cached version if available)
  headerImage.style.backgroundImage = `url(${backgroundImage})`;

  // Create a new image to detect when it's loaded
  const img = new Image();
  
  // Hide loader immediately if image is already cached
  if (img.complete) {
    loader.style.display = "none";
  } else {
    img.onload = function () {
      loader.style.display = "none";
    };
    img.onerror = function () {
      // Hide loader even if image fails to load
      loader.style.display = "none";
    };
  }
  
  img.src = backgroundImage;

  // Update background image on window resize (with debounce)
  let resizeTimer;
  window.addEventListener("resize", function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      const newImage = getImageUrl();
      if (headerImage.style.backgroundImage.indexOf(newImage) === -1) {
        headerImage.style.backgroundImage = `url(${newImage})`;
      }
    }, 250);
  });
});
