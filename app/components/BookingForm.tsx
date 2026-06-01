"use client";

import { useState, useEffect } from "react";
import styles from "../style/BookingForm.module.css";
import emailjs from "@emailjs/browser";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingForm({
  isOpen,
  onClose,
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    dob: "",
    age: "",
    gender: "",

    visitDate: "",
    visitTime: "",

    service: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const [successMessage, setSuccessMessage] = useState(false);
 const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_j5uuis4",
      "template_n8t62bb",
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        dob: formData.dob,
        age: formData.age,
        gender: formData.gender,
        visitDate: formData.visitDate,
        visitTime: formData.visitTime,
        service: formData.service,
        message: formData.message,
      },
      "gGxeHGEix876vXYkn"
    );

setSuccessMessage(true);

setFormData({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  age: "",
  gender: "",
  visitDate: "",
  visitTime: "",
  service: "",
  message: "",
});
  } catch (error) {
    console.error(error);

    alert(
      "Something went wrong. Please try again."
    );
  }
};
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className={styles.header}>
          <span className={styles.badge}>
            ACTIVE CARE REHAB
          </span>

          <h2>Book Your Consultation</h2>

          <p>
            Start your recovery journey with our expert
            physiotherapists and personalized treatment
            plans.
          </p>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          {/* Name */}

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="firstName">
                First Name *
              </label>

              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="lastName">
                Last Name *
              </label>

              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Contact */}

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="email">
                Email Address *
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">
                Phone Number *
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* DOB & Age */}

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="dob">
                Date of Birth *
              </label>

              <input
                id="dob"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="age">
                Age *
              </label>

              <input
                id="age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Gender */}

          <div className={styles.field}>
            <label htmlFor="gender">
              Gender *
            </label>

            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Other">
                Other
              </option>

              <option value="Prefer Not To Say">
                Prefer Not To Say
              </option>
            </select>
          </div>

          {/* Appointment */}

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="visitDate">
                Preferred Appointment Date *
              </label>

              <input
                id="visitDate"
                type="date"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="visitTime">
                Preferred Time *
              </label>

              <select
                id="visitTime"
                name="visitTime"
                value={formData.visitTime}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Time
                </option>

                <option>
                  09:00 AM
                </option>
                <option>
                  10:00 AM
                </option>
                <option>
                  11:00 AM
                </option>
                <option>
                  12:00 PM
                </option>
                <option>
                  01:00 PM
                </option>
                <option>
                  02:00 PM
                </option>
                <option>
                  03:00 PM
                </option>
                <option>
                  04:00 PM
                </option>
                <option>
                  05:00 PM
                </option>
              </select>
            </div>
          </div>

          {/* Service */}

          <div className={styles.field}>
            <label htmlFor="service">
              Treatment Type *
            </label>

            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Treatment
              </option>

              <option>
                Physiotherapy Assessment
              </option>

              <option>
                Sports Injury Rehabilitation
              </option>

              <option>
                Back Pain Treatment
              </option>

              <option>
                Neck Pain Treatment
              </option>

              <option>
                Post Surgery Recovery
              </option>

              <option>
                Massage Therapy
              </option>

              <option>
                Mobility & Strength Training
              </option>
            </select>
          </div>

          {/* Symptoms */}

          <div className={styles.field}>
            <label htmlFor="message">
              Describe Your Symptoms
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your symptoms, pain area, injury, or reason for consultation..."
            />
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
          >
            Book Appointment
          </button>
        </form>
        {successMessage && (
  <div className={styles.successPopup}>
    <div className={styles.successCard}>
      <div className={styles.successIcon}>✓</div>

      <h3>Appointment Submitted</h3>

      <p>
        Thank you for booking with Active Care Rehab.
        Our team will contact you shortly to confirm
        your appointment.
      </p>

      <button
        onClick={() => {
          setSuccessMessage(false);
          onClose();
        }}
      >
        Close
      </button>
    </div>
  </div>
)}
      </div>
    </div>
  );
}