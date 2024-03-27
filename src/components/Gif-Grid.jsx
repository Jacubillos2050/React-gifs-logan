import { GifItem } from "../components/Gif-Item";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {//luego de recibir la category solo se debe ejecutar una unica vez la funcion 
   //este array hace que useEffect se ejecute una unica vez
    const { images, isLoading } = useFetchGifs( category );
    return (
        <>
            <h1>{ category }</h1>   
            {
                isLoading && ( <h2>Loading....</h2> )
            }
            <div className="card-grid">
                { images.map (( image ) => (
                    <GifItem key={ image.id } { ...image }/>

                ))
                }
            </div>          
        </>
    )
}