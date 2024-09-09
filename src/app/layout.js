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
  title: 'cocoon.',
  description: 'WIP',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" id="app">
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
