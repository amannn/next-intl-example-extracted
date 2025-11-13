import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Address Line 1 *');
  t('Address Line 2');
  t('City *');
  t('Country *');
  t('First Name');
  t('Last Name');
  t('Leave this empty if you\'re represented as a private person');
  t('Organization');
  t('State');
  t('Your Address Line 1');
  t('Your Address Line 2');
  t('Your City');
  t('Your First Name');
  t('Your First Name as Written On Official Documents');
  t('Your Last Name');
  t('Your Last Name as Written On Official Documents');
  t('Your Organization');
  t('Your State');
  t('Your Zip/Postal Code');
  t('Zip/Postal Code *');
  t('Go Back');
  t('Continue');
}
