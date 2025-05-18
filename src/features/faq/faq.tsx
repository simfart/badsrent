import { FC } from 'react';
import styles from './Faq.module.scss';
import { FaqItem } from './faqItem/FaqItem';
import { faqData } from 'entities/faqData/faqData';

const Faq: FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className={styles.faq}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2 className={styles.subtitle}>
        Аренда медицинского оборудования в Крыму — ответы на частые вопросы
      </h2>
      <span className={styles.title}>Вопросы и ответы</span>

      {faqData.map(({ question, answer }, i) => (
        <FaqItem key={i} question={question} answer={answer} />
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default Faq;
