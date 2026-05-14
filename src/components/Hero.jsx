import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";
import { images } from "../data/images";

const benefits = [
  "Компания в Индонезии от 1 недели",
  "Налоговый номер, кабинет и регистрация в госорганах",
  "Визы, ВНЖ и долгосрочное пребывание",
  "Счета и аккаунты PayPal, Stripe, Bybit, Indodax и прочие платежные системы",
  "Юридическое и налоговое сопровождение",
  "Переезд сотрудников и семей",
  "Помощь в подборе индонезийского персонала",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-40 lg:min-h-1/2 lg:pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-premium-radial" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-graphite to-transparent" />
      <div className="container-premium grid min-w-0 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="min-w-0">
          <Reveal className="min-w-0">
            <p className="mb-5 max-w-full break-words text-[10px] font-semibold uppercase tracking-[0.16em] text-gold sm:mb-6 sm:text-xs sm:tracking-[0.32em]">
              Business relocation to Indonesia
            </p>
            <h1 className="max-w-full break-words font-display text-[2.35rem] font-semibold leading-[1.08] text-ivory max-[480px]:text-3xl sm:text-4xl lg:text-5xl">
              Релокация бизнеса и организация жизни в Индонезии под ключ
            </h1>
            <p className="mt-6 max-w-2xl break-words text-[15px] leading-7 text-muted sm:mt-7 sm:text-lg sm:leading-8">
              Открываем компании, регистрируем налоговый номер и кабинет,
              ставим бизнес на учет в госорганах и иммиграции, оформляем счета,
              визы, ВНЖ, офисы, жилье, а также перевозим команды в Индонезию.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="mt-8 flex min-w-0 flex-col gap-4 sm:mt-9 sm:flex-row"
          >
            <a
              href="#lead"
              className="premium-button w-full bg-gold text-graphite hover:bg-ivory sm:w-auto"
            >
              Получить консультацию
            </a>
            <a
              href="#lead"
              className="premium-button w-full border border-white/15 text-ivory hover:border-gold/60 hover:bg-white/8 sm:w-auto"
            >
              Рассчитать переезд
            </a>
          </Reveal>

          <Reveal
            delay={220}
            className="mt-9 grid min-w-0 gap-3 sm:mt-10 sm:grid-cols-2"
          >
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-ivory/80"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="break-words">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={180} className="relative min-w-0 max-w-full">
          <div className="absolute -inset-4 rounded-xl bg-gold/10 blur-3xl" />
          <div className="relative max-w-full animate-float">
            <ImagePlaceholder
              src={images.hero}
              alt="Современный офис с видом на деловой центр Джакарты"
              ratio="aspect-[16/11]"
              label="Заглушка: hero-фото Индонезии, современного офиса, океана, Джакарты или Бали, 1920x1080"
              className="min-h-[270px] max-w-full sm:min-h-[420px]"
            />
          </div>
          <div className="glass-panel relative mx-0 -mt-8 rounded-lg p-5 sm:absolute sm:-bottom-7 sm:left-auto sm:right-8 sm:mt-0 sm:w-72">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.22em]">
              Главный фокус
            </p>
            <p className="mt-3 break-words text-sm leading-6 text-ivory/84">
              Компания, госрегистрации, счета, визы, жилье, офис, сотрудники,
              школы, налоги и юридическое сопровождение в одном месте.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
