import Icon from '@/components/ui/icon';

const experience = [
  {
    period: 'Январь 2023 — настоящее время',
    duration: '3 года 4 месяца',
    company: 'Концерн КРОСТ',
    url: 'www.krost.ru',
    industry: 'Строительство, девелопмент, проектирование · 22 500 сотрудников',
    title: 'Заместитель директора по подбору персонала',
    duties: [
      'Обеспечение компании трудовыми ресурсами требуемого качества в необходимые сроки, в подчинении 5 человек.',
      'Формирование системы найма персонала собственными силами и привлечёнными кадровыми агентствами.',
      'Личная ответственность за закрытие вакансий уровня СЕО-1, СЕО-2, СЕО-3.',
      'Автоматизация массового найма через внедрение БОТ-телефонии.',
      'Разработка регламентов, положений, профилей должностей.',
      'Лидирование проекта по оптимизации численности персонала.',
      'Участие в формировании HR-бренда компании.',
      'Реализация программ адаптации кандидатов уровня СЕО-1–3.',
      'Развитие проекта по работе с молодыми специалистами: игровой ассесмент-центр, тренинг для асессоров.',
    ],
    achievements: [
      'Закрыто до 90% заявок уровня СЕО-1, СЕО-2, СЕО-3.',
      '70% подобранных кандидатов успешно прошли программы адаптации.',
      'Сформирован эффективный отдел найма персонала.',
      'Уровень текучести среди молодых специалистов не превышает 5%.',
      'Уровень текучести кандидатов, отобранных новым отделом, на 20% ниже.',
    ],
  },
  {
    period: 'Январь 2021 — Февраль 2022',
    duration: '1 год 2 месяца',
    company: 'АО "ДСК АВТОБАН"',
    url: 'avtoban.ru',
    industry: 'Дорожное строительство · более 8 000 сотрудников',
    title: 'Начальник управления найма и адаптации персонала (УК)',
    duties: [
      'Личная ответственность за найм топ-менеджеров: 2020 — 18 чел., 2021 — 5 чел.',
      'Комплексный проект по автоматизации HR-процессов.',
      'Масс-рекрутмент: нанято 193 высококвалифицированных машиниста и водителя.',
      'Внедрение процесса обучения и адаптации через СДО (iSpring, Matrix, WebTutor).',
      'Децентрализация HR-службы: разработана и запущена целевая оргструктура.',
      'Разработка и внедрение долгосрочной мотивации для ключевых руководителей.',
      'Внедрение HR-аналитики и дашбордов по 13 компаниям для Балансовых комиссий.',
      '273 кадровых резервиста в периметре ГК по новой методологии.',
      'Внедрение «Комитета по кадрам и вознаграждениям».',
    ],
    achievements: [],
  },
  {
    period: 'Март 2010 — Февраль 2022',
    duration: '12 лет',
    company: 'АО "ДСК АВТОБАН"',
    url: 'avtoban.ru',
    industry: 'Дорожное строительство · более 8 000 сотрудников',
    title: 'Заместитель руководителя службы — Начальник управления персоналом (УК)',
    duties: [
      'Функциональное подчинение 10 начальников отделов УП, общая численность 5 200 сотрудников.',
      'Реализация корпоративной стратегии и кадровой политики.',
      'Разработка и внедрение полного комплекта регламентирующих документов ДУП.',
      'Организация массового найма — единовременно до 100 вакансий.',
      'Развитие корпоративной культуры, социальное обеспечение сотрудников.',
      'Бюджетирование, HR-аналитика, инспекции управляемых компаний.',
    ],
    achievements: [],
  },
  {
    period: 'Январь 2006 — Март 2010',
    duration: '4 года 3 месяца',
    company: 'ЗАО "Энергокаскад"',
    url: '',
    industry: 'Строительство энергетическое · 1 000 сотрудников',
    title: 'Начальник отдела подбора, оценки и развития персонала',
    duties: [
      'Создание и развитие отдела численностью 12 человек (9 — рекрутинг, 3 — центр оценки).',
      'Разработка модели корпоративных компетенций и ассесмент-центра.',
      'Программа обучения для управленцев (80 человек): тендер, разработка, реализация.',
    ],
    achievements: [
      'Текучесть среди молодых менеджеров сократилась в 3 раза.',
      'В 2 раза больше молодых сотрудников осталось в компании.',
    ],
  },
  {
    period: 'Декабрь 2004 — Январь 2006',
    duration: '1 год 2 месяца',
    company: 'ЗАО "Энергокаскад"',
    url: '',
    industry: 'Строительство энергетическое · 1 000 сотрудников',
    title: 'Начальник отдела подбора персонала',
    duties: [
      'Управление отделом до 6 человек, оперативное закрытие 25–35 вакансий в месяц.',
      'Личная ответственность за вакансии в зоне ответственности учредителей холдинга.',
    ],
    achievements: [
      'Разработана система корпоративных компетенций и структурированные интервью.',
    ],
  },
  {
    period: 'Февраль 2004 — Декабрь 2004',
    duration: '11 месяцев',
    company: 'ООО "Компания Молочное дело"',
    url: '',
    industry: 'Продукты питания · 3 000 сотрудников',
    title: 'Начальник отдела подбора и обучения персонала',
    duties: [
      'Проектный режим: реорганизация системы подбора, оценки и развития персонала.',
      'Запуск ассесмент-центра, программы обучения (6 тренингов), набор 10 HR-менеджеров.',
      'Открытие 7 филиалов в России.',
    ],
    achievements: ['Подобрано 90 менеджеров в Москве и филиалах по новой программе.'],
  },
  {
    period: 'Ноябрь 2003 — Февраль 2004',
    duration: '4 месяца',
    company: 'ООО "Малаховский мясокомбинат"',
    url: '',
    industry: 'Продукты питания · до 500 сотрудников',
    title: 'Директор по персоналу',
    duties: [
      'Создание отдела персонала с нуля, кадровая политика, мотивация, обучение, аттестация.',
    ],
    achievements: ['Создан эффективный отдел персонала, запущена программа для менеджеров по продажам.'],
  },
  {
    period: 'Февраль 2002 — Сентябрь 2003',
    duration: '1 год 8 месяцев',
    company: 'ООО "Эл Ти Хелскеа"',
    url: '',
    industry: 'Медицина, фармацевтика · до 500 сотрудников',
    title: 'Директор по персоналу',
    duties: [
      'Управление отделом персонала в Москве и 6 региональных подразделениях.',
      'Разработка и внедрение кадровой политики, систем мотивации, адаптации, обучения.',
    ],
    achievements: ['Численность компании возросла более чем в 3 раза.'],
  },
  {
    period: 'Октябрь 1999 — Ноябрь 2001',
    duration: '2 года 2 месяца',
    company: 'ООО "Компания Молочное дело"',
    url: '',
    industry: 'Продукты питания · до 2 000 сотрудников',
    title: 'Директор по персоналу',
    duties: [
      'Управление отделом персонала в Москве (3 подразделения) и 3 региональных филиалах.',
      'Антикризисное управление на приобретаемых заводах компании.',
    ],
    achievements: ['Численность компании возросла более чем в 6 раз.'],
  },
  {
    period: 'Февраль 1998 — Октябрь 1999',
    duration: '1 год 9 месяцев',
    company: 'ООО "Компания Молочное дело"',
    url: '',
    industry: 'Продукты питания',
    title: 'Директор торгового офиса',
    duties: [
      'Управление сбытовым подразделением до 130 человек, управление продажами, бюджетирование.',
    ],
    achievements: ['Карьерный рост от менеджера до директора. Объём продаж вырос более чем в 1,5 раза.'],
  },
];

const skills = [
  'Подбор персонала', 'Управление командой', 'Мотивация персонала',
  'Адаптация персонала', 'Оценка персонала', 'Организаторские навыки',
  'Управление бюджетом', 'Управленческая отчетность', 'Разработка и внедрение KPI',
  'Разработка локальных нормативных актов', 'Управление эффективностью',
  'Управление системой кадрового резерва', 'Аттестация персонала',
  'Управление HR-брендом', 'Организация системного рекрутмента',
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      {/* Print button — hidden when printing */}
      <div className="print:hidden sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 border border-gray-900 bg-gray-900 text-white px-5 py-2 text-sm font-medium hover:bg-white hover:text-gray-900 transition-all"
        >
          <Icon name="Download" size={16} />
          Скачать PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 print:px-8 print:py-6 bg-white">

        {/* Header */}
        <div className="border-b-2 border-gray-900 pb-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Зайнетдинов Александр Зарифович</h1>
          <p className="text-lg text-gray-600 mt-1">Директор по управлению персоналом (HRD)</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
            <span className="flex items-center gap-1"><Icon name="Phone" size={14} />+7 (985) 768-07-73</span>
            <span className="flex items-center gap-1"><Icon name="Mail" size={14} />zzarif@yandex.ru</span>
            <span className="flex items-center gap-1"><Icon name="MapPin" size={14} />Москва, м. Бабушкинская</span>
            <span className="flex items-center gap-1"><Icon name="Briefcase" size={14} />Полная занятость, на месте работодателя</span>
          </div>
          <div className="mt-3 flex gap-6 text-sm">
            <span className="font-semibold text-gray-900">Желаемая зарплата: <span className="text-gray-700">450 000 ₽ на руки</span></span>
            <span className="font-semibold text-gray-900">Опыт: <span className="text-gray-700">27 лет</span></span>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Обо мне</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Общий стаж работы в HR — 26 лет, из которых 13 лет — в системообразующих холдингах:
            <strong> АВТОБАН</strong> (8 000 сотрудников, 13 территориальных подразделений) и
            <strong> Концерн КРОСТ</strong> (25 000 сотрудников, 24 завода, проектный институт).
            Системный подход к построению HR-функции, владение технологией найма ПЕРФОРМИЯ,
            опыт создания ассесмент-центров, развития кадрового резерва и построения команд,
            ориентированных на результат.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">Опыт работы</h2>
          <div className="space-y-7">
            {experience.map((job, i) => (
              <div key={i} className="grid grid-cols-[180px_1fr] gap-4 print:grid-cols-[160px_1fr]">
                <div className="text-xs text-gray-500 pt-0.5 leading-relaxed">
                  <div className="font-medium text-gray-700">{job.period}</div>
                  <div>{job.duration}</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{job.title}</div>
                  <div className="text-sm text-gray-600 mt-0.5">
                    {job.company}{job.url && <span className="text-gray-400"> · {job.url}</span>}
                  </div>
                  <div className="text-xs text-gray-400 mb-2">{job.industry}</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {job.duties.map((d, j) => (
                      <li key={j} className="flex gap-2"><span className="text-gray-400 mt-0.5">—</span>{d}</li>
                    ))}
                  </ul>
                  {job.achievements.length > 0 && (
                    <div className="mt-2">
                      <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Достижения</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {job.achievements.map((a, j) => (
                          <li key={j} className="flex gap-2"><span className="text-green-600 mt-0.5">✓</span>{a}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Образование</h2>
          <div className="grid grid-cols-[180px_1fr] gap-4">
            <div className="text-xs text-gray-500">2005</div>
            <div>
              <div className="font-semibold text-gray-900">Кубанский государственный университет</div>
              <div className="text-sm text-gray-600">Управление персоналом, диплом</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Повышение квалификации</div>
            <div className="space-y-1 text-sm text-gray-700">
              <div><span className="text-gray-400 mr-2">2014</span>Management Development Program — ВШБ МГУ им. Ломоносова</div>
              <div><span className="text-gray-400 mr-2">2007</span>«Управление сотрудниками» — внутренний тренинг</div>
              <div><span className="text-gray-400 mr-2">2005</span>«Тренинг тренеров» — ГК МИМ</div>
              <div><span className="text-gray-400 mr-2">2000</span>«Управление персоналом» — ИПК госслужбы РАГС при Президенте РФ</div>
              <div><span className="text-gray-400 mr-2">2000</span>«Психодрама и ролевой тренинг» — KPG Resources</div>
              <div><span className="text-gray-400 mr-2">1999</span>«Охота за головами» — KPG Resources</div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Ключевые навыки</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="border border-gray-300 px-3 py-1 text-xs text-gray-700">{s}</span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-4 text-xs text-gray-400 flex justify-between">
          <span>Рекомендации представлю по запросу</span>
          <span>Обновлено 24 апреля 2026</span>
        </div>
      </div>
    </div>
  );
}
