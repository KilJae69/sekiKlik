import HeroSection from '@/components/homepage/hero-section';
import WhySection from '@/components/homepage/why-section';
import LeftRightImageSection from '@/components/homepage/left-right-image-section';
import PartnersSection from '@/components/homepage/partners';
import TestimonialsSection from '@/components/homepage/testimonials-section';

const dummyDataSeeker = {
  title: 'Job Seekers',
  imageUrl: '/images/job_seeker.svg',
  paragraphs: [
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi. ',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
  ],
  items: [
    {
      title: 'Veriefied Job Providers',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
    },
    {
      title: 'No downpayments',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
    },
  ],
  buttonLabel: 'Register',
  buttonUrl: '/register',
  reverseColumns: false,
};
const dummyDataProvider = {
  title: 'Job Provider',
  imageUrl: '/images/job_provider.svg',
  paragraphs: [
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi. ',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
  ],
  items: [
    {
      title: 'Veriefied Job Providers',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
    },
    {
      title: 'No downpayments',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
    },
  ],
  buttonLabel: 'Register',
  buttonUrl: '/register',
  reverseColumns: true,
};
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <LeftRightImageSection data={dummyDataSeeker} />
      <LeftRightImageSection data={dummyDataProvider} />
      <PartnersSection />
      <TestimonialsSection />
    </>
  );
}
