'use client'
import style from './navbar.module.css';
import SearchBar from '../searchbar/searchbar';
import Link from 'next/link';
import getLinks from '../links/page';
//Este componente renderiza del Navbar de todos los endpoins (menos del landing)
const NavBar = () =>{
    const links = getLinks();
    return(
        <nav className={style.navcontainer}>
            <ul className={style.navul}>
                {links.map(({label, route}) =>(
                    <li key={route}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <SearchBar />
        </nav>
    )
}
export default NavBar;