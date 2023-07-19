import BarChart from '@/components/bardash/bardash';
import styles from './page.module.css';
import LandingBar from '@/components/landingbar/lanfingbar';
import Lines from '@/components/linedash/Lines';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <LandingBar/> */}
      <section className={styles.logob}/>
      <section className={styles.seccion}>
        <h2>Juegos de mesa</h2>
      </section>
      <section className={styles.seccion}>
        <h2>Juegos TCG</h2>
        <BarChart/>
      </section>
      <section className={styles.seccion}>
        <h2>Juegos RPG</h2>
      </section>
      <section className={styles.seccion}>
        <h2>Coleccionables</h2>
      </section>
      <section className={styles.seccion}>
        <h2>Ropa</h2>
      </section>
      <section className={styles.seccion}>
        <h2>Usuarios actual</h2>
        <Lines/>
      </section>
    </main>
  )
}
