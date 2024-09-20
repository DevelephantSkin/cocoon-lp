'use client';
import Footer from '@/components/footer';
import HeaderPrivacyPolicy from '@/components/headerPrivacyPolicy';
import { LanguageProvider } from '@/context/LanguageContext';
import { Container } from './styles';

export default function PrivacyPolicyPage() {
  return (
    <LanguageProvider>
      <HeaderPrivacyPolicy />
      <Container>
        <h1>Privacy Policy</h1>
      </Container>
      <Footer hidePrivacyPolicy />
    </LanguageProvider>
  );
}
