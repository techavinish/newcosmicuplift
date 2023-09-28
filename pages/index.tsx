import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
// import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
// import Partners from 'views/HomePage/Partners';
// import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content=" At Cosmic Uplift, we believe in the magic of the universe's plan for each individual."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <BasicSection imageUrl="/TarotReading.jpeg" title="Understanding Tarot Reading" overTitle="Tarot Reading">
            <p>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.{' '}
              <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Soluta repellendus quia quos obcaecati nihil. Laudantium non accusantium, voluptate eum nesciunt
              at suscipit quis est soluta? */}
              Dive into the realm of Tarot reading, an ancient mystical practice that uses a deck of symbolic cards to gain profound insights into your past, present, and future. Learn about the symbolism of each card, the art of interpreting their arrangement, and how Tarot can be a powerful tool for guidance, self-discovery, and spiritual exploration.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/Numerology.jpeg" title="Unveiling the Secrets of Numerology" overTitle="Numerology" reversed>
            <p>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore{' '}
              <strong>voluptate quo deleniti animi laboriosam</strong>. Possimus ullam velit rem itaque consectetur, in distinctio? */}
              Explore the enigmatic world of numerology, where numbers hold the key to unlocking the mysteries of your life. Discover how numerologists derive meaning from your birthdate and name, unveiling insights into your life&apos;s purpose, personality traits, and potential. Delve into the fascinating connections between numbers and your existence, offering a unique perspective on personal growth and self-awareness.
            </p>
            {/* <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul> */}
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
