




import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';



export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 px-[3%] md:px-[10%] border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hakkımızda Bölümü */}
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-4">About Us</h3>
            <p className="text-gray-600 mb-4">
            Reflect your personal style with our unique and elegant jewellery and accessories. Each piece is expertly crafted with care and attention to detail.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://instagram.com" className="text-red-500 hover:text-pink-700" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com" className="text-red-500 hover:text-pink-700" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-red-500 hover:text-pink-700" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-red-600">
                Collections
                </Link>
              </li>
              <li>
                <Link href="#trending" scroll={true} className="text-gray-600 hover:text-red-600">
                New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#indirimler"   className="text-gray-600 hover:text-red-600">
                Discounts
                </Link>
              </li>
            
              <li>
                <Link href="/about" className="text-gray-600 hover:text-red-600">
                 About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-red-600">
                 Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold text-red-700 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-red-500 mr-2 mt-1" />
                <span className="text-gray-600">
                  Bağdat Caddesi No:123<br />
                  Kadıköy, İstanbul
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-red-500 mr-2" />
                <Link href="tel:+902121234567" className="text-gray-600 hover:text-red-600">
                  +90 (212) 123 45 67
                </Link>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-red-500 mr-2" />
                <Link href="mailto:info@takiaksesuar.com" className="text-gray-600 hover:text-red-600">
                  info@takiaksesuar.com
                </Link>
              </div>
            </div>
          </div>

          {/* Bülten Aboneliği - Client Component'i burada kullanıyoruz */}
          <div>
            <h3 className="text-lg font-semibold text-red-700 mb-4">Subscribe to our Newsletter</h3>
            <p className="text-gray-600 mb-4">
            Find out about the latest collections, special discounts and events.
            </p>
            {/* <NewsletterForm /> */}
          </div>
         
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Your Jewellery & Accessories Store. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/kullanim-sartlari" className="text-gray-600 hover:text-pink-600 text-sm">
              Terms of Use
              </Link>
              <Link href="/gizlilik-politikasi" className="text-gray-600 hover:text-pink-600 text-sm">
              Privacy Policy
              </Link>
              <Link href="/cerezler" className="text-gray-600 hover:text-pink-600 text-sm">
              Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}