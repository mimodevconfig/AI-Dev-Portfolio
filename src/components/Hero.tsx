import React from 'react';
import { WorldMap } from './ui/world-map';
import { GooeyText } from './ui/gooey-text-morphing';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Magnetic } from './ui/magnetic';
import { Button } from './ui/button';

const SOCIAL_LINKS = [
  {
    label: 'Github',
    link: 'https://github.com',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com',
  },
  {
    label: 'YouTube',
    link: 'mailto:contact@example.com',
  },
  {
    label: 'Instagram',
    link: '/resume.pdf',
  },
];

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-ide-bg-dropdown px-2.5 py-1 text-sm text-ide-text-primary transition-colors duration-200 hover:bg-ide-text-link hover:text-ide-bg-primary"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  );
}

export default function Hero() {
  // Handle smooth scrolling for section links
  const handleSectionScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for the fixed header
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ide-bg-primary py-20 px-4 pt-24">
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute inset-0 min-w-[100vw] min-h-[100vh]">
        <WorldMap
          dots={[
            {
              start: { lat: 40.7128, lng: -74.0060 }, // New York
              end: { lat: 51.5074, lng: -0.1278 }, // London
            },
            {
              start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
              end: { lat: 1.3521, lng: 103.8198 }, // Singapore
            },
            {
              start: { lat: 48.8566, lng: 2.3522 }, // Paris
              end: { lat: -33.8688, lng: 151.2093 }, // Sydney
            },
            {
              start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
              end: { lat: 38.1157, lng: 13.3615 }, // Palermo
            },
            {
              start: { lat: 41.8101, lng: 68.9063 }, // Patagonia
              end: { lat: 4.0435, lng: 39.6682 }, // Mombasa
            },
          ]}
          lineColor="#569CD6" // Using IDE theme link color
        />
        </div>
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-col justify-center min-h-[120px]">
                <GooeyText
                  texts={[
                    "3D Printing",
                    "Entrepreneur",
                    "Product Developer",
                    "AI Strategist",
                    "GTM Leader",
                    "Network Engineering"
                  ]}
                  morphTime={2}
                  cooldownTime={1}
                  className="font-bold text-ide-text-link text-4xl md:text-5xl lg:text-6xl"
                  textClassName="whitespace-nowrap leading-tight"
                />
              </div>
              <p className="text-xl text-gray-300 mt-6">
                Transforming complex AI solutions into impactful products that drive business value and shape the future of technology.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="#projects" 
                variant="filled"
                onClick={(e) => handleSectionScroll(e as React.MouseEvent<HTMLAnchorElement>, 'projects')}
              >
                View Projects
              </Button>
              <Button 
                href="#contact" 
                variant="outlined"
                onClick={(e) => handleSectionScroll(e as React.MouseEvent<HTMLAnchorElement>, 'contact')}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex items-center justify-start space-x-3">
              {SOCIAL_LINKS.map((link) => (
                <MagneticSocialLink key={link.label} link={link.link}>
                  {link.label}
                </MagneticSocialLink>
              ))}
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-80 h-80 flex items-center justify-center">
              <div className="relative scale-[3]">
                <Avatar className="w-32 h-32 border-4 border-ide-text-link">
                  <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d" alt="Mike Moceri" />
                  <AvatarFallback>MM</AvatarFallback>
                </Avatar>
                <span className="absolute top-2 right-2 scale-150">
                  <span className="sr-only">Verified</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-ide-bg-primary"
                      d="M3.046 8.277A4.402 4.402 0 0 1 8.303 3.03a4.4 4.4 0 0 1 7.411 0 4.397 4.397 0 0 1 5.19 3.068c.207.713.23 1.466.067 2.19a4.4 4.4 0 0 1 0 7.415 4.403 4.403 0 0 1-3.06 5.187 4.398 4.398 0 0 1-2.186.072 4.398 4.398 0 0 1-7.422 0 4.398 4.398 0 0 1-5.257-5.248 4.4 4.4 0 0 1 0-7.437Z"
                    />
                    <path
                      className="fill-ide-text-link"
                      d="M4.674 8.954a3.602 3.602 0 0 1 4.301-4.293 3.6 3.6 0 0 1 6.064 0 3.598 3.598 0 0 1 4.3 4.302 3.6 3.6 0 0 1 0 6.067 3.6 3.6 0 0 1-4.29 4.302 3.6 3.6 0 0 1-6.074 0 3.598 3.598 0 0 1-4.3-4.293 3.6 3.6 0 0 1 0-6.085Z"
                    />
                    <path
                      className="fill-ide-bg-primary"
                      d="M15.707 9.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
