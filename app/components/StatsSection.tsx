import styles from "../style/StatsSection.module.css";
import {
  FaUserMd,
  FaHeartbeat,
  FaSmile,
  FaAward,
} from "react-icons/fa";

export default function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.stat}>
        <div className={styles.icon}>
          <FaUserMd />
        </div>

        <h3>4+</h3>
        <p>Years Experience</p>
      </div>

      <div className={styles.stat}>
        <div className={styles.icon}>
          <FaHeartbeat />
        </div>

        <h3>500+</h3>
        <p>Successful Treatments</p>
      </div>

      <div className={styles.stat}>
        <div className={styles.icon}>
          <FaSmile />
        </div>

        <h3>98%</h3>
        <p>Patient Satisfaction</p>
      </div>

      <div className={styles.stat}>
        <div className={styles.icon}>
          <FaAward />
        </div>

        <h3>15+</h3>
        <p>Specialized Services</p>
      </div>
    </section>
  );
}