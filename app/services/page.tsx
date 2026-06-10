import HeaderTop from "@/app/components/HeaderTop";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServiceCTA from "@/app/components/ServiceCTA";
import styles from "../style/ServicesPage.module.css";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      <HeaderTop />
      <Navbar />

      <main className={styles.page}>
        {/* INTRO */}

        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div>
                <span className={styles.tag}>
                  OUR SERVICES
                </span>

                <h1>
                  Helping You Move Better,
                  Feel Better & Live Better
                </h1>

                <p>
                  At Active Care Rehab, we provide
                  personalised physiotherapy,
                  rehabilitation and recovery services
                  designed to help you achieve
                  long-term health and wellbeing.
                </p>

                <a href="#" className={styles.btn}>
                  Book Appointment
                </a>
              </div>

              <div className={styles.imageBox}>
                <Image
                  src="/images/Active_care_rehab_logo.png"
                  alt="Physiotherapy"
                  width={700}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>

       <section className={styles.services}>
  <div className={styles.container}>
    <span className={styles.tag}>
      WHAT WE OFFER
    </span>

    <h2>Our Treatments</h2>

    {/* CARD 1 */}

    <div className={styles.serviceCard}>
      <div className={styles.imageSide}>
        <Image
          src="/images/physiotherapy.png"
          alt="Physiotherapy"
          width={600}
          height={400}
        />
      </div>

      <div className={styles.contentSide}>
        <span className={styles.cardTag}>
          RECOVERY & REHABILITATION
        </span>

        <h3>Physiotherapy</h3>

        <p>
          Comprehensive physiotherapy treatments
          designed to reduce pain, restore
          mobility and improve overall physical
          function.
        </p>

        <ul>
          <li>Sports Injury Rehabilitation</li>
          <li>Back & Neck Pain Treatment</li>
          <li>Post Surgery Recovery</li>
          <li>Joint Pain Management</li>
        </ul>
      </div>
    </div>

    {/* CARD 2 */}

    <div className={styles.serviceCard}>
      <div className={styles.imageSide}>
        <Image
          src="/images/sports-massage.png"
          alt="Sports Massage"
          width={600}
          height={400}
        />
      </div>

      <div className={styles.contentSide}>
        <span className={styles.cardTag}>
          PERFORMANCE & RECOVERY
        </span>

        <h3>Sports Massage</h3>

        <p>
          Improve circulation, reduce muscle
          tension and support faster recovery
          before and after physical activity.
        </p>

        <ul>
          <li>Muscle Recovery</li>
          <li>Improved Flexibility</li>
          <li>Reduced Tension</li>
          <li>Injury Prevention</li>
        </ul>
      </div>
    </div>

    {/* CARD 3 */}

          <div className={styles.serviceCardReverse}>
            <div className={styles.contentSide}>
              <span className={styles.cardTag}>
                PAIN RELIEF & RECOVERY
              </span>

              <h3>Acupuncture / Dry Needling</h3>

              <p>
                Target trigger points and muscle tension using precise needle
                techniques designed to reduce pain, improve movement and
                accelerate recovery.
              </p>

              <ul>
                <li>Trigger Point Release</li>
                <li>Pain Reduction</li>
                <li>Improved Mobility</li>
                <li>Muscle Relaxation</li>
              </ul>
            </div>

            <div className={styles.imageSide}>
              <Image
                src="/images/Acupuncture-Dry-Needling.png"
                alt="Acupuncture Dry Needling"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* CARD 4 */}

          <div className={styles.serviceCard}>
            <div className={styles.imageSide}>
              <Image
                src="/images/cupping.png"
                alt="Cupping Therapy"
                width={600}
                height={400}
              />
            </div>

            <div className={styles.contentSide}>
              <span className={styles.cardTag}>
                NATURAL PAIN RELIEF
              </span>

              <h3>Cupping Therapy</h3>

              <p>
                Cupping therapy helps improve blood circulation, relieve muscle
                tension and promote natural healing by creating gentle suction on
                targeted areas of the body.
              </p>

              <ul>
                <li>Improved Blood Flow</li>
                <li>Reduced Muscle Tightness</li>
                <li>Pain Relief</li>
                <li>Enhanced Recovery</li>
              </ul>
            </div>
          </div>

          {/* CARD 4 */}

          <div className={styles.serviceCard}>
            <div className={styles.imageSide}>
              <Image
                src="/images/Electrotherapy.png"
                alt="Electrotherapy"
                width={600}
                height={400}
              />
            </div>

            <div className={styles.contentSide}>
              <span className={styles.cardTag}>
                ADVANCED PAIN MANAGEMENT
              </span>

              <h3>Electrotherapy</h3>

              <p>
                Advanced electrical stimulation treatments that help reduce pain,
                improve circulation and support faster rehabilitation and recovery.
              </p>

              <ul>
                <li>Pain Relief</li>
                <li>Muscle Stimulation</li>
                <li>Improved Blood Flow</li>
                <li>Faster Recovery</li>
              </ul>
            </div>
          </div>

            {/* CARD 3 */}

              <div className={styles.serviceCardReverse}>
                <div className={styles.contentSide}>
                  <span className={styles.cardTag}>
                    REGENERATIVE MEDICINE
                  </span>

                  <h3>PRP Therapy</h3>

                  <p>
                    PRP (Platelet-Rich Plasma) therapy uses the healing properties
                    found in your own blood to support tissue repair, reduce
                    inflammation and promote natural recovery.
                  </p>

                  <ul>
                    <li>Natural Treatment Using Your Own Blood</li>
                    <li>Reduces Pain & Inflammation</li>
                    <li>Promotes Healing & Tissue Repair</li>
                    <li>Supports Arthritis Management</li>
                  </ul>
                </div>

                <div className={styles.imageSide}>
                  <Image
                    src="/images/prp.png"
                    alt="PRP Therapy"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
              
            </div>
          </section>
        {/* FEATURES */}

        <section className={styles.features}>
          <div className={styles.container}>
            <h2>Why Choose Us?</h2>

            <div className={styles.featureGrid}>
              <div className={styles.feature}>
                <h3>Qualified Specialists</h3>

                <p>
                  Experienced physiotherapists
                  providing evidence-based care.
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Personalised Care</h3>

                <p>
                  Every treatment plan is tailored
                  to your unique goals.
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Modern Techniques</h3>

                <p>
                  Latest rehabilitation methods
                  and recovery strategies.
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Fast Recovery</h3>

                <p>
                  Helping you return to daily life
                  quickly and safely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONDITIONS */}

        <section className={styles.conditions}>
          <div className={styles.container}>
            <span className={styles.tag}>
              CONDITIONS WE TREAT
            </span>

            <h2>Helping You Recover Faster</h2>

            <div className={styles.conditionGrid}>
              <div className={styles.condition}>
                <h3>Back Pain</h3>
                <p>
                  Effective treatment for chronic
                  and acute back pain.
                </p>
              </div>

              <div className={styles.condition}>
                <h3>Neck Pain</h3>
                <p>
                  Improve posture and reduce
                  stiffness and discomfort.
                </p>
              </div>

              <div className={styles.condition}>
                <h3>Sports Injuries</h3>
                <p>
                  Recovery plans designed for
                  active individuals.
                </p>
              </div>

              <div className={styles.condition}>
                <h3>Shoulder Pain</h3>
                <p>
                  Restore movement and improve
                  shoulder function.
                </p>
              </div>

              <div className={styles.condition}>
                <h3>Knee Pain</h3>
                <p>
                  Targeted treatment for improved
                  mobility and strength.
                </p>
              </div>

              <div className={styles.condition}>
                <h3>Post Surgery Rehab</h3>
                <p>
                  Structured rehabilitation for
                  a safe recovery.
                </p>
              </div>

              
            </div>
          </div>
        </section>

        <ServiceCTA />
      </main>

      <Footer />
    </>
  );
}