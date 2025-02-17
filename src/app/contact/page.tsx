import ContactUs from '@/components/Forms/ContactUs'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="mt-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mt-10 text-center">
          <h1 className="text-custom-gray mx-auto max-w-5xl text-3xl font-bold md:text-4xl">
            {'Let’s Build the Future Together'}
          </h1>
          <p className="text-gray-70 mx-auto mt-4 max-w-5xl">
            {
              'Let’s build something amazing together. Schedule a free consultation with our experts to discuss your project and explore how Codemancers can help you achieve your goals.'
            }
          </p>
        </div>

        <div className="mt-16 flex w-full flex-col rounded-2xl border border-gray-300 lg:flex-row">
          <div className="to-gray-10 flex min-w-[50%] flex-col gap-8 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl bg-gradient-to-br from-white lg:w-1/2">
            <div className="px-4 py-8 lg:px-8 lg:py-16">
              <h2 className="text-custom-gray text-32 font-semibold">
                Get in touch
              </h2>
              <p className="text-16 text-gray-70 mt-4">
                {
                  "Fill out this form to say hello and kick off our conversation. Please don't hesitate to get into technical details because you'll be talking to a programmer and not a business development executive."
                }
              </p>
              <dl className="text-gray-70 mt-10 flex flex-col gap-4 space-y-4 text-base">
                <div className="flex items-start gap-x-4">
                  <dt className="flex-none">
                    <Image
                      src="/images/office.svg"
                      alt="Codemancers office Image"
                      height={24}
                      width={28}
                    />
                  </dt>
                  <dd>
                    2nd Floor, Zee Plaza, No. 1678, 27th Main Rd,
                    <br />
                    2nd Sector, Sector 2, HSR Layout, Bengaluru,
                    <br />
                    Karnataka 560102
                  </dd>
                </div>
                <div className="flex items-center gap-x-4">
                  <dt className="flex-none">
                    <Image
                      src="/images/phone.svg"
                      alt="Phone Image"
                      height={24}
                      width={28}
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-brand-blue text-blue-600"
                      href="tel:+91 9731601276"
                    >
                      +91 9731601276
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-x-4">
                  <dt className="flex-none">
                    <Image
                      src="/images/mail.svg"
                      alt="Mail Image"
                      height={24}
                      width={28}
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-brand-blue text-blue-600"
                      href="mailto:hello@codemancers.com"
                    >
                      hello@codemancers.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="min-w-[50%] px-8 pb-4 md:pt-16 md:pb-0">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  )
}
