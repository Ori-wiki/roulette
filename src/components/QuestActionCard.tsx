import googlePlayIcon from '../assets/google play.svg';
import shareIcon from '../assets/share.svg';
import telegramIcon from '../assets/telegram.svg';
import type { QuestCardItem } from './main-data';

type QuestActionCardProps = QuestCardItem & {
  index: number;
};

export function QuestActionCard({
  title,
  description,
  button,
  index,
}: QuestActionCardProps) {
  const actionIcon =
    index === 1
      ? shareIcon
      : index === 2
        ? googlePlayIcon
        : index === 5
          ? telegramIcon
          : null;

  return (
    <article className='flex h-full flex-col justify-between rounded-lg border border-[#2E3139] bg-[#1E2025] px-6 pb-3 min-[768px]:px-4'>
      <div>
        <span className='inline-flex h-5 items-center bg-[#FF0633] px-2 py-3 font-alumni text-[20px] uppercase leading-none text-white'>
          Доступен
        </span>
        <h3 className='mt-3 font-alumni text-[32px] font-semibold uppercase leading-none'>
          {title}
        </h3>
        <p className='mt-3 min-h-11 font-alumni text-[20px] leading-none text-[#C3C2BD] min-[768px]:min-h-13.5'>
          {description}
        </p>
      </div>

      <button
        className='mt-4 flex h-8 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FDFDFD] px-4 font-alumni text-[24px] font-semibold uppercase leading-none text-[#20232a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_24px_rgba(0,0,0,0.28)]'
        type='button'
      >
        <span>{button}</span>
        {actionIcon ? (
          <img
            src={actionIcon}
            alt='Иконка'
            className='h-5 w-5 shrink-0 min-[768px]:h-6 min-[768px]:w-6'
          />
        ) : null}
      </button>
    </article>
  );
}
