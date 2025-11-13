import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Create New Account');
  t('Found Existing Account (Recommended)');
  t('Log In');
  t('Log In with Base');
  t('Log In with Email');
  t('Sign Up');
  t('Sign Up With Email');
}
