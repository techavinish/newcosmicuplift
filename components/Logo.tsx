import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/logo/cosmicuplift.svg" 
      alt="Cosmic"
      width={250} // Set the desired width
      height={94} // Set the desired height
    />
  );
}
