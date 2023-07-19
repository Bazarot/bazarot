import style from './landingbar.module.css';
import Image from 'next/image'
//Este componente muestra el navbar del landing
const LandingBar = () =>{
    const img='/Media/logo.png'
    return(
        <nav className={style.navcontainer}>
            <Image src={img} width={20} height={20} alt='Bazarot' className={style.navlogo}/>
        </nav>
    )
}
export default LandingBar;