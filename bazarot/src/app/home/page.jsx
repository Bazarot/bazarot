import style from './home.module.css';
import NavBar from '@/components/navbar/navbar';

const Home = () =>{
    return(
        <div className={style.main}>
            <NavBar/>
            <h1>This is the home page</h1>
        </div>
    )
}
export default Home;