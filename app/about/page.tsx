import styles from "../style/AboutPage.module.css";
import HeaderTop from "../components/HeaderTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCTA from "../components/ServiceCTA";
import Image from "next/image";

import {
  ShieldCheck,
  HeartHandshake,
  Award,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <HeaderTop />
      <Navbar />

      <main className={styles.about}>
        {/* About Clinic */}
        <section className={styles.aboutClinic}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <div>
                <span className={styles.sectionTag}>
                  WHO WE ARE
                </span>

                <h2>
                  Expert Physiotherapy Care
                  Tailored To You
                </h2>

                <p>
                  Active Care Rehab provides professional
                  physiotherapy, rehabilitation, sports injury
                  treatment and recovery-focused care in
                  Milton Keynes.
                </p>

                <p>
                  Whether you're recovering from surgery,
                  managing a sports injury, or seeking relief
                  from chronic pain, our personalised approach
                  ensures every treatment plan is tailored
                  to your goals.
                </p>

                <p>
                  We are committed to helping you regain
                  strength, improve mobility, and return to
                  the activities you love with confidence.
                </p>
              </div>

              <div className={styles.aboutImage}>
                <Image
                  src="/images/Hero_image.png"
                  alt="Active Care Rehab"
                  width={600}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

       {/* Lead Therapist */}
        <section className={styles.therapist}>
          <div className={styles.container}>
            <div className={styles.therapistGrid}>
              <div className={styles.imageBox}>
                <Image
                  src="/images/certified.png"
                  alt="Lead Physiotherapist"
                  width={500}
                  height={600}
                />
              </div>

              <div>
                <span className={styles.sectionTag}>
                  PROFESSIONAL PHYSIOTHERAPY CARE
                </span>

                <h2>HCPC & CSP Registered Physiotherapist</h2>

                <p>
                  Receive expert assessment, treatment, and rehabilitation
                  from a fully qualified physiotherapist committed to
                  delivering evidence-based care and personalised recovery
                  plans tailored to your individual needs.
                </p>

                <p>
                  Using a combination of hands-on therapy, exercise
                  rehabilitation, and patient education, treatment is
                  focused on reducing pain, restoring movement, improving
                  function, and supporting long-term wellbeing.
                </p>

                <div className={styles.credentials}>
                  <div>
                    <strong>HCPC Registered</strong>
                    <span>100% Verified</span>
                  </div>

                  <div>
                    <strong>CSP Member</strong>
                    <span>Fully Accredited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2>
              Why Choose Active Care Rehab?
            </h2>

            <div className={styles.grid}>
              <div className={styles.feature}>
                <ShieldCheck size={40} />
                <h3>Qualified & Registered</h3>
                <p>
                  HCPC registered and CSP accredited
                  physiotherapy care you can trust.
                </p>
              </div>

              <div className={styles.feature}>
                <HeartHandshake size={40} />
                <h3>Patient-Focused Care</h3>
                <p>
                  Every treatment plan is tailored
                  specifically to your needs and goals.
                </p>
              </div>

              <div className={styles.feature}>
                <Award size={40} />
                <h3>Evidence-Based Treatment</h3>
                <p>
                  Modern physiotherapy techniques backed
                  by research and proven outcomes.
                </p>
              </div>

              <div className={styles.feature}>
                <Users size={40} />
                <h3>Personalised Recovery</h3>
                <p>
                  Helping people of all ages regain
                  strength, mobility and confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className={styles.mission}>
          <div className={styles.container}>
            <span className={styles.sectionTag}>
              OUR MISSION
            </span>

            <h2>
              Restoring Movement.
              <br />
              Rebuilding Confidence.
            </h2>

            <p>
              Our mission is to provide exceptional
              physiotherapy and rehabilitation services
              that empower individuals to overcome pain,
              improve mobility, and enjoy healthier,
              more active lives.
            </p>
          </div>
        </section>

        {/* CTA */}
        <ServiceCTA />
      </main>

      <Footer />
    </>
  );
}