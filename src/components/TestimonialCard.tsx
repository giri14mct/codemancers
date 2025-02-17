import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  image: string;
  name: string;
  title: string;
  company: string | string[];
  companyLink: string | string[];
  testimonial: string;
}

const testimonials: TestimonialCardProps[] = [
  {
    image: '/images/aananth.jpg',
    name: 'Aananth Solaiyappan',
    title: 'CO-founder & CTO',
    company: ['Welab', 'Weinvest'],
    companyLink: ['https://weinvest.net/', 'https://www.welab.co/en/'],
    testimonial:
      'Codemancers is a team of solid engineers & hackers who understand modern development practices and design lead product development, who have successfully worked with couple of my startups. They can be a great partner to startups.',
  },
  {
    image: '/images/rafeequl.jpg',
    name: 'Rafeequl Rahman',
    title: 'CVP Engineering',
    company: 'Midtrans',
    companyLink: 'https://midtrans.com',
    testimonial:
      'Codemancers have a strong ownership to the projects as they are a self organized team. Codemancers team members are highly skilled people with a smart and nice personality. They are also one of the few organizations that brings a positive influence to my team by keeping pushing best practices into day to day software development. Will definitely be using their service for our future projects.',
  },
  {
    image: '/images/kevin.jpg',
    name: 'Kevin Wolff',
    title: 'CTO',
    company: 'Ivrnet Inc.',
    companyLink: 'http://www.ivrnet.com',
    testimonial:
      'The Codemancer team is a self contained dev shop. They do a great job of interpreting requirements, ask appropriate questions at the appropriate time, self manage and deliver. All of this is done using best practices and cutting edge technology.',
  },
];

const TestimonialCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="flex flex-col w-full max-w-sm gap-8 p-8 text-center border rounded-2xl bg-gradient-to-br from-white to-gray-10"
        >
          <Image
            src={testimonial.image}
            alt={`${testimonial.name}'s profile`}
            className="w-20 h-20 mx-auto rounded-full"
            width={144}
            height={144}
          />
          <div className="flex flex-col gap-4">
            <h6 className="mt-4 font-semibold text-center text-custom-gray">
              {testimonial.name}
            </h6>
            <p className="text-sm font-bold text-center text-custom-gray">
              {testimonial.title} /{' '}
              {Array.isArray(testimonial.company) &&
              Array.isArray(testimonial.companyLink) ? (
                testimonial.company.map((company, idx) => (
                  <span key={idx}>
                    <a
                      href={testimonial.companyLink[idx]}
                      className="font-medium text-blue-600 hover:underline hover:text-brand-blue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company}
                    </a>
                    {idx < testimonial.company.length - 1 ? ', ' : ''}
                  </span>
                ))
              ) : (
                <a
                  href={testimonial.companyLink as string}
                  className="font-medium text-blue-600 hover:underline hover:text-brand-blue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {testimonial.company}
                </a>
              )}
            </p>
            <p className="mt-4 text-sm text-center text-gray-70">
              {testimonial.testimonial}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
