'use server';

import { Resend } from 'resend';
import { mailerlite } from '@/utils/mailerlite';
import { removeHtmlTags } from '@/utils/remove-html-tags';
import { REGEX } from '@/global/constants';

type ContactProps = {
  email: string;
  message: string;
  legal: boolean;
};

export async function sendResendMail({ email, message, legal }: ContactProps) {
  const resend = new Resend(process.env.RESEND_API_TOKEN);
  const isValid = email && REGEX.email.test(email) && message && legal;

  if (!isValid) return { success: false };

  const body = [
    `<p>Adres e-mail: <b>${email}</b></p>`,
    `<p>${message.trim()}</p>`,
    '<br />',
    '<br />',
    '<p><em>Wyrażono zgodnę na politykę prywatności</em></p>',
  ].join('');

  try {
    await resend.emails.send({
      from: `${email} przez Formularz <formularz@sending.mindsoulhealer.pl>`,
      to: 'ali@mindsoulhealer.pl',
      replyTo: email,
      subject: `${email} przesyła wiadomość przez formularz kontaktowy`,
      html: body,
      text: removeHtmlTags(body),
    });
    return { success: true };
  } catch {
    return { success: false };
  }
}

type CreateSubscriberParams = {
  email: string;
  legal: boolean;
};

export async function createSubscriber({ email, legal }: CreateSubscriberParams) {
  const isValid = email && REGEX.email.test(email) && legal;

  if (!isValid) return { success: false };

  const params = { email, groups: ['132613531520468195'] };

  try {
    await mailerlite.subscribers.createOrUpdate(params);
    return { success: true };
  } catch {
    return { success: false };
  }
}
