"use client";

import styles from "../style/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import BookingForm from "./BookingForm";

export default function Navbar() {
  const [openForm, setOpenForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/Active_care_rehab_logo.png"
              alt="Active Care Rehab"
              width={220}
              height={70}
              priority
              className={styles.logoImage}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className={styles.menu}>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About Us</Link>
            </li>

            <li>
              <Link href="/services">Services</Link>
            </li>

            <li>
              <Link href="/conditions">Conditions</Link>
            </li>

            <li>
              <Link href="/blog">Blog</Link>
            </li>

            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* CTA */}
          <button
            className={styles.button}
            onClick={() => setOpenForm(true)}
          >
            Book Appointment
          </button>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenu}
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`${styles.mobileOverlay} ${
          menuOpen ? styles.show : ""
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`${styles.mobileDrawer} ${
          menuOpen ? styles.drawerOpen : ""
        }`}
      >
        <div className={styles.drawerHeader}>
          <Image
            src="/images/Active_care_rehab_logo.png"
            alt="Active Care Rehab"
            width={180}
            height={60}
          />

          <button
            onClick={() => setMenuOpen(false)}
            className={styles.closeBtn}
          >
            <X size={24} />
          </button>
        </div>

        <ul className={styles.mobileLinks}>
          <li>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/conditions"
              onClick={() => setMenuOpen(false)}
            >
              Conditions
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <button
          className={styles.mobileBookBtn}
          onClick={() => {
            setMenuOpen(false);
            setOpenForm(true);
          }}
        >
          Book Appointment
        </button>
      </div>

      {/* Booking Form Popup */}
      <BookingForm
        isOpen={openForm}
        onClose={() => setOpenForm(false)}
      />
    </>
  );
}