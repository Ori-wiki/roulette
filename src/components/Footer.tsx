import androidIcon from '../assets/footer/android.svg';
import appStoreIcon from '../assets/footer/appStore.svg';
import creditCardIcon from '../assets/footer/credit-card-outline.svg';
import iosIcon from '../assets/footer/IOS.svg';
import linuxIcon from '../assets/footer/Linux.svg';
import sberpayIcon from '../assets/footer/sberpay.svg';
import sbpIcon from '../assets/footer/sbp.svg';
import tetherIcon from '../assets/footer/tether.svg';
import telegramIcon from '../assets/telegram.svg';
import tpayIcon from '../assets/footer/tpay.svg';
import windowsIcon from '../assets/footer/Windows.svg';
import { FooterIconList } from './FooterIconList';

const menuLinks = [
  'FAQ',
  'Тарифы',
  'Блог',
  'Роутеры',
  'Партнёрам',
  'Аккаунт',
] as const;

const downloadLinks = [
  { label: 'IOS', icon: iosIcon },
  { label: 'Android', icon: androidIcon },
  { label: 'Android TV', icon: androidIcon },
  { label: 'Windows', icon: windowsIcon },
  { label: 'Mac Os', icon: appStoreIcon },
  { label: 'Linux', icon: linuxIcon },
] as const;

const paymentLinks = [
  { label: 'СБП', icon: sbpIcon },
  { label: 'Sberpay', icon: sberpayIcon },
  { label: 'Tinkoff Pay', icon: tpayIcon },
  { label: 'Банковская карта', icon: creditCardIcon },
  { label: 'Криптовалюта', icon: tetherIcon },
] as const;

export function Footer() {
  return (
    <footer className='mt-10 rounded-[10px] border border-[#2E3139] bg-[#1E2025]'>
      <div className='grid gap-8 px-4 pb-6 pt-8 min-[768px]:grid-cols-4 min-[768px]:gap-8 min-[768px]:px-5 min-[768px]:pt-10'>
        <div>
          <a
            className='flex w-29.5 items-center text-[#C3C2BD] no-underline'
            href='/'
            aria-label='HIRO VPN'
          >
            <span className='font-kelly text-[24px] leading-none'>HIRO</span>
            <span className='text-center font-kelly text-[10px] leading-none [writing-mode:vertical-rl] rotate-180 min-[768px]:pt-0'>
              VPN
            </span>
          </a>

          <ul className='mt-5 space-y-4 min-[768px]:mt-6 min-[768px]:space-y-5'>
            {menuLinks.map((item) => (
              <li key={item}>
                <a
                  href='#'
                  className='font-kelly text-[20px] leading-none text-[#F6F2EA] no-underline transition-colors duration-200 hover:text-white'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterIconList title='Скачать' items={downloadLinks} />
        <FooterIconList title='Способы оплаты' items={paymentLinks} />

        <div>
          <h3 className='font-alumni text-[24px] font-semibold uppercase leading-none text-[#C3C2BD]'>
            Поддержка 24/7
          </h3>

          <a
            href='#'
            className='mt-5 inline-flex h-11 items-center gap-3 rounded-full bg-[#FDFDFD] px-4 font-kelly text-[18px] leading-none text-[#20232A] no-underline transition-transform duration-200 hover:-translate-y-0.5 min-[768px]:mt-6'
          >
            <span>Telegram</span>
            <img
              src={telegramIcon}
              alt='Telegram'
              className='h-5 w-5 shrink-0 object-contain min-[768px]:h-6 min-[768px]:w-6'
            />
          </a>

          <div className='mt-6 space-y-4 min-[768px]:mt-8 min-[768px]:space-y-5'>
            <a
              href='#'
              className='block font-alumni text-[20px] leading-none text-[#F6F2EA] no-underline transition-colors duration-200 hover:text-white'
            >
              Публичная оферта
            </a>
            <a
              href='#'
              className='block font-alumni text-[20px] leading-none text-[#F6F2EA] no-underline transition-colors duration-200 hover:text-white'
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>

      <div className='border-t border-[#2E3139] px-4 py-5 text-center font-alumni text-[20px] leading-none text-[#C3C2BD] min-[768px]:px-5'>
        © 2025 Wolle Development Limited. Все права защищены.
      </div>
    </footer>
  );
}
