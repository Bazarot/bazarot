import style from './about.module.css';
import NavBar from '@/components/navbar/navbar';

const Home = () =>{
    return(
        <div className={style.main}>
            <NavBar/>
            <h1>This is our info and app abouts page</h1>
        </div>
    )
}
export default Home;