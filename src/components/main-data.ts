export const rewardCards = [
  { title: 'Скидка', value: '50%', tone: 'red' },
  { title: 'Скидка', value: '30%', tone: 'red' },
  { title: 'Бесплатные', value: '6 часов', tone: 'blue' },
  { title: 'Скидка', value: '20%', tone: 'red' },
  { title: 'Скидка', value: '10%', tone: 'red' },
  { title: 'Бесплатные', value: '12 часов', tone: 'blue' },
  { title: 'Попробуй', value: 'завтра', tone: 'burst' },
  { title: 'Скидка', value: '40%', tone: 'red' },
] as const;

export const questCards = [
  {
    title: 'Оставь отзыв',
    description:
      'Поделитесь своим мнением о HiroVPN и получите 3 дня VPN бесплатно!',
    button: 'Оставить отзыв',
    icon: '✎',
  },
  {
    title: 'Поделиться с друзьями',
    description:
      'Пригласите друга в HiroVPN и получите 1 день VPN бесплатно!',
    button: 'Поделиться',
    icon: '⌃',
  },
  {
    title: 'Поддержите нас лайками',
    description:
      'Поставьте лайки 5 комментариям, с которыми вы согласны, и мы подарим вам 2 дня VPN бесплатно!',
    button: 'Поддержать',
    icon: '❤',
  },
  {
    title: 'Оцени нас в Google Картах',
    description:
      'Поделись впечатлением и получи 1 день VPN в подарок!',
    button: 'Оценить',
    icon: '★',
  },
  {
    title: 'Оцени нас в Яндекс Картах',
    description:
      'Поделись впечатлением и получи 1 день VPN в подарок!',
    button: 'Оценить',
    icon: '★',
  },
  {
    title: 'Подписаться на TG-канал',
    description:
      'Подпишитесь на канал HiroVPN, получайте новости и апдейты самыми первыми, а также 1 день VPN бесплатно!',
    button: 'Подписаться',
    icon: '◉',
  },
] as const;

export type RewardCardItem = (typeof rewardCards)[number];
export type RewardTone = RewardCardItem['tone'];
export type QuestCardItem = (typeof questCards)[number];
