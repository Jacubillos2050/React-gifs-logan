import React from 'react' //Ctl + click me lleva al archivo de definiion de typeScript o archivo barril donde estan la definiciones de tipos y objetos de exportacion  
import ReactDOM from 'react-dom/client'
import { GitLoganExpertApp } from './GitLoganExpertApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{/*Solo se aplica en desarrollo y ayuda a detectar errores, codigo viejo etc*/}
    <GitLoganExpertApp />
  </React.StrictMode>
);



//-------------------------------------------------------------------------------------------------
/*              Start project

1 En cmd con cd voy a la carpeta de mi app y ejecuto yarn create vite 
2 luego elegimos el nombre My-App, se elije react como framework y javaScript como lenguaje 
3 pide ir a la carpeta con cd 
4 ejecutar yarn o yarn install para descargar todo lo que necesita 
5 cuando termina de descargar usamos yarn dev para copiar la url del proyecto y exponerlo en el navegador http://localhost:5173/
6 instalar los modulos de node 




*/


//-------------------------------------------------------------------------------------------------

         
        // Unitest
//Al igual que las PropTypes vite tampoco tiene nada de librerias de test debemos realizar esta config y solo se hace una unica vez 
/*abrimos cmd yarn add --dev jest y agregamos el codigo en package.json en "scripts"

"test": "jest --watchAll" con warchAll nos muestra cosas diferentes por consola  

Usamos jest en javaScript y react testin library para react

cmd yarn add -D @types/jest 
cmd yarn create jest@latest
cmd yarn add --dev babel-jest @babel/core @babel/preset-env
cmd yarn add -D whatwg-fetch  -para ejecutar codigo que ayuda a ejecutar el fetchApi es solo para desarrollo por eso el -D
Tener en cuenta que para poder probar necesito exportar a diferentes archivos
yarn add --dev @testing-library/react
cmd yarn add -D jest-environment-jsdom

Para evaluar funciones con toBe      
Para evaluar los objetos es con toEqual 
*/