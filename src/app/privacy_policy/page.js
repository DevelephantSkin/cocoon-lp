'use client';
import Footer from '@/components/footer';
import HeaderPrivacyPolicy from '@/components/headerPrivacyPolicy';
import { LanguageProvider } from '@/context/LanguageContext';

export default function PrivacyPolicyPage() {
  return (
    <LanguageProvider>
      <HeaderPrivacyPolicy />
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
      <Footer hidePrivacyPolicy />
    </LanguageProvider>
  );
}
