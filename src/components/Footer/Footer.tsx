import Link from 'next/link';
import { siteConfig } from '../../config/site';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 text-white border-t border-white">
      <div className="container mx-auto px-4">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
          <div className="border-b border-white pb-4 md:border-b-0 md:border-r md:pr-4">
            <h3 className="font-semibold mb-4 text-lg">🚀 Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-gray-300" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-b border-white pb-4 md:border-b-0 md:border-r md:px-4">
            <h3 className="font-semibold mb-4 text-lg">💡 Support</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-300" href="/help">
                  Help Center
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-4 md:pt-0 md:pl-4">
            <h3 className="font-semibold mb-4 text-lg">🌐 Connect</h3>
            <ul className="space-y-2">
              {Object.entries(siteConfig.links).map(([key, value]) => (
                <li key={key}>
                  <a
                    className="hover:text-gray-300"
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {key === 'Instagram' && '👨‍💻 '}
                    {key === 'twitter' && '🐦 '}
                    {key === 'docs' && '📚 '}
                    {key === 'Facebook' && '💬 '}
                    {key === 'sponsor' && '❤️ '}
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 text-center text-sm border-t border-white">
          <p>
            ✨ &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved. ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
