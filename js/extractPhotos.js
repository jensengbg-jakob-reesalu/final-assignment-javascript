export function extractPhotos(dataObject) {
    let photosArray = [];
    for (let i = 0; i < dataObject.photos.photo.length; i++) {
        photosArray.push(dataObject.photos.photo[i]); 
    }; 
    return photosArray; 
};
