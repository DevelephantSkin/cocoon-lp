'use client';
import Footer from '@/components/footer';
import HeaderPrivacyPolicy from '@/components/headerPrivacyPolicy';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import {
  CocoonImageDiv,
  CommitmentDiv,
  CommitmentOptionList,
  Container,
  ContentContainer,
  MoreInfomationDiv,
  OptionNumber,
  OptionsListDiv,
  PrivacyDiv,
  PrivacyTileDiv,
  TextsDiv,
  TitleDiv,
} from './styles';
import logo from '@/svg/logo.svg';
import logoMilk from '@/svg/logo-milk.svg';
import brandText from '@/svg/brand-text.svg';
import Image from 'next/image';

export default function Content() {
  const { translations } = useLanguage();

  return (
    <>
      <HeaderPrivacyPolicy />
      <Container>
        <ContentContainer>
          <TitleDiv>
            <div>
              <Image
                src={logo}
                alt="Logo Cocoon - figura de um casulo em vetores"
                width={40}
                className={'filter-cacao'}
              />
              <Image
                src={brandText}
                alt="cocoon."
                width={200}
                className={'filter-cacao'}
              />
            </div>
            <h1 className="text-2xl" style={{ textAlign: 'center' }}>
              {translations.privacy.title}
            </h1>
          </TitleDiv>
          <PrivacyDiv>
            <PrivacyTileDiv>
              <h1 className="text-2xl">
                {translations.privacy.privacy_title1}
              </h1>
              <h1 className="text-2xl">
                {translations.privacy.privacy_title2}
              </h1>
            </PrivacyTileDiv>
            <TextsDiv>
              <p>
                <span>{translations.privacy.privacy_description1}</span>
              </p>
              <p>{translations.privacy.privacy_description2}</p>
              <p>{translations.privacy.privacy_description3}</p>
              <p>
                <span>{translations.privacy.privacy_description4}</span>
              </p>
              <p>{translations.privacy.privacy_description5}</p>
              <p>{translations.privacy.privacy_description6}</p>
              <p>
                <span>{translations.privacy.privacy_description7}</span>
              </p>
            </TextsDiv>
            <OptionsListDiv>
              <div>
                <div>
                  <OptionNumber>
                    <p>1</p>
                  </OptionNumber>
                </div>
                <p>{translations.privacy.privacy_option1}</p>
              </div>
              <div>
                <div>
                  <OptionNumber>
                    <p>2</p>
                  </OptionNumber>
                </div>
                <p>{translations.privacy.privacy_option2}</p>
              </div>
              <div>
                <div>
                  <OptionNumber>
                    <p>3</p>
                  </OptionNumber>
                </div>
                <p>{translations.privacy.privacy_option3}</p>
              </div>
              <div>
                <div>
                  <OptionNumber>
                    <p>4</p>
                  </OptionNumber>
                </div>
                <p>{translations.privacy.privacy_option4}</p>
              </div>
            </OptionsListDiv>
          </PrivacyDiv>
          <CommitmentDiv>
            <CocoonImageDiv>
              <Image src={logoMilk} alt="Logo Cocoon" />
            </CocoonImageDiv>
            <h1 className="text-2xl">
              {translations.privacy.commitment_title}
            </h1>
            <TextsDiv>
              <p>
                <span>{translations.privacy.commitment_description}</span>
              </p>
            </TextsDiv>
            <CommitmentOptionList>
              <p>
                <span>{'A) '}</span>
                {translations.privacy.commitment_option1}
              </p>
              <p>
                <span>{'B) '}</span>
                {translations.privacy.commitment_option2}
              </p>
              <p>
                <span>{'C) '}</span>
                {translations.privacy.commitment_option3}
              </p>
            </CommitmentOptionList>
          </CommitmentDiv>
          <MoreInfomationDiv>
            <h1 className="text-2xl">
              {translations.privacy.more_information_title}
            </h1>
            <TextsDiv>
              <p>{translations.privacy.more_information_description1}</p>
              <p>
                <span>
                  {translations.privacy.more_information_description2}
                </span>
              </p>
            </TextsDiv>
          </MoreInfomationDiv>
        </ContentContainer>
      </Container>
      <Footer hidePrivacyPolicy />
    </>
  );
}
