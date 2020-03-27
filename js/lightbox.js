export function makeLightbox() {
    let lightbox = document.createElement("div");
    lightbox.id = "lightbox";  
    document.body.appendChild(lightbox);
    
    let images = document.querySelectorAll("img");
    images.forEach((image) => {
        image.addEventListener("click", () => {
            lightbox.classList.add("active");
            let lightboxImage = document.createElement("img");
            lightboxImage.src = image.src.replace("_m.jpg", "_b.jpg"); /* lightboxImage gets greater resolution */
            if (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            };
            lightbox.appendChild(lightboxImage);
        });
    });
    lightbox.addEventListener("click", (event) => {
        if (event.target != lightbox) {
            return;
        } else {
            lightbox.classList.remove("active");
        }
    });
    };
    