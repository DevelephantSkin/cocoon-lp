'use client';
import Footer from '@/components/footer';
import HeaderPrivacyPolicy from '@/components/headerPrivacyPolicy';
import { LanguageProvider } from '@/context/LanguageContext';
import {
  Container,
  ContentContainer,
  OptionNumber,
  OptionsListDiv,
  PrivacyDiv,
  PrivacyTileDiv,
  TextsDiv,
  TitleDiv,
} from './styles';
import logo from '@/svg/logo.svg';
import brandText from '@/svg/brand-text.svg';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  return (
    <LanguageProvider>
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
              POLÍTICA DE PRIVACIDADE
            </h1>
          </TitleDiv>
          <PrivacyDiv>
            <PrivacyTileDiv>
              <h1 className="text-2xl">A SUA PRIVACIDADE É</h1>
              <h1 className="text-2xl">IMPORTANTE PARA NÓS.</h1>
            </PrivacyTileDiv>
            <TextsDiv>
              <p>
                <span>
                  É política do Cocoon Milagres respeitar a sua privacidade em
                  relação a qualquer informação sua que possamos coletar no site
                  Cocoon Milagres, e outros sites que possuímos e operamos.
                </span>
              </p>
              <p>
                Solicitamos informações pessoais apenas quando realmente
                precisamos delas para lhe fornecer um serviço. Fazemo-lo por
                meios justos e legais, com o seu conhecimento e consentimento.
                Também informamos por que estamos coletando e como será usado.
              </p>
              <p>
                Apenas retemos as informações coletadas pelo tempo necessário
                para fornecer o serviço solicitado. Quando armazenamos dados,
                protegemos dentro de meios comercialmente aceitáveis para evitar
                perdas e roubos, bem como acesso, divulgação, cópia, uso ou
                modificação não autorizados.
              </p>
              <p>
                <span>
                  Não compartilhamos informações de identificação pessoal
                  publicamente ou com terceiros, exceto quando exigido por lei.
                </span>
              </p>
              <p>
                O nosso site pode ter links para sites externos que não são
                operados por nós. Esteja ciente de que não temos controle sobre
                o conteúdo e práticas desses sites e não podemos aceitar
                responsabilidade por suas respectivas políticas de privacidade.
              </p>
              <p>
                Você é livre para recusar a nossa solicitação de informações
                pessoais, entendendo que talvez não possamos fornecer alguns dos
                serviços desejados. O uso continuado de nosso site será
                considerado como aceitação de nossas práticas em torno de
                privacidade e informações pessoais.
              </p>
              <p>
                <span>
                  Se você tiver alguma dúvida sobre como lidamos com dados do
                  usuário e informações pessoais, entre em contato conosco.
                </span>
              </p>
            </TextsDiv>
            <OptionsListDiv>
              <div>
                <div>
                  <OptionNumber>
                    <p>1</p>
                  </OptionNumber>
                </div>
                <p>
                  O serviço Google AdSense que usamos para veicular publicidade
                  usa um cookie DoubleClick para veicular anúncios mais
                  relevantes em toda a Web e limitar o número de vezes que um
                  determinado anúncio é exibido para você.
                </p>
              </div>
              <div>
                <div>
                  <OptionNumber>
                    <p>2</p>
                  </OptionNumber>
                </div>
                <p>
                  Para mais informações sobre o Google AdSense, consulte as FAQs
                  oficiais sobre privacidade do Google AdSense.
                </p>
              </div>
              <div>
                <div>
                  <OptionNumber>
                    <p>3</p>
                  </OptionNumber>
                </div>
                <p>
                  Utilizamos anúncios para compensar os custos de funcionamento
                  deste site e fornecer financiamento para futuros
                  desenvolvimentos. Os cookies de publicidade comportamental
                  usados por este site foram projetados para garantir que você
                  forneça os anúncios mais relevantes sempre que possível,
                  rastreando anonimamente seus interesses e apresentando coisas
                  semelhantes que possam ser do seu interesse
                </p>
              </div>
              <div>
                <div>
                  <OptionNumber>
                    <p>4</p>
                  </OptionNumber>
                </div>
                <p>
                  Vários parceiros anunciam em nosso nome e os cookies de
                  rastreamento de afiliados simplesmente nos permitem ver se
                  nossos clientes acessaram o site através de um dos sites de
                  nossos parceiros, para que possamos creditá-los adequadamente
                  e, quando aplicável, permitir que nossos parceiros afiliados
                  ofereçam qualquer promoção que pode fornecê-lo para fazer uma
                  compra.
                </p>
              </div>
            </OptionsListDiv>
          </PrivacyDiv>
        </ContentContainer>
      </Container>
      <Footer hidePrivacyPolicy />
    </LanguageProvider>
  );
}
