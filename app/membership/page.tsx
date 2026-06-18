import HeaderTop from "@/app/components/HeaderTop";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServiceCTA from "@/app/components/ServiceCTA";
import styles from "../style/Membership.module.css";

import {
  Award,
  Heart,
  Users,
  Check,
  X,
  ShieldCheck,
  Clock3,
  BadgePercent,
} from "lucide-react";

export default function MembershipPage() {
  return (
    <>
      <HeaderTop />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>


        
        
      </section>

      {/* Packages */}
      <section className={styles.section} id="packages">
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Treatment Packages
          </h2>

          <div className={styles.grid}>
            {/* Standard */}
            <div className={styles.card}>
              <span className={styles.discount}>20% OFF</span>

              <h3>Standard Package</h3>
              <h4>5 Sessions</h4>

              <ul>
                <li>
                  <Check size={18} />
                  Physiotherapy Assessment
                </li>

                <li>
                  <Check size={18} />
                  Physiotherapy Treatment
                </li>

                <li>
                  <X size={18} />
                  Acupuncture
                </li>

                <li>
                  <X size={18} />
                  PRP Therapy
                </li>
              </ul>
            </div>

            {/* Premium */}
            <div className={styles.card}>
              <span className={styles.discount}>36% OFF</span>

              <span className={styles.popular}>
                Most Popular
              </span>

              <h3>Premium Package</h3>

              <h4>8 Sessions</h4>

              <ul>
                <li>
                  <Check size={18} />
                  Physiotherapy Assessment
                </li>

                <li>
                  <Check size={18} />
                  Physiotherapy Treatment
                </li>

                <li>
                  <X size={18} />
                  PRP Therapy
                </li>
              </ul>
            </div>

            {/* Elite */}
            <div className={styles.card}>
              <span className={styles.discount}>42% OFF</span>

              <h3>Elite Package</h3>

              <h4>10 Sessions</h4>

              <ul>
                <li>
                  <Check size={18} />
                  Physiotherapy Assessment
                </li>

                <li>
                  <Check size={18} />
                  Physiotherapy Treatment
                </li>

                <li>
                  <X size={18} />
                  PRP Therapy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className={styles.membership}>
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Membership Cards
          </h2>

          <div className={styles.grid}>
            {/* Gold */}
            <div className={styles.memberCard}>
              <div className={styles.memberTitle}>
                <Award size={40} />
                <h3>Gold Member</h3>
              </div>

              <p>Lifelong Membership For One Person</p>

              <ul>
                <li>
                  <BadgePercent size={18} />
                  5% off treatment packages
                </li>

                <li>
                  <BadgePercent size={18} />
                  30% off individual treatments
                </li>

                <li>
                  <BadgePercent size={18} />
                  10% off PRP treatment
                </li>

                <li>
                  <Clock3 size={18} />
                  Priority Booking
                </li>

                <li>
                  <ShieldCheck size={18} />
                  Free Initial Consultation
                </li>
              </ul>
            </div>

            {/* Couple */}
            <div className={styles.memberCard}>
              <div className={styles.memberTitle}>
                <Heart size={40} />
                <h3>Couple Membership</h3>
              </div>

              <p>Lifelong Membership For Two People</p>

              <ul>
                <li>
                  <BadgePercent size={18} />
                  5% off treatment packages
                </li>

                <li>
                  <BadgePercent size={18} />
                  25% off individual treatments
                </li>

                <li>
                  <BadgePercent size={18} />
                  5% off PRP treatment
                </li>

                <li>
                  <ShieldCheck size={18} />
                  Free Physiotherapy Assessment
                </li>

                <li>
                  <Clock3 size={18} />
                  1 Free Treatment Every 6 Months
                </li>
              </ul>
            </div>

            {/* Family */}
            <div className={styles.memberCard}>
              <div className={styles.memberTitle}>
                <Users size={40} />
                <h3>Family Membership</h3>
              </div>

              <p>Up To 4 Family Members</p>

              <ul>
                <li>
                  <BadgePercent size={18} />
                  5% off treatments
                </li>

                <li>
                  <BadgePercent size={18} />
                  30% off individual treatments
                </li>

                <li>
                  <X size={18} />
                  Excludes Acupuncture, Shockwave Therapy & PRP
                </li>

                <li>
                  <ShieldCheck size={18} />
                  Free Family Consultation Every 6 Months
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Frequently Asked Questions
          </h2>

          <div className={styles.faq}>
            <details>
              <summary>Are memberships lifelong?</summary>
              <p>
                Yes. All memberships are lifelong and provide
                exclusive benefits and discounts.
              </p>
            </details>

            <details>
              <summary>Can I upgrade my package later?</summary>
              <p>
                Yes. Packages can be upgraded anytime based on
                your treatment requirements.
              </p>
            </details>

            <details>
              <summary>Do PRP treatments receive discounts?</summary>
              <p>
                Gold members receive 10% discount and Couple
                members receive 5% discount on PRP treatment.
              </p>
            </details>

            <details>
              <summary>Do members receive priority booking?</summary>
              <p>
                Yes. Members enjoy priority appointment booking.
              </p>
            </details>
          </div>
        </div>
      </section>

      <ServiceCTA />

      <Footer />
    </>
  );
}