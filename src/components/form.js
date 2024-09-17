import { useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import { motion } from 'framer-motion';
import { useTranslation } from '@/app/i18n/client';

import useMatchScreen from '@/lib/useMatchScreen';

import TextReveal from './animations/textReveal';

export default function Form({ lng }) {
  const { t } = useTranslation(lng);
  const url = process.env.NEXT_PUBLIC_REGISTER_BACKEND_URL;

  const [submitted, setSubmitted] = useState();
  const [submitting, setSubmitting] = useState(false);
  const { executeRecaptcha } = useReCaptcha();
  const isDesktop = useMatchScreen('lg');

  const FIELDS = [
    { label: t('contato.name'), type: 'text', name: 'firstName' },
    { label: t('contato.last-name'), type: 'text', name: 'lastName' },
    { label: t('contato.email'), type: 'email', name: 'email' },
    { label: t('contato.phone'), type: 'tel', name: 'phone' },
    {
      label: t('contato.know-us'),
      type: 'text',
      name: 'referral',
      optional: true,
    },
  ];

  const onSubmit = async e => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);

    try {
      const data = parseForm(e.target);
      const token = await executeRecaptcha('form_submit');
      data['g-recaptcha-response'] = token;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.log(response);
        setSubmitted(false);
      }
    } catch (error) {
      console.error(error);
      setSubmitted(false);
    } finally {
      setSubmitting(false);
    }
  };

  return submitted ? (
    <p className="cell-b mt-8 self-center text-lg">{t('contato.success')}</p>
  ) : (
    <motion.form
      action={url}
      method="post"
      onSubmit={onSubmit}
      variants={{
        init: {},
        anim: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: isDesktop ? 1 : 0.75,
          },
        },
      }}
      initial="init"
      whileInView="anim"
      viewport={{ once: true }}
      className="cell-b mt-8"
    >
      {FIELDS.map(({ label, type, name, optional }, i) => (
        <label key={name}>
          <TextReveal duration={1} controlled>
            {label + (optional ? '' : '*')}
          </TextReveal>
          <motion.input
            type={type}
            name={name}
            required={!optional}
            variants={{
              init: { width: 0 },
              anim: {
                width: '100%',
                transition: { duration: 0.75, ease: 'easeOut' },
              },
            }}
            className="mb-8 mt-4 block w-full bg-transparent shadow-[0_0.5px] shadow-cacao outline-none focus:shadow-[0_1px]"
          />
        </label>
      ))}
      {submitted === false && (
        <p className="text-lg">
          {t('contato.error')}{' '}
          <a
            href="https://api.whatsapp.com/send?phone=554888759299"
            className="underline"
          >
            <strong>(48) 98875-9299</strong>
          </a>
        </p>
      )}
      <motion.button
        type="submit"
        disabled={submitting}
        variants={{
          init: { scale: 0 },
          anim: {
            scale: 1,
            transition: { duration: 0.5, ease: 'backOut' },
          },
        }}
        className="mt-16 block w-48 border border-cacao p-2 text-center font-bold outline-none transition-colors duration-300 hover:bg-cacao hover:text-sand focus:bg-cacao focus:text-sand disabled:bg-gray-300"
      >
        {t('contato.button')}
      </motion.button>
    </motion.form>
  );
}

const parseForm = form => {
  const data = new FormData(form);

  return Array.from(data.entries()).reduce((acc, [field, value]) => {
    acc[field] = value;
    return acc;
  }, {});
};
