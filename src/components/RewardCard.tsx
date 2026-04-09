import card1Image from '../assets/card1.png';
import card2Image from '../assets/card2.png';
import card3Image from '../assets/card3.png';
import type { RewardCardItem } from './main-data';

type RewardCardProps = RewardCardItem & {
  active?: boolean;
};

export function RewardCard({
  title,
  value,
  tone,
  active = false,
}: RewardCardProps) {
  const rewardImage =
    tone === 'blue' ? card2Image : tone === 'burst' ? card3Image : card1Image;

  return (
    <article
      className={`flex h-52 w-30 min-w-30 flex-col justify-between rounded-[10px] border bg-[#22252c] py-4 transition-transform duration-300 ${
        active ? 'border-transparent scale-[1.01]' : 'border-white/65'
      }`}
    >
      <div className='space-y-1'>
        <p className='text-center font-alumni text-[24px] font-semibold uppercase leading-none text-[#f6f2ea]'>
          {title}
        </p>
      </div>

      <div className='flex justify-center'>
        <img
          src={rewardImage}
          alt='Награда'
          className='h-30 w-30 shrink-0 object-fill'
        />
      </div>

      <p className='text-center font-kelly text-[32px] leading-none tracking-[0] whitespace-nowrap text-[#C3C2BD]'>
        {value}
      </p>
    </article>
  );
}
