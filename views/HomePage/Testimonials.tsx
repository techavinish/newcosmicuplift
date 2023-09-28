import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import Separator from 'components/Separator';
import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    companyLogoUrl: '/testimonials/1x/Rashmi.webp',
    content: `She is excellent, quiet accurate, understands human emotions and advises in a manner that can help effectuate positive changes. She is easily the best tarot card reader one can hope to meet.`,
    author: {
      name: '- Rashmi Sudha',
      // title: 'Very Serious Man',
      // avatarUrl: '/testimonials/author-photo-1.jpeg',
    },
  },
  {
    companyLogoUrl: '/testimonials/1x/pratiik-Sharma.webp',
    content: `One of the best tarot reading all questions asked was delivered genuinely and accurate with present issues and advice given was totally worth it, I would suggest to have one session is must to clear all doubts, she give all solutions and reading is perfect thanks to her`,
    author: {
      name: '- Pratiik U Sharma',
      // title: 'Sigma Male University Graduate',
      // avatarUrl: '/testimonials/author-photo-2.jpeg',
    },
  },
  {
    companyLogoUrl: '/testimonials/1x/Preeti-Maheshwari.webp',
    content: `I never believed in Tarot Card Reading. But, when you spoke about my past and present events and experiences... I started feeling connected... The answers you gave related to my delimmas helped me in taking right decisions. I am sure, where to go next tym I have unanswered questions.. Thanx dear for putting my trust on this wonderful thing.`,
    author: {
      name: '- Preeti Maheshwari',
      // title: 'Chief Chad Officer',
      // avatarUrl: '/testimonials/author-photo-3.jpeg',
    },
  },
  {
    companyLogoUrl: '/testimonials/1x/Raaj.webp',
    content: `Had tarot card reading done first time…great session…answers were pretty accurate…also the way you explain things is nice`,
    author: {
      name: '- Raaj',
      // title: 'Chief Chad Officer',
      // avatarUrl: '/testimonials/author-photo-3.jpeg',
    },
  },
];

export default function Testimonials() {
  return (
    <div>
      <Separator />
      <TestimonialsHeading>What Our Clients Say</TestimonialsHeading>
      <TestimonialsWrapper>
        <Swiper modules={[Navigation, Autoplay, A11y]} slidesPerView={1} autoplay={{ delay: 8000 }} centeredSlides navigation loop>
          {TESTIMONIALS.map((singleTestimonial, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard>
                <NextImage
                  src={singleTestimonial.companyLogoUrl}
                  alt={`${singleTestimonial.author.name}'s company logo`}
                  width={150}
                  height={150}
                />
                <Content>“{singleTestimonial.content}”</Content>
                <AuthorContainer>
                  {/* <AuthorImageContainer>
                    <NextImage src={singleTestimonial.author.avatarUrl} alt={singleTestimonial.author.name} width={48} height={48} />
                  </AuthorImageContainer> */}
                  <AuthorContent>
                    <AuthorName>{singleTestimonial.author.name}</AuthorName>
                    {/* <AuthorTitle>{singleTestimonial.author.title}</AuthorTitle> */}
                  </AuthorContent>
                </AuthorContainer>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialsWrapper>
      <Separator />
    </div>
  );
}

const TestimonialsWrapper = styled(Container)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(var(--secondary));

    ${media('<=desktop')} {
      display: none;
    }
  }

  .swiper-button-prev {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const Content = styled.blockquote`
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  font-style: italic;
  max-width: 60%;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
`;

const AuthorTitle = styled.p`
  font-weight: bold;
`;

const AuthorName = styled.p`
  font-weight: normal;
`;

const AuthorImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`;
const TestimonialsHeading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;
