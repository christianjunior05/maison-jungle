import logo from '../styles/Banner.css'
import '../assets/logo.png'
function Banner() {
    const title ="la maison jungle "
return(
    <div className='lmj-banner' >
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1>{{title}}</h1>
    </div>
)
}

export default Banner;

