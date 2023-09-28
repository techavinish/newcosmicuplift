import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
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

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
