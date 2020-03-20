document.querySelector("#search-btn").addEventListener("click", async () => {
    let searchValue = await document.querySelector("#search-input").value; 
    let pageValue = await document.querySelector("#select-menu").value; 
    
    let photosData = await getPhotosData(searchValue, pageValue);
    let photos = await extractPhotos(photosData);
    await displayPhotos(photos);
});



async function getPhotosData(tagsValue, perPageValue) {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&tags=${tagsValue}&per_page=${perPageValue}&format=json&nojsoncallback=1`;

    try {
        let response = await fetch(url);
        console.log(response);
        let data = await response.json();
        console.log("This is data: ", data);
        return data;
    } catch (error) {
        console.log("ERROR IS THIS: ", error);
    }
};

function extractPhotos(dataObject) {
    let photosArray = [];
    console.log("dataObject in extractPhotos: ", dataObject);
    console.log("dataObject.photos.photo: ", dataObject.photos.photo);
    for (i = 0; i < dataObject.photos.photo.length; i++) {
        console.log(dataObject.photos.photo[i]);
        photosArray.push(dataObject.photos.photo[i]); 
    };
    return photosArray;
};

function displayPhotos(array) {
    for(i = 0; i < array.length; i++) {
        console.log("************i is now************: ", i);
        let farm = array[i].farm;
        let server = array[i].server;
        let id = array[i].id;
        let secret = array[i].secret;

        document.querySelector("#images-wrapper").innerHTML += `<img src=https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg}>`;
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