import '../styles/Banner.css';  // Import correct du fichier CSS
import logo from '../assets/logo.png';  // Import correct de l'image

function Banner() {
    const title = "La maison jungle";  // Variable pour le titre
    
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />  {/* Utilisation de l'image */}
            <h1>{title}</h1>  {/* Affichage de la variable title sans {{}} */}
        </div>
    );
}

export default Banner;
