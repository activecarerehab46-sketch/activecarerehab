import styles from "../style/ServicesSection.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaRunning,
  FaHeartbeat,
  FaSyringe,
  FaBolt,
  FaHandHoldingMedical,
  FaPlusCircle,
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

            <Link href="/services" className={styles.learnMore}>
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
              Improve circulation, reduce muscle tension, and enhance recovery.
            </p>

            <Link href="/services" className={styles.learnMore}>
              Learn More →
            </Link>
          </div>

          {/* Acupuncture / Dry Needling */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/Acupuncture-Dry-Needling.png"
                alt="Acupuncture and Dry Needling"
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.icon}>
              <FaPlusCircle />
            </div>

            <h3>Acupuncture / Dry Needling</h3>

            <p>
              Target trigger points and relieve pain using precise needle
              techniques.
            </p>

            <Link href="/services" className={styles.learnMore}>
              Learn More →
            </Link>
          </div>

          {/* Cupping Therapy */}
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
              <FaHandHoldingMedical />
            </div>

            <h3>Cupping Therapy</h3>

            <p>
              Promote blood flow, relieve muscle tightness, and support natural
              healing.
            </p>

            <Link href="/services" className={styles.learnMore}>
              Learn More →
            </Link>
          </div>

          {/* Electrotherapy */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/Electrotherapy.png"
                alt="Electrotherapy"
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.icon}>
              <FaBolt />
            </div>

            <h3>Electrotherapy</h3>

            <p>
              Advanced electrical stimulation techniques to reduce pain and aid
              recovery.
            </p>

            <Link href="/services" className={styles.learnMore}>
              Learn More →
            </Link>
          </div>

          {/* PRP Therapy */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/prp.png"
                alt="PRP Therapy"
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.icon}>
              <FaSyringe />
            </div>

            <h3>PRP Therapy</h3>

            <p>
              Natural regenerative treatment that promotes healing and supports
              recovery using your body's own platelets.
            </p>

            <Link href="/services" className={styles.learnMore}>
              Learn More →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}