import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
// import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/services/tarot-card.png',
    title: 'Personalized Tarot Readings',
    description:
      `Gain insights into your past, present, and future with personalized Tarot sessions. Explore life's mysteries and make informed decisions.`,
  },
  {
    imageUrl: '/services/Love.png',
    title: 'Love and Relationship Guidance',
    description:
      'Illuminate matters of the heart. Discover relationship dynamics, strengths, and areas for growth to foster deeper connections.',
  },
  {
    imageUrl: '/services/Career.png',
    title: 'Career and Financial Clarity',
    description:
      `Navigate your professional path and financial stability with our Tarot readers. Align your ambitions with your life's purpose for success.`,
  },
  {
    imageUrl: '/services/Numerologylife.png',
    title: 'Numerology Life Path Analysis',
    description:
      `Dive into Numerology's world. Uncover Life Path, Destiny, and Personality Numbers to gain profound insights into your purpose and talents.`,
  },
  {
    imageUrl: '/services/CompatibilityNumerology.png',
    title: 'Compatibility Numerology',
    description:
      'Explore compatibility with loved ones, partners, and friends. Identify harmony and potential areas of conflict for better understanding.',
  },
  {
    imageUrl: '/services/NameCorrection.png',
    title: 'Name Correction Consultations',
    description:
      `Align your name with your life's purpose. Receive guidance on slight modifications that could positively impact your journey.`,
  },
  {
    imageUrl: '/services/OnlineTarot.png',
    title: 'Online Tarot and Numerology',
    description:
      'Accessible virtual sessions from home. Experience the magic of Tarot and Numerology online, connecting with our skilled readers.',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Services" description="Explore Our Enlightening Offerings
    Unlock personalized insights with our services:.">
      <Wrapper>
        <SectionTitle>Check out ours services</SectionTitle>
        {/* <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" /> */}
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
