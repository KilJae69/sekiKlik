/* eslint-disable prettier/prettier */
import ApplicantCard from '@/components/applicants/ApplicantCard';
import ApplicantSidebarData from '@/components/applicants/ApplicantSidebarData';
import ArticleCard from '@/components/articles/ArticleCard';
import NotificationCard from '@/components/notifications/NotificationCard';
import SubscriptionCard from '@/components/subscriptions/SubscriptionCard';

const cardDummyData = [
  {
    id: 1,
    title: 'Bussiness',
    badgeColor: 'badgeColor1',
    subtitle: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
    features: [
      {
        id: 1,
        included: true,
        text: 'Eos et accusamus et iusto odio dignissimos ducimus',
      },
      { id: 2, included: true, text: 'Accusamus et iusto odio dignissi' },
      { id: 3, included: true, text: 'Iusto odio dignissimos ducimus' },
      { id: 4, included: false, text: 'Dignissimos ducimus' },
    ],
    price: '9.99',
    ads: '5 Ads',
    isActivePlan: false,
  },
  {
    id: 2,
    title: 'Proffesional',
    badgeColor: 'badgeColor2',
    subtitle: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
    features: [
      {
        id: 1,
        included: true,
        text: 'Eos et accusamus et iusto odio dignissimos ducimus',
      },
      { id: 2, included: true, text: 'Accusamus et iusto odio dignissi' },
      { id: 3, included: true, text: 'Iusto odio dignissimos ducimus' },
      { id: 4, included: false, text: 'Dignissimos ducimus' },
    ],
    price: '49.99',
    ads: '50 Ads',
    isActivePlan: true,
  },
  {
    id: 2,
    title: 'Enterprise',
    badgeColor: 'badgeColor3',
    subtitle: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
    features: [
      {
        id: 1,
        included: true,
        text: 'Eos et accusamus et iusto odio dignissimos ducimus',
      },
      { id: 2, included: true, text: 'Accusamus et iusto odio dignissi' },
      { id: 3, included: true, text: 'Iusto odio dignissimos ducimus' },
      { id: 4, included: false, text: 'Dignissimos ducimus' },
    ],
    price: '99.99',
    ads: 'Unlimited',
    isActivePlan: false,
  },
];

const articleDummyData = [
  {
    id: 1,
    src: '/images/article-image-1.png',
    date: '2 April, 2025',
    title: 'At vero eos et accusamus et iusto odio',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.',
  },
  {
    id: 2,
    src: '/images/article-image-2.png',
    date: '2 April, 2025',
    title: 'At vero eos et accusamus et iusto odio',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.',
  },
  {
    id: 3,
    src: '/images/article-image-3.png',
    date: '2 April, 2025',
    title: 'At vero eos et accusamus et iusto odio',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.',
  },
  {
    id: 4,
    src: '/images/article-image-4.png',
    date: '2 April, 2025',
    title: 'At vero eos et accusamus et iusto odio',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.',
  },
];

export default function SubscriptionsPage() {
  const activeIndex = cardDummyData.findIndex((card) => card.isActivePlan);

  return (
    <div>
      {cardDummyData.map((card, index) => {
        let buttonLabel = 'Choose Plan';

        if (card.isActivePlan) buttonLabel = 'Active Plan';

        if (activeIndex !== -1 && index > activeIndex)
          buttonLabel = 'Upgrade Plan';

        return (
          <SubscriptionCard
            key={card.id}
            cardData={card}
            buttonLabel={buttonLabel}
          />
        );
      })}

      <ApplicantCard />
      <NotificationCard />
      <ApplicantSidebarData />
      {articleDummyData.map((article) => (
        <ArticleCard
          key={article.id}
          src={article.src}
          title={article.title}
          text={article.text}
          date={article.date}
          isSmall
        />
      ))}
    </div>
  );
}

