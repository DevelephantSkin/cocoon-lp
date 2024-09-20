'use client';
import Footer from '@/components/footer';
import HeaderPrivacyPolice from '@/components/headerPrivacyPolice';
import { LanguageProvider } from '@/context/LanguageContext';

export default function PrivacyPolicePage() {
  return (
    <LanguageProvider>
      <HeaderPrivacyPolice />
      <div
        style={{
          height: '100dvh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Privacy Policy</h1>
      </div>
      <Footer hidePrivacyPolice />
    </LanguageProvider>
  );
}
