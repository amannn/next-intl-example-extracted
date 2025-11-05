import {expect, it} from 'vitest';
import {NextIntlClientProvider} from 'next-intl';
import Counter from './Counter';
import {renderToString} from 'react-dom/server';

// `useExtracted` is optional to compile and can therefore be used in tests
// without any transformations. This allows to assert against messages from
// the source locale without any mocks or similar.

it('renders', () => {
  const html = renderToString(
    <NextIntlClientProvider locale="en" timeZone="UTC">
      <Counter />
    </NextIntlClientProvider>
  );
  expect(html).toContain('Count: 1,000');
});
