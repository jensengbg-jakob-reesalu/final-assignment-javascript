export function displayPhotos(array) {
    for (let i = 0; i < array.length; i++) {
        let farm = array[i].farm;
        let server = array[i].server; 
        let id = array[i].id;
        let secret = array[i].secret;
        document.querySelector("#images-wrapper").innerHTML += `<div class="img-container"> <img src=https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg}></div>`;
    };
};