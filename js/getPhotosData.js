export async function getPhotosData(tagsValue, perPageValue) {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&tags=${tagsValue}&per_page=${perPageValue}&format=json&nojsoncallback=1`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log("ERROR IS THIS: ", error);
    }
};