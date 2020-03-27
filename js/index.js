// Functions imported as modules for cleaner code.
import {getPhotosData} from "./getPhotosData.js";
import {extractPhotos} from "./extractPhotos.js";
import {displayPhotos} from "./displayPhotos.js";
import {makeLightbox} from "./lightbox.js";


// Clicking search button.
document.querySelector("#search-btn").addEventListener("click", async () => {
    document.querySelector("#images-wrapper").innerHTML = "";
    let searchValue = await document.querySelector("#search-input").value; 
    let pageValue = await document.querySelector("#per-page-input").value; 
    let photosData = await getPhotosData(searchValue, pageValue);
    let photos = await extractPhotos(photosData);
    await displayPhotos(photos);
    await makeLightbox();
});

// Pressing 'Enter' triggers search button.
document.querySelector("#search-input").addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {

        document.querySelector("#search-btn").click();
    }
});
document.querySelector("#per-page-input").addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        document.querySelector("#search-btn").click();
    }
});