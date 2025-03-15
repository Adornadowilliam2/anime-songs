// Function to generate image elements and download buttons
window.onload = function () {
  const imageGallery = document.getElementById("image-gallery");

  for (let i = 1; i <= 162; i++) {
    const imgItem = document.createElement("div");
    imgItem.classList.add("image-item");

    const img = document.createElement("img");
    img.src = `images/${i}.jpg`; // Image path
    img.alt = `Image ${i}`;

    const downloadButton = document.createElement("button");
    downloadButton.classList.add("download-btn");
    downloadButton.innerText = `Download ${i}`;
    downloadButton.onclick = function () {
      downloadImage(i);
    };

    imgItem.appendChild(img);
    imgItem.appendChild(downloadButton);
    imageGallery.appendChild(imgItem);
  }
};

// Function to trigger image download
function downloadImage(imageNumber) {
  const link = document.createElement("a");
  link.href = `images/${imageNumber}.jpg`; // Path to the image
  link.download = `${imageNumber}.jpg`; // Suggested file name
  link.click();
}
