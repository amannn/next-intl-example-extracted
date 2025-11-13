import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Amount');
  t('Claim');
  t('Loading your unclaimed payouts...');
  t('Select all');
  t('Select row');
  t('Title');
  t('Unclaimed Payouts');
  t('You have {count} earnings ready to be paid out');
}
