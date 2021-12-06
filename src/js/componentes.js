import '../css/components.css';
import webpackLogo from '../assets/img/webpack-logo.png';

export const saludar = ( nombre ) => {
    console.log("Creando el saludo");

    const h1 =  document.createElement('h1');

    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);

    console.log(webpackLogo);
    const img = document.createElement('img');
    img.src = webpackLogo;
    document.body.append( img );
}