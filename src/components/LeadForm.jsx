const requestOptions = [
  'Открыть компанию',
  'Перевезти бизнес',
  'Перевезти сотрудников',
  'Оформить визы / ВНЖ',
  'Найти жилье',
  'Найти офис',
  'Проверить недвижимость',
  'Сопровождение под ключ',
];

export default function LeadForm() {
  return (
    <form className="glass-panel rounded-lg p-5 sm:p-8" action="#" method="post">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block min-w-0">
          <span className="mb-2 block text-sm text-ivory/80">Имя</span>
          <input className="form-field" name="name" placeholder="Как к вам обращаться" />
        </label>
        <label className="block min-w-0">
          <span className="mb-2 block text-sm text-ivory/80">Телефон или Telegram</span>
          <input className="form-field" name="contact" placeholder="+7 / @username" />
        </label>
        <label className="block min-w-0">
          <span className="mb-2 block text-sm text-ivory/80">Email</span>
          <input className="form-field" type="email" name="email" placeholder="name@company.com" />
        </label>
        <label className="block min-w-0">
          <span className="mb-2 block text-sm text-ivory/80">Что нужно?</span>
          <select className="form-field" name="request" defaultValue="">
            <option value="" disabled>
              Выберите задачу
            </option>
            {requestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-5 block min-w-0">
        <span className="mb-2 block text-sm text-ivory/80">Комментарий</span>
        <textarea
          className="form-field min-h-36 resize-y"
          name="comment"
          placeholder="Кто переезжает, какие сроки, что уже готово, где нужна помощь"
        />
      </label>
      <button type="submit" className="premium-button mt-7 w-full bg-gold text-graphite hover:bg-ivory sm:w-auto">
        Отправить заявку
      </button>
    </form>
  );
}
