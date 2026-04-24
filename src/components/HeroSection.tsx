import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const images = [
  { src: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2023-04/post_SSS_uchastok_TsKaD_Denisov%2814%29.jpg?itok=50b1ZW-G', caption: 'ЦКАД-3' },
  { src: 'https://storage.yandexcloud.net/krost-media/CACHE/press/press/preview/944e664af4cb461d6a6d284ec96ecf4d88ba21fc/8b752f968086c6d13b712f210834b2ed.jpg', caption: 'Верфь электросудов · Нагатинский Затон' },
  { src: 'https://cdn.poehali.dev/projects/8534e1dd-101b-4ec5-bdd1-84d05c166688/files/29ad4b29-8948-4bfb-bfab-18c229011f83.jpg', caption: 'Строительная бригада' },
];

const stats = [
  { value: '26 лет', label: 'опыта в HR' },
  { value: '25 000+', label: 'сотрудников под управлением' },
  { value: '13 лет', label: 'в крупнейших холдингах' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://functions.poehali.dev/26e47e65-93bc-4f6c-9f29-9e3b535b7a1f', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSent(true);
      setForm({ name: '', phone: '', message: '' });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={image.src}
              alt={image.caption}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <div
          className={cn(
            'rounded-sm bg-black/50 px-4 py-2 backdrop-blur-sm transition-all duration-700',
          )}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-white/80">
            {images[currentIndex].caption}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/80 shadow-2xl md:h-56 md:w-56">
                <img
                  src="https://cdn.poehali.dev/projects/8534e1dd-101b-4ec5-bdd1-84d05c166688/bucket/1055be7d-8e2e-4c5c-87f5-d0205c3458f4.png"
                  alt="Александр Зайнетдинов"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Name & title */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-widest text-white/50">
                  Портфолио
                </p>
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Александр Зайнетдинов
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  HR-директор · Эксперт по управлению персоналом
                </p>
                <p className="max-w-lg text-base text-white/60 leading-relaxed pt-1">
                  26 лет в HR, из которых 13 — в системообразующих холдингах АВТОБАН и Концерн КРОСТ. Строю HR-системы с нуля, формирую команды, которые достигают результата.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-400 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="text-2xl font-semibold text-white">{stat.value}</span>
                    <span className="text-xs text-white/50 uppercase tracking-wide">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA & Social */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => { setDialogOpen(true); setSent(false); }}
                    className="inline-flex items-center gap-2 rounded-none border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-transparent hover:text-white"
                  >
                    Связаться со мной
                  </button>
                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-none border border-white/40 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white"
                  >
                    Скачать резюме
                  </a>
                </div>

                <div className="flex gap-5">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 transition-colors hover:text-white"
                    aria-label="Telegram"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                  <a
                    href="https://vk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 transition-colors hover:text-white"
                    aria-label="VKontakte"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 transition-colors hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md rounded-none">
          <DialogHeader>
            <DialogTitle className="text-xl font-light">Связаться со мной</DialogTitle>
          </DialogHeader>
          {sent ? (
            <div className="py-8 text-center space-y-2">
              <p className="text-lg font-medium">Спасибо!</p>
              <p className="text-sm text-muted-foreground">Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted-foreground">Имя *</label>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Иван Иванов"
                  className="border border-input bg-background px-3 py-2 text-sm outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted-foreground">Телефон *</label>
                <input
                  required
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  placeholder="+7 (___) ___-__-__"
                  className="border border-input bg-background px-3 py-2 text-sm outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted-foreground">Сообщение</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Ваш вопрос или предложение..."
                  className="border border-input bg-background px-3 py-2 text-sm outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-2 border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-transparent hover:text-foreground disabled:opacity-50"
              >
                {loading ? 'Отправка...' : 'Отправить'}
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}