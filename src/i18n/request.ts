import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';
import config from '@/config';

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get('locale')?.value || config.defaultLocale;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages
  };
});
