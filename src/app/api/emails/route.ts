import { verify } from 'hcaptcha';
import { NextRequest, NextResponse } from 'next/server';

import {
  BREVO_API_KEY,
  BREVO_SENDER_EMAIL,
  BREVO_SENDER_NAME
} from '@/environment';

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();

    if (!data.token) {
      return NextResponse.json(null, { status: 500 });
    }

    const { success } = await verify(hcaptchaSecret, data.token);

    if (!success) {
      return NextResponse.json(null, { status: 500 });
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { email: BREVO_SENDER_EMAIL, name: BREVO_SENDER_NAME },
        to: [{ email: destination.email, name: destination.name }],
        replyTo: { email: data.email, name: data.name },
        subject: 'Formularz skateas.pl',
        htmlContent: renderTemplate(data)
      })
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      throw { message: 'Brevo API error', status: response.status, details: errorBody };
    }

    return NextResponse.json(null, { status: 200 });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      { error: error.message || 'Something went wrong', details: error.details || null },
      { status: 500 }
    );
  }
};

const hcaptchaSecret = process.env.HCAPTCHA_SECRET as string;

const destination = {
  email: 'akademiaskateboardingu@gmail.com',
  name: 'Akademia Skateboardingu'
};

const renderTemplate = (data: { template: 'contact' | 'group' | 'solo' }) => {
  const templates = {
    contact: (data: any) => {
      return `<html>
        <head></head>
        <body>
          <p>Formularz kontaktowy</p>
          <p>Email: ${data.email}</p>
          <p>Imię i nazwisko: ${data.name}</p>
          <p>Wiadomość: ${data.message}</p>
        </body>
      </html>`;
    },
    group: (data: any) => {
      return `<html>
        <head></head>
        <body>
          <p>Opiekun: ${data.name}</p>
          <p>Email: ${data.email}</p>
          <p>Telefon: ${data.phone}</p>
          <p>Dziecko: ${data.childName}</p>
          <p>Wiek dziecka: ${data.age}</p>
          <p>Umiejętności dziecka: ${data.skills}</p>
          <p>Wybrane zajęcia: ${data.lessons}</p>
          <p>Wiadomość dodatkowa: ${data.message}</p>
        </body>
      </html>`;
    },
    solo: (data: any) => {
      return `<html>
        <head></head>
        <body>
          <p>Opiekun: ${data.name}</p>
          <p>Email: ${data.email}</p>
          <p>Telefon: ${data.phone}</p>
          <p>Dziecko: ${data.childName}</p>
          <p>Wiek dziecka: ${data.age}</p>
          <p>Umiejętności dziecka: ${data.skills}</p>
          <p>Wybrane zajęcia: ${data.lessons}</p>
          <p>Wiadomość dodatkowa: ${data.message}</p>
        </body>
      </html>`;
    }
  };

  return templates[data.template](data);
};
