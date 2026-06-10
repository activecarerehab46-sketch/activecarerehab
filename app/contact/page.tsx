"use client";

import { useState } from "react";
import HeaderTop from "@/app/components/HeaderTop";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServiceCTA from "@/app/components/ServiceCTA";
import emailjs from "@emailjs/browser";
import styles from "../style/ContactPage.module.css";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] =
  useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_j5uuis4",
        "template_cqsmmba",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
         "gGxeHGEix876vXYkn"
      );

      setSuccessMessage(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };
  

  return (
    <>
      <HeaderTop />
      <Navbar />

      <main className={styles.contactPage}>
        {/* HERO */}

        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.tag}>
              CONTACT US
            </span>

            <h1>
              Let's Start Your Recovery Journey
            </h1>

            <p>
              Whether you're recovering from an
              injury, managing pain, or looking
              to improve mobility, our team is
              here to help.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}

        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>

              {/* FORM */}

              <div className={styles.formBox}>
                <span className={styles.smallTag}>
                  SEND MESSAGE
                </span>

                <h2>
                  Book Your Appointment
                </h2>

              
                    <form onSubmit={handleSubmit}>

                    <div className={styles.row}>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        />

                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        />
                    </div>

                    <div className={styles.row}>
                        <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        />

                        <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        />
                    </div>

                    <textarea
                        rows={7}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your condition..."
                        required
                    />

                    <button type="submit">
                        Send Message
                    </button>

                    {successMessage && (
                        <div className={styles.successPopup}>
                        <div className={styles.successCard}>
                            <div className={styles.successIcon}>
                            ✓
                            </div>

                            <h3>Message Sent</h3>

                            <p>
                            Thank you for contacting us.
                            We will get back to you shortly.
                            </p>

                            <button
                            type="button"
                            onClick={() =>
                                setSuccessMessage(false)
                            }
                            >
                            Close
                            </button>
                        </div>
                        </div>
                    )}

                    </form>


              </div>

              {/* CONTACT INFO */}

              <div className={styles.infoBox}>
                <div className={styles.infoCard}>
                  <div className={styles.icon}>
                    <MapPin size={24} />
                  </div>

                  <div className={styles.infoContent}>
                    <h4>Clinic Address</h4>

                    <p>
                      1 Ostlers Lane,
                      Stony Stratford,
                      Milton Keynes,
                      MK11 1AR
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.icon}>
                    <Phone size={24} />
                  </div>

                  <div className={styles.infoContent}>
                    <h4>Phone Number</h4>

                    <p>
                     07428624224
                     , 07459014019
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.icon}>
                    <Mail size={24} />
                  </div>

                  <div className={styles.infoContent}>
                    <h4>Email Address</h4>

                    <p>
                      info@activecarerehab.co.uk
                    </p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.icon}>
                    <Clock3 size={24} />
                  </div>

                  <div className={styles.infoContent}>
                    <h4>Opening Hours</h4>

                    <p>
                      Monday - Saturday
                      <br />
                      8:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* MAP */}

        <section className={styles.mapSection}>
          <div className={styles.container}>
            <span className={styles.smallTag}>
              FIND US
            </span>

            <h2>
              Visit Our Clinic
            </h2>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.1078155352525!2d-0.8561968238370298!3d52.05956047021755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877019d9ffcfb9b%3A0xa006eb4ce9d23116!2s1%20Ostlers%20Ln%2C%20Stony%20Stratford%2C%20Milton%20Keynes%20MK11%201AR%2C%20UK!5e0!3m2!1sen!2sin!4v1781067023211!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            />
            

          </div>
        </section>

        <ServiceCTA />
      </main>

      <Footer />
    </>
  );
}