import HeaderTop from "@/app/components/HeaderTop";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServiceCTA from "@/app/components/ServiceCTA";
import styles from "../style/BlogPage.module.css";
import Image from "next/image";

export default function BlogPage() {
  return (
    <>
      <HeaderTop />
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.tag}>HEALTH BLOG</span>

            <h1>
              Physiotherapy & Recovery Insights
            </h1>

            <p>
              Expert guidance on physiotherapy,
              sports injuries, rehabilitation,
              recovery techniques and long-term
              pain management.
            </p>
          </div>
        </section>

        <section className={styles.blogSection}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.card}>
                <Image
                  src="/images/physiotherapy.png"
                  alt="Physiotherapy"
                  width={500}
                  height={300}
                />

                <h3>
                  How Physiotherapy Helps Recovery
                </h3>

                <p>
                  Learn how physiotherapy improves
                  mobility, reduces pain and helps
                  patients recover from injury.
                </p>
              </div>

              <div className={styles.card}>
                <Image
                  src="/images/sports-massage.png"
                  alt="Sports Massage"
                  width={500}
                  height={300}
                />

                <h3>
                  Benefits of Sports Massage
                </h3>

                <p>
                  Discover how sports massage can
                  improve circulation, flexibility
                  and recovery.
                </p>
              </div>

              <div className={styles.card}>
                <Image
                  src="/images/Acupuncture-Dry-Needling.png"
                  alt="Dry Needling"
                  width={500}
                  height={300}
                />

                <h3>
                  What Is Dry Needling?
                </h3>

                <p>
                  Understand how dry needling
                  targets muscle tension and
                  supports pain relief.
                </p>
              </div>

              <div className={styles.card}>
                <Image
                  src="/images/cupping.png"
                  alt="Cupping Therapy"
                  width={500}
                  height={300}
                />

                <h3>
                  Cupping Therapy Explained
                </h3>

                <p>
                  Explore how cupping therapy may
                  help improve blood flow and
                  recovery.
                </p>
              </div>

              <div className={styles.card}>
                <Image
                  src="/images/Electrotherapy.png"
                  alt="Electrotherapy"
                  width={500}
                  height={300}
                />

                <h3>
                  Electrotherapy Benefits
                </h3>

                <p>
                  Learn how electrotherapy can
                  support rehabilitation and pain
                  management.
                </p>
              </div>

              <div className={styles.card}>
                <Image
                  src="/images/prp.png"
                  alt="PRP Therapy"
                  width={500}
                  height={300}
                />

                <h3>
                  PRP Therapy for Healing
                </h3>

                <p>
                  Discover how platelet-rich plasma
                  therapy supports natural tissue
                  repair.
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