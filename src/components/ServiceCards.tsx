import React from 'react';
// import Link from 'next/link';

interface Feature {
  title: string;
  description: string;
}

interface ContentSection {
  id: string;
  heading: string;
  link: string;
  description: string;
  features: Feature[];
  buttonText: string;
}

const contentSections: ContentSection[] = [
  {
    id: 'Custom Software Development',
    heading: 'Build Software That Works for You',
    link: '/contact/',
    description:
      'Every business is unique, and so are its challenges. At Codemancers, we specialize in crafting custom software solutions that align with your goals, streamline operations, and drive growth. Whether you need a web application, mobile app, or enterprise software, our team of experts will deliver a solution that’s scalable, secure, and future-proof.',
    features: [
      {
        title: 'End-to-End Development',
        description: 'From ideation to deployment, we handle it all.',
      },
      {
        title: 'Agile Methodology',
        description: 'Iterative development for faster, better results.',
      },
      {
        title: 'Scalable Architecture',
        description: 'Built to grow with your business.',
      },
    ],
    buttonText: 'Let’s Build Your Solution →',
  },
  {
    id: 'DevOps & Cloud Solutions',
    link: '/contact/',
    heading: 'Accelerate Innovation with Seamless DevOps',
    description:
      'In today’s fast-paced digital landscape, speed and reliability are non-negotiable. Our DevOps and Cloud Solutions ensure your software is delivered faster, with fewer errors, and at scale. From CI/CD pipelines to cloud migration and infrastructure automation, we help you achieve operational excellence and focus on what matters most – your business.',
    features: [
      {
        title: 'CI/CD Implementation',
        description: 'Automate your development and deployment processes.',
      },
      {
        title: 'Cloud Migration',
        description: 'Seamlessly move to AWS, Azure, or Google Cloud.',
      },
      {
        title: 'Infrastructure as Code',
        description: 'Optimize Your Workflow.',
      },
    ],
    buttonText: 'Optimize Your Workflow →',
  },
  {
    id: 'Product Consulting',
    link: '/contact/',
    heading: 'Turn Your Vision into Reality',
    description:
      'Great products start with great ideas – but they need the right strategy and execution to succeed. Our Product Consulting services help you refine your vision, validate your ideas, and bring your product to market faster. Whether you’re starting from scratch, looking to build an MVP, or enhancing an existing product, we’ll guide you every step of the way.',
    features: [
      {
        title: 'Product Strategy',
        description: 'Define your roadmap and prioritize features.',
      },
      {
        title: 'MVP Development',
        description: 'Launch quickly with a Minimum Viable Product.',
      },
      {
        title: 'User-Centric Design',
        description: 'Build products that users love.',
      },
    ],
    buttonText: 'Start Your Product Journey →',
  },
  {
    id: 'Maintenance & Support',
    link: '/contact/',
    heading: 'Keep Your Software Running Smoothly',
    description:
      'Software doesn’t stop at deployment – it needs ongoing care to perform at its best. Our Maintenance & Support services ensure your software remains secure, up-to-date, and optimized for peak performance. From bug fixes to performance tuning, we’ve got you covered.',
    features: [
      {
        title: 'Proactive Monitoring',
        description:
          'Identify and resolve issues before they impact your business.',
      },
      {
        title: 'Regular Updates',
        description: 'Keep your software secure and up-to-date.',
      },
      {
        title: 'Dedicated Support',
        description: 'Access to a team of experts whenever you need them.',
      },
    ],
    buttonText: 'Explore Support Plans →',
  },
  {
    id: 'User Experience/User Interface Design',
    heading: 'Design Experiences That Delight',
    link: '/contact/',
    description:
      'User experience is at the heart of every successful product. Our UI/UX Design services focus on creating intuitive, visually appealing interfaces that engage users and drive conversions. From wireframes to prototypes and final designs, we ensure your product not only works well but also looks great.',
    features: [
      {
        title: 'User Research',
        description: 'Understand your audience and their needs.',
      },
      {
        title: 'Interactive Prototypes',
        description: 'Test and refine your designs before development.',
      },
      { title: 'Responsive Design', description: 'Design Your Vision.' },
    ],
    buttonText: 'Start Your Product Journey →',
  },
];

const ServiceCards = () => {
  return (
    <div className="w-full py-16">
      <div className="flex flex-wrap justify-between gap-8">
        {contentSections.map((content) => (
          <div
            key={content.id}
            className="flex flex-col justify-between w-full sm:w-[calc(50%-16px)] gap-5 p-8 border rounded-2xl bg-gradient-to-br from-white to-gray-10"
          >
            <div className="flex flex-col gap-8">
              <p className="text-sm font-medium text-custom-gray">
                {content.id}
              </p>
              <div className="flex flex-col gap-4">
                <h2 className="mt-2 text-2xl font-semibold text-custom-gray">
                  {content.heading}
                </h2>
                <p className="text-base text-gray-70">{content.description}</p>
              </div>

              <ul className="space-y-2 list-disc">
                {content.features.map((feature, fIndex) => (
                  <>
                    <li key={fIndex} className="mt-2 text-gray-700">
                      <span className="text-base font-semibold text-custom-gray">
                        {feature.title}:
                      </span>
                    </li>
                    <li
                      key={fIndex}
                      className="text-gray-700 list-disc marker:text-white"
                    >
                      <span className="mt-2 text-base text-gray-70">
                        {feature.description}
                      </span>
                    </li>
                  </>
                ))}
              </ul>
            </div>

            {/* <div className="flex items-center justify-center md:justify-start">
              <Link
                href={content.link}
                className="flex items-center justify-center px-4 py-2 mt-6 text-sm font-semibold transition-all border w-61 h-11 rounded-3xl border-blue-650 text-blue-650 hover:bg-blue-650 hover:text-white"
              >
                {content.buttonText}
              </Link>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
