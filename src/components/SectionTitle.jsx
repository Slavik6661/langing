import Reveal from "./Reveal";
const audience = [
  {
    title: "Онлайн-проектам",
    text: "IT, e-commerce, маркетинговым, образовательным и сервисным командам, которым нужны счета, платежные системы и понятная налоговая модель.",
  },
  {
    title: "Командам сотрудников",
    text: "Бизнесам, которые перевозят сотрудников, оформляют документы, жилье, рабочие процессы и адаптацию на месте.",
  },
  {
    title: "Семьям",
    text: "Тем, кто переезжает надолго и хочет закрыть вопросы виз, ВНЖ, школ, детских садов, страховок и жилья.",
  },
  {
    title: "Инвесторам и экспатам",
    text: "Тем, кто планирует жить, покупать или арендовать недвижимость, запускать активы и выстраивать легальное присутствие.",
  },
];
export default function SectionTitle({ eyebrow, title, text, align = "left" }) {
  const isCenter = align === "center";

  return (
    <>
      <Reveal className={isCenter ? "max-w-3xl text-left" : "max-w-3xl"}>
        {eyebrow && (
          <p className="mb-4 max-w-full break-words text-[11px] font-semibold uppercase tracking-[0.16em] text-gold sm:text-xs sm:tracking-[0.28em]">
            {eyebrow}
          </p>
        )}
        <h2 className="max-w-full break-words font-display text-3xl font-semibold leading-tight text-ivory sm:text-4xl lg:text-[40px]">
          {title}
        </h2>
        {text && (
          <p className="mt-5 max-w-full break-words text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {text}
          </p>
        )}
      </Reveal>
    </>
  );
}
