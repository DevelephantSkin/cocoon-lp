import localFont from 'next/font/local';
import { ReCaptchaProvider } from 'next-recaptcha-v3';

import './globals.css';

const regulator = localFont({
  src: [
    {
      path: '../fonts/Regulator-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Regulator-Light.woff2',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata = {
  title: 'Cocoon',
  description:
    'Conheça o Cocoon, uma obra-prima arquitetônica em São Miguel dos Milagres, Alagoas, onde a natureza se encontra com o requinte da vida moderna...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" id="app">
      <head>
        <meta
          name="google-site-verification"
          content="_Dypge19W8wzYwMCxIKpD_Ntku-ve_74Um2pz4HsLJQ"
        />
      </head>
      <ReCaptchaProvider reCaptchaKey="6LdGYhgqAAAAAJ5qUBZtUQPyDf7UlHryhrRmZazq">
        <body
          className={
            regulator.className +
            ' w-screen overflow-x-hidden text-balance bg-sand tracking-normal'
          }
        >
          {children}
        </body>
      </ReCaptchaProvider>
    </html>
  );
}
