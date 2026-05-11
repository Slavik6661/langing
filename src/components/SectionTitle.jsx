import Reveal from './Reveal';

export default function SectionTitle({ eyebrow, title, text, align = 'left' }) {
  const isCenter = align === 'center';

  return (
    <Reveal className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="mb-4 max-w-full break-words text-[11px] font-semibold uppercase tracking-[0.16em] text-gold sm:text-xs sm:tracking-[0.28em]">
          {eyebrow}
        </p>
      )}
      <h2 className="max-w-full break-words font-display text-3xl font-semibold leading-tight text-ivory sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 max-w-full break-words text-base leading-7 text-muted sm:text-lg sm:leading-8">{text}</p>}
    </Reveal>
  );
}
