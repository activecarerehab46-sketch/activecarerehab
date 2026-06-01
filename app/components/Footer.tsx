import styles from "../style/Footer.module.css";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About */}
        <div className={styles.column}>
          <h2 className={styles.logo}>
            Active Care Rehab
          </h2>

          <p className={styles.description}>
            Active Care Rehab provides expert
            physiotherapy, rehabilitation,
            sports injury treatment, and
            recovery-focused care. Our goal is
            to help you move better, feel
            stronger, and live pain-free.
          </p>

          <div className={styles.socials}>
            <a
              href="#"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/services">
                Services
              </Link>
            </li>

            <li>
              <Link href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.column}>
          <h3>Our Services</h3>

          <ul>
            <li>Physiotherapy</li>
            <li>Sports Massage</li>
            <li>Cupping Therapy</li>
            <li>Rehabilitation</li>
            <li>Injury Recovery</li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h3>Contact Us</h3>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt />

            <span>
              1 Ostlers Lane
              
              ,Stony Stratford
              <br />
              Milton Keynes
              ,
              MK11 1AR
              <br />
              United Kingdom
            </span>
          </div>

          <div className={styles.contactItem}>
            <FaPhoneAlt />

            <a href="tel:+4407428624224">
              07428624224
            </a>
          </div>

          <div className={styles.contactItem}>
            <FaEnvelope />

            <a href="mailto:info@activecarerehab.co.uk">
              info@activecarerehab.co.uk
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>
          © 2026 Active Care Rehab.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}