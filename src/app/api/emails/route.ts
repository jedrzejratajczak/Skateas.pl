import sgMail from '@sendgrid/mail';
import { verify } from 'hcaptcha';
import { NextRequest, NextResponse } from 'next/server';

import {
  SENDGRID_API_KEY,
  SENDGRID_FROM
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

    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: destination.email,
      from: SENDGRID_FROM,
      replyTo: { name: data.name, email: data.email },
      subject: 'Formularz skateas.pl',
      html: renderTemplate(data)
    };

    await sgMail.send(msg);

    return NextResponse.json(null, { status: 200 });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      { error: error.message || 'Something went wrong', details: error.response?.body || null },
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
