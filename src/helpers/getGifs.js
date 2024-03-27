
export const getGifs = async ( category ) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=usPlkbmEG7cy4CVfGqvFhELUM8XCUxwE&q=${ category }&limit=20`;

    const response = await fetch ( url );   
    const { data } = await response.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));
    //console.log(gifs);
    return gifs;
}