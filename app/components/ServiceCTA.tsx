"use client";

import styles from "../style/ServiceCTA.module.css";
import { useState } from "react";
import BookingForm from "./BookingForm";

export default function ServiceCTA() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <section className={styles.cta}>
        <div className={styles.container}>
          <span className={styles.tag}>
            GET STARTED TODAY
          </span>

          <h2>
            Ready To Start Your Recovery Journey?
          </h2>

          <p>
           Our experienced physiotherapists are here to help you move better, feel stronger, and live pain-free. Book your appointment today and take the first step toward better health.
          </p>

          <div className={styles.buttons}>
            <button
              className={styles.primaryBtn}
              onClick={() => setOpenForm(true)}
            >
              Book Appointment
            </button>

            <a
              href="tel:02079460950"
              className={styles.secondaryBtn}
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <BookingForm
        isOpen={openForm}
        onClose={() => setOpenForm(false)}
      />
    </>
  );
}