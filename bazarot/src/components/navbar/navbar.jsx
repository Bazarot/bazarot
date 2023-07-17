import style from './navbar.module.css';
import SearchBar from '../searchbar/searchbar';
import getLinks from '../links/links';

const NavBar = () =>{
    const links = getLinks();
    return(
        <nav>
            <ul className={style.navul}>
                {links.map(({label, route}) =>(
                    <li key={route}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <SearchBar/>
        </nav>
    )
}
export default NavBar;