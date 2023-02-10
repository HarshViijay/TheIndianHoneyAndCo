import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section id="beliefs" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Religious Beliefs</h2>
      <p className={`${styles.paragraph} max-w-full mt-5`}>
      “Like a honey bee gathering honey from all type of flowers the wise men search every where for truth and sees only good in all religions.” 
      – Hindu Scripture (Srimad Mahabhagavatam)
      <br/>
      <br/>
      "There comes forth from their bellies a drink of varying hues. Therein is cure for men. Surely, in that is a Sign for a people who reflect.” 
      - Quran, Surah al-Nahl, the Chapter of the Bee (verses 69-70)
      <br/>
      <br/>
      “Pleasant words are like honey from a honeycomb-sweet to the spirit and healthy for the body” - Bible (Prov 16:24) 
      <br/>
      <br/>
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
