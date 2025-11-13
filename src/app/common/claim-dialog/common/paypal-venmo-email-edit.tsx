import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Back');
  t('Continue');
  t('Email Address');
  t('Enter PayPal Email');
  t('Enter Venmo Email');
  t('Enter your email address');
  t('Please enter the email address for your PayPal account');
  t('Please enter the email address for your Venmo account');
}
