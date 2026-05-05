import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const projects = [
  {
    id: 1,
    title: 'ЦКАД-3 · ГК АВТОБАН',
    period: '2012–2020',
    role: 'HR-директор',
    description:
      'Построил HR-систему с нуля для одного из крупнейших инфраструктурных проектов России. Рекрутинг, адаптация, обучение и мотивация 8 000+ сотрудников.',
    results: ['8 000+ сотрудников в пике', 'Текучесть снижена на 35%', 'Запущена внутренняя академия'],
    image: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2023-04/post_SSS_uchastok_TsKaD_Denisov%2814%29.jpg?itok=50b1ZW-G',
  },
  {
    id: 2,
    title: 'Верфь электросудов · Концерн КРОСТ',
    period: '2020–2024',
    role: 'Директор по персоналу',
    description:
      'Формирование команды для уникального производственного проекта в Москве. Привлечение редких технических специалистов, выстраивание корпоративной культуры.',
    results: ['Команда 1 200 человек за 18 мес.', 'NPS сотрудников — 74', 'Разработана система грейдов'],
    image: 'https://storage.yandexcloud.net/krost-media/CACHE/press/press/preview/944e664af4cb461d6a6d284ec96ecf4d88ba21fc/8b752f968086c6d13b712f210834b2ed.jpg',
  },
  {
    id: 3,
    title: 'Строительная бригада · Проект комплексной оценки рабочих и ИТР',
    period: '2024–2025',
    role: 'Независимый консультант',
    description:
      'Комплексный аудит HR-процессов производственного предприятия. Разработка и внедрение новой модели управления персоналом.',
    results: ['Аудит 12 HR-процессов', 'Снижение затрат на найм на 28%', 'Внедрена система KPI'],
    image: 'https://cdn.poehali.dev/projects/8534e1dd-101b-4ec5-bdd1-84d05c166688/files/29ad4b29-8948-4bfb-bfab-18c229011f83.jpg',
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center gap-4 border-b border-white/10 bg-black/90 px-5 py-4 backdrop-blur">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/60 transition-colors hover:text-white"
        >
          <Icon name="ArrowLeft" size={18} />
          <span className="text-sm">Назад</span>
        </button>
        <span className="text-sm font-medium uppercase tracking-widest text-white/40">Проекты</span>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-5 py-10">
        <h1 className="mb-2 text-3xl font-light">Ключевые проекты</h1>
        <p className="mb-10 text-sm text-white/50">
          Реализованные HR-проекты в крупнейших российских компаниях
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div key={project.id} className="border border-white/10 bg-white/5">
              {/* Image */}
              <div className="h-48 overflow-hidden sm:h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-medium">{project.title}</h2>
                    <p className="text-sm text-white/50">{project.role}</p>
                  </div>
                  <span className="text-xs text-white/40 border border-white/20 px-2 py-1">
                    {project.period}
                  </span>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-white/70">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.results.map((r) => (
                    <span
                      key={r}
                      className="flex items-center gap-1.5 text-xs text-white/60"
                    >
                      <Icon name="CheckCircle" size={12} className="text-white/40" />
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}