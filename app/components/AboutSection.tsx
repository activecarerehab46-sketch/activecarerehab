import styles from "../style/AboutSection.module.css";
import {
  HeartPulse,
  Users,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Left Side */}
        <div className={styles.left}>
          <span className={styles.smallTitle}>WHY CHOOSE US</span>

          <h2>
            Trusted Physiotherapy Care For A Healthier Life
          </h2>

          <div className={styles.line}></div>

          <p>
            At Active Care Rehab, we provide expert physiotherapy,
            rehabilitation, sports injury treatment, and wellness care.
            Our mission is to help you recover faster, move better, and
            live pain-free through personalised treatment plans.
          </p>

          <button className={styles.btn}>
            Learn More About Us
          </button>
        </div>

        {/* Right Side */}
        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <HeartPulse size={35} />
            </div>
            <h3>Expert Therapists</h3>
            <p>
              Highly qualified professionals focused on your recovery.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <Users size={35} />
            </div>
            <h3>Patient Focused</h3>
            <p>
              Personalised treatment plans tailored to your goals.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <ShieldCheck size={35} />
            </div>
            <h3>Trusted Results</h3>
            <p>
              Proven techniques that improve mobility and wellbeing.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <Stethoscope size={35} />
            </div>
            <h3>Modern Care</h3>
            <p>
              Advanced rehabilitation methods for long-term recovery.
            </p>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default AboutSection;