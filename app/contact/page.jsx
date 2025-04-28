// app/contact/page.js

import React from 'react';
import styles from './contact.module.css';
import Map from './map';

export default function ContactPage() {
  // Server side bileşen olduğu için form gönderme işlemini client side yapmanız gerekecek
  // Bu örnekte sadece markup kısmını göstereceğim
  
  return (
    <main className={styles.contactContainer}>
      <div className={styles.contactHeader}>
        <h1>İletişim</h1>
        <p>Sorularınız veya özel siparişleriniz için bizimle iletişime geçebilirsiniz</p>
      </div>
      
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <div className={styles.infoBox}>
            <div className={styles.infoIcon}>📱</div>
            <h3>Telefon</h3>
            <p>+90 (212) 555 44 33</p>
            <p>Pazartesi - Cumartesi: 09:00 - 19:00</p>
          </div>
          
          <div className={styles.infoBox}>
            <div className={styles.infoIcon}>✉️</div>
            <h3>E-posta</h3>
            <p>info@jewelrystore.com</p>
            <p>support@jewelrystore.com</p>
          </div>
          
          <div className={styles.infoBox}>
            <div className={styles.infoIcon}>🏬</div>
            <h3>Mağaza</h3>
            <p>İstiklal Caddesi No: 123</p>
            <p>Beyoğlu, İstanbul</p>
          </div>
          
          <div className={styles.socialLinks}>
            <h3>Sosyal Medya</h3>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com" className={styles.socialIcon}>
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com" className={styles.socialIcon}>
                <span>Facebook</span>
              </a>
              <a href="https://pinterest.com" className={styles.socialIcon}>
                <span>Pinterest</span>
              </a>
            </div>
          </div>
        </div>
        <div className="contactImage w-1/2 flex justify-center items-center">
  <img 
    src="https://i.pinimg.com/474x/af/a5/dc/afa5dc7875ca1d273b2a74417a5bb810.jpg" 
    alt="İletişim Görseli" 
    className="w-[400px] h-auto object-cover rounded-lg"
  />
</div>

        
        {/* <div className={styles.contactForm}>
          <h2>Bize Ulaşın</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>İsim Soyisim</label>
              <input type="text" id="name" name="name" className={styles.formControl} required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>E-posta Adresiniz</label>
              <input type="email" id="email" name="email" className={styles.formControl} required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.formLabel}>Telefon Numaranız</label>
              <input type="tel" id="phone" name="phone" className={styles.formControl} />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>Konu</label>
              <select id="subject" name="subject" className={styles.formControl}>
                <option value="general">Genel Bilgi</option>
                <option value="order">Sipariş Hakkında</option>
                <option value="custom">Özel Tasarım Talebi</option>
                <option value="feedback">Geri Bildirim</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Mesajınız</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                className={styles.formControl}
                required
              ></textarea>
            </div>
            
            <div className={styles.formGroup}>
              <div className={styles.checkboxGroup}>
                <input type="checkbox" id="newsletter" name="newsletter" className={styles.checkbox} />
                <label htmlFor="newsletter">Yeni koleksiyonlar ve özel teklifler hakkında e-posta almak istiyorum</label>
              </div>
            </div>
            
            <button type="submit" className={styles.submitButton}>Gönder</button>
          </form>
        </div> */}
      </div>
      
      <div className={styles.mapSection}>
        <h2>Bizi Ziyaret Edin</h2>
        <div className={styles.mapContainer}>
        {/* <Map/> */}
          <div className={styles.mapPlaceholder}>
            <p>Harita burada görüntülenecek</p>
            <p>Google Maps veya benzeri bir servis entegre edilebilir</p>
          </div>
        </div>
      </div>
      
      <section className={styles.faqSection}>
        <h2>Sıkça Sorulan Sorular</h2>
        
        <div className={styles.faqItem}>
          <h3>Teslimat ne kadar sürer?</h3>
          <p>Standart teslimat süresi 3-5 iş günüdür. Özel tasarım mücevherler için bu süre 2-3 haftaya kadar uzayabilir.</p>
        </div>
        
        <div className={styles.faqItem}>
          <h3>İade ve değişim politikanız nedir?</h3>
          <p>Tüm ürünlerimiz için 14 gün içerisinde iade ve değişim hakkınız bulunmaktadır. Özel tasarım ürünler için farklı koşullar geçerlidir.</p>
        </div>
        
        <div className={styles.faqItem}>
          <h3>Özel tasarım mücevher yaptırabilir miyim?</h3>
          <p>Evet, özel tasarım talepleriniz için bizimle iletişime geçebilirsiniz. Tasarım ekibimiz size özel mücevher tasarlamaktan mutluluk duyacaktır.</p>
        </div>
        
        <div className={styles.faqItem}>
          <h3>Ürünleriniz orijinal sertifikalı mı?</h3>
          <p>Evet, tüm pırlanta ve değerli taşlar uluslararası sertifikalarla birlikte gönderilmektedir.</p>
        </div>
      </section>
    </main>
  );
}