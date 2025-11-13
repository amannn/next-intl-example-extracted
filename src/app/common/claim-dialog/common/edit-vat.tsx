import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Go Back');
  t('Edit Tax Information');
  t('If you have a European VAT number, you need to provide it here.');
}
