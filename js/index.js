function makeLightbox() {
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

async function getPhotosData(tagsValue, perPageValue) {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&tags=${tagsValue}&per_page=${perPageValue}&format=json&nojsoncallback=1`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log("ERROR IS THIS: ", error);
    }
};

function extractPhotos(dataObject) {
    let photosArray = [];
    for (i = 0; i < dataObject.photos.photo.length; i++) {
        photosArray.push(dataObject.photos.photo[i]); 
    };
    console.log("photosArray length: ", photosArray.length);
    return photosArray;
};

function displayPhotos(array) {
    console.log("array length is: ", array.length);
    for (i = 0; i < array.length; i++) {
        // console.log("************i is now************: ", i);
        let farm = array[i].farm;
        let server = array[i].server; 
        let id = array[i].id;
        let secret = array[i].secret;

        document.querySelector("#images-wrapper").innerHTML += `<div class="img-container"> <img src=https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg}></div>`;
    };
};





// # Individuell inlämningsuppgift

// ## Instruktioner

// Du ska bygga en webbsida där en användare kan via ett sökfält söka efter bilder på Flickr. Resultat från Flickr ska visas upp som ett galleri för användaren. Det ska även gå att klicka på en bild för att få en större version av denna bild.

// API nyckel: 19d3e6e0acfe9c438f368e2c2bab1

// Flickr API dokumentation hittar ni [här](https://www.flickr.com/services/api/flickr.photos.search.html).

// För att göra url:er till bilder kan ni kolla [här](https://www.flickr.com/services/api/misc.urls.html).

// Det viktigaste är inte exakt hur ni skriver er kod utan att ni kan motivera varför ni väljer att göra som ni gör.

// **Krav på funktionalitet:**
// * Kunna söka efter bilder från Flickr-API
// * Kunna ställa in hur många bilder man vill visa
// * Visa i en lightbox

// **För Godkänt krävs:**
// * Att du använder fetch
// * Vettiga namn på variabler och funktioner
// * Ingen JS i HTML (onclick etc)

// **För Väl Godkänt krävs:**
// * Att du har delat upp din kod i ES6 moduler och skrivit några rader som en kommentar varför du delat upp din kod som du gjort.
// * Din sida är responsiv (d.v.s fungerar både i mobil och desktop)

// Inlämning sker via Github och Learnpoint. Ladda upp ditt projekt på Github. Gå sedan in på Learnpoint och under innehåll finns det en inlämningsuppgift där du ska posta din länk till ditt repo. Ifall du behöver hjälp med Github så fråga på lektionen!

// **Inlämning senast**: 25/3 23:59



// 1. https://www.flickr.com/services/rest/

// 2. ? - signlarerar att man väljer en metod

// 3. method=flickr.photos.search

//    4. & - signalerar att man väljer en "funktion" i metoden

//     5. api_key=19d3e6e0acfe9c438f368e2c2bab1c5d
    
//     6. & - signalerar att man väljer EN TILL "funktion" i metoden
    
//     7. tags=${tagsValue}
    
//     8. &
    
//     9. per_page=${perPageValue}
    
//     10. &
    
//     11. format=json
    
//     12. &
    
//     13. nojsoncallback=1

    // https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&tags=${tagsValue}&per_page=${perPageValue}&format=json&nojsoncallback=1