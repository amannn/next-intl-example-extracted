'use client';

import {Locale, useLocale} from 'next-intl';
import config from '@/config';

type Props = {
  changeLocaleAction: (locale: Locale) => Promise<void>;
};

export default function LocaleSwitcher({changeLocaleAction}: Props) {
  const locale = useLocale();

  return (
    <div style={{display: 'flex', gap: 5}}>
      {config.locales.map((cur) => (
        <button
          key={cur}
          onClick={() => changeLocaleAction(cur as Locale)}
          style={{fontWeight: locale === cur ? 'bold' : 'normal'}}
        >
          {cur.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
