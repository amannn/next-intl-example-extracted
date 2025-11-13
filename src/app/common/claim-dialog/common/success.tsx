import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Close');
  t('Transaction Successful');
  t('Your payout has been completed successfully.');
}
