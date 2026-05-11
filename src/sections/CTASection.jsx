import LeadForm from "../components/LeadForm";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

export default function CTASection() {
  return (
    <section id="lead" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-premium">
        <div className="glass-panel overflow-hidden rounded-xl">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative p-5 sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-premium-radial opacity-80" />
              <div className="relative">
                <SectionTitle
                  eyebrow="Заявка"
                  title="Планируете переезд в Индонезию? Начните с персонального плана"
                  text="Расскажите, кто переезжает: вы, семья, команда или бизнес. Мы подготовим последовательность действий, сроки, бюджет и список документов."
                />
                <Reveal
                  delay={140}
                  className="mt-8 flex flex-col gap-4 sm:mt-9 sm:flex-row lg:flex-col xl:flex-row"
                >
                  {/* <a
                    href="#lead"
                    className="premium-button w-full bg-gold text-graphite hover:bg-ivory sm:w-auto lg:w-full xl:w-auto"
                  >
                    Получить план релокации
                  </a> */}
                  {/* <a
                    href="https://t.me/"
                    className="premium-button w-full border border-white/15 text-ivory hover:border-emerald/60 hover:bg-white/8 sm:w-auto lg:w-full xl:w-auto"
                  >
                    Связаться в WhatsApp / Telegram
                  </a> */}
                </Reveal>
              </div>
            </div>
            <Reveal
              delay={180}
              className="border-t border-white/10 p-5 sm:p-8 lg:border-l lg:border-t-0"
            >
              <LeadForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
