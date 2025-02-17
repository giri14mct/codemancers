import { Metadata } from 'next'
import ServiceCards from '@/components/ServiceCards'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Services provided by the codemancers',
}

export default function Services() {
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-custom-gray mx-auto max-w-5xl text-3xl font-bold md:text-4xl">
          Tailored Solutions for Every Stage of Your Digital Journey
        </h1>
        <p className="text-gray-70 mx-auto max-w-5xl">
          From concept to deployment, we provide end-to-end software development
          and consulting services that empower your business to innovate, scale,
          and succeed.
        </p>
      </div>
      <ServiceCards />
      <div className="mt-16 flex flex-col items-center text-center">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-custom-gray text-2xl font-semibold">
            Your Success Starts Here
          </h2>
          <p className="text-gray-70 mt-4 text-base">
            At Codemancers, we’re more than just a software development company
            – we’re your partners in innovation. Whether you’re building a new
            product, optimizing your operations, or scaling your business, we
            have the expertise and passion to help you succeed. Let’s create
            something amazing together.
          </p>
        </div>

        <div className="mt-6 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/portfolio/"
            className="text-custom-gray hover:bg-custom-gray flex h-11 w-full items-center justify-center rounded-lg border border-black px-6 text-base font-medium transition-all hover:text-white md:w-70"
          >
            View Our Case Studies →
          </Link>

          <Link
            href="/contact/"
            className="text-blue-650 border-brand-blue hover:bg-brand-blue flex h-11 w-full items-center justify-center rounded-lg border px-6 text-base font-medium transition-all hover:text-white md:w-auto"
          >
            Schedule a Free Consultation →
          </Link>
        </div>
      </div>
    </div>
  )
}
