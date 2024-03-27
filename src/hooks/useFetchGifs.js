import { useState, useEffect } from "react"; //useEffect es un hook de react que sirve para disparar efectos secundarios algo que se dispare cuando algo suceda todos los use son una funcion 
import { getGifs} from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {//custon hooks = a una funcion que regresa algo 
    //console.log({ title, url, id });

    const [images, setImages] = useState ([]);//aunque tenemos dos custon hooks solo va a diparar 1 de los dos 
    const [isLoading, setIsLoading] = useState (true);

    const getImages = async() => {
        const newImages = await getGifs ( category );
        setImages( newImages );
        setIsLoading( false );
    }
    
    useEffect (() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}