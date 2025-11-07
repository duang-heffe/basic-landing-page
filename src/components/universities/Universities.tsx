import { type CSSProperties, type ComponentType } from 'react';
import LogoLoop from './LogoLoop';

type UniversityLogo = {
  src: string;
  alt: string;
  href: string;
  title?: string;
};

type LogoLoopProps = {
  logos: UniversityLogo[];
  speed?: number;
  direction?: 'left' | 'right';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
};

const LogoLoopComponent = LogoLoop as unknown as ComponentType<LogoLoopProps>;

const universityLogos: UniversityLogo[] = [
  {
    src: '/cambridge_logo.png',
    alt: 'University of Cambridge logo',
    title: 'University of Cambridge',
    href: 'https://www.cam.ac.uk/'
  },
  {
    src: '/oxford_logo.png',
    alt: 'University of Oxford logo',
    title: 'University of Oxford',
    href: 'https://www.ox.ac.uk/'
  },
  {
    src: '/ethzurich_logo.png',
    alt: 'ETH Zurich logo',
    title: 'ETH Zurich',
    href: 'https://ethz.ch/'
  },
  {
    src: '/epfl_logo.png',
    alt: 'Ecole Polytechnique Federale de Lausanne logo',
    title: 'EPFL',
    href: 'https://www.epfl.ch/'
  },
  {
    src: '/tum_logo.svg',
    alt: 'Technical University of Munich logo',
    title: 'TUM',
    href: 'https://www.tum.de/'
  },
  {
    src: '/ecole_logo.png',
    alt: 'Ecole Polytechnique logo',
    title: 'Ecole Polytechnique',
    href: 'https://www.polytechnique.edu/'
  },
  {
    src: '/tudelft_logo.png',
    alt: 'TU Delft logo',
    title: 'TU Delft',
    href: 'https://www.tudelft.nl/'
  },
  {
    src: '/kth_logo.png',
    alt: 'KTH Royal Institute of Technology logo',
    title: 'KTH Royal Institute of Technology',
    href: 'https://www.kth.se/'
  },
  {
    src: '/uniwarzaw_logo.png',
    alt: 'University of Warsaw logo',
    title: 'University of Warsaw',
    href: 'https://en.uw.edu.pl/'
  },
  {
    src: '/upbromania_logo.png',
    alt: 'University POLITEHNICA of Bucharest logo',
    title: 'University POLITEHNICA of Bucharest',
    href: 'https://upb.ro/'
  }
];

const LoopProps: LogoLoopProps = {
  logos: universityLogos,
  ariaLabel: 'Partner universities',
  speed: 40,
  direction: 'right',
  width: '100%',
  gap: 56,
  pauseOnHover: true,
  fadeOut: false,
  scaleOnHover: true,
  className: '[--logoloop-logoHeight:42px] sm:[--logoloop-logoHeight:48px] lg:[--logoloop-logoHeight:64px]'
};

const Universities = () => (
  <section className="w-full bg-[var(--color-orange)] py-1">
    <LogoLoopComponent {...LoopProps} />
  </section>
);

export default Universities;

