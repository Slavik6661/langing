import { useState } from "react";

const requestOptions = [
  "Открытие компании",
  "Открытие корпоративных счетов",
  "Релокация бизнеса",
  "Визы, ВНЖ и разрешения",
  "Переезд сотрудников",
  "Офисы и виртуальные офисы",
  "Жилье и аренда недвижимости",
  "Производственные помещения",
  "Проверка недвижимости",
  "Налоговое обслуживание",
  "Юридическое сопровождение",
  "Школы, сады и страховки",
  "Подбор индонезийского персонала",
  "Оценка переезда",
  "Консультация",
];

export default function LeadForm() {
  const [status, setStatus] = useState("");
  const [selectedRequest, setSelectedRequest] = useState([]);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [requestError, setRequestError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedRequest) {
      setRequestError("Выберите задачу");
      setIsRequestOpen(true);
      return;
    }

    if (selectedRequest.length === 0) {
      setRequestError("Выберите хотя бы одну задачу");
      return;
    }

    setStatus("loading");

    const form = e.target;
    const formData = new FormData(form);

    // Добавляем скрытое поле для AJAX
    formData.append("_js", "true");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/leverage.indo.group@gmail.com",
        {
          method: "POST",
          body: formData,
        },
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
        setSelectedRequest("");
        setRequestError("");
        setIsRequestOpen(false);
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const isSelected = (option) => selectedRequest.includes(option);
  const toggleRequest = (option) => {
    if (selectedRequest.includes(option)) {
      setSelectedRequest(selectedRequest.filter((item) => item !== option));
    } else {
      setSelectedRequest([...selectedRequest, option]);
    }
  };

  return (
    <>
      <form
        className="glass-panel rounded-lg p-5 sm:p-8"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block min-w-0">
            <span className="mb-2 block text-sm text-ivory/80">Имя *</span>
            <input
              className="form-field"
              name="name"
              placeholder="Как к вам обращаться"
              required
            />
          </label>

          <label className="block min-w-0">
            <span className="mb-2 block text-sm text-ivory/80">
              Телефон или Telegram *
            </span>
            <input
              className="form-field"
              name="contact"
              placeholder="+7 / @username"
              required
            />
          </label>

          <label className="block min-w-0">
            <span className="mb-2 block text-sm text-ivory/80">Email</span>
            <input
              className="form-field"
              type="email"
              name="email"
              placeholder="name@company.com"
            />
          </label>

          <label className="block min-w-0">
            <span className="mb-2 block text-sm text-ivory/80">
              Что нужно? *
            </span>
            <input
              type="hidden"
              name="request"
              value={selectedRequest}
              readOnly
            />
            <div
              className="relative"
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setIsRequestOpen(false);
                }
              }}
            >
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isRequestOpen}
                className={`form-field flex min-h-[50px] items-center justify-between gap-3 text-left ${
                  selectedRequest ? "text-ivory" : "text-muted/55"
                } ${requestError ? "border-red-400/70 focus:border-red-400/80 focus:ring-red-400/15" : ""}`}
                onClick={() => {
                  setIsRequestOpen((isOpen) => !isOpen);
                  setRequestError("");
                }}
              >
                <span className="truncate">
                  {selectedRequest.length > 0
                    ? `Выбрано: ${selectedRequest.join(", ")}`
                    : "Выберите задачи (можно несколько)"}
                </span>
                <span
                  className={`h-2 w-2 shrink-0 rotate-45 border-b border-r border-gold transition duration-300 ${
                    isRequestOpen
                      ? "translate-y-1 rotate-[225deg]"
                      : "-translate-y-0.5"
                  }`}
                />
              </button>

              {isRequestOpen && (
                <div
                  role="listbox"
                  aria-label="Что нужно?"
                  className="absolute left-0 right-0 z-30 mt-2 max-h-72 overflow-y-auto rounded-lg border border-gold/25 bg-ink/95 p-1.5 shadow-premium backdrop-blur-xl"
                >
                  {requestOptions.map((option) => {
                    const selected = isSelected(option);
                    // const isSelected = selectedRequest === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        role="option"
                        aria-selected={selected}
                        className={`flex w-full items-center justify-between gap-3 rounded-md px-3 mb-2 py-2.5 text-left text-sm leading-5 transition duration-200 hover:bg-white/8 focus:bg-white/8 focus:outline-none ${
                          selected ? "bg-gold/15 text-gold" : "text-ivory/84"
                        }`}
                        onClick={() => {
                          toggleRequest(option);
                          // setSelectedRequest(option);
                          // setRequestError("");
                          // setIsRequestOpen(false);
                        }}
                      >
                        <span className="break-words">{option}</span>
                        {selected && (
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            {requestError && (
              <span className="mt-2 block text-xs text-red-300">
                {requestError}
              </span>
            )}
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

        <button
          type="submit"
          disabled={status === "loading"}
          className="premium-button mt-7 w-full bg-gold text-graphite hover:bg-ivory sm:w-auto disabled:opacity-50"
        >
          {status === "loading" ? "Отправка..." : "Отправить заявку"}
        </button>
      </form>

      {status === "success" && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white rounded-lg p-4 shadow-lg z-50">
          ✅ Заявка отправлена! Мы свяжемся с вами
        </div>
      )}

      {status === "error" && (
        <div className="fixed bottom-5 right-5 bg-red-500 text-white rounded-lg p-4 shadow-lg z-50">
          ❌ Ошибка! Попробуйте позже
        </div>
      )}
    </>
  );
}

// const requestOptions = [
//   "Открыть компанию",
//   "Перевезти бизнес",
//   "Перевезти сотрудников",
//   "Оформить визы / ВНЖ",
//   "Найти жилье",
//   "Найти офис",
//   "Проверить недвижимость",
//   "Сопровождение под ключ",
// ];

// export default function LeadForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowSuccess(true);
//     form.reset();
//     setTimeout(() => setShowSuccess(false), 5000);

//   }

//   return (
//     <>
//       <form
//         className="glass-panel rounded-lg p-5 sm:p-8"
//         onSubmit={handleSubmit}
//         action="https://formsubmit.co/leverage.indo.group@gmail.com"
//         method="POST"
//       >
//         {/* Скрытые поля для настройки писем */}
//         <input type="hidden" name="_captcha" value="false" />
//         <input type="hidden" name="_template" value="box" />
//         <input type="hidden" name="_subject" value="Новая заявка на переезд!" />
//         <input type="hidden" name="_replyto" value="email" />

//         <div className="grid gap-5 sm:grid-cols-2">
//           <label className="block min-w-0">
//             <span className="mb-2 block text-sm text-ivory/80">Имя *</span>
//             <input
//               className="form-field"
//               name="name"
//               placeholder="Как к вам обращаться"
//               required
//             />
//           </label>
//           <label className="block min-w-0">
//             <span className="mb-2 block text-sm text-ivory/80">
//               Телефон или Telegram *
//             </span>
//             <input
//               className="form-field"
//               name="contact"
//               placeholder="+7 / @username"
//               required
//             />
//           </label>
//           <label className="block min-w-0">
//             <span className="mb-2 block text-sm text-ivory/80">Email *</span>
//             <input
//               className="form-field"
//               type="email"
//               name="email"
//               placeholder="name@company.com"
//               required
//             />
//           </label>
//           <label className="block min-w-0">
//             <span className="mb-2 block text-sm text-ivory/80">
//               Что нужно? *
//             </span>
//             <select className="form-field" name="request" defaultValue="">
//               <option value="" disabled>
//                 Выберите задачу
//               </option>
//               {requestOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>
//         <label className="mt-5 block min-w-0">
//           <span className="mb-2 block text-sm text-ivory/80">Комментарий</span>
//           <textarea
//             className="form-field min-h-36 resize-y"
//             name="comment"
//             placeholder="Кто переезжает, какие сроки, что уже готово, где нужна помощь"
//           />
//         </label>
//         <button
//           type="submit"
//           className="premium-button mt-7 w-full bg-gold text-graphite hover:bg-ivory sm:w-auto"
//         >
//           {isSubmitting ? "Отправка..." : "Отправить заявку"}
//         </button>
//       </form>
//       {showSuccess && (
//         <div className="fixed bottom-5 right-5 z-50 animate-in slide-in-from-bottom-5 duration-300">
//           <div className="bg-green-500 text-white rounded-lg p-4 shadow-lg">
//             <p className="font-medium">✅ Заявка отправлена!</p>
//             <p className="text-sm opacity-90">
//               Мы свяжемся с вами в ближайшее время
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
