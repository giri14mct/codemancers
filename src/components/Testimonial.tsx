import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode
  client: { logo: ImageProps['src']; name: string }
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto flex max-w-4xl flex-col gap-16 sm:flex-row">
            <figcaption className="mt-10 flex flex-col gap-4">
              <Image
                src={client.logo}
                alt={client.name}
                width={70}
                height={70}
                unoptimized
                className="rounded-full"
              />
              <p className="text-xl font-bold text-nowrap">{client.name}</p>
              <p className="text-base text-nowrap">CTO</p>
            </figcaption>
            <blockquote className="relative font-display font-medium tracking-tight text-neutral-950">
              <p className="text-5xl">Welab</p>
              <p className="mt-4 text-xl before:content-['“'] after:content-['”'] sm:text-2xl sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
