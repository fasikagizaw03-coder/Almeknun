import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import siteLogo from './logo/logo.png';

const SITE_TITLE = 'Almeknun Asset Valuation & Consultancy | Ethiopia';

function ensureLink(rel: string, attrs: {href: string; type?: string; sizes?: string}) {
  const selector = `link[rel="${rel}"]`;
  let el = document.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = attrs.href;
  if (attrs.type) el.type = attrs.type;
  if (attrs.sizes) el.sizes = attrs.sizes;
}

function ensureMeta(attr: 'name' | 'property', key: string, content: string) {
  const sel = `meta[${attr}="${key}"]`;
  let el = document.querySelector<HTMLMetaElement>(sel);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

const logoUrl = new URL(siteLogo, window.location.origin).href;
const publicBase = import.meta.env.VITE_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? '';
const pageUrl = publicBase
  ? `${publicBase}${window.location.pathname}${window.location.search}${window.location.hash}`
  : window.location.href;

ensureLink('icon', {href: logoUrl, type: 'image/png'});
ensureLink('apple-touch-icon', {href: logoUrl});

ensureMeta('property', 'og:image', logoUrl);
ensureMeta('property', 'og:image:alt', `${SITE_TITLE} logo`);
ensureMeta('property', 'og:url', pageUrl);
ensureMeta('name', 'twitter:image', logoUrl);
ensureMeta('name', 'twitter:image:alt', `${SITE_TITLE} logo`);

const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
if (canonical) {
  const href = publicBase
    ? `${publicBase}/`
    : new URL(window.location.pathname, window.location.origin).href;
  canonical.setAttribute('href', href);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
