import styles from "../style/ServicesSection.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaRunning,
  FaHeartbeat,
  FaHandsHelping,
  FaSpa,
} from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <span className={styles.subtitle}>OUR SERVICES</span>

        <h2>How We Can Help You</h2>

        <div className={styles.grid}>
          {/* Physiotherapy */}

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/physiotherapy.png"
                alt="Physiotherapy"
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.icon}>
              <FaRunning />
            </div>

            <h3>Physiotherapy</h3>

            <p>
              Restore movement, reduce pain, and improve mobility with
              personalised treatment plans.
            </p>

           <Link href="/about" className={styles.learnMore}>
            Learn More →
          </Link>
          </div>

          {/* Sports Massage */}

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/sports-massage.png"
                alt="Sports Massage"
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.icon}>
              <FaHeartbeat />
            </div>

            <h3>Sports Massage</h3>

            <p>
              Improve circulation, reduce tension, and enhance recovery.
            </p>

            <Link href="/about" className={styles.learnMore}>
            Learn More →
          </Link>
          </div>

          {/* Cupping */}

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/cupping.png"
                alt="Cupping Therapy"
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.icon}>
              <FaHandsHelping />
            </div>

            <h3>Cupping Therapy</h3>

            <p>
              Promote healing, improve circulation, and relieve muscle
              tightness.
            </p>

            <Link href="/about" className={styles.learnMore}>
            Learn More →
          </Link>
          </div>

          {/* Massage Therapy */}

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/massage.png"
                alt="Massage Therapy"
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.icon}>
              <FaSpa />
            </div>

            <h3>Massage Therapy</h3>

            <p>
              Relax muscles, reduce stress, and support overall wellbeing.
            </p>

            <Link href="/about" className={styles.learnMore}>
            Learn More →
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}