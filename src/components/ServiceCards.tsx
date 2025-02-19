import React from 'react'
import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/Container'

interface Feature {
  title: string
  description: string
}

interface ContentSection {
  id: string
  heading: string
  link: string
  description: string
  features: Feature[]
  buttonText: string
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
]

const ServiceCards = () => {
  return (
    <FadeIn>
      <div className="w-full py-16">
        <div className="mt-24 flex flex-wrap justify-between gap-8 sm:mt-32 lg:mt-56">
          {contentSections.map((content) => (
            <div
              key={content.id}
              className="to-gray-10 flex w-full flex-col justify-between gap-5 rounded-2xl border bg-gradient-to-br from-white p-8 sm:w-[calc(50%-16px)]"
            >
              <div className="flex flex-col gap-8">
                <FadeIn>
                  <p className="text-custom-gray text-sm font-medium">
                    {content.id}
                  </p>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-custom-gray mt-2 text-2xl font-semibold">
                      {content.heading}
                    </h2>
                    <p className="text-gray-70 text-base">
                      {content.description}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn>
                  <ul className="list-disc space-y-2 pl-[14px]">
                    {content.features.map((feature, fIndex) => (
                      <>
                        <li key={fIndex} className="mt-2 text-gray-700">
                          <span className="text-custom-gray text-base font-semibold">
                            {feature.title}:
                          </span>
                        </li>
                        <li
                          key={fIndex}
                          className="list-disc text-gray-700 marker:text-white"
                        >
                          <span className="text-gray-70 mt-2 text-base">
                            {feature.description}
                          </span>
                        </li>
                      </>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

export default ServiceCards
