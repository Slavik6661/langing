import { useState } from 'react';

const navItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'Сроки', href: '#timeline' },
  { label: 'Процесс', href: '#timeline' },
  { label: 'Бизнес', href: '#business' },
  { label: 'Заявка', href: '#lead' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-graphite/72 backdrop-blur-xl">
      <div className="container-premium flex h-16 items-center justify-between gap-4 sm:h-20">
        <a
          href="#top"
          className="min-w-0 text-xs font-semibold uppercase tracking-[0.14em] text-ivory sm:text-sm sm:tracking-[0.22em]"
        >
          Indonesia <span className="text-gold">Relocation</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition duration-300 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#lead" className="premium-button bg-gold text-graphite hover:bg-ivory">
            Консультация
          </a>
        </div>

        <button
          type="button"
          aria-label="Открыть меню"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-ivory lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-graphite/95 lg:hidden">
          <nav className="container-premium flex flex-col gap-2 py-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted transition hover:bg-white/5 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
