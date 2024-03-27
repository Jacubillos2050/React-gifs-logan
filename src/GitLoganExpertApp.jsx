import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitLoganExpertApp = () => {  

    const [ categories, setCategories ] = useState
        (['']);
        
        const onAddCategory = ( newCategory ) => {
            if ( categories.includes( newCategory ) ) return;
            setCategories([ newCategory, ...categories ]);//si ponemos valorant primero se agrega arriba y desplaza los demas hacia abajo
        
        }
    return (
        <>
            <h1>Anime categories by Logan</h1> 
            <AddCategory onNewCategory={ ( value ) => onAddCategory ( value ) }/> {/*si duplico esto se duclica en la pagina los componentes */}
            
            {
                categories.map(( category ) => (//on significa evento
                    <GifGrid key={ category } category={ category }/>
                ))
            }
           
            {/* <button onClick={onAddCategory}>Add</button>todo lo que tiene on quiere decir que agrega algo
         */}
        </>
        );
    }



// FirstApp.propTypes = {
//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string,
// };

// FirstApp.defaultProps = { //los defaultProps van a entrar 1ro que los tipos (propTypes)
//     title: 'No hay titulo',
//     subtitle: 'There are not numbers either',
// };

//Api key = usPlkbmEG7cy4CVfGqvFhELUM8XCUxwE