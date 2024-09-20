import Article from '@/components/article';
import Form from '@/components/form';
import SideImages from '@/components/sideImages';
import { useLanguage } from '@/context/LanguageContext';

import detail1 from '@/img/detail-1.png';
import detail2 from '@/img/detail-2.png';

export default function Contato() {
  const { translations } = useLanguage();

  return (
    <section
      id="contato"
      className="grid-contato max-w-header mx-auto mt-10 scroll-mt-[calc(var(--header-height)+1rem)] gap-12 lg:mt-28 lg:grid lg:gap-x-24"
    >
      <Article
        key={translations.contato.title}
        title={translations.contato.title}
        subtitle={[
          translations.contato.subtitle1,
          translations.contato.subtitle2,
          translations.contato.subtitle3,
          translations.contato.subtitle4,
          translations.contato.subtitle5,
        ]}
        subtitleClass="pr-1"
        className="cell-a1 min-w-0 max-w-md"
      >
        {translations.contato.description}
      </Article>
      <Form />
      <SideImages left={detail1} right={detail2} className="mt-8 lg:mt-0" />
    </section>
  );
}
