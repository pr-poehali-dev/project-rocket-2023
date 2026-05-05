import { useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const slides = [
  {
    url: 'https://cdn.poehali.dev/files/aec080db-b1bc-467a-aa97-984036c0a3cc.png',
    title: 'Содержание',
    description: 'Профиль сотрудника: 4 блока оценки — от компетенций до лояльности',
  },
  {
    url: 'https://cdn.poehali.dev/files/3845ef5f-c36c-421e-9113-f797f888c072.png',
    title: 'Итоговая школа оценки сотрудника',
    description: 'Сводная карточка с рейтингом и рекомендациями по сотруднику',
  },
  {
    url: 'https://cdn.poehali.dev/files/0c97de48-2952-4a8e-a1f0-ea088aa28ce6.png',
    title: 'Шкала результатов',
    description: '4 уровня: от 0–49% до 95–100% — чёткие критерии для каждого',
  },
  {
    url: 'https://cdn.poehali.dev/files/e5404134-9c92-401d-bb23-30066103cde1.png',
    title: 'Вопросы по профессии',
    description: 'Адаптированные тесты под каждую специальность',
  },
  {
    url: 'https://cdn.poehali.dev/files/ec09389f-9678-418f-b88a-ba45e30dd4a4.png',
    title: 'Матрица потенциала сотрудников',
    description: '16 профилей сотрудников по профессиональным компетенциям и лояльности',
  },
];

export default function MethodologyCarousel() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="bg-[#0f1923] py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-16">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/40">
              Методология
            </p>
            <h2 className="text-2xl font-light text-white md:text-4xl">
              Система оценки персонала
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/50 leading-relaxed">
            Комплексная методика оценки профессиональных компетенций, разработанная в Концерне КРОСТ
          </p>
        </div>

        {/* Main slide */}
        <div className="relative overflow-hidden rounded-sm bg-black/30">
          <div
            className="relative cursor-zoom-in"
            onClick={() => setLightbox(true)}
          >
            <img
              src={slides[current].url}
              alt={slides[current].title}
              className="w-full object-contain max-h-[55vh] md:max-h-[65vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-base font-semibold text-white md:text-xl">
                {slides[current].title}
              </p>
              <p className="mt-1 text-sm text-white/60">
                {slides[current].description}
              </p>
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/80"
            aria-label="Назад"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/80"
            aria-label="Вперёд"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                'relative flex-shrink-0 overflow-hidden rounded-sm transition-all duration-200',
                'w-20 h-14 md:w-28 md:h-20',
                current === i
                  ? 'ring-2 ring-white opacity-100'
                  : 'opacity-40 hover:opacity-70'
              )}
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-5 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                current === i ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
              )}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setLightbox(false)}
          >
            <Icon name="X" size={20} />
          </button>
          <img
            src={slides[current].url}
            alt={slides[current].title}
            className="max-h-[90vh] max-w-[95vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}