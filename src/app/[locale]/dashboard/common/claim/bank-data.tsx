import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Account Type');
  t('Contact Support');
  t('For non-IBAN bank accounts, please contact our support team to update your bank account details.');
  t('IBAN');
  t('IBAN Bank Account');
  t('Other');
  t('Select account type');
  t('Select your bank account type.');
  t('This is your IBAN account number. Only accounts in your name are allowed.');
  t('Update');
  t('Your non-IBAN account has been set up. Please contact our support team to update your bank account details.');
}
