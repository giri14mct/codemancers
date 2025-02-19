import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageLaptop from '@/images/workspace.jpg'
import flipkart from '@/images/clients/flipkart/logo-light.svg'
import clearTax from '@/images/clients/clear-tax/logo-light.svg'
import midTrans from '@/images/clients/mid-trans/logo-light.svg'
import weLab from '@/images/clients/we-lab/logo-light.svg'
import phonepe from '@/images/clients/phonepe/logo-light.svg'
import premiumBeta from '@/images/clients/premium-beta/logo-light.svg'
import brightBox from '@/images/clients/bright-box/logo-light.svg'
import knowledgeFoundry from '@/images/clients/knowledge-foundry/logo-light.svg'

import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Flipkart', flipkart],
  ['Clear Tax', clearTax],
  ['Midtrans', midTrans],
  ['Welab', weLab],
  ['PhonePe', phonepe],
  ['Premium Beta', premiumBeta],
  ['BrightBox', brightBox],
  ['Knowledge Foundry', knowledgeFoundry],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-left font-display text-sm font-semibold tracking-wider text-white sm:text-center">
            Join a growing list of businesses that trust Codemancers
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Trusted by Innovators Across Industries"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We’ve partnered with startups, SMEs, and enterprises to deliver
          transformative software solutions.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition sm:p-8">
                <h3 className="flex items-center gap-4">
                  <Image
                    src={caseStudy.logo}
                    alt={caseStudy.client}
                    className="h-16 w-16"
                    unoptimized
                  />
                  <p className="flex gap-x-2 text-xl font-semibold text-neutral-950">
                    {caseStudy.client}
                  </p>
                </h3>
                <div className="mt-8 flex w-24 items-center justify-center">
                  <p className="w-full rounded-full bg-gray-200 p-2 text-center text-xs font-medium text-gray-800">
                    {caseStudy.domain}
                  </p>
                </div>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Tailored Solutions for Every Stage of Your Journey"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Whether you’re building an MVP, scaling your infrastructure, or
          optimizing your product, we provide solutions that grow with your
          business.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Custom Software Development">
              From web applications to enterprise software, we build scalable,
              secure, and future-ready solutions tailored to your needs.
            </ListItem>
            <ListItem title="DevOps & Cloud Solutions">
              streamline your workflows with CI/CD pipelines, cloud migration,
              and infrastructure automation for seamless scalability.
            </ListItem>
            <ListItem title="Product Consulting">
              Transform your ideas into market-ready products with expert
              strategy, execution, and industry best practices
            </ListItem>
            <ListItem title="AI-Driven Innovations">
              Empowering your business with intelligent automation, predictive
              insights, and conversational experiences that revolutionize how
              you operate
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="mx-auto max-w-5xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Expert Web Development for Scalable Digital Success
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            For over a decade, we’ve been building high-quality,
            high-performance, and secure applications with a technology-first
            mindset. Embracing an AI-driven approach, we now integrate
            intelligent automation and innovation to help startups and
            enterprises scale with real impact.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial />

      <Services />

      <ContactSection />
    </>
  )
}
