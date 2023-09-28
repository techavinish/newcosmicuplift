import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="What is Tarot reading, and how can it benefit me?">
      Tarot reading is a practice that uses a deck of Tarot cards to gain insights into various aspects of life. It can provide guidance, clarity, and self-reflection. Our skilled Tarot readers use these cards to explore your past, present, and future, helping you make informed decisions and take control of your life's direction.
      </Accordion>
      <Accordion title="What is Numerology, and why should I consider a Numerology analysis?">
      Numerology is the study of the symbolic meanings of numbers and their influence on our lives. It can offer profound insights into your life's purpose, talents, and challenges. A Numerology analysis can help you understand yourself better, make informed choices, and improve various aspects of your life.
      </Accordion>
      <Accordion title="How do Compatibility Numerology sessions work, and what can I learn from them?">
      Compatibility Numerology compares the Numerology charts of two individuals to understand the dynamics and compatibility between them. These sessions can highlight areas of harmony and potential areas of conflict in relationships, whether they are personal or professional. This insight fosters better understanding and cooperation.
      </Accordion>
      <Accordion title="What is Name Correction Consultation, and how can it impact my life?">
      Name Correction Consultation is a service where our Numerologists provide suggestions and guidance for slight modifications to your name. This can positively impact your life's journey by aligning your name with your life's purpose, potentially enhancing your personal and professional life.
      </Accordion>
      <Accordion title="How can I access online Tarot and Numerology readings, and are they as effective as in-person sessions?">
      We offer convenient and accessible online Tarot and Numerology readings for clients who prefer virtual sessions from the comfort of their homes. Our experienced readers provide the same level of expertise and insights in online sessions as they do in-person. The effectiveness of the session remains the same, and you can experience the magic of Tarot and Numerology from anywhere with an internet connection.
      </Accordion>
      <Accordion title="How can I book an appointment for a Tarot or Numerology session?">
      Booking an appointment with us is easy and convenient. Simply visit our website, navigate to the "Book Appointment" or "Contact Us" page, and follow the instructions provided. You can choose your preferred date and time slot, and our team will confirm your appointment via email or phone. If you have any specific requests or questions, feel free to include them in the booking form, and we'll do our best to accommodate your needs. We look forward to assisting you on your cosmic journey.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
