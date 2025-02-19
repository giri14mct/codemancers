import { Metadata } from 'next'
import FeatureCard from '@/components/FeatureCard'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Testimonial } from '@/components/Testimonial'

export const metadata: Metadata = {
  title: 'Why Codemancers?',
  description: 'Why Codemancers?',
}

export default function AboutUs() {
  return (
    <div className="px-6 sm:px-6 lg:px-8">
      <div>
        <Container className="mt-24 sm:mt-32 md:mt-56">
          <FadeIn className="mx-auto max-w-5xl">
            <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
              Empowering Businesses with Scalable Technology Solutions
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              We are a team of passionate coders and problem-solvers dedicated
              to delivering exceptional software solutions.
            </p>
          </FadeIn>
        </Container>
      </div>
      <FadeIn>
        <FeatureCard />
      </FadeIn>

      <hr className="my-16" />
      <FadeIn>
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4">
          <h1 className="text-custom-gray text-center text-3xl font-bold md:text-4xl">
            Why Codemancers?
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            {
              "We're a small team of experienced developers which takes pride in building web applications that delight end users. We go the extra mile for code quality and well-designed and tested software. Why? If there's one thing that we have learned after reading, writing, and rewriting millions of lines of code over these years, it's this - how your app looks from the inside matters."
            }
          </p>
        </div>
      </FadeIn>

      <div className="my-16">
        <FadeIn>
          <h1 className="text-custom-gray text-center text-2xl font-semibold">
            What Our Clients Say
          </h1>
          <Testimonial heading={true} />
        </FadeIn>
      </div>
      <FadeIn>
        <div className="mx-auto mt-10 flex max-w-5xl flex-col text-center">
          <p className="mt-6 text-xl text-neutral-600">
            {
              "If what you want to build is important to you, you need an experienced team that can make the right decisions at the right time. You need developers with battle scars from fighting bad software and production issues and learned from their mistakes so you don't have to. With our deep knowledge in Rails and React JS, we’re here to help you build your next big app."
            }
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Link
              href="/contact/"
              className="hover:bg-blue-650 flex h-11 w-full flex-col items-center justify-center rounded-lg bg-[#356798] text-center font-medium text-white md:w-64"
            >
              Reach Out To Us
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
