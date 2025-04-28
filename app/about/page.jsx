// import React from 'react'

// export default function about() {
//   return (
//     <div>
//       about page
//     </div>
//   )
// }



// app/about/page.js

// import Image from 'next/image';
// // import  from './about.module.css';

// import '@/app/about/about.module.css';

// // Server Side Component
// export default async function AboutPage() {
//   // SSR içinde yapılabilecek işlemler
//   // Örneğin bir API'den şirket bilgilerini çekebilirsiniz
//   const companyData = await getCompanyData();
  
//   return (
//     <main className="container mx-auto px-4 py-12">
//       <section className="mb-16">
//         <h1 className="text-4xl font-bold mb-6  ">Hakkımızda</h1>
//         <div className="relative w-full h-96 mb-8">
//           <Image 
//             src="/images/workshop.jpg" 
//             alt="Mücevher Atölyemiz" 
//             fill
//             className="object-cover rounded-lg"
//             priority
//           />
//         </div>
//         <p className="text-lg mb-6">
//           {companyData.history}
//         </p>
//       </section>

//       <section className="grid md:grid-cols-2 gap-12 mb-16">
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Hikayemiz</h2>
//           <p className="mb-4">
//             2005 yılında küçük bir aile işletmesi olarak başlayan yolculuğumuz, bugün Türkiye'nin önde gelen mücevher markalarından biri olarak devam ediyor. Her bir parçamız, geleneksel el işçiliği ve modern tasarım anlayışını bir araya getirerek, sizlere benzersiz mücevherler sunmayı amaçlıyor.
//           </p>
//           <p>
//             Mücevherlerimizde sadece en kaliteli malzemeleri kullanıyor, her bir taşın ve metalin kaynağını özenle seçiyoruz. Sürdürülebilirlik ve etik üretim anlayışımız, işimizin temelini oluşturuyor.
//           </p>
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Felsefemiz</h2>
//           <p className="mb-4">
//             Biz sadece mücevher satmıyoruz; hikayeleri, anıları ve duyguları şekillendiriyoruz. Her bir parça, taşıyanın kişiliğini yansıtan, zamansız ve benzersiz bir sanat eseri olarak tasarlanıyor.
//           </p>
//           <p>
//             Müşteri memnuniyeti bizim için en üst öncelik. Satın alma sürecinden sonra da sizlerle bağımızı koparmıyor, ömür boyu mücevher bakım ve danışmanlık hizmetleri sunuyoruz.
//           </p>
//         </div>
//       </section>

//       <section className="mb-16">
//         <h2 className="text-2xl font-semibold mb-6">Tasarım Ekibimiz</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {companyData.team.map((member) => (
//             <div key={member.id} className="text-center">
//               <div className="relative w-48 h-48 mx-auto mb-4">
//                 <Image 
//                   src={member.photo} 
//                   alt={member.name} 
//                   fill
//                   className="object-cover rounded-full"
//                 />
//               </div>
//               <h3 className="text-xl font-medium">{member.name}</h3>
//               <p className="text-gray-600">{member.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="bg-gray-50 p-8 rounded-lg">
//         <h2 className="text-2xl font-semibold mb-6">Zanaatımız</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           <div>
//             <p>
//               Her mücevher, uzman zanaatkarlarımız tarafından İstanbul'daki atölyemizde el işçiliğiyle üretiliyor. Modern teknoloji ile geleneksel teknikleri birleştirerek, hem dayanıklılığı hem de estetiği bir arada sunuyoruz.
//             </p>
//             <ul className="mt-4 space-y-2">
//               <li className="flex items-center">
//                 <span className="mr-2 text-emerald-600">✓</span>
//                 Etik kaynaklı değerli taşlar
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-emerald-600">✓</span>
//                 Geri dönüştürülmüş değerli metaller
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-emerald-600">✓</span>
//                 Çevre dostu üretim süreci
//               </li>
//               <li className="flex items-center">
//                 <span className="mr-2 text-emerald-600">✓</span>
//                 Ömür boyu garanti
//               </li>
//             </ul>
//           </div>
//           <div className="relative h-64">
//             <Image 
//               src="/images/crafting.jpg" 
//               alt="Zanaat Süreci" 
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// // Örnek bir API çağrısı fonksiyonu
// async function getCompanyData() {
//   // Gerçek projede bu veriyi bir API'den veya CMS'den çekebilirsiniz
//   // Şu an için statik veri döndürüyoruz
//   return {
//     history: "25 yıllık deneyimimizle, mücevher dünyasında kendi izimizi bırakmayı başardık. Türk mücevher geleneğini modern tasarım anlayışıyla buluşturarak, her biri özenle işlenmiş benzersiz parçalar yaratıyoruz.",
//     team: [
//       {
//         id: 1,
//         name: "Ayşe Yılmaz",
//         title: "Baş Tasarımcı",
//         photo: "/images/team/ayse.jpg"
//       },
//       {
//         id: 2,
//         name: "Mehmet Demir",
//         title: "Usta Kuyumcu",
//         photo: "/images/team/mehmet.jpg"
//       },
//       {
//         id: 3,
//         name: "Zeynep Kaya",
//         title: "Taş Uzmanı",
//         photo: "/images/team/zeynep.jpg"
//       }
//     ]
//   };
// }



// app/about/page.js

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