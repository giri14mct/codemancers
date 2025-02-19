'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import squareShift from '@/images/squareshift-logo.png'
import aananthSolaiyappan from '@/images/clients/aananth-solaiyappan.jpg'
import rafeequl from '@/images/clients/rafeequl.jpg'
import kevin from '@/images/clients/kevin.jpg'
import ivrnetInc from '@/images/clients/ivrnet.svg'
import midTrans from '@/images/clients/mid-trans.svg'

export function Testimonial() {
  const testimonials = [
    {
      name: 'Aananth Solaiyappan',
      image: aananthSolaiyappan,
      role: 'Founder, CEO & CISO',
      company: 'SquareShift',
      companyLogo: squareShift,
      quote: `Codemancers is a team of solid engineers & hackers who understand modern
              development practices and design-led product development. They have
              successfully worked with a couple of my startups. They can be a great
              partner to startups.`,
    },
    {
      name: 'Rafeequl Rahman',
      image: rafeequl,
      role: 'CVP Engineering',
      company: 'Midtrans',
      companyLogo: midTrans,
      quote: `Codemancers have a strong ownership to the projects as they are a self-organized team. Codemancers team members are highly skilled people with a smart and nice personality. They are also one of the few organizations that bring a positive influence to my team by pushing best practices into day-to-day software development. Will definitely be using their service for our future projects.`,
    },
    {
      name: 'Kevin Wolff',
      image: kevin,
      role: 'CTO',
      company: 'Ivrnet Inc.',
      companyLogo: ivrnetInc,
      quote: `The Codemancer team is a self-contained dev shop. They do a great job of interpreting requirements, ask appropriate questions at the appropriate time, self-manage, and deliver. All of this is done using best practices and cutting-edge technology.`,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = (index: number) => {
    setActiveIndex(index)
    scrollContainerRef.current?.children[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    })
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    )
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current

    if (!scrollContainer) return

    const handleScroll = () => {
      const children = scrollContainer.children
      let closestIndex = 0
      let closestOffset = Infinity

      for (let i = 0; i < children.length; i++) {
        const rect = children[i].getBoundingClientRect()
        const offset = Math.abs(
          rect.left - scrollContainer.getBoundingClientRect().left,
        )

        if (offset < closestOffset) {
          closestOffset = offset
          closestIndex = i
        }
      }

      setActiveIndex(closestIndex)
    }

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative isolate mt-24 bg-neutral-50 py-16 sm:mt-32 sm:py-28 md:py-32 lg:mt-40">
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="scrollbar-hide flex snap-x snap-mandatory space-x-6 overflow-x-auto scroll-smooth px-4 sm:hidden"
            >
              {testimonials.map((client, index) => (
                <div key={index} className="w-full flex-shrink-0 snap-center">
                  <figure className="relative mx-auto flex flex-col gap-6">
                    <blockquote className="mx-auto h-auto text-center text-xl leading-relaxed font-medium">
                      <p className="before:content-['“'] after:content-['”']">
                        {client.quote}
                      </p>
                    </blockquote>

                    <figcaption className="mt-6 flex items-center justify-center gap-4">
                      <Image
                        src={client.image}
                        alt={client.name}
                        className="h-12 w-12 rounded-full border border-white/10"
                        unoptimized
                      />
                      <div className="text-left">
                        <p className="text-lg font-semibold">{client.name}</p>
                        <p className="text-base opacity-75">
                          {client.role}, {client.company}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>

            <div className="relative hidden overflow-hidden rounded-lg sm:block">
              {testimonials.map((client, index) => (
                <div
                  key={index}
                  className={`duration-700 ease-in-out ${
                    index === activeIndex ? 'block' : 'hidden'
                  }`}
                >
                  <figure className="relative mx-auto flex max-w-6xl flex-col gap-16">
                    <button
                      type="button"
                      className="absolute top-[20%] z-10 hidden h-10 w-10 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-gray-800/40 hover:bg-gray-800/60 focus:ring-4 focus:ring-white sm:flex"
                      onClick={handlePrev}
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        ></path>
                      </svg>
                    </button>

                    <blockquote className="mx-auto h-auto text-center text-2xl leading-relaxed font-medium sm:max-w-5xl sm:text-4xl">
                      <p className="before:content-['“'] after:content-['”']">
                        {client.quote}
                      </p>
                    </blockquote>

                    <button
                      type="button"
                      className="absolute top-[20%] right-[-10px] z-10 hidden h-10 w-10 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-gray-800/40 hover:bg-gray-800/60 focus:ring-4 focus:ring-white sm:flex"
                      onClick={handleNext}
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </button>

                    <figcaption className="mt-10 flex items-center justify-center gap-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src={client.image}
                          alt={client.name}
                          className="h-16 w-16 rounded-full border border-white/10 sm:h-20 sm:w-20"
                          unoptimized
                        />
                        <div className="text-left">
                          <p className="text-base font-semibold text-nowrap sm:text-lg">
                            {client.name}
                          </p>
                          <p className="text-sm opacity-75 sm:text-lg">
                            {client.role}, {client.company}
                          </p>
                        </div>
                      </div>

                      <div className="h-10 w-px bg-gray-400"></div>

                      <div className="flex items-center justify-center">
                        <Image
                          src={client.companyLogo}
                          alt={client.name}
                          className="h-16 w-16 sm:h-20 sm:w-20"
                          unoptimized
                        />
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-10 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'scale-125 bg-gray-800'
                      : 'bg-gray-400 opacity-50'
                  }`}
                  onClick={() => handleScroll(index)}
                ></button>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}
