// app/contact/Map.js
'use client'

import { useEffect, useRef } from 'react';
import styles from './contact.module.css';

export default function Map() {
  const mapRef = useRef(null);
  
  useEffect(() => {
    // Google Maps API'yi yüklemek için bir script oluşturalım
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    
    // Global bir callback fonksiyonu tanımlayalım
    window.initMap = function() {
      if (mapRef.current) {
        // Mağazanızın lokasyonu
        const storeLocation = { lat: 41.0082, lng: 28.9784 }; // İstanbul koordinatları
        
        // Haritayı oluşturalım
        const map = new window.google.maps.Map(mapRef.current, {
          center: storeLocation,
          zoom: 15,
          styles: [
            // İsteğe bağlı özel harita stilleri ekleyebilirsiniz
          ]
        });
        
        // Mağaza konumu için bir işaretçi ekleyelim
        new window.google.maps.Marker({
          position: storeLocation,
          map: map,
          title: 'Jewelry Store',
          animation: window.google.maps.Animation.DROP,
        });
      }
    };
    
    // Script'i sayfaya ekleyelim
    document.head.appendChild(googleMapsScript);
    
    // Component unmount olduğunda temizlik yapalım
    return () => {
      window.initMap = null;
      document.head.removeChild(googleMapsScript);
    };
  }, []);
  
  return (
    <div ref={mapRef} className={styles.mapContainer} />
  );
}