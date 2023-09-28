import Image from 'next/image';

export default function HeroIllustration() {
  return (
    <Image
    src="/hero/hero.svg" 
    alt="Cosmic"
    width={3000} // Set the desired width
    height={1700} // Set the desired height
  />
  )
}
