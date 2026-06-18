"use client";

import { useState } from "react";
import styles from "../style/Footer.module.css";
import Link from "next/link";
import BookingForm from "./BookingForm";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
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
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="LinkedIn">
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
                <li>
                <Link href="/membership">
                  Membership
                </Link>
              </li>
                <li>
                <Link href="/membership">
                  Packages
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
              <li>Acupuncture / Dry Needling</li>
              <li>Cupping Therapy</li>
              <li>Electrotherapy</li>
              <li>PRP Therapy</li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h3>Contact Us</h3>

            <div className={styles.consultationBox}>
              <h4>✓ Free 20-Min Consultation</h4>

              <p>
                Speak with our specialists and
                discover the best treatment plan
                for your recovery.
              </p>

              <button
                className={styles.consultationBtn}
                onClick={() => setIsBookingOpen(true)}
              >
                Book Now
              </button>
            </div>

            <div className={styles.contactItem}>
              <FaMapMarkerAlt />

              <span>
                1 Ostlers Lane,
                <br />
                Stony Stratford
                <br />
                Milton Keynes
                <br />
                MK11 1AR
                <br />
                United Kingdom
              </span>
            </div>

            <div className={styles.contactItem}>
              <FaPhoneAlt />

              <a href="tel:+4407428624224">
                07428624224
              </a>,
               <a href="tel:+4407459014019">
                07459014019
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

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}