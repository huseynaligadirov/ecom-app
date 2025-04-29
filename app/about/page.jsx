

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
        <h1>Eşsiz Mücevher Sanatı</h1>
        <p>25 yıldır zarif tasarımlarımızla hayatınızın özel anlarını taçlandırıyoruz</p>
      </section>

      <section className={styles.sectionAnimation}>
        <h2 className={styles.sectionTitle}>Hikayemiz</h2>
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
            <h2>Tutkuyla Başlayan Bir Yolculuk</h2>
            <p>
              2005 yılında küçük bir aile işletmesi olarak başlayan yolculuğumuz, bugün Türkiye'nin önde gelen mücevher markalarından biri olarak devam ediyor. Her bir parçamız, geleneksel el işçiliği ve modern tasarım anlayışını bir araya getirerek, sizlere benzersiz mücevherler sunmayı amaçlıyor.
            </p>
            <p>
              Mücevherlerimizde sadece en kaliteli malzemeleri kullanıyor, her bir taşın ve metalin kaynağını özenle seçiyoruz. Sürdürülebilirlik ve etik üretim anlayışımız, işimizin temelini oluşturuyor.
            </p>
            <p className={styles.goldText}>
              <strong>Misyonumuz:</strong> Zamansız tasarımlarla yaşamın özel anlarını ölümsüzleştirmek.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionAnimation}>
        <h2 className={styles.sectionTitle}>Tasarım Ekibimiz</h2>
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
        <h2 className={styles.sectionTitle}>Zanaatımız</h2>
        <div className={styles.craftsmanshipGrid}>
          <div className={styles.craftsmanshipContent}>
            <p>
              Her mücevher, uzman zanaatkarlarımız tarafından İstanbul'daki atölyemizde el işçiliğiyle üretiliyor. Modern teknolojiyle geleneksel teknikleri birleştirerek, hem dayanıklılığı hem estetiği bir arada sunuyoruz.
            </p>
            <ul className={styles.featuresList}>
              <li>Etik kaynaklı değerli taşlar</li>
              <li>Geri dönüştürülmüş değerli metaller</li>
              <li>Çevre dostu üretim süreci</li>
              <li>Ömür boyu garanti</li>
            </ul>
          </div>
          <div className={styles.craftsmanshipImage}>
            <Image 
              src="/images/crafting.jpg" 
              alt="Zanaat Süreci" 
              fill
            />
          </div>
        </div>
      </section>

      <section className={`${styles.valuesSection} ${styles.sectionAnimation}`}>
        <h2 className={styles.sectionTitle}>Değerlerimiz</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>★</div>
            <h3>Kalite</h3>
            <p>Her bir mücevher, en yüksek kalite standartlarında üretilir ve titizlikle kontrol edilir.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>♥</div>
            <h3>Tutku</h3>
            <p>Mücevher yapımına olan tutkumuz, her parçada kendini gösterir ve müşterilerimize ilham verir.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>♦</div>
            <h3>Sürdürülebilirlik</h3>
            <p>Çevre dostu uygulamalarla, gelecek nesiller için sürdürülebilir bir mücevher sektörü yaratmayı hedefliyoruz.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
