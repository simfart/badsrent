import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { PageContextServer } from './types.ts';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';

export async function render(pageContext: PageContextServer) {
  const { Page } = pageContext;
  const pageHtml = renderToString(
    <React.StrictMode>
      <StaticRouter location={pageContext.urlOriginal}>
        <Page />
      </StaticRouter>
    </React.StrictMode>,
  );

  return escapeInject`<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico">
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="МедЮг" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Аренда медицинских кроватей для лежачих больных в Симферополе, Евпатории, Ялте, Керчи, Джанкое, Севастополе и по всему Крыму. Комфортные кровати для реабилитации, низкие цены и быстрая доставка по всему Крыму" />
        <meta name="keywords" content="аренда медицинских кроватей, прокат медкроватей Симферополь, кровати для лежачих больных, аренда медтехники Крым, Симферополь, Севастополь, Евпатория, Ялта, Керчь, Джанкой, медицинская мебель, реабилитационное оборудование, доставка медкроватей, уход за больными дома" />
        <meta name="robots" content="index, follow" />
        <title>Аренда медицинских кроватей для лежачих больных в Симферополе и Крыму — доступные цены, быстрая доставка</title>
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Аренда медицинских кроватей в Крыму",
          "description": "Предоставляем в аренду медицинские кровати для реабилитации. Доставка по всему Крыму.",
          "url": "https://arendamed82.ru",
          "telephone": "+7 (978) 941-09-60",
          "priceRange": "₽₽",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "RU",
            "addressRegion": "Республика Крым",
            "addressLocality": "Симферополь",
            "postalCode": "295000",
            "streetAddress": "проспект Кирова, 12"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.952117",
            "longitude": "34.102417"
          },
          "openingHours": "Mo-Su 09:00-21:00",
          "image": "https://arendamed82.ru/assets/images/logo1.svg",
          "sameAs": [
            "https://vk.com/arendamed82",
            "https://instagram.com/arendamed82"
          ],
          "areaServed": [
            "Симферополь",
            "Севастополь",
            "Евпатория",
            "Ялта",
            "Керчь",
            "Джанкой"
          ]
        }
        </script>
        <link rel="canonical" href="https://arendamed82.ru" />
        <meta property="og:title" content="Аренда медицинских кроватей для лежачих больных в Симферополе и Крыму" />
        <meta property="og:description" content="Аренда медицинских кроватей для лежачих больных в Симферополе и Крыму. Комфортные кровати для реабилитации, низкие цены и быстрая доставка" />
        <meta property="og:image" content="https://arendamed82.ru/assets/images/logo1.svg" />
        <meta property="og:url" content="https://arendamed82.ru" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Аренда медицинских кроватей для лежачих больных в Симферополе и Крыму" />
        <meta name="twitter:description" content="Аренда медицинских кроватей для лежачих больных в Симферополе и Крыму. Комфортные кровати для реабилитации, низкие цены и быстрая доставка" />
        <meta name="twitter:image" content="https://arendamed82.ru/assets/images/logo1.svg" />
        <meta name="geo.region" content="RU-CR" />
        <meta name="geo.placename" content="Симферополь" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="language" content="Russian" />
        <meta name="locale" content="ru_RU" />
      </head>
      <body>
        <div id="app" data-lcp-container="true">${dangerouslySkipEscape(
          pageHtml,
        )}</div>
        <script>
          // Приоритизация LCP элемента
          document.addEventListener('DOMContentLoaded', () => {
            const lcpElement = document.querySelector('[itemProp="description"]');
            if (lcpElement) {
              lcpElement.setAttribute('data-lcp-element', 'true');
              lcpElement.setAttribute('data-importance', 'high');
            }
          });
        </script>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Какие медицинские кровати можно взять в аренду у вас?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Мы предоставляем в аренду медицинские кровати для лежачих больных с электроприводом, функцией поворота, трансформацией в кардио-кресло, а также модели с туалетным устройством, инфузионной стойкой и штангой для подтягивания. В нашем ассортименте есть как функциональные электрические кровати, так и простые механические модели."
                }
              },
              {
                "@type": "Question",
                "name": "Где вы осуществляете доставку медицинских кроватей?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Мы доставляем медицинские кровати по всему Крыму: Симферополь, Ялта, Джанкой, Евпатория и другие города. Быстрая и надёжная доставка осуществляется в удобное для вас время."
                }
              },
              {
                "@type": "Question",
                "name": "На какой срок можно арендовать медицинскую кровать?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Вы можете взять в аренду медицинскую кровать как на короткий срок (например, на период реабилитации), так и на длительный — всё зависит от ваших потребностей. Мы подбираем оптимальное решение индивидуально для каждого клиента."
                }
              },
              {
                "@type": "Question",
                "name": "Подходит ли аренда медицинской кровати для домашнего ухода?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Да, услуга аренды медицинской кровати идеально подходит для ухода за лежачими больными на дому. Мы понимаем, насколько важен комфорт и безопасность близких, поэтому предлагаем только проверенное и удобное оборудование."
                }
              },
              {
                "@type": "Question",
                "name": "Проходит ли оборудование проверку и дезинфекцию?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Каждая медицинская кровать проходит тщательную техническую проверку и профессиональную дезинфекцию перед каждой доставкой. Мы гарантируем чистоту, исправность и безопасность оборудования."
                }
              },
              {
                "@type": "Question",
                "name": "Сколько стоит аренда и доставка медицинской кровати в Симферополе, Ялте или Керчи?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Стоимость аренды зависит от выбранной модели и срока аренды. Позвоните нам и оставьте заявку на сайте — мы быстро рассчитаем цену и предложим лучший вариант."
                }
              },
              {
                "@type": "Question",
                "name": "Как быстро вы можете доставить кровать?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Мы обеспечиваем быструю доставку по всему Крыму. В большинстве случаев доставка возможна в течение 24 часов с момента оформления заказа."
                }
              }
  ]
}
</script>

      </body>
    </html>`;
}
