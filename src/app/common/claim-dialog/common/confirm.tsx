import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Payout Amount');
  t('Cancel');
  t('Confirm');
  t('Go Back');
  t('Are you sure?');
  t('Bank Account');
  t('Edit');
  t('Give Me Money');
  t('If required, VAT will automatically be added to the payout amount.');
  t('Manual Account');
  t('Payout Method');
  t('PayPal Account');
  t('Please contact support to set your bank details');
  t('Please enter your PayPal email');
  t('Please enter your Venmo email');
  t('Please fill out your account number');
  t('Please fill out your address');
  t('Receipt Address');
  t('Small Business Tax Exempt');
  t('Tax Identification Number Missing');
  t('Tax Information');
  t('This action is irreversible. You will receive your payout to the selected method.');
  t('Venmo Account');
  t('Wallet');
  t('Your Wallet (EURC)');
  t('Your Wallet (USDC)');
  t('Bank Transfer');
  t('PayPal');
  t('Venmo');
}
