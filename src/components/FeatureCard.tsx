import Image, { StaticImageData } from 'next/image'
import team from '@/images/about_us/team.gif'
import codeReview from '@/images/about_us/code-review.gif'
import responsive from '@/images/about_us/responsive.gif'
import checklist from '@/images/about_us/checklist.gif'
import process from '@/images/about_us/process.gif'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

interface Feature {
  icon: StaticImageData
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: team,
    title: '12+ years average experience',
    description:
      'We hire only the smartest developers with backgrounds in diverse domains. Having Codemancers working on your side is having decades of experience working to your advantage.',
  },
  {
    icon: codeReview,
    title: 'Code reviews',
    description:
      'Code reviews are a big part of mentoring at Codemancers. Every line of code gets double-checked for readability and to stay clear from code smells.',
  },
  {
    icon: responsive,
    title: '100% test coverage',
    description:
      'All of our code has automated tests that run for every single code change on CI servers.',
  },
  {
    icon: checklist,
    title: 'Solid track record',
    description:
      'Codemancers is well known in the community for our contributions to several widely used open source projects.',
  },
  {
    icon: process,
    title: 'Proficient with Agile & Kanban',
    description:
      'With the right mix of processes like sprint planning, daily standups, demos, and retros, we bring order to product development which otherwise can be a chaotic mess.',
  },
]

const FeatureCard = () => {
  return (
    <Container>
      <FadeIn>
        <div className="mt-24 flex flex-wrap justify-evenly gap-8 sm:mt-32 lg:mt-56">
          {features.map((feature, index) => (
            <div
              key={index}
              className="to-gray-10 flex w-full max-w-sm flex-col gap-8 rounded-2xl border bg-gradient-to-br from-white p-8 text-center"
            >
              <div className="flex items-center justify-center text-3xl">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  height={96}
                  width={96}
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-custom-gray text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Container>
  )
}

export default FeatureCard
