// // app/contact/ContactForm.js
// 'use client';

// import React, { useState } from 'react';
// import styles from './contact.module.css';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: 'general',
//     message: '',
//     newsletter: false
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
      
//       if (response.ok) {
//         setSubmitStatus('success');
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           subject: 'general',
//           message: '',
//           newsletter: false
//         });
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setSubmitStatus(null), 5000);
//     }
//   };

//   return (
//     <div className={styles.contactForm}>
//       <h2>Mesaj Gönderin</h2>
//       {submitStatus === 'success' && (
//         <div className={styles.successMessage}>
//           Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
//         </div>
//       )}
//       {submitStatus === 'error' && (
//         <div className={styles.errorMessage}>
//           Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.
//         </div>
//       )}
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.formGroup}>
//           <label htmlFor="name">Adınız Soyadınız *</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="email">E-posta Adresiniz *</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="phone">Telefon Numaranız</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="subject">Konu *</label>
//           <select
//             id="subject"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             required
//           >
//             <option value="general">Genel Bilgi</option>
//             <option value="order">Sipariş Hakkında</option>
//             <option value="custom">Özel Tasarım Talebi</option>
//             <option value="feedback">Geri Bildirim</option>
//           </select>
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="message">Mesajınız *</label>
//           <textarea
//             id="message"
//             name="message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         <div className={styles.formGroup}>
//           <div className={styles.checkboxGroup}>
//             <input
//               type="checkbox"
//               id="newsletter"
//               name="newsletter"
//               checked={formData.newsletter}
//               onChange={handleChange}
//             />
//             <label htmlFor="newsletter">
//               Yeni koleksiyonlar ve özel teklifler hakkında e-posta almak istiyorum
//             </label>
//           </div>
//         </div>

//         <button
//           type="submit"
//           className={styles.submitButton}
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
//         </button>
//       </form>
//     </div>
//   );
// }


// app/contact/ContactForm.js
'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // WhatsApp yönlendirme fonksiyonu
  const handleWhatsAppClick = () => {
    const phoneNumber = '+902125554433'; // Telefon numarasını uluslararası formatta yazın
    const message = 'Merhaba, Jewelry Store ile iletişime geçmek istiyorum.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'general',
          message: '',
          newsletter: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className={styles.contactForm}>
      <h2>Mesaj Gönderin</h2>
      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Adınız Soyadınız *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">E-posta Adresiniz *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Telefon Numaranız</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Konu *</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="general">Genel Bilgi</option>
            <option value="order">Sipariş Hakkında</option>
            <option value="custom">Özel Tasarım Talebi</option>
            <option value="feedback">Geri Bildirim</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Mesajınız *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <label htmlFor="newsletter">
              Yeni koleksiyonlar ve özel teklifler hakkında e-posta almak istiyorum
            </label>
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
        </button>

        {/* WhatsApp iletişim butonu */}
        <div className={styles.whatsappSection}>
          <p className='text-green-500 font-bold'>Veya bize doğrudan WhatsApp'tan ulaşın:</p>
          <button
            type="button"
            className={styles.whatsappButton}
            onClick={handleWhatsAppClick}
          >
            WhatsApp'tan Yazın
          </button>
          <p className={styles.phoneLink} onClick={handleWhatsAppClick}>
            +90 (212) 555 44 33
          </p>
        </div>
      </form>
    </div>
  );
}