import styles from "../style/HeaderTop.module.css";
import { MapPin, Clock3, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";

export default function HeaderTop() {
  return (
    <header className={styles.headerTop}>
      <div className={styles.container}>
        <div className={styles.left}>
          <a
            href="https://maps.google.com/?q=1+Ostlers+Lane+Stony+Stratford+Milton+Keynes+MK11+1AR"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            <MapPin size={14} />
            <span>Milton Keynes, UK</span>
          </a>

          <div className={styles.item}>
            <Clock3 size={14} />
            <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
          </div>
        </div>

        <div className={styles.right}>
          <a href="tel:+442079460950" className={styles.item}>
            <Phone size={14} />
            <span>020 7946 0950</span>
          </a>

          <a
            href="mailto:info@activecarerehab.co.uk"
            className={styles.item}
          >
            <Mail size={14} />
            <span>info@activecarerehab.co.uk</span>
          </a>

          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://google.com" target="_blank">
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}