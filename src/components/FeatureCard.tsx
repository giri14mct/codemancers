import Image from 'next/image';
interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '/images/about_us/team.gif',
    title: '12+ years average experience',
    description:
      'We hire only the smartest developers with backgrounds in diverse domains. Having Codemancers working on your side is having decades of experience working to your advantage.',
  },
  {
    icon: '/images/about_us/code-review.gif',
    title: 'Code reviews',
    description:
      'Code reviews are a big part of mentoring at Codemancers. Every line of code gets double-checked for readability and to stay clear from code smells.',
  },
  {
    icon: '/images/about_us/responsive.gif',
    title: '100% test coverage',
    description:
      'All of our code has automated tests that run for every single code change on CI servers.',
  },
  {
    icon: '/images/about_us/checklist.gif',
    title: 'Solid track record',
    description:
      'Codemancers is well known in the community for our contributions to several widely used open source projects.',
  },
  {
    icon: '/images/about_us/process.gif',
    title: 'Proficient with Agile & Kanban',
    description:
      'With the right mix of processes like sprint planning, daily standups, demos, and retros, we bring order to product development which otherwise can be a chaotic mess.',
  },
];

const FeatureCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col w-full max-w-sm gap-8 p-8 text-center border rounded-2xl bg-gradient-to-br from-white to-gray-10"
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
            <h3 className="text-xl font-semibold text-custom-gray">
              {feature.title}
            </h3>
            <p className="text-gray-70">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
