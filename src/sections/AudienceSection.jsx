import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

const audience = [
  {
    title: "Предпринимателям",
    text: "Кто хочет открыть компанию в Индонезии, принимать платежи, работать легально и не разбираться в бюрократии самостоятельно.",
  },
  {
    title: "Действующему бизнесу",
    text: "Компаниям, которые переносят часть операций, офис, производство или юридическую структуру в Индонезию.",
  },
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

function AudienceCard({ item, index }) {
  return (
    <Reveal
      delay={index * 80}
      className="group glass-panel relative h-full overflow-hidden rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-white/[0.075] sm:p-6 lg:hover:-translate-y-1.5"
    >
      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full border border-gold/15 transition duration-500 group-hover:scale-125 group-hover:border-gold/35 sm:h-24 sm:w-24" />
      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-emerald/35 bg-emerald/10 text-[11px] font-semibold text-gold sm:mb-5 sm:h-9 sm:w-9 sm:text-xs">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="max-w-full break-words text-base font-semibold leading-snug text-ivory sm:text-lg">
        {item.title}
      </h3>
      <p className="mt-3 max-w-full break-words text-sm leading-6 text-muted sm:leading-7">
        {item.text}
      </p>
    </Reveal>
  );
}

export default function AudienceSection() {
  return (
    <section className="relative overflow-hidden py-20 max-sm:py-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="container-premium">
        <div className="hidden lg:block">
          <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
            <SectionTitle
              eyebrow="Кому подходит"
              title="Кто может воспользоваться нашей услугой"
              text="Мы помогаем тем, кто хочет переехать, открыть бизнес или перевести команду в Индонезию без хаоса в документах, счетах, визах и бытовых задачах."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              {audience.slice(0, 2).map((item, index) => (
                <AudienceCard
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:mt-12 xl:grid-cols-4">
            {audience.slice(2, 6).map((item, index) => (
              <AudienceCard
                key={item.title}
                item={item}
                index={index + 2}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:hidden">
          <SectionTitle
            eyebrow="Кому подходит"
            title="Кто может воспользоваться нашей услугой"
            text="Мы помогаем тем, кто хочет переехать, открыть бизнес или перевести команду в Индонезию без хаоса в документах, счетах, визах и бытовых задачах."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {audience.map((item, index) => (
              <AudienceCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
