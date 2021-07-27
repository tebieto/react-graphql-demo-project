import Email, { EmailOptions } from 'email-templates';
import path from 'path';
import { UserAttributes } from '../../interface/user';

const appEmail = process.env.APP_EMAIL || 'demo@gmail.com';
const appName = process.env.APP_Name || 'Demo GraphQL React Project';
const appUrl = process.env.APP_URL || 'localhost';

const email = new Email({
  views: { root: path.join(__dirname, '../../', 'email-templates') },
  message: {
    from: `${appName} <${appEmail}>`,
  },
  send: true,
  juiceResources: {
    webResources: {
      relativeTo: path.join(__dirname, '../', 'emails'),
    },
  },
  transport: {
    host: process.env.EMAIL_SERVICE_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_SERVICE_PORT
      ? parseInt(process.env.EMAIL_SERVICE_PORT)
      : 587,
    auth: {
      user: process.env.EMAIL_SERVICE_USERNAME || 'tebieto@gmail.com',
      pass: process.env.EMAIL_SERVICE_PASSWORD || 'cxjkddbaaqimyydp',
    },
  },
});

const sendEmail = (options: EmailOptions) => {
  email
    .send(options)
    .then(() => true)
    .catch((error) => console.log({ error }));
};

export const sendResetPasswordLink = (props: {
  token: string;
  user: UserAttributes;
}): void => {
  const options = {
    template: 'reset-password',
    message: {
      to: props.user.email,
    },
    locals: {
      name: props.user.full_name,
      link: `${appUrl}/password/reset/change?token=${props.token}&email=${props.user.email}`,
    },
  };

  console.log({ RESET_LINK: options.locals.link });
  sendEmail(options);
};
