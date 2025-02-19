import { Metadata } from 'next'
import ServiceCards from '@/components/ServiceCards'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Services provided by the codemancers',
}

export default function Services() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="mx-auto max-w-5xl">
        <div className="px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
              Tailored Solutions for Every Stage of Your Digital Journey
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              From concept to deployment, we provide end-to-end software
              development and consulting services that empower your business to
              innovate, scale, and succeed.
            </p>
          </div>
          <ServiceCards />
          <div className="mt-16 flex flex-col items-center text-center">
            <FadeIn>
              <div className="mx-auto max-w-5xl">
                <h2 className="text-custom-gray text-2xl font-semibold">
                  Your Success Starts Here
                </h2>
                <p className="mt-6 text-xl text-neutral-600">
                  At Codemancers, we’re more than just a software development
                  company – we’re your partners in innovation. Whether you’re
                  building a new product, optimizing your operations, or scaling
                  your business, we have the expertise and passion to help you
                  succeed. Let’s create something amazing together.
                </p>
              </div>
            </FadeIn>

            <Container>
              <FadeIn>
                <div className="mt-6 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/portfolio/"
                    className="flex h-11 w-full items-center justify-center rounded-lg border bg-[#356798] px-6 text-base font-medium text-white transition-all md:w-70"
                  >
                    View Our Case Studies →
                  </Link>

                  <Link
                    href="/contact/"
                    className="hover:bg-brand-blue flex h-11 w-full items-center justify-center rounded-lg border bg-[#356798] px-6 text-base font-medium text-nowrap text-white transition-all hover:text-white md:w-auto"
                  >
                    Schedule a Free Consultation →
                  </Link>
                </div>
              </FadeIn>
            </Container>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
