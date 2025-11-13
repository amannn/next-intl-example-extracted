import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Confirm');
  t('Are you sure?');
}
