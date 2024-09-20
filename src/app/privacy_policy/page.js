'use client';
import { LanguageProvider } from '@/context/LanguageContext';
import Content from './Content';

export default function PrivacyPolicyPage() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
}
