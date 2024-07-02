import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });
const adventureFont = localFont({
  src: '../assets/fonts/adventure/Adventure.otf',
});
const adventureFontHollow = localFont({
  src: '../assets/fonts/adventure/Adventure-Hollow.otf',
});

export const metadata: Metadata = {
  title: 'O Jeux de Société',
  description: 'Découvrez, partagez et jouez !',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={adventureFont.className}>
        <div className="md:container md:mx-auto md:w-[85%] containerMain">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
