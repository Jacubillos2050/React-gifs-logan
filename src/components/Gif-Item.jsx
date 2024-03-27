
export const GifItem = ({ title, url, id }) => {//custon hooks = a una funcion que regresa algo 
    //console.log({ title, url, id });

    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}