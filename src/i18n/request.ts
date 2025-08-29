// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale is awaitable when you use locale-based routing
  const requested = await requestLocale;            // could be undefined outside /[locale] routes
  const locale = requested ?? 'en';                 // your fallback

  // list the namespaces you maintain for each locale
  const namespaces = ['home', 'about','common'];  

  const messages: Record<string, any> = {};

  for (const ns of namespaces) {
    // Each file should contain the messages for that namespace
    // e.g. messages/en/home.json -> { "title": "..." }
    const mod = await import(`../../messages/${locale}/${ns}.json`);
    messages[ns] = mod.default ?? mod;
  }

  return {
    locale,
    messages, // shape: { common: {...}, home: {...}, about: {...} }
  };
});
