import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Back');
  t('Bank Transfer');
  t('Continue');
  t('EURC');
  t('Instant');
  t('Paid out in EURC stablecoin on Base.');
  t('Paid out in USDC stablecoin on Base.');
  t('Paid out to your Bank Account.');
  t('Paid out to your PayPal account.');
  t('Paid out to your Venmo account.');
  t('Payment Method');
  t('PayPal');
  t('Please choose how you want to receive your payment.');
  t('USDC');
  t('Venmo');
}
