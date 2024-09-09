import TextReveal from './animations/textReveal';
import LineByLine from './animations/lineByLine';
import FadeTo from './animations/fadeTo';

export default function Article({
  title,
  subtitle,
  children,
  subtitleClass,
  className,
}) {
  return (
    <article className={'mt-8 ' + className}>
      <header className="mb-6">
        {title && (
          <TextReveal className="mb-2 text-lg uppercase text-sand-600 lg:text-xl">
            {title}
          </TextReveal>
        )}
        <LineByLine
          lines={subtitle}
          className={
            '-ml-px text-balance text-2xl uppercase lg:mt-4 lg:text-4xl ' +
            subtitleClass
          }
        />
      </header>
      <FadeTo>{children}</FadeTo>
    </article>
  );
}
