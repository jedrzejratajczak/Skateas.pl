import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();

    await axios.post(
      'https://api.sendinblue.com/v3/smtp/email',
      {
        sender: destination,
        replyTo: { name: data.name, email: data.email },
        to: [destination],
        subject: 'Formularz skateas.pl',
        htmlContent: renderTemplate(data)
      },
      { headers }
    );

    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(null, { status: 500 });
  }
};

const apiKey = process.env.EMAIL_API_KEY;

const destination = {
  email: 'akademiaskateboardingu@gmail.com',
  name: 'Akademia Skateboardingu'
};

const headers = {
  'content-type': 'application/json',
  'api-key': apiKey,
  accept: 'application/json'
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
          <p>Wiadomość dodatkowa: ${data.lessons}</p>
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
          <p>Wiadomość dodatkowa: ${data.lessons}</p>
        </body>
      </html>`;
    }
  };

  return templates[data.template](data);
};
