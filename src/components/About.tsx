import React from 'react';
import { History, Lightbulb, Rocket, Building, MapPin, Target } from 'lucide-react';

export default function About() {
  const milestones = [
    {
      year: "2012",
      title: "Co-founded 3DPX",
      description: "World's first 3D printing retail service bureau in Chicago",
      icon: History
    },
    {
      year: "2014",
      title: "Founded Manulith",
      description: "Comprehensive manufacturing services in Detroit",
      icon: Building
    },
    {
      year: "2016",
      title: "Founded MakerOS",
      description: "Industry-leading SaaS platform serving 10,000+ users globally",
      icon: Rocket
    },
    {
      year: "2022",
      title: "Shapeways Acquisition",
      description: "Director of Product, Strategy, and Co-Innovation",
      icon: Target
    }
  ];

  return (
    <section id="about" className="py-20 bg-ide-bg-primary">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Mike</h2>
          <p className="text-ide-text-secondary max-w-2xl mx-auto">
            Innovator, entrepreneur, and technology leader at the intersection of AI, manufacturing, and business.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <div className="bg-ide-bg-dropdown p-6 rounded-xl border border-ide-ui-border h-full">
                <milestone.icon className="w-8 h-8 text-ide-text-link mb-4" />
                <div className="text-2xl font-bold text-ide-text-link mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-ide-text-secondary">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-ide-bg-dropdown p-6 rounded-xl border border-ide-ui-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-ide-text-link" />
                Innovation Journey
              </h3>
              <div className="space-y-4 text-ide-text-secondary">
                <p>
                  Mike Moceri's journey began in 2012 when he co-founded 3DPX, the world's first 3D printing retail service bureau. This Chicago-based startup gained global recognition for its unique blend of retail and production, signifying a new era in 3D printing services, on-demand manufacturing, and product design.
                </p>
                <p>
                  Building on this success, Moceri ventured into Detroit's manufacturing industry by establishing Manulith in 2014. Manulith offered a comprehensive suite of services ranging from design and rapid prototyping to production for the automotive, aerospace, medical, consumer products, and industrial application sectors within the Great Lakes Region.
                </p>
                <p>
                  In 2016, he expanded his footprint further by founding MakerOS. As an industry-leading software-as-a-service platform, MakerOS served small to mid-sized design, engineering, and manufacturing firms. It digitized their workflow from initial client interaction to project management, production, and payments. As of 2022, MakerOS proudly served over 10,000 users globally.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-ide-bg-dropdown p-6 rounded-xl border border-ide-ui-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-ide-text-link" />
                Current Focus
              </h3>
              <div className="space-y-4 text-ide-text-secondary">
                <p>
                  Following the acquisition of MakerOS by Shapeways (NYSE: SHPW) in April 2022, Mike took on the role of Head of Software GTM and then later assumed a broader role as the Director of Product, Strategy, and Co-Innovation, further solidifying his leadership in the sector.
                </p>
                <p>
                  Moceri now resides in New York City, working on a new problem set and challenges from which multiple new ventures and areas of research and development are forming while maintaining and collaborating with his robust connections across North America.
                </p>
                <p>
                  His diverse interests span across energy, manufacturing, micro-industrial automation, product design, AI, new media development for fine arts, storage/data processing related blockchains, and geopolitics, reflecting his commitment to continuous learning and innovation. His professional journey and interests showcase his capacity as a leader at the intersection of technology and business to develop products, solutions, and strategies for the emerging challenges of today and the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
