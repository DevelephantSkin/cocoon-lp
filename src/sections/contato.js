import Article from '@/components/article';
import Form from '@/components/form';
import SideImages from '@/components/sideImages';

import detail1 from '@/img/detail-1.png';
import detail2 from '@/img/detail-2.png';

export default function Contato() {
  return (
    <section
      id="contato"
      className="grid-contato max-w-header mx-auto mt-10 scroll-mt-[calc(var(--header-height)+1rem)] gap-12 lg:mt-28 lg:grid lg:gap-x-24"
    >
      <Article
        title="Registre-se"
        subtitle={[
          'Torne-se um',
          'investidor e',
          'garanta seu',
          'pedaço de',
          'paraíso.',
        ]}
        subtitleClass="pr-1"
        className="cell-a1 min-w-0 max-w-md"
      >
        Você já imaginou fazer parte de um projeto que redefine os padrões de
        luxo? Conheça o Cocoon, uma obra-prima arquitetônica em São Miguel dos
        Milagres, Alagoas, onde a natureza se encontra com o requinte da vida
        moderna.
      </Article>
      <Form />
      <SideImages left={detail1} right={detail2} className="mt-8 lg:mt-0" />
    </section>
  );
}
