import { Link } from "react-router-dom";
import { hero } from "../../Assets";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <main>
      <section className={styles.glass}>
        <div className={styles.logo}>
          <h1>
            bloom<span>Note</span>
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Bring Ideas to Life</h1>
            <h3>
              Experience the beautiful simple note-taking app on the web today.
            </h3>
            <Link to='/signup'>
            <button className={` btn ${styles.btn_Join}`}>Join Now</button></Link>
            <Link to='/login'>
            <h4>Already have an account ?</h4></Link>
          </div>
          <div className={styles.image}>
              <img src={hero} alt="" />
          </div>
        </div>
      </section>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
    </main>
  );
};

export { Landing };
