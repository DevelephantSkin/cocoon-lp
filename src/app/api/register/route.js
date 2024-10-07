import { ipAddress } from '@vercel/functions';
import { createTransport } from 'nodemailer';

function buildMessage(user) {
  // prettier-ignore
  return `<h3>Novo cadastro Cocoon</h3>
  <p>
    <b>Nome:</b> ${user.firstName}<br />
    <b>Sobrenome:</b> ${user.lastName}<br />
    <b>E-mail:</b> ${user.email}<br />
    <b>Telefone:</b> ${user.phone} <br />
    <b>Como ouviu falar de nós:</b> ${user.referral || 'não informado'}
  </p>
`;
}

async function sendMessage(user) {
  const message = buildMessage(user);
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_FROM_EMAIL,
      pass: process.env.SMTP_FROM_PASSWORD,
    },
  });

  const result = await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    to: process.env.CONTACT_FORM_DESTINATION,
    subject: `Novo cadastro via site Cocoon [${user.firstName} ${user.lastName}]`,
    html: message,
    replyTo: user.email,
  });

  console.log(result);
}

const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify';

async function verifyRecaptcha(token, ip) {
  const response = await fetch(RECAPTCHA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
      remoteip: ip,
    }),
  });

  if (!response.ok) {
    throw new Error(
      'Error verifying ReCAPTCHA: ' + JSON.stringify(response.body),
    );
  }

  return await response.json();
}

export async function POST(req) {
  const body = await req.json();
  if (!body) {
    return new Response(
      JSON.stringify({ message: 'Missing required fields' }),
      { status: 422 },
    );
  }

  const recaptchaToken = body['g-recaptcha-response'];
  const recaptchaResponse = await verifyRecaptcha(
    recaptchaToken,
    ipAddress(req),
  );
  if (!recaptchaResponse.success) {
    console.warn(
      `ReCAPTCHA verification failed for token: ${recaptchaToken} (${recaptchaResponse['error-codes']})`,
    );
    return new Response(
      JSON.stringify({ message: 'ReCAPTCHA verification failed' }),
      { status: 422 },
    );
  }
  await sendMessage(body);

  return new Response();
}
