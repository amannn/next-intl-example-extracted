import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Go Back');
}
