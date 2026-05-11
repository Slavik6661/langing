const footerServices = [
  "Компании",
  "Счета",
  "Визы и ВНЖ",
  "Офисы",
  "Жилье",
  "Налоги",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-premium grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ivory">
            Indonesia <span className="text-gold">Relocation</span>
          </p>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted">
            Сопровождаем предпринимателей, семьи, команды и инвесторов при
            переезде в Индонезию и запуске бизнес-инфраструктуры.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ivory">Контакты</h3>
          <div className="mt-5 space-y-3 text-sm text-muted">
            <p>Email: leverage.indo.group@gmail.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ivory">Основные услуги</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {footerServices.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-muted/80">
            Информация на сайте не является юридической консультацией. Финальные
            сроки и условия зависят от конкретной ситуации клиента, требований
            государственных органов, банков и платежных систем.
          </p>
        </div>
      </div>
    </footer>
  );
}
