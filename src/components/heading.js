import TextReveal from './animations/textReveal';

export default function Heading({ className, children }) {
  return (
    <TextReveal
      tag="h2"
      className={
        'mb-4 mt-10 text-center font-bold tracking-wider lg:mb-12 lg:text-xl ' +
        className
      }
    >
      {children}
    </TextReveal>
  );
}
