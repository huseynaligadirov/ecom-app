

import Image from 'next/image';
import styles from './about.module.css'; // CSS modülünü import ediyoruz

// Server Side Component
export default async function AboutPage() {
  // Örnek veri (gerçek bir API'den çekilebilir)
  const companyData = {
    history: "25 yıllık deneyimimizle, mücevher dünyasında kendi izimizi bırakmayı başardık. Türk mücevher geleneğini modern tasarım anlayışıyla buluşturarak, her biri özenle işlenmiş benzersiz parçalar yaratıyoruz.",
    team: [
      {
        id: 1,
        name: "Ayşe Yılmaz",
        title: "Baş Tasarımcı",
        photo: "/images/team/ayse.jpg"
      },
      {
        id: 2,
        name: "Mehmet Demir",
        title: "Usta Kuyumcu",
        photo: "/images/team/mehmet.jpg"
      },
      {
        id: 3,
        name: "Zeynep Kaya",
        title: "Taş Uzmanı",
        photo: "/images/team/zeynep.jpg"
      }
    ]
  };
  
  return (
    <main className={styles.aboutContainer}>
      <section className={styles.heroSection}>
        <h1>Unique Jewellery Art</h1>
        <p>For 25 years, we crown the special moments of your life with our elegant designs</p>
      </section>

      <section className={styles.sectionAnimation}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <div className={styles.storySection}>
          <div className={styles.storyImage}>
            <img src="https://i.pinimg.com/474x/95/5e/d1/955ed15a1121eee47ce8e569202878a5.jpg" alt=""  />
            {/* <Image 
              src="/images/workshop.jpg" 
              alt="Mücevher Atölyemiz" 
              fill
              priority
            /> */}
          </div>
          <div className={styles.storyContent}>
            <h2>A Journey Started with Passion</h2>
            <p>
             
Started in 2005 as a small family business, our journey continues today as one of the leading jewellery brands in Turkey. Each of our pieces aims to offer you unique jewellery by combining traditional craftsmanship and modern design approach.
            </p>
            <p>
            We use only the highest quality materials in our jewellery and carefully select the source of each stone and metal. Sustainability and ethical production are at the heart of our business.
            </p>
            <p className={styles.goldText}>
              <strong>Our mission:</strong> To immortalise the special moments of life with timeless designs.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionAnimation}>
        <h2 className={styles.sectionTitle}>Our Design Team</h2>
        <div className={styles.teamGrid}>
          {companyData.team.map((member) => (
            <div key={member.id} className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image 
                  src={member.photo} 
                  alt={member.name} 
                  fill
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.craftsmanshipSection} ${styles.sectionAnimation}`}>
        <h2 className={styles.sectionTitle}>Our craft</h2>
        <div className={styles.craftsmanshipGrid}>
          <div className={styles.craftsmanshipContent}>
            <p>
            Each jewel is handcrafted by our expert artisans in our workshop in Istanbul. By combining modern technology with traditional techniques, we offer both durability and aesthetics.
            </p>
            <ul className={styles.featuresList}>
              <li>Ethically sourced gemstones</li>
              <li>Recycled precious metals</li>
              <li>Environmentally friendly production process</li>
              <li>Lifetime guarantee</li>
            </ul>
          </div>
          <div className={styles.craftsmanshipImage}>
         <img src="https://i.pinimg.com/736x/df/f1/3c/dff13cfc73e6ed8585068a7c1ba26935.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className={`${styles.valuesSection} ${styles.sectionAnimation}`}>
        <h2 className={styles.sectionTitle}>Our Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>★</div>
            <h3>Quality</h3>
            <p>
            Each piece of jewellery is manufactured to the highest quality standards and meticulously checked.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>♥</div>
            <h3>Passion</h3>
            <p>Our passion for jewellery making is evident in every piece and inspires our customers.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>♦</div>
            <h3>Sustainability</h3>
            <p>With environmentally friendly practices, we aim to create a sustainable jewellery industry for future generations.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
