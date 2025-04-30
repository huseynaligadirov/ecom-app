
import React from 'react';
import styles from './contact.module.css';
import ContactForm from './ContactForm'; 

export default function ContactPage() {
  return (
    <main className={styles.container}>
      {/* Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1>Bizimle İletişime Geçin</h1>
          <p>Size en kısa sürede dönüş yapacağız</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className={styles.contactGrid}>
        {/* Contact Info (Sunucu tarafında render edilen statik içerik) */}
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📱</div>
            <h3>Telefon</h3>
            <p>+90 (212) 555 44 33</p>
            <p className={styles.infoDetail}>Pazartesi - Cumartesi: 09:00 - 19:00</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>✉️</div>
            <h3>E-posta</h3>
            <p>info@jewelrystore.com</p>
            <p>support@jewelrystore.com</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🏬</div>
            <h3>Mağaza Adresimiz</h3>
            <p>İstiklal Caddesi No: 123</p>
            <p>Beyoğlu, İstanbul</p>
          </div>

          <div className={styles.socialSection}>
            <h3>Sosyal Medya</h3>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com" aria-label="Instagram">
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <span>Facebook</span>
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest">
                <span>Pinterest</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form kısmını client component olarak ayırıyoruz */}
        <ContactForm />
      </section>

      {/* Harita Bölümü */}
      <section className={styles.mapSection}>
        <h2>Bizi Ziyaret Edin</h2>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.279637145478!2d28.97885931571606!3d41.02546232624979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab974807d0575%3A0x44089783d1089f31!2s%C4%B0stiklal%20Cd.!5e0!3m2!1str!2str!4v1623761484761!5m2!1str!2str"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}