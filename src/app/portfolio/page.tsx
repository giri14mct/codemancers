import Link from 'next/link'
import { Metadata } from 'next'
import ClientCard from '@/components/ClientCard'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Some of our clients',
}

const items = [
  { name: 'Brightbox', imgClass: 'brightbox-sm' },
  { name: 'Knowledge Foundry', imgClass: 'kf-sm' },
  { name: 'Premium Beta', imgClass: 'premium-beta-sm' },
  { name: 'Ivrnet', imgClass: 'ivrnet-sm' },
  { name: 'PhonePe', imgClass: 'phonepe-sm' },
  { name: 'OEX', imgClass: 'oex-sm' },
  { name: 'EVOI', imgClass: 'evoi-sm' },
]

export default function WhyUs() {
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-custom-gray text-3xl font-bold md:text-4xl">
          Proven Expertise in Delivering Results
        </h1>
        <p className="text-gray-70">
          See how Codemancers has transformed ideas into impactful software
          solutions.
        </p>
      </div>
      <div className="mt-16">
        <ClientCard />
      </div>
      <div className="mt-32 flex flex-col text-center">
        <div className="flex w-full flex-col gap-8">
          <h2 className="text-custom-gray text-2xl font-semibold">
            We've Also Worked With
          </h2>

          <div className="flex flex-wrap items-center text-base text-black uppercase md:justify-evenly">
            {items.map((item, index) => (
              <div
                key={index}
                className="mb-4 w-1/2 text-center uppercase md:w-auto"
              >
                <div className={`img mx-auto ${item.imgClass}`}></div>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-center text-sm leading-none font-semibold text-white">
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
