import { Metadata } from 'next'
import FeatureCard from '@/components/FeatureCard'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Codemancers?',
  description: 'Why Codemancers?',
}

export default function AboutUs() {
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 sm:px-6 lg:px-8">
      <div className="mx-auto mt-10 max-w-5xl text-center">
        <h1 className="text-custom-gray text-3xl font-bold text-wrap sm:text-nowrap md:text-4xl">
          Empowering Businesses with Scalable Technology Solutions
        </h1>
        <p className="text-gray-70 mt-4">
          We are a team of passionate coders and problem-solvers dedicated to
          delivering exceptional software solutions.
        </p>
      </div>
      <FeatureCard />
      <hr className="my-16" />
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4">
        <h1 className="text-custom-gray text-center text-3xl font-bold md:text-4xl">
          Why Codemancers?
        </h1>
        <p className="text-gray-70 text-center">
          {
            "We're a small team of experienced developers which takes pride in building web applications that delight end users. We go the extra mile for code quality and well-designed and tested software. Why? If there's one thing that we have learned after reading, writing, and rewriting millions of lines of code over these years, it's this - how your app looks from the inside matters."
          }
        </p>
      </div>
      <div className="my-16">
        <h1 className="text-custom-gray text-center text-2xl font-semibold">
          What Our Clients Say
        </h1>
        <TestimonialCard />
      </div>
      <div className="mx-auto mt-10 flex max-w-5xl flex-col text-center">
        <p className="text-gray-70 mt-16">
          {
            "If what you want to build is important to you, you need an experienced team that can make the right decisions at the right time. You need developers with battle scars from fighting bad software and production issues and learned from their mistakes so you don't have to. With our deep knowledge in Rails and React JS, we’re here to help you build your next big app."
          }
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/contact/"
            className="bg-brand-blue hover:bg-blue-650 flex h-11 w-full flex-col items-center justify-center rounded-lg text-center font-medium text-white md:w-64"
          >
            Reach Out To Us
          </Link>
        </div>
      </div>
    </div>
  )
}
