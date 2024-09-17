import Article from '@/components/article';
import Form from '@/components/form';
import SideImages from '@/components/sideImages';
import { useTranslation } from '@/app/i18n/client';

import detail1 from '@/img/detail-1.png';
import detail2 from '@/img/detail-2.png';

export default function Contato({ lng }) {
  const { t } = useTranslation(lng);

  return (
    <section
      id="contato"
      className="grid-contato max-w-header mx-auto mt-10 scroll-mt-[calc(var(--header-height)+1rem)] gap-12 lg:mt-28 lg:grid lg:gap-x-24"
    >
      <Article
        title={t('contato.title')}
        subtitle={[
          t('contato.subtitle1'),
          t('contato.subtitle2'),
          t('contato.subtitle3'),
          t('contato.subtitle4'),
          t('contato.subtitle5'),
        ]}
        subtitleClass="pr-1"
        className="cell-a1 min-w-0 max-w-md"
      >
        {t('contato.description')}
      </Article>
      <Form t={t} />
      <SideImages left={detail1} right={detail2} className="mt-8 lg:mt-0" />
    </section>
  );
}
