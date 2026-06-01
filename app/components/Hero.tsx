"use client";

import { useState } from "react";
import styles from "../style/Hero.module.css";
import Image from "next/image";
import {
  CalendarDays,
  Phone,
  ShieldCheck,
  Heart,
  Users,
  HandHeart,
} from "lucide-react";

import AboutSection from "@/app/components/AboutSection";
import ServicesSection from "./ServicesSection";
import ServiceCTA from "./ServiceCTA";
import StatsSection from "./StatsSection";
import BookingForm from "./BookingForm";

export default function Hero() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          {/* LEFT */}
          <div className={styles.left}>
            <h1>
              Move Better.
              <br />
              Feel Better.
              <br />
              <span>Live Better.</span>
            </h1>

            <p>
              Expert physiotherapy, sports massage, and cupping therapy
              to help you recover, restore, and thrive.
            </p>

            <div className={styles.buttons}>
              <button
                className={styles.primaryBtn}
                onClick={() => setOpenForm(true)}
              >
                <CalendarDays size={18} />
                Book Appointment
              </button>

              <a
                href="tel:+442079460950"
                className={styles.secondaryBtn}
              >
                <Phone size={18} />
                Call Us Now
              </a>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <Users size={28} />
                <span>Personalised Care</span>
              </div>

              <div className={styles.feature}>
                <ShieldCheck size={28} />
                <span>Experienced Therapists</span>
              </div>

              <div className={styles.feature}>
                <HandHeart size={28} />
                <span>Evidence-Based Treatment</span>
              </div>

              <div className={styles.feature}>
                <Heart size={28} />
                <span>Better Movement, Better Life</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div className={styles.curve}></div>

            <Image
              src="/images/Hero_image_1.png"
              alt="Physiotherapy"
              fill
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <ServiceCTA />

      {/* Booking Popup */}
      <BookingForm
        isOpen={openForm}
        onClose={() => setOpenForm(false)}
      />
    </>
  );
}