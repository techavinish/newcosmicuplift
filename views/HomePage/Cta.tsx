import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>Discover Your Universe</OverTitle>
          <SectionTitle>Unlock Cosmic Insights: Astrology, Neurology, and Tarot Readings</SectionTitle>
          <Description>
          Explore the Mysteries of the Universe with CosmicUplift.com! Delve into the ancient arts of astrology, neurology, and tarot card reading to gain profound insights into your life's journey. Our expert readers and practitioners are here to guide you through the cosmic energies, helping you navigate the stars, decipher your neurological patterns, and unveil the secrets hidden in the cards. Discover your destiny and find the answers you seek with CosmicUplift.
          </Description>
          <ButtonGroup>
            <NextLink href="/booking" passHref>
              <Button>
              Schedule Now<span>&rarr;</span>
              </Button>
            </NextLink>
            
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
