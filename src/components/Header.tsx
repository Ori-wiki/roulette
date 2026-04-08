import { useState } from 'react';

const navItemClass =
  'inline-flex h-12 w-41.75 items-center justify-center rounded-full text-center font-kelly leading-none text-[#F6F2EA] no-underline transition-all duration-200 hover:bg-white/6 hover:text-white';

const languages = ['РУ', 'ENG'] as const;

function Wordmark() {
  return (
    <a
      className='inline-flex h-12 items-center gap-1 text-[#F6F2EA] no-underline'
      href='/'
      aria-label='HIRO VPN'
    >
      <span className='inline-flex h-12 items-center font-kelly text-[38px] leading-none min-[768px]:text-[44px]'>
        HIRO
      </span>
      <span className='mb-0.5 font-kelly text-[14px] leading-none min-[768px]:text-[18px] [writing-mode:vertical-rl] rotate-180'>
        VPN
      </span>
    </a>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [language, setLanguage] = useState<(typeof languages)[number]>('РУ');

  function handleLanguageSelect(value: (typeof languages)[number]) {
    setLanguage(value);
    setIsLanguageOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((value) => !value);
    setIsLanguageOpen(false);
  }

  return (
    <header className='w-full'>
      <div className='hidden w-full items-center justify-between gap-4 min-[1025px]:flex'>
        <Wordmark />

        <nav className='flex items-center gap-4' aria-label='Основная навигация'>
          <a className={`${navItemClass} opacity-95`} href='#faq'>
            FAQ
          </a>
          <a className={`${navItemClass} opacity-95`} href='#pricing'>
            Тарифы
          </a>
          <a
            className='inline-flex h-12 w-41.75 items-center justify-center rounded-full bg-[#FF0633] text-center font-kelly leading-none text-[#FFF6F7] no-underline shadow-[0_6px_14px_rgba(255,24,66,0.28)] transition-all duration-200 hover:bg-[#ff2d55] hover:shadow-[0_10px_24px_rgba(255,24,66,0.36)]'
            href='#download'
          >
            Скачать
          </a>
          <a className={`${navItemClass} opacity-95`} href='#blog'>
            Блог
          </a>
        </nav>

        <div className='flex items-center gap-4'>
          <a
            className='inline-flex h-12 w-41.75 shrink-0 items-center justify-center rounded-full border border-[rgba(246,242,234,0.82)] text-center font-kelly leading-none text-[#F6F2EA] no-underline transition-all duration-200 hover:border-white hover:bg-white/6 hover:text-white'
            href='#account'
          >
            Аккаунт
          </a>

          <div className='relative shrink-0'>
            <button
              className='inline-flex h-12 w-28 cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-transparent p-0 font-kelly leading-none text-[#F6F2EA] transition-all duration-200 hover:bg-white/6 hover:text-white'
              type='button'
              aria-label='Смена языка'
              aria-expanded={isLanguageOpen}
              onClick={() => setIsLanguageOpen((value) => !value)}
            >
              <span>{language}</span>
              <span
                className={`text-sm transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`}
                aria-hidden='true'
              >
                ˅
              </span>
            </button>

            {isLanguageOpen ? (
              <div className='absolute right-0 top-[calc(100%+8px)] z-10 flex min-w-22 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#2A2D33] p-1 shadow-[0_14px_30px_rgba(0,0,0,0.3)]'>
                {languages.map((item) => (
                  <button
                    key={item}
                    className={`inline-flex h-10 items-center justify-center rounded-xl border-0 bg-transparent px-3 font-kelly text-base leading-none text-[#F6F2EA] transition-colors duration-200 hover:bg-white/8 ${
                      item === language ? 'bg-white/8' : ''
                    }`}
                    type='button'
                    onClick={() => handleLanguageSelect(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className='grid w-full grid-cols-[40px_1fr_56px] items-center px-2.5 min-[1025px]:hidden'>
        <button
          type='button'
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          className='inline-flex h-10 w-10 items-center justify-start border-0 bg-transparent p-0 text-[#F6F2EA]'
          onClick={toggleMenu}
        >
          <span className='relative block h-4 w-4'>
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-4 bg-current transition-all duration-200 ${
                isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-4 bg-current transition-all duration-200 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-4 bg-current transition-all duration-200 ${
                isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </span>
        </button>

        <div className='flex justify-center'>
          <Wordmark />
        </div>

        <div className='relative flex justify-end'>
          <button
            className='inline-flex h-10 min-w-12 cursor-pointer items-center justify-end gap-5 border-0 bg-transparent p-0 font-kelly text-[20px] leading-none text-[#F6F2EA]'
            type='button'
            aria-label='Смена языка'
            aria-expanded={isLanguageOpen}
            onClick={() => setIsLanguageOpen((value) => !value)}
          >
            <span>{language}</span>
            <span
              className={`text-[20px] font-extralight transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`}
              aria-hidden='true'
            >
              ˅
            </span>
          </button>

          {isLanguageOpen ? (
            <div className='absolute right-0 top-[calc(100%+8px)] z-10 flex min-w-22 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#2A2D33] p-1 shadow-[0_14px_30px_rgba(0,0,0,0.3)]'>
              {languages.map((item) => (
                <button
                  key={item}
                  className={`inline-flex h-10 items-center justify-center rounded-xl border-0 bg-transparent px-3 font-kelly text-base leading-none text-[#F6F2EA] transition-colors duration-200 hover:bg-white/8 ${
                    item === language ? 'bg-white/8' : ''
                  }`}
                  type='button'
                  onClick={() => handleLanguageSelect(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {isMenuOpen ? (
        <div className='mt-4 rounded-[10px] border border-[#2E3139] bg-[#1E2025] p-4 min-[1025px]:hidden'>
          <nav className='flex flex-col gap-2' aria-label='Основная навигация'>
            <a
              className='inline-flex h-11 items-center justify-center rounded-full px-4 text-center font-kelly text-[18px] leading-none text-[#F6F2EA] no-underline transition-colors duration-200 hover:bg-white/6 hover:text-white'
              href='#faq'
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              className='inline-flex h-11 items-center justify-center rounded-full px-4 text-center font-kelly text-[18px] leading-none text-[#F6F2EA] no-underline transition-colors duration-200 hover:bg-white/6 hover:text-white'
              href='#pricing'
              onClick={() => setIsMenuOpen(false)}
            >
              Тарифы
            </a>
            <a
              className='inline-flex h-11 items-center justify-center rounded-full px-4 text-center font-kelly text-[18px] leading-none text-[#F6F2EA] no-underline transition-colors duration-200 hover:bg-white/6 hover:text-white'
              href='#blog'
              onClick={() => setIsMenuOpen(false)}
            >
              Блог
            </a>
            <a
              className='inline-flex h-11 items-center justify-center rounded-full bg-[#FF0633] px-4 text-center font-kelly text-[18px] leading-none text-[#FFF6F7] no-underline shadow-[0_6px_14px_rgba(255,24,66,0.28)] transition-all duration-200 hover:bg-[#ff2d55]'
              href='#download'
              onClick={() => setIsMenuOpen(false)}
            >
              Скачать
            </a>
            <a
              className='inline-flex h-11 items-center justify-center rounded-full border border-[rgba(246,242,234,0.82)] px-4 text-center font-kelly text-[18px] leading-none text-[#F6F2EA] no-underline transition-all duration-200 hover:border-white hover:bg-white/6 hover:text-white'
              href='#account'
              onClick={() => setIsMenuOpen(false)}
            >
              Аккаунт
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
