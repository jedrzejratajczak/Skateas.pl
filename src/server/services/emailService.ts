import {
  BREVO_API_KEY,
  BREVO_SENDER_EMAIL,
  BREVO_SENDER_NAME
} from '@/environment';

type Email = {
  to: string;
};

type OrderEmail = {
  type: 'orderConfirmation';
  data: {
    first_name: string;
    last_name: string;
    street_name: string;
    street_number: number;
    city: string;
    zip_code: string;
    phone_number: string;
    order_number: string;
    subtotal: string;
    shipping: string;
    total: string;
    products: any;
  };
};

type SubscriptionEmail = {
  type: 'subscription';
  data: {
    product_name: string;
  };
};

type ContactEmail = {
  type: 'contact';
  data: {
    name: string;
    surname: string;
    mail: string;
    message: string;
  };
};

export type EmailData = Email & (OrderEmail | SubscriptionEmail | ContactEmail);

const buildHtml = (type: EmailData['type'], data: Record<string, any>) => {
  const rows = Object.entries(data)
    .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
    .join('');

  return `<html><body><h2>${type}</h2>${rows}</body></html>`;
};

export const emailService = {
  sendEmail: async ({ to, type, data }: EmailData) => {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { email: BREVO_SENDER_EMAIL, name: BREVO_SENDER_NAME },
        to: [{ email: to }],
        subject: type,
        htmlContent: buildHtml(type, data)
      })
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      throw { message: 'Brevo API error', status: response.status, details: errorBody };
    }

    return response.json();
  }
};
