import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Continue');
  t('Claim Payouts');
  t('Fee');
  t('Period');
  t('Total');
  t('Type');
  t('You have {count, plural, =0 {no unclaimed payouts} =1 {one unclaimed payout} other {# unclaimed payouts}}.');
}
